import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../screen/HomeScreen";
import ProductDetalsScreens from "../screen/ProductDetalsScreens";
const MyHomeComponent = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        // initialRouteName="ProductDetails"
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="ProductDetails" component={ProductDetalsScreens} />
        </Stack.Navigator>
    );
};
export default MyHomeComponent