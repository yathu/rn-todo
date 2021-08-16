import React from "react";
import { View, StyleSheet } from "react-native";
import { Image, Text } from "react-native-elements";

interface UserHeaderProps {
}

export const UserHeader: React.FC<UserHeaderProps> = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.nameContainer}>
        <Text h3 style={styles.lightTitle}>Hello</Text>
        <Text h3 style={styles.darkTitle}>Abdur Rahman</Text>
      </View>
      <View>
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=12" }}
          style={styles.user}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"

  },
  nameContainer: {
    flex: 1,
    flexDirection: "column"
  },
  lightTitle: {
    color: "#777486",
    marginBottom: 5,
    fontWeight: "400"
  },
  darkTitle: {
    color: "#1b1235",
    fontWeight: "600"
  },
  user: {
    width: 100,
    height: 100,
    borderRadius: 10
  }
});
