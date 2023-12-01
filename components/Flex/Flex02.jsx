import {View} from "react-native";
import {s} from "./FlexDemo.style";

export function Flex02() {
    return(
        <View style={ s.container }>
            <View style={ s.box1 }/>
            <View style={ s.box2 }/>
            <View style={ s.box3 }/>
        </View>
    );
}
