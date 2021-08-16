import React from 'react';
import { Button, Text, TouchableOpacity } from 'react-native';
import { StyleSheet, View } from "react-native";
import { CheckBox, ListItem } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



interface TodoListItemProps {
    todo: any;
    onPress: any;
    onDelete: any;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, onPress, onDelete }) => {

    console.log("todo==>", todo.text);

    return (

        <ListItem.Swipeable
            underlayColor="#fff"
            leftWidth={0}
            containerStyle={styles.listItemContainer}
            rightContent={
                <TouchableOpacity onPress={onDelete} style={styles.rightSwipeArea}>
                    <Icon
                        name='home'
                        size={25}
                        onPress={() => console.log('hello')} />
                </TouchableOpacity>
            }

            onPress={onPress}
        >
            <ListItem.Content>
                <ListItem.Title style={styles.title}>{todo.text}</ListItem.Title>
                <ListItem.Subtitle style={styles.subtitle}>{todo.time}</ListItem.Subtitle>
                <Text style={styles.desc}>{todo.desc}</Text>
            </ListItem.Content>
            <ListItem.Chevron Component={() => (
                <Icon name={todo.completed ? 'check-circle' : 'checkbox-blank-circle-outline'} color={todo.completed ? "#5a3ea2" : "#c7c8ca"} size={30} />
            )} />

        </ListItem.Swipeable>

    );
}

const styles = StyleSheet.create({
    listItemContainer: {
        padding: 20,
        paddingVertical: 25,
        backgroundColor: '#f2f2f3',
        marginVertical: 15,
        borderRadius: 15
    },
    textLine: {
        textDecorationLine: 'line-through',
    },
    rightSwipeArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        marginVertical: 15,
        borderRadius: 20
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 7,
        color: '#261c3e',
        letterSpacing: .5,
    },
    subtitle: {
        color: '#5c5967',
        fontWeight: '600',
        marginBottom: 12,
        fontSize: 14,
    },
    desc: {
        color: '#5a5663',
        fontSize: 15,

    }
});