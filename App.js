import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, View, Button, FlatList, Text} from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {

    const [courseGoals, setCourseGoals] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false);

    const addGoalHandler = goalTitle => {
        setCourseGoals(courseGoals => [
            ...courseGoals,
            {id: Math.random().toString(), value: goalTitle}
        ]);
        setIsAddMode(false);
    };

    const removeGoalHandler = goalId => {
        setCourseGoals(courseGoals => {
            return courseGoals.filter((goal) => goal.id !== goalId);
        })
    }

    const cancelGoalAddHandler = () => {
        setIsAddMode(false);
    }

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>My tasks</Text>
            <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAddHandler}/>
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={courseGoals}
                renderItem={itemData => (
                    <GoalItem
                        id={itemData.item.id}
                        title={itemData.item.value}
                        onDelete={removeGoalHandler}
                    />
                )}
            />
            <Button title={"Add"} onPress={() => setIsAddMode(true)} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 70
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20
    }
});
