import { View, Text, FlatList } from "react-native";
import React from "react";

const ListData = () => {
  const fruits = [
    "apple",
    "banana",
    "cherry",
    "date",
    "elderberry",
    "fig",
    "grapefruit",
  ];
  return (
    <View>
      <FlatList
        data={fruits}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  );
};

export default ListData;
