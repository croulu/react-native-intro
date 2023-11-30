import {SafeAreaProvider} from "react-native-safe-area-context/src/SafeAreaContext";
import {SafeAreaView} from "react-native-safe-area-context";
import {HumanHome} from "./components/Human/HumanHome";

export default function App() {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <HumanHome />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
