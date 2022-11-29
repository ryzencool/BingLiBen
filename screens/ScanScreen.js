import { View, Text, Image, Button } from "react-native";
import React from "react";
import { useEffect, useState, useRef } from "react";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import * as SQLite from "expo-sqlite";
import axios from "axios";

const ScanScreen = () => {
  const navigation = useNavigation();
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLiabraryPermission =
        await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(
        mediaLiabraryPermission.status === "granted"
      );
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requesting Permission</Text>;
  } else if (!hasCameraPermission) {
    return <Text>Camera Permission is not allowed</Text>;
  }

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false,
    };
    let newPhoto = await cameraRef.current.takePictureAsync(options);
    console.log("新的图片是：", newPhoto);
    axios
      .post(
        `https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=V0tL6k9vtiHw6Hx4rK4CwcCa&client_secret=ob9QnSiLIPa99bXxO4XoUNoUQV5NP6xr`
      )
      .then((res) => {
        console.log("返回结果：", res);
        let token = res.data.access_token;
        var details = {
          url: "https://raw.githubusercontent.com/lixing123/lixing123.github.io/master/img/pic_detect_original.png",
        };

        console.log("detail", details);

        var formBody = [];
        for (var property in details) {
          var encodedKey = encodeURIComponent(property);
          var encodedValue = encodeURIComponent(details[property]);
          formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        fetch(
          `https://aip.baidubce.com/rest/2.0/ocr/v1/medical_report_detection?access_token=${token}`,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: formBody,
          }
        ).then((rr) => {
          console.log(rr.json());
        });
      });
    setPhoto(newPhoto);
  };

  if (photo) {
    let sharePhoto = () => {};
    let savePhoto = () => {
      console.log("uri:", photo.uri);
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhoto(undefined);
        // 调用百度云识别

        // 存入sqlite 用户表 详情表 时间线表

        // 返回时间线
      });
    };
    return (
      <SafeAreaView className={"flex-1 justify-center items-center"}>
        <Image
          className={"self-stretch flex-1 h-full w-full"}
          source={{ uri: "data:image/jpg;base64," + photo.base64 }}
        />
        {hasMediaLibraryPermission ? (
          <Button title="确定" onPress={savePhoto} />
        ) : undefined}
        <Button title={"取消"} onPress={() => setPhoto(undefined)} />
      </SafeAreaView>
    );
  }
  return (
    <Camera
      ref={cameraRef}
      className={"relative w-full h-screen flex-row justify-center"}
    >
      <View className={"absolute bottom-56  "}>
        <Button
          title="确定"
          className={"rounded-full w-20 h-20"}
          onPress={takePic}
        />
      </View>
    </Camera>
  );
};

export default ScanScreen;
