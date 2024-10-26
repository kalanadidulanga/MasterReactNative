import { View, Text, FlatList } from "react-native";
import React from "react";

const ArrayOfObject = () => {
  const locations = [
    {
      id: 1,
      name: "London",
    },
    {
      id: 2,
      name: "Paris",
    },
    {
      id: 3,
      name: "New York",
    },
    {
      id: 4,
      name: "Tokyo",
    },
  ];
  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={locations}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

export default ArrayOfObject;
