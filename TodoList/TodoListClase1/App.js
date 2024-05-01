import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const TodoList = () => {
    const [task, setTask] = useState('');
    const [tasksList, setTasksList] = useState([]);

    const handleAddTask = () => {
        if (task.trim() !== '') {
            setTasksList([...tasksList, task]);
            setTask('');
        }
    };

    const handleDeleteTask = index => {
        const updatedTasks = [...tasksList];
        updatedTasks.splice(index, 1);
        setTasksList(updatedTasks);
    };

    const renderItem = ({ item, index }) => (
        <View style={styles.taskContainer}>
            <Text>{item}</Text>
            <TouchableOpacity onPress={() => handleDeleteTask(index)} style={styles.deleteButton}>
                <Text style={styles.deleteText}>X</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Ingrese una tarea"
                value={task}
                onChangeText={text => setTask(text)}
            />
            <Button title="Agregar Tarea" onPress={handleAddTask} />
            <FlatList
                data={tasksList}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    taskContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
    },
    deleteButton: {
        backgroundColor: 'red',
        padding: 5,
        borderRadius: 5,
    },
    deleteText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default TodoList;