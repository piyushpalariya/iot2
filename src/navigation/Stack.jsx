import {createStackNavigator} from "@react-navigation/stack"
import Two from "../screens/Two"
import One from "../screens/One"
import React from "react"

export default function Stack() {
  const StackNavigator = createStackNavigator()
  return (
    <StackNavigator.Navigator initialRouteName="One">
      <StackNavigator.Screen
        name="One"
        component={One}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="Two"
        component={Two}
        options={{headerShown: false}}
      />
    </StackNavigator.Navigator>
  )
}
