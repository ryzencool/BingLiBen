import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import Timeline from "react-native-timeline-flatlist";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const UserDetailScreen = () => {
  const navigation = useNavigation();

  const data = [
    {
      time: "2021-10-11",
      title: "Archery Training",
      description:
        "The Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. ",
      lineColor: "#009688",
      icon: require("../assets/archery.png"),
      imageUrl:
        "https://cloud.githubusercontent.com/assets/21040043/24240340/c0f96b3a-0fe3-11e7-8964-fe66e4d9be7a.jpg",
    },
    {
      time: "2021-10-11",
      title: "Play Badminton",
      description:
        "Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.",
      icon: require("../assets/badminton.png"),
      imageUrl:
        "https://cloud.githubusercontent.com/assets/21040043/24240405/0ba41234-0fe4-11e7-919b-c3f88ced349c.jpg",
    },
    {
      time: "2021-10-11",
      title: "Lunch",
      icon: require("../assets/lunch.png"),
    },
    {
      time: "2021-10-11",
      title: "Watch Soccer",
      description:
        "Team sport played between two teams of eleven players with a spherical ball. ",
      lineColor: "#009688",
      icon: require("../assets/soccer.png"),
      imageUrl:
        "https://cloud.githubusercontent.com/assets/21040043/24240419/1f553dee-0fe4-11e7-8638-6025682232b1.jpg",
    },
    {
      time: "2021-10-11",
      title: "Go to Fitness center",
      description: "Look out for the Best Gym & Fitness Centers around me :)",
      icon: require("../assets/dumbbell.png"),
      imageUrl:
        "https://cloud.githubusercontent.com/assets/21040043/24240422/20d84f6c-0fe4-11e7-8f1d-9dbc594d0cfa.jpg",
    },
  ];

  const renderDetail = (rowData, sectionID, rowID) => {
    let title = <Text className={"font-bold text-lg"}>{rowData.title}</Text>;
    var desc = null;
    if (rowData.description && rowData.imageUrl)
      desc = (
        <View className={"bg-white p-2 shadow-md rounded-md mt-2"}>
          {/* <Image source={{ uri: rowData.imageUrl }} /> */}
          <Text>{rowData.description}</Text>
        </View>
      );

    return (
      <View style={{ flex: 1, top: -15 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Record");
          }}
        >
          {/* <Image source={require("../assets/soccer.png")} /> */}
          <View
            className={
              "p-2 flex-row justify-between items-center mt-2 mr-6 rounded-md shadow-sm bg-white"
            }
          >
            <Image
              source={require("../assets/archery.png")}
              className={"w-12 h-12"}
            />
            <Text>南京市人民医院检查单</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View className={"w-full h-full flex-row justify-center pt-4 pl-2"}>
      <Timeline
        //..other props
        timeContainerStyle={{
          width: 80,
        }}
        data={data}
        renderDetail={renderDetail}
      />
    </View>
  );
};

export default UserDetailScreen;
