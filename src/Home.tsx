import * as React from 'react';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { Text, View } from 'react-native';
import { Platform, StyleSheet } from 'react-native';
import { SafeAreaInsetsContext, SafeAreaView } from 'react-native-safe-area-context';
import { TodoListItem } from './components/TodoListItem';


const Home: React.FC = () => {

    const [todoItems, setTodoItems] = useState([{ text: "Freelance project", completed: true }, { text: "Assignment RN", completed: false }]);


    return (
        <SafeAreaView>
            <FlatList
                data={todoItems}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                    return (
                        <TodoListItem
                            todo={item}
                            onPress={() => { }}
                            onDelete={() => { }}
                        />
                    )
                }}
            />
        </SafeAreaView>
    );
};

export default Home;
