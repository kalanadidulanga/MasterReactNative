import ButtonComponent from "@/components/ButtonComponent";
import CardComponent from "@/components/CardComponent";
import DynamicContent from "@/components/DynamicContent";
import ImageComponent from "@/components/ImageComponent";
import TextComponent from "@/components/TextComponent";
import { View } from "react-native";

export default function Index() {
  return (
    <View style={{ rowGap: 20 }}>
      {/* <TextComponent /> */}

      {/* <ButtonComponent /> */}

      {/* <ImageComponent /> */}

      <CardComponent />

      {/* <DynamicContent /> */}
    </View>
  );
}
