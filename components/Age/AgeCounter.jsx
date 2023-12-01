import {useState} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {s} from "../../App.style";
import {AgeDisplay} from "./AgeDisplay";

export function AgeCounter() {
    const [age, setAge] = useState(40);

    function increaseAge() {
        setAge(age + 1);
    }

    return (
      <View>
          <TouchableOpacity onPress={increaseAge}>
              <Text style={s.moyenTexte}>Augmenter l'âge</Text>
          </TouchableOpacity>
            <AgeDisplay age={age}/>
      </View>
    );
}
