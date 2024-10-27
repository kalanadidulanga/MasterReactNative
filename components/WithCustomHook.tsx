import { View, Text, FlatList } from "react-native";
import React from "react";
import useFetch from "@/hooks/useFetch";

const WithCustomHook = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

export default WithCustomHook;
