import * as React from 'react';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { Text, View } from 'react-native';
import { Platform, StyleSheet } from 'react-native';
import { SafeAreaInsetsContext, SafeAreaView } from 'react-native-safe-area-context';
import { TodoListItem } from './components/TodoListItem';


const Home: React.FC = () => {

    const [todoItems, setTodoItems] = useState(
        [
            { text: "Freelance project", completed: true, category: 'Important', desc: 'project files', time: '1:30 PM - 1:00 PM' },
            { text: "Assignment RN", completed: false, category: 'Planned', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', time: '1:30 PM - 1:00 PM' }
        ]);

    const deleteTodoItem = (index: number) => {
        let tempArr = [...todoItems];
        tempArr.splice(index, 1);
        setTodoItems(tempArr)
    }

    const completeTodoItem = (index: number) => {
        let tempArr = [...todoItems];
        tempArr[index].completed = true;
        setTodoItems(tempArr)
    }


    return (
        <SafeAreaView style={styles.container}>

            <FlatList

                data={todoItems}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                    return (
                        <TodoListItem
                            todo={item}
                            onPress={() => { completeTodoItem(index) }}
                            onDelete={() => { deleteTodoItem(index) }}
                        />
                    )
                }}
            />
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 15,
    },

});

export default Home;
