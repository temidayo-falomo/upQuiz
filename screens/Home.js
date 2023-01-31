import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { quizCategories } from "../data/quiz-categories";
import React from "react";
import { AppContext } from "../global/Context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function Home({ navigation }) {
  const { setCategoryVal, setCategoryImg, setSearchCategory } =
    React.useContext(AppContext);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      showsVerticalScrollIndicator="false"
    >
      <StatusBar hidden={false} />
      <View style={styles.homePage}>
        <View style={{ display: "flex", alignItems: "center" }}>
          <View style={styles.navbar}>
            <Text></Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  marginRight: 16,
                  borderColor: "#E5E7EB",
                  borderWidth: 2,
                  borderRadius: 20,
                  padding: 5,
                  height: 40,
                  width: 40,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => navigation.navigate("Difficulty")}
              >
                <MaterialCommunityIcons
                  name="arm-flex"
                  size={20}
                  color="#000"
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  marginRight: 16,
                  borderColor: "#E5E7EB",
                  borderWidth: 2,
                  borderRadius: 20,
                  padding: 5,
                  height: 40,
                  width: 40,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => navigation.navigate("Stats")}
              >
                <Ionicons name="ios-stats-chart" size={20} color="#0E0928" />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  borderColor: "#E5E7EB",
                  borderWidth: 2,
                  borderRadius: 20,
                  padding: 5,
                  height: 40,
                  width: 40,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => navigation.navigate("Bookmarks")}
              >
                <Fontisto name="bookmark" size={20} color="#000" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ display: "flex", alignItems: "center" }}>
          <View style={styles.main}>
            <Text
              style={{
                fontSize: 35,
                fontWeight: "700",
                width: "80%",
                color: "#0E0928",
              }}
            >
              Choose Quiz Category.
            </Text>

            <View style={styles.categories}>
              {quizCategories?.map((category, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      setCategoryVal(category.name);
                      setCategoryImg(category.icon);
                      setSearchCategory(category.field);
                      navigation.navigate("Start-Quiz");
                    }}
                    style={{
                      width: 160,
                      height: 170,
                      borderRadius: 20,
                      marginTop: category.mgTop,
                      backgroundColor: category.color,
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      padding: 10,
                    }}
                  >
                    <Image source={category.icon} style={styles.icon} />
                    <View>
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: "700",
                          marginBottom: 10,
                          color: "#fff",
                        }}
                      >
                        {category.name}
                      </Text>
                      <Text style={{ color: "ghostwhite" }}>
                        Play agaist yourself
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default Home;

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
  },
  homePage: {
    backgroundColor: "#fff",
    height: "100%",
    paddingTop: 30,
  },
  main: {
    // borderWidth: 2,
    // borderColor: "#E5E7EB",
    width: "90%",
    marginTop: 20,
  },
  categories: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  icon: {
    position: "absolute",
    top: -10,
    right: 0,
    width: 70,
    height: 70,
  },
});
