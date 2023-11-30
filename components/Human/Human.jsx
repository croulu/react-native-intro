import { Text } from "react-native";

export function Human({ firstName, lastName, age, car, children, isHappy, doSomething }) {
    return (
        <>
            <Text style={{fontSize: 20}}>
                { age > 50 ? "Tu n'es plus si jeune" : "Sous la barre" }
                { isHappy ? <DisplayHappy /> : <DisplayNotHappy />}
            </Text>
            <Text style={{fontSize: 30}}>
                {1 + 3} Je suis { firstName } { lastName }, j'ai { age }
            </Text>
            <Text>
                Ma voiture est une { car.brand }
            </Text>
            { children }
            { isHappy }
            { doSomething() }
        </>
    );
}

function DisplayHappy() {
    return <Text style={{fontSize: 30}}> Et oui, je suis heureuse</Text>;
}

function DisplayNotHappy() {
    return <Text style={{fontSize: 30}}> Hélas, je suis malheureuse</Text>;
}
