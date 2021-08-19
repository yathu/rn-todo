import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import Home from "./screens/Home";
import Setting from "./screens/Setting";
import * as React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet } from "react-native";
import { AddTask } from "./screens/AddTask";

const Tab = createBottomTabNavigator();

const AddScreenComponent = () => {
    return null;
}

const Navigator: React.FC = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator tabBarOptions={{ showLabel: false }}>
                < Tab.Screen name="Home" component={Home} options={{
                    tabBarIcon: () => (<Icon name="home" color='#000' size={24} />),

                }} />
                < Tab.Screen name="Add" component={AddScreenComponent} options={{
                    tabBarButton: () => <AddTask />,
                }} />

                < Tab.Screen name="Setting" component={Setting} options={{
                    tabBarIcon: () => (<Icon name="cog" color='#000' size={24} />),
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;
