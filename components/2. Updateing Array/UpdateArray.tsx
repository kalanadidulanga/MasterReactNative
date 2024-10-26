import { View, Text, FlatList, Button } from "react-native";
import React, { useState } from "react";

const UpdateArray = () => {
  const [friends, setFriends] = useState(["John", "Jane", "Jack", "Jill"]);

  const addOne = () => {
    setFriends((friends) => [...friends, "Jenny"]);
  };

  const removeOne = () => {
    setFriends((friends) => friends.filter((friend) => friend !== "Jenny"));
  };

  return (
    <View>
      <FlatList
        data={friends}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Text>{item}</Text>}
      />

      <Button title="Add Friend" onPress={addOne} />
      <Button title="Remove Friend" onPress={removeOne} />
    </View>
  );
};

export default UpdateArray;
