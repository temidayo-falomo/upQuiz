import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StatusBar } from "expo-status-bar";

function Difficulty({ navigation }) {
  let difficulties = ["Easy", "Medium", "Hard"];
  const [number, setNumber] = React.useState(0);
  return (
    <View style={styles.difficultyPage}>
      <StatusBar hidden />
      <View style={styles.nav}>
        <MaterialIcons
          name="cancel"
          size={30}
          color="royalblue"
          onPress={() => navigation.navigate("Home")}
          style={{ marginRight: 20 }}
        />

        <Text style={{ fontSize: 25, fontWeight: "600", color: "royalblue" }}>
          Difficulty
        </Text>

        <View></View>
      </View>

      <View style={{ width: "90%" }}>
        {difficulties.map((difficulty, index) => {
          return (
            <TouchableOpacity key={index} style={styles.button}>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "600",
                  color: "#fff",
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
    minHeight: "100%",
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
    // justifyContent: "space-between",
  },

  button: {
    width: "100%",
    height: 50,
    padding: 10,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "royalblue",
  },
});
