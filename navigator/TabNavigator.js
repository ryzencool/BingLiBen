import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import { PlusIcon, HomeIcon } from "react-native-heroicons/outline";
import UserDetailScreen from "../screens/UserDetailScreen";
import RecordScreen from "../screens/RecordScreen";
import ScanScreen from "../screens/ScanScreen";
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="UserDetailList" component={UserDetailScreen} />
      <Stack.Screen name="Record" component={RecordScreen} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            elevation: 0,
            backgroundColor: "#FFFFFF",
            borderRadius: 15,
            flexDirection: "column",
            justifyContent: "center",
          },
        ],
      }}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focus }) => (
            <View
              className={"top-3 flex-col gap-1 justify-center items-center"}
            >
              <HomeIcon size={32} font={"bold"} />
              <Text className={"font-bold "}>首页</Text>
            </View>
          ),
        }}
        name="HomeStack"
        component={HomeStack}
      />
      <Tab.Screen
        component={ScanScreen}
        name="Scan"
        options={{
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />

      <Tab.Screen name="my" component={HomeScreen} />
    </Tab.Navigator>
  );
};

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -20,
      justifyContent: "center",
      alignItems: "center",
    }}
    onPress={onPress}
  >
    <View
      className={
        "flex-row justify-center items-center w-20 h-20 rounded-full bg-sky-500"
      }
    >
      <PlusIcon size={32} color="#FFF" />
    </View>
  </TouchableOpacity>
);

export default TabNavigator;
