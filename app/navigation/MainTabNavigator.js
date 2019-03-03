import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import TodoScreen from "../containers/todo/TodoScreen";
import ShoppingScreen from "../containers/shopping/ShoppingScreen";
import SettingsScreen from "../containers/SettingsScreen";
import CartScreen from "../containers/shopping/CartScreen";

const TodoStack = createStackNavigator({
  Todo: TodoScreen
});

TodoStack.navigationOptions = {
  tabBarLabel: "Todo",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios" ? `ios-list${focused ? "-box" : ""}` : "md-list"
      }
    />
  )
};

const ShoppingStack = createStackNavigator({
  Shopping: ShoppingScreen,
  Cart: CartScreen
});

ShoppingStack.navigationOptions = {
  tabBarLabel: "Shop",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-cart" : "md-cart"}
    />
  )
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};

export default createBottomTabNavigator({
  ShoppingStack,
  TodoStack,
  SettingsStack
});
