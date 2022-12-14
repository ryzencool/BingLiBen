import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, Platform } from 'react-native';
import React, {useState, useEffect} from 'react'
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const [image, setImage] =  useState(null)
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result =  await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 9],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
          <Button title="Pick an image from camera roll" onPress={pickImage} />
          {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
