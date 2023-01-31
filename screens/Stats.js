import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

function Stats({ navigation }) {
  return (
    <View>
      <StatusBar hidden={true} />
      <View style={styles.statsPage}>
        <View style={styles.nav}>
          <MaterialIcons
            name="cancel"
            size={30}
            color="#4D3799"
            onPress={() => navigation.navigate("Home")}
          />

          <Text style={{ fontSize: 25, fontWeight: "600", color: "#4D3799" }}>
            Stats
          </Text>

          <View></View>
        </View>

        <View style={styles.box}>
          {/* <View>
            <Text style={{ fontSize: 50, textAlign: "center" }}>Level</Text>
            <Text style={{ fontSize: 50, textAlign: "center" }}>Easy</Text>
          </View> */}
          <Image
            source={require("../assets/images/chart.png")}
            style={{
              width: 220,
              height: 180,
            }}
          />
        </View>

        <View
          style={{
            width: "80%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
            height: 200,
            marginTop: 60,
            borderRadius: 20,
          }}
        >
          <View>
            <View>
              <Text style={{ color: "#88878E", fontSize: 10 }}>
                CORRECT ANSWERS
              </Text>
              <Text
                style={{
                  fontWeight: "800",
                  color: "#0E0928",
                  marginTop: 10,
                  fontSize: 15,
                }}
              >
                7
              </Text>
            </View>

            <View style={{ marginTop: 25 }}>
              <Text style={{ color: "#88878E", fontSize: 10 }}>
                CORRECT ANSWERS
              </Text>
              <Text
                style={{
                  fontWeight: "800",
                  color: "#0E0928",
                  marginTop: 10,
                  fontSize: 15,
                }}
              >
                7
              </Text>
            </View>
          </View>

          <View>
            <View>
              <Text style={{ color: "#88878E", fontSize: 10 }}>
                WRONG ANSWERS
              </Text>
              <Text
                style={{
                  fontWeight: "800",
                  color: "#0E0928",
                  marginTop: 10,
                  fontSize: 15,
                }}
              >
                27
              </Text>
            </View>

            <View style={{ marginTop: 25 }}>
              <Text style={{ color: "#88878E", fontSize: 10 }}>ATTEMPTS</Text>
              <Text
                style={{
                  fontWeight: "800",
                  color: "#0E0928",
                  marginTop: 10,
                  fontSize: 15,
                }}
              >
                4
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Stats;

const styles = StyleSheet.create({
  statsPage: {
    backgroundColor: "#fff",
    minHeight: "100%",
    paddingTop: 10,
    display: "flex",
    alignItems: "center",
    position: "relative",
  },

  nav: {
    width: "90%",
    height: 50,
    marginTop: 20,
    marginBottom: 40,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  box: {
    width: "85%",
    borderRadius: 20,
    marginTop: 5,
    // backgroundColor: "#FF8FA3",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
