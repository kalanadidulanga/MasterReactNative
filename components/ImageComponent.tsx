import { View, Text, Image } from "react-native";
import React from "react";

const ImageComponent = () => {
  return (
    <View>
      <Text>ImageComponent</Text>
      <Image
        source={require("@/assets/images/partial-react-logo.png")}
        style={{ width: 200, height: 200 }}
      />
      <Image
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
};

export default ImageComponent;
