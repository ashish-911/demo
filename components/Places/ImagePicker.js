import React, { useState } from "react";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { StyleSheet } from "react-native";
import { Text, Image, Button, View } from "react-native";
import { Colors } from "../../constants/colors";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import OutlinedButton from "../UI/OutlinedButton";

const ImagePickers = () => {
    const [imgPreview, setImgPreview] = useState('');

    const pressHandler = () => {
        launchCamera({
            quality: 1,
            saveToPhotos: true,
            mediaType: 'mixed'
        }, response => {
            setImgPreview(response.assets[0].uri)
            if (response.didCancel) {
                console.log('User Cancelled Permission')
            }
            else if (response.errorMessage) {
                console.log(response.error, 'Error Found')
            }
        })
    }
    let ImagePreview = <Text style={{ textAlign: 'center' }}> No Image available</Text>
    if (imgPreview) {
        ImagePreview = <Image source={{ uri: imgPreview }} style={{ height: '100%', width: '100%' }} />
    }

    return (
        <View  >
            <View style={styles.imgContainer}>
                {ImagePreview}
            </View>
            <OutlinedButton icon={faCamera} onPress={pressHandler} >Click Photo</OutlinedButton>
        </View >
    )


}



export default ImagePickers;

const styles = StyleSheet.create({
    view: {

        justifyContent: 'center',
        alignItems: 'center',
    },
    imgContainer: {
        height: 200,
        backgroundColor: Colors.primary100,
        marginVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'

    }
});