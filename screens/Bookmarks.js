import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Clipboard from "expo-clipboard";

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

  const handleRemoveBookmark = (id) => {
    const newBookmarks = bookmarks?.filter((bookmark) => bookmark !== id);
    setBookmarks(newBookmarks);
    AsyncStorage.setItem("bookmarks", JSON.stringify(newBookmarks));
  };

  const copyToClipboard = (value) => {
    Clipboard.setStringAsync(value);
  };

  return (
    <ScrollView>
      {/* <StatusBar hidden /> */}
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
              key={index}
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
                borderColor: "#4A3596",
                borderWidth: 1,
                position: "relative",
                minHeight: 80,
                // alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#4A3596",
                  fontWeight: "600",
                  fontSize: 17,
                  // width: "90%",
                }}
              >
                {bkm}
              </Text>

              <View style={{ display: "flex", flexDirection: "row" }}>
                <TouchableOpacity
                  style={{
                    padding: 8,
                    backgroundColor: "gainsboro",
                    width: 80,
                    marginTop: 10,
                    borderRadius: 5,
                    alignItems: "center",
                    backgroundColor: "#4A3596",
                    marginRight: 10,
                  }}
                  onPress={() => copyToClipboard(bkm)}
                >
                  <View>
                    <Text style={{ color: "#fff", fontWeight: "600" }}>
                      Copy
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    padding: 8,
                    backgroundColor: "gainsboro",
                    width: 80,
                    marginTop: 10,
                    borderRadius: 5,
                    alignItems: "center",
                    backgroundColor: "pink",
                  }}
                  onPress={() => handleRemoveBookmark(bkm)}
                >
                  <View>
                    <Text style={{ color: "#fff", fontWeight: "600" }}>
                      Remove
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}

        {!bookmarks ||
          (bookmarks?.length === 0 && (
            <Text
              style={{
                width: "90%",
                fontSize: 20,
                fontWeight: "600",
                color: "#4A3596",
                position: "absolute",
                alignSelf: "center",
                bottom: "50%",
                right: "-10%",
              }}
            >
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
    paddingTop: 50,
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
  },
});
