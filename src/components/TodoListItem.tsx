import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


interface TodoListItemProps {
    todo: any;
    onPress: any;
    onDelete: any;
}

const style = StyleSheet.create({
    textLine: {
        textDecorationLine: 'line-through',
    }
});

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, onPress, onDelete }) => {

    console.log("todo==>", todo.text);

    return (
        <TouchableOpacity
            onPress={() => onPress()}
            style={{ paddingVertical: 8, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={[{ fontSize: 18, color: '#333' }]}>{todo.text}</Text>

            <TouchableOpacity
                onPress={() => onDelete()}>
                <Icon name="delete" color='#ff0000' size={24} />
            </TouchableOpacity>

        </TouchableOpacity>
    );
}