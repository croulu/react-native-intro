import {SafeAreaView} from "react-native-safe-area-context";
import {View} from "react-native";

export function Flex01() {
    return (
      <>
          <SafeAreaView style={{ backgroundColor: "red", flex: 1 }} />
          <View style={{ backgroundColor: "blue", flex: 2 }} />
      </>
    );
}