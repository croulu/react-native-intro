import {Text, View} from 'react-native';
import {Human} from "./components/Human/Human";
import {SafeAreaProvider} from "react-native-safe-area-context/src/SafeAreaContext";
import {SafeAreaView} from "react-native-safe-area-context";
import {s} from "./App.style";

export default function App() {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <View style={s.square}>
                    <Text style={{color: "white", backgroundColor: "green"}}>Hello tout court on android and iOs !
                        !</Text>
                    <Text>Hello numero 2</Text>
                    <Text>Hello numero 3</Text>
                    <Text>Hello numero 4</Text>
                    <Human/>
                    <Text>Hello numero 5 !!</Text>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
