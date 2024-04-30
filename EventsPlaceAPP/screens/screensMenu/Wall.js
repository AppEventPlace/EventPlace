import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

//import { FlatList } from "react-native-web";

const WallScreen = () => {
  return (
    <View style={style.PerfilContainer}>
      <FlatList
        style={{ backgroundColor: "white" }}
        data={[
          { key: "Devin" },
          { key: "Dan" },
          { key: "Dominic" },
          { key: "Jackson" },
          { key: "James" },
          { key: "Joel" },
          { key: "John" },
          { key: "Jillian" },
          { key: "Jimmy" },
          { key: "Julie" },
        ]}
        renderItem={({ item }) => <Text style={style.item}>{item.key}</Text>}
      />
    </View>
  );
};

const style = StyleSheet.create({
  PerfilContainer: {
    backgroundColor: "#666666",
    height: "100%",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default WallScreen;
