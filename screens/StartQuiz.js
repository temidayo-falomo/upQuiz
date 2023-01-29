import React from "react";
import {
  Button,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { AppContext } from "../global/Context";
import { StatusBar } from "expo-status-bar";

function StartQuiz({ navigation }) {
  const {
    categoryVal,
    categoryImg,
    setQuestions,
    questionNumber,
    setQuestionNumber,
    setScore,
    searchCategory,
    randomNumber,
    setRandomNumber,
  } = React.useContext(AppContext);

  const URL = `https://the-trivia-api.com/api/questions?limit=10&categories=${searchCategory}&difficulty=easy`;

  React.useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
      })
      .catch((err) => {
        console.log(err);
      });

    setQuestionNumber(0);
    setScore(0);
  }, []);

  React.useEffect(() => {
    setRandomNumber(Math.random());
  }, [questionNumber]);

  return (
    <ScrollView>
      <StatusBar hidden={true} />
      <View style={styles.startPage}>
        <View style={styles.nav}>
          <MaterialIcons
            name="cancel"
            size={35}
            color="#fff"
            onPress={() => navigation.navigate("Home")}
          />
        </View>
        <Image source={categoryImg} style={styles.icon} />
        <View style={{ width: "90%" }}>
          <Text
            style={{
              fontSize: 35,
              fontWeight: "600",
              marginBottom: 16,
              marginTop: 16,
              color: "#fff",
            }}
          >
            {categoryVal}
          </Text>
          <Text style={{ color: "#fff", fontWeight: "500" }}>
            The quizzes consists of questions carefully designed to help you
            self-assess your comprehension of the information presented on the
            topics covered in the module. After responding to a question, click
            on the "Next Question" button at the bottom to go to the next
            questino.
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Quiz")}
          >
            <Text style={{ color: "#4085F2", fontWeight: "800" }}>Game</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default StartQuiz;

const styles = StyleSheet.create({
  startPage: {
    backgroundColor: "#4085F2",
    minHeight: "100%",
    paddingTop: 30,
    display: "flex",
    alignItems: "center",
  },

  nav: {
    width: "90%",
  },

  icon: {
    width: 200,
    height: 200,
    marginTop: 60,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#fff",
    marginTop: 30,
    width: "100%",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});
