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
  const { questions, score } = React.useContext(AppContext);

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
            <Text style={styles.circle.text}>
              <Text style={{ color: "green" }}>{score}</Text>/
              {questions?.length || 0}
            </Text>
          </View>
          <Text
            style={{
              width: "70%",
              textAlign: "center",
              color: "ghostwhite",
              fontWeight: "600",
            }}
          >
            You were able to answer {score} questions correctly.
          </Text>

          <TouchableOpacity
            style={{
              backgroundColor: "royalblue",
              padding: 10,
              width: "60%",
              marginTop: 20,
              borderRadius: 5,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
            // onPress={() => navigation.navigate("Start-Quiz")}
          >
            <Ionicons name="refresh" size={18} color="#fff" />
            <Text
              style={{
                color: "#fff",
                fontWeight: "600",
              }}
            >
              Try Again
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: "orange",
              padding: 10,
              width: "60%",
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
                fontWeight: "600",
                marginLeft: 5,
              }}
            >
              Check Answers
            </Text>
          </TouchableOpacity>
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
    },
  },
});
