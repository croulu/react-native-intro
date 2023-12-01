import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {AgeCounter} from "./components/Age/AgeCounter";

export default function App() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ backgroundColor: "grey", flex: 1 }}>
                <AgeCounter />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
