import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParams } from "../types";
import Home from "../views/Home/Home";
import Detail from "../views/Detail/Detail";

const Stack = createStackNavigator<RootStackParams>();


const routeScreenDefaultOptions = {
    headerStyle:{
        backgroundColor: 'rgba(7,26,93,355)'
    },
    headerTitleStyle:{
        color:'#FFF'
    },
}

const Routes = () => 
    (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={routeScreenDefaultOptions}/>
                <Stack.Screen name="Detail" component={Detail} options={routeScreenDefaultOptions} />
            </Stack.Navigator>
        </NavigationContainer>
    )



export default Routes;


