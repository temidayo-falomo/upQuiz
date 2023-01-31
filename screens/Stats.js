import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Stats({ navigation }) {
  const [statistics, setStatistics] = React.useState();

  React.useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("stats");
        if (value !== null) {
          // value previously stored
          setStatistics(JSON.parse(value));
        }
      } catch (e) {
        // error reading value
        console.log(e);
      }
    };
    getData();
  }, []);

  return (
    <View>
      <StatusBar hidden={false} />
      <View style={styles.statsPage}>
        <View style={styles.nav}>
          <MaterialIcons
            name="cancel"
            size={30}
            color="#4D3799"
            onPress={() => navigation.navigate("Home")}
          />

          <Text
            style={{
              fontSize: 25,
              fontWeight: "600",
              color: "#4D3799",
              marginLeft: 20,
            }}
          >
            Stats
          </Text>

          <View></View>
        </View>

        <View style={styles.box}>
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
                {statistics?.correctAnswers || 0}
              </Text>
            </View>

            <View style={{ marginTop: 25 }}>
              <Text style={{ color: "#88878E", fontSize: 10 }}>RAW</Text>
              <Text
                style={{
                  fontWeight: "800",
                  color: "#0E0928",
                  marginTop: 10,
                  fontSize: 15,
                }}
              >
                {statistics?.incorrectAnswers + statistics?.correctAnswers || 0}
              </Text>
            </View>
          </View>

          <View>
            <View>
              <Text style={{ color: "#88878E", fontSize: 10 }}>
                INCORRECT ANSWERS
              </Text>
              <Text
                style={{
                  fontWeight: "800",
                  color: "#0E0928",
                  marginTop: 10,
                  fontSize: 15,
                }}
              >
                {statistics?.incorrectAnswers || 0}
              </Text>
            </View>

            <View style={{ marginTop: 25 }}>
              <Text style={{ color: "#88878E", fontSize: 10 }}>ACCURACY</Text>
              <Text
                style={{
                  fontWeight: "800",
                  color: "#0E0928",
                  marginTop: 10,
                  fontSize: 15,
                }}
              >
                NAN
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
    // justifyContent: "space-between",
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
