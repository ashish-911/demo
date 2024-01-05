import React, { useState } from "react";
import { Text, Image, Button, View, StyleSheet, ScrollView, Alert, PermissionsAndroid, Linking, Platform } from "react-native";
import { Colors } from "../../constants/colors";
import OutlinedButton from "../UI/OutlinedButton";
import { faLocationDot, faMap } from "@fortawesome/free-solid-svg-icons";
import Geolocation from '@react-native-community/geolocation';
import { useNavigation } from "@react-navigation/native";




const LocationPicker = () => {
    const [currentLocation, setCurrentLocation] = useState({
        lat: '',
        long: ''
    });

    const navigation = useNavigation();

    async function locateUserHandler() {
        if (Platform.OS === 'ios') {
            Geolocation.requestAuthorization()
        }
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
                    title: 'Location Permission',
                    message:
                        'This app needs access to your Location ',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                })
                if (granted === 'granted') {
                    Geolocation.getCurrentPosition((location) => {
                        setCurrentLocation({ lat: location.coords.latitude, long: location.coords.longitude });
                        console.log(currentLocation.lat, currentLocation.long, '---getting current location')
                    });
                }
                if (granted === 'never_ask_again' && Platform.OS === 'android') {

                    Alert.alert(
                        'Location Permission',
                        'Plese provide location for better results.',
                        [
                            {
                                text: 'OK',
                                onPress: () => {
                                    Linking.openSettings();
                                },
                            }
                        ]
                    );
                }
            }
            catch (error) {
                Alert.alert('Warning', 'Error occured!, Unable to Fetch location, Please try after some time.')
            }
        }


    }

    function pickOnMapHandler() {
        navigation.navigate('Map');
    }

    return (
        <View   >
            <View style={styles.imgContainer}>
                {/* {ImagePreview} */}
            </View>
            <View style={styles.buttons}>
                <OutlinedButton icon={faLocationDot} onPress={locateUserHandler} >Locate User</OutlinedButton >
                <OutlinedButton icon={faMap} onPress={pickOnMapHandler} >Pick on Map</OutlinedButton>
            </View>
        </View>
    )


}



export default LocationPicker;

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',

    },
    imgContainer: {
        height: 200,
        backgroundColor: Colors.primary100,
        marginVertical: 10,
        // overflow: 'hidden',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'

    }
});