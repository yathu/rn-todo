import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import Home from "./screens/Home";
import Setting from "./screens/Setting";
import * as React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet, View } from "react-native";
import { AddTask } from "./screens/AddTask";

const Tab = createBottomTabNavigator();

const Navigator: React.FC = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator tabBarOptions={{ showLabel: false }}>
                < Tab.Screen name="Home" component={Home} options={{
                    tabBarIcon: () => (<Icon name="home" color='#000' size={24} />),

                }} />
                < Tab.Screen name="Add" component={AddTask} options={{
                    tabBarIcon: () => (
                        <View style={styles.centerBtn}>
                            <Icon name="plus" color='#fff' size={24} />
                        </View>),
                }} />
                < Tab.Screen name="Setting" component={Setting} options={{
                    tabBarIcon: () => (<Icon name="cog" color='#000' size={24} />),
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    centerBtn: {
        borderColor: '#fe92a1',
        backgroundColor: '#fe92a1',
        padding: 10,
        borderRadius: 10,
        // borderWidth: 10
    }
});

export default Navigator;
