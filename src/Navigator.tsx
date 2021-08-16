import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import Home from "./Home";
import Setting from "./Setting";
import * as React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const Navigator: React.FC = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                < Tab.Screen name="Home" component={Home} options={{
                    tabBarIcon: () => (<Icon name="home" color='#000' size={24} />),
                }} />
                < Tab.Screen name="Setting" component={Setting} options={{
                    tabBarIcon: () => (<Icon name="cog" color='#000' size={24} />),
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;