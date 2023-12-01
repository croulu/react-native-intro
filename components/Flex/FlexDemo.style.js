import {StyleSheet} from "react-native";

export const s = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-start",
    },
    box1: {
        height:100,
        width:100,
        backgroundColor: "blue",
    },
    box2: {
        height:100,
        width:100,
        backgroundColor: "white",
    },
    box3: {
        height:100,
        width:100,
        backgroundColor: "red",
    }
});

// justifyContent bosse dans le même sens que flexDirection
// space-between, space-around, space-evenly

// alignItems bosse dans le sens opposé que flexDirection

