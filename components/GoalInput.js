import {Button, StyleSheet, TextInput, View, Modal} from "react-native";
import React, {useState} from "react";


const GoalInput = props => {

    const [enteredGoal, setGoal] = useState("");

    const goalInputHandler = (enteredText) => {
        setGoal(enteredText)
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setGoal("");
    }

    return (
        <Modal visible={props.visible} animationType="slide" >
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder=" task"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    <Button title="Back" color="red" onPress={props.onCancel} />
                    <Button title=" Add " onPress={addGoalHandler} />
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        borderColor: "black",
        borderWidth: 1,
        width: "80%",
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "30%"
    }
})