import {Image, Text, View} from "react-native";
import {s} from "../../App.style";
import {Human} from "./Human";


export function HumanHome() {
    return (
            <View style={s.square}>
                <Text style={{color: "white", backgroundColor: "green"}}>Hello tout court on android and iOs !
                    !</Text>
                <Text>Hello numero 2</Text>
                <Text>Hello numero 3</Text>
                <Text>Hello numero 4</Text>
                <Human
                    firstName={"Peter"}
                    lastName={"Parker"}
                    age={49}
                    car={{ brand: "Peugeot", maxSpeed: 220 }}
                    isHappy={false}
                    doSomething={function () {
                        console.log("à la volée");
                    }}
                >
                    <Text style={s.grosTexte}>children</Text>
                </Human>
                <Image
                    style={ s.tinyLogo }
                    source={ {uri:"https://learnjapanese.netlify.app/japan.png"} }
                />
                <Text>Hello numero 5 !!</Text>
            </View>
    );
}