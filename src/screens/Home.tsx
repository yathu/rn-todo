import * as React from 'react';
import { useCallback } from 'react';
import { useEffect, useState } from 'react';
import { SectionList } from 'react-native';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SectionHeader } from '../components/SectionHeader';
import { TodoListItem } from '../components/TodoListItem';
import { UserHeader } from '../components/UserHerader';

interface HomeProps {
    refresh?: any,
}

const Home: React.FC<HomeProps> = (props) => {

    const [todoItems, setTodoItems] = useState(
        [{
            title: "Tasks",
            data: [
                { text: "Freelance project", completed: false, category: 'Important', desc: 'project files', time: '1:30 PM - 1:00 PM' },
                { text: "project", completed: false, category: 'Important', desc: 'project files', time: '1:30 PM - 1:00 PM' },
            ]
        }, {
            title: "Completed",
            data: [
                // { text: "Freelance project", completed: true, category: 'Important', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ', time: '1:30 PM - 1:00 PM' }
            ]
        },
        ]);



    useEffect(() => {

        if (props?.refresh && props?.refresh > 0) {
            addTodoItem();
        }

    }, [props.refresh,]);

    const addTodoItem = useCallback(() => {

        let tempArr = [...todoItems];
        const obj = { text: `Added task ${props.refresh}`, completed: false, category: 'Important', desc: 'project files', time: '1:30 PM - 1:00 PM' };
        tempArr[0].data = [...tempArr[0].data, obj];
        setTodoItems([...tempArr]);
    }, [todoItems]);


    const deleteTodoItem = (completed: any, index: number) => {

        let tempArr = [...todoItems];
        tempArr[completed ? 1 : 0].data.splice(index, 1);
        setTodoItems(tempArr)
    }

    const completeTodoItem = (completed: boolean, index: number) => {

        if (completed) return;

        let tempArr = [...todoItems];
        tempArr[0].data[index].completed = true;
        const copyObj = { ...tempArr[0].data[index] };
        tempArr[0].data.splice(index, 1);
        tempArr[1].data.push(copyObj);
        setTodoItems(tempArr);
    }


    const renderList = useCallback(() => {
        return (<SectionList

            sections={todoItems}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
                return (
                    <TodoListItem
                        todo={item}
                        onPress={() => { completeTodoItem(item.completed, index) }}
                        onDelete={() => { deleteTodoItem(item.completed, index) }}
                    />
                )
            }}
            renderSectionHeader={({ section: { title } }) => (
                <SectionHeader title={title} />
            )}
        />);

    }, [todoItems]);


    return (
        <SafeAreaView style={styles.container}>
            <UserHeader />
            {renderList()}
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
        paddingTop: 25,
    },

});

export default Home;
