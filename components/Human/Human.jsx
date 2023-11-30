import { Text } from "react-native";

export function Human({ firstName, lastName, age, car, children, isHappy, doSomething }) {
    return (
        <>
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