import { View, Text, Button } from "react-native";
import React, { useState } from "react";

const WithState = () => {
  const [count, setCount] = useState(0);
  console.log(count);

  return (
    <View>
      <View>
        <Text>Count: {count}</Text>
        <Button
          title="Increment"
          onPress={() => {
            setCount(count + 1);
          }}
        />
        <Button
          title="Decrement"
          onPress={() => {
            setCount(count - 1);
          }}
        />
      </View>
    </View>
  );
};

export default WithState;
