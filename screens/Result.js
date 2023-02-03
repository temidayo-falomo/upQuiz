import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { AppContext } from "../global/Context";
import { StatusBar } from "expo-status-bar";

function Result({ navigation }) {
  const {
    questions,
    setQuestions,
    score,
    searchCategory,
    choice,
    setQuestionNumber,
    setScore,
  } = React.useContext(AppContext);

  const URL = `https://the-trivia-api.com/api/questions?limit=10&categories=${searchCategory}&difficulty=${choice}`;

  const handleTryAgain = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
        setQuestionNumber(0);
        setScore(0);
      })
      .then(() => {
        navigation.navigate("Start-Quiz");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ScrollView>
      <StatusBar hidden={true} />
      <View style={styles.resultPage}>
        <View
          style={{
            width: "90%",
            marginBottom: 50,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <MaterialIcons
            name="cancel"
            size={35}
            color="#fff"
            onPress={() => navigation.navigate("Home")}
          />
        </View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          <View style={styles.circle}>
            <Text
              style={{
                color: score < questions.length / 2 ? "#FF4775" : "#68E789",
                fontSize: 95,
                fontWeight: "600",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {score}
            </Text>
          </View>
          <Text
            style={{
              width: "80%",
              textAlign: "center",
              color: "#fff",
              fontWeight: "600",
              fontSize: 20,
            }}
          >
            You were able to answer {score} questions correctly.
          </Text>

          <TouchableOpacity
            style={{
              backgroundColor: "green",
              padding: 15,
              width: "55%",
              marginTop: 20,
              borderRadius: 5,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => handleTryAgain()}
          >
            <Ionicons name="refresh" size={18} color="#fff" />
            <Text
              style={{
                color: "#fff",
                fontWeight: "800",
                fontSize: 16,
              }}
            >
              Try Again
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: "orange",
              padding: 15,
              width: "55%",
              marginTop: 20,
              borderRadius: 5,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => navigation.navigate("Home")}
          >
            <MaterialCommunityIcons
              name="book-open-outline"
              size={18}
              color="#fff"
            />
            <Text
              style={{
                color: "#fff",
                fontWeight: "800",
                marginLeft: 5,
                fontSize: 16,
              }}
            >
              Change Category
            </Text>
          </TouchableOpacity>
          {/* 
          <TouchableOpacity
            style={{
              backgroundColor: "orange",
              padding: 15,
              width: "55%",
              marginTop: 20,
              borderRadius: 5,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MaterialCommunityIcons
              name="book-open-outline"
              size={18}
              color="#fff"
            />
            <Text
              style={{
                color: "#fff",
                fontWeight: "800",
                marginLeft: 5,
                fontSize: 16,
              }}
            >
              Check Answers
            </Text>
          </TouchableOpacity> */}
        </View>
        <View></View>
      </View>
    </ScrollView>
  );
}

export default Result;

const styles = StyleSheet.create({
  resultPage: {
    backgroundColor: "#4085F2",
    minHeight: "100%",
    paddingTop: 30,
    paddingBottom: 20,
    display: "flex",
    alignItems: "center",
    position: "relative",
  },

  circle: {
    borderRadius: 75,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    marginBottom: 20,

    text: {
      fontSize: 55,
      fontWeight: "600",
      color: "royalblue",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
  },
});
