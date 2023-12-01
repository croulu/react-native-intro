import { Text, View } from "react-native";
import {s} from "../../App.style";

export function AgeDisplay({ age }) {
    return (
        <View>
            <Text style={s.petitTexte}>J'ai {age} ans</Text>
        </View>
    );
}
