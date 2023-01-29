import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Onboard from "./screens/Onboard";
import StartQuiz from "./screens/StartQuiz";
import React from "react";
import { AppContext } from "./global/Context";
import Quiz from "./screens/Quiz";
import Result from "./screens/Result";
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);

  //
  const [categoryVal, setCategoryVal] = React.useState("");
  const [categoryImg, setCategoryImg] = React.useState("");
  const [searchCategory, setSearchCategory] = React.useState("");

  //
  const [questions, setQuestions] = React.useState();

  //
  const [questionNumber, setQuestionNumber] = React.useState(0);

  //
  const [score, setScore] = React.useState(0);

  //
  const [randomNumber, setRandomNumber] = React.useState(0.5);

  //
  const [timerCount, setTimerCount] = React.useState(30);

  return (
    <AppContext.Provider
      value={{
        categoryVal,
        setCategoryVal,
        categoryImg,
        setCategoryImg,
        questions,
        setQuestions,
        questionNumber,
        setQuestionNumber,
        score,
        setScore,
        searchCategory,
        setSearchCategory,
        randomNumber,
        setRandomNumber,

        timerCount,
        setTimerCount,
      }}
    >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Onboard"
            component={Onboard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Start-Quiz"
            component={StartQuiz}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Quiz"
            component={Quiz}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Result"
            component={Result}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}
