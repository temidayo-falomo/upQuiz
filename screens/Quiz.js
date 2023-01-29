import React from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Fontisto from "@expo/vector-icons/Fontisto";
import { AppContext } from "../global/Context";
import Timer from "../components/Timer";

function Quiz({ navigation }) {
  const {
    questions,
    questionNumber,
    setQuestionNumber,
    setScore,
    randomNumber,
    setTimerCount,
  } = React.useContext(AppContext);

  const [initBackgroundColor, setInitBackgroundColor] = React.useState("#fff");

  const [isCorrectColor, setIsCorrectColor] = React.useState("#fff");
  const [tpropVal, setTpropVal] = React.useState(1);

  const [number, setNumber] = React.useState();

  const [answerColor, setAnswerColor] = React.useState("#fff");
  const [textColor, setTextColor] = React.useState("#4085F2");

  const handleSubmitAnswer = (answer, num) => {
    //
    setTimeout(() => {
      setTextColor("#fff");
      setInitBackgroundColor("blue");
      setIsCorrectColor("#39EA58");
      setNumber(num);
      if (answer === questions[questionNumber]?.correctAnswer) {
        setScore((score) => score + 1);
        setAnswerColor("#39EA58");
      } else {
        setAnswerColor("#F66399");
      }

      setTimeout(() => {
        setInitBackgroundColor("#fff");
        setIsCorrectColor("#fff");
        setTextColor("#4085F2");
        setAnswerColor("#fff");
        setNumber();

        setTimerCount(30);
        setTpropVal(30);

        if (questionNumber < questions?.length - 1) {
          setQuestionNumber(questionNumber + 1);
        } else {
          navigation.navigate("Result");
        }
      }, 1500);
    }, 500);
  };

  const allOptions = [
    ...questions[questionNumber]?.incorrectAnswers,
    questions[questionNumber]?.correctAnswer,
  ].sort(() => randomNumber - 0.5);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      showsVerticalScrollIndicator="false"
    >
      <StatusBar hidden={true} />
      <View style={styles.quizPage}>
        <View style={styles.nav}>
          <MaterialIcons
            name="cancel"
            size={35}
            color="#fff"
            onPress={() => navigation.navigate("Start-Quiz")}
          />

          <View
            style={{
              borderWidth: 5,
              borderColor: "#fff",
              borderRadius: 50,
              padding: 15,
              height: 70,
              width: 70,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {<Timer tPropVal={tpropVal} setTpropVal={setTpropVal} />}
          </View>

          <Fontisto name="bookmark" size={20} color="#fff" />
        </View>

        <View style={{ width: "90%", marginTop: 30 }}>
          <Text style={{ color: "#fff" }}>
            Question {questionNumber + 1} of {questions?.length}
          </Text>
          <Text
            style={{
              fontSize: 35,
              fontWeight: "600",
              marginBottom: 20,
              marginTop: 10,
              color: "#fff",
            }}
          >
            {questions[questionNumber]?.question}
          </Text>
        </View>

        <View style={{ width: "85%", marginTop: 1, display: "flex" }}>
          {allOptions?.map((option, index) => {
            return (
              <TouchableOpacity
                style={{
                  // backgroundColor: allOptions?.some(
                  //   (e) =>
                  //     allOptions[index] ===
                  //     questions[questionNumber]?.correctAnswer
                  // )
                  //   ? isCorrectColor
                  //   : initBackgroundColor,

                  // backgroundColor:
                  //   index === number
                  //     ? answerColor
                  //     : allOptions.some((e) => {
                  //         allOptions[index] ===
                  //           questions[questionNumber]?.correctAnswer;
                  //       })
                  //     ? "green"
                  //     : "#fff",

                  backgroundColor: allOptions?.some(
                    () =>
                      allOptions[index] ===
                      questions[questionNumber]?.correctAnswer
                  )
                    ? isCorrectColor
                    : initBackgroundColor && index === number
                    ? answerColor
                    : "#fff",

                  padding: 18,
                  borderRadius: 10,
                  marginTop: 20,
                  shadowColor: "#4085F2",
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.2,
                  shadowRadius: 1.41,

                  elevation: 2,
                }}
                key={index}
                onPress={() => {
                  handleSubmitAnswer(option, index);
                }}
              >
                <Text
                  style={{
                    fontSize: 17,
                    textAlign: "center",
                    fontWeight: "600",
                    color: allOptions?.some(
                      () =>
                        allOptions[index] ===
                        questions[questionNumber]?.correctAnswer
                    )
                      ? textColor
                      : "#fff" && index === number
                      ? "#fff"
                      : "#4085F2",
                  }}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}

export default Quiz;

const styles = StyleSheet.create({
  quizPage: {
    backgroundColor: "#4085F2",
    minHeight: "100%",
    paddingTop: 30,
    paddingBottom: 50,
    display: "flex",
    alignItems: "center",
  },

  nav: {
    width: "85%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  button: {
    backgroundColor: "#",
    padding: 18,
    borderRadius: 10,
    marginTop: 20,
  },
});
