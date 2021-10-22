import React from "react";
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";

const GoalItem = props => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItem}>
                <Text style={styles.listText}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
};

export default GoalItem;

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 4,
        backgroundColor: "#ccc",
        borderColor: "black",
        borderWidth: 1.5,
    },
    listText: {
        fontSize: 18
    }
})