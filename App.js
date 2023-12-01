import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {Flex02} from "./components/Flex/Flex02";

export default function App() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ backgroundColor: "grey", flex: 1 }}>
                <Flex02 />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
