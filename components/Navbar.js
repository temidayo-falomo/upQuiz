import { View, Text, StyleSheet } from "react-native";

function Navbar() {
  return (
    <View style={styles.nav}>
      <Text>Navbar</Text>
    </View>
  );
}

export default Navbar;

const styles = StyleSheet.create({
  nav: {
    backgroundColor: "blue",
    height: 50,
  },
});
