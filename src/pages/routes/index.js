import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../home/index";
import Cart from "../cart/index";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import { useCart } from "../../../context/cart";
export default function Routes(){
    const Tab = createBottomTabNavigator()
    const {cart} = useCart()
    return(
        <>
 
    <NavigationContainer>
     <Tab.Navigator
     screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'home'
            : 'home';
        } else if (route.name === 'Carrinho') {
          iconName = focused ? 'cart' : 'cart';
        } 

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={23} color={color} />;
      },
      tabBarActiveTintColor: '#55ccdd',
      tabBarInactiveTintColor: 'gray',
    })}>
         <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Carrinho" component={Cart}  options={{ tabBarBadge:  cart.length}} />
    </Tab.Navigator>
  </NavigationContainer>
        </>
    )
}