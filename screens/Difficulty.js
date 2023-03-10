import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { AppContext } from "../global/Context";

function Difficulty({ navigation }) {
  const { choice, setChoice } = React.useContext(AppContext);

  let difficulties = ["easy", "medium", "hard"];

  return (
    <View style={styles.difficultyPage}>
      <View style={styles.nav}>
        <MaterialIcons
          name="cancel"
          size={30}
          color="#4D3799"
          onPress={() => navigation.navigate("Home")}
          style={{ marginRight: 20 }}
        />

        <Text style={{ fontSize: 25, fontWeight: "600", color: "#4D3799" }}>
          Difficulty
        </Text>

        <View></View>
      </View>

      <View style={{ width: "90%" }}>
        {difficulties.map((difficulty, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={{
                width: "50%",
                height: 50,
                padding: 10,
                borderRadius: 10,
                display: "flex",
                justifyContent: "center",
                marginTop: 40,
                backgroundColor:
                  difficulty === choice ? "#4D3799" : "transparent",
                borderWidth: 2,
                borderColor: "#4D3799",
                alignSelf: "center",
              }}
              onPress={() => setChoice(difficulty)}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "700",
                  color: difficulty === choice ? "#fff" : "#4D3799",
                  fontSize: 18,
                  textTransform: "capitalize",
                }}
              >
                {difficulty}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

export default Difficulty;

const styles = StyleSheet.create({
  difficultyPage: {
    backgroundColor: "#fff",
    minHeight: "90%",
    paddingTop: 50,
    display: "flex",
    alignItems: "center",
    position: "relative",
  },

  nav: {
    width: "90%",
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
