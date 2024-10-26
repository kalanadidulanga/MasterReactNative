import { View, Text } from "react-native";
import React from "react";
import { st } from "@/utils/styles";

const DynamicContent = () => {
  const username = "KayD";
  const multiply = (x: number, y: number) => x + y;
  return (
    <View>
      <Text style={st.title}>My name is {username}</Text>
      <Text>My name is {multiply(1, 2)}</Text>
      <Text>2+2={2 + 2}</Text>
    </View>
  );
};

export default DynamicContent;
