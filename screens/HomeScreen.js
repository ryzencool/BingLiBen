import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      <View className="ml-4 mt-4">
        <Text className="font-bold text-3xl">观察人</Text>
      </View>
      <View className={"mt-4 ml-4 mr-4"}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("UserDetailList");
          }}
        >
          <View
            className={
              "mb-4 p-4 flex-col justify-between bg-white shadow-md w-full h-24 rounded-lg"
            }
          >
            <View className={"flex-row justify-between"}>
              <Text className={"font-bold text-lg"}>周美勇</Text>
              <Text className={"text-lg"}>男·1994-10-11</Text>
            </View>
            <View className={"flex-row justify-between"}>
              <Text>胆囊息肉</Text>
              <Text>查看详情</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View
          className={
            "mb-4 p-4 flex-col justify-between bg-white shadow-md w-full h-24 rounded-lg"
          }
        >
          <View className={"flex-row justify-between"}>
            <Text className={"font-bold text-lg"}>周美勇</Text>
            <Text className={"text-lg"}>男·1994-10-11</Text>
          </View>
          <View className={"flex-row justify-between"}>
            <Text>胆囊息肉</Text>
            <Text>查看详情</Text>
          </View>
        </View>
        <View
          className={
            "p-4 flex-col justify-between bg-white shadow-md w-full h-24 rounded-lg"
          }
        >
          <View className={"flex-row justify-between"}>
            <Text className={"font-bold text-lg"}>周美勇</Text>
            <Text className={"text-lg"}>男·1994-10-11</Text>
          </View>
          <View className={"flex-row justify-between"}>
            <Text>胆囊息肉</Text>
            <Text>查看详情</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
