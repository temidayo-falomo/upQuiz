import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Bookmarks({ navigation }) {
  const [bookmarks, setBookmarks] = React.useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("bookmarks");
        if (value !== null) {
          // value previously stored
          setBookmarks(JSON.parse(value));
        }
      } catch (e) {
        // error reading value
      }
    };
    getData();
  }, []);

  return (
    <ScrollView>
      <StatusBar hidden />
      <View style={styles.bookmarksPage}>
        <View style={styles.nav}>
          <MaterialIcons
            name="cancel"
            size={30}
            color="#4A3596"
            onPress={() => navigation.navigate("Home")}
            style={{ marginRight: 20 }}
          />

          <Text style={{ fontSize: 25, fontWeight: "600", color: "#4A3596" }}>
            Bookmarks
          </Text>

          <View></View>
        </View>

        {bookmarks?.map((bkm, index) => {
          return (
            <View
              style={{
                width: "90%",
                borderRadius: 10,
                padding: 10,
                backgroundColor: "#fff",
                marginTop: 20,
                shadowColor: "aliceblue",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.3,
                shadowRadius: 4.65,

                elevation: 8,
              }}
            >
              <Text
                style={{ color: "#4A3596", fontWeight: "600", fontSize: 17 }}
              >
                <Text
                  style={{
                    fontWeight: "800",
                  }}
                >
                  {index + 1}
                </Text>
                . {bkm}
              </Text>
            </View>
          );
        })}

        {bookmarks?.length === 0 ||
          (!bookmarks && (
            <Text style={{ width: "90%", fontSize: 20, color: "#4A3596" }}>
              No bookmarks saved yet.
            </Text>
          ))}
      </View>
    </ScrollView>
  );
}

export default Bookmarks;

const styles = StyleSheet.create({
  bookmarksPage: {
    backgroundColor: "#fff",
    minHeight: "100%",
    paddingTop: 40,
    display: "flex",
    alignItems: "center",
    position: "relative",
  },
  nav: {
    width: "90%",
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-between",
  },
});
