import { Text, View, TextInput, StyleSheet, Image, ScrollView } from 'react-native'
import ImagePickers from '../components/Places/ImagePicker';
import { useState } from 'react';
import LocationPicker from '../components/Places/LocationPicker';
import { Colors } from '../constants/colors';

const AddPlace = () => {



    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.text}>Title</Text>
                <TextInput style={{ backgroundColor: '#efc7c7', borderRadius: 6, padding: 10, margin: 6 }} placeholder='Enter Your Title here' />
                <ImagePickers />
                <LocationPicker />

            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    text: {
        color: Colors.primary500,
        backgroundColor: Colors.gray700,
        textAlign: 'center',
        padding: 10,
        borderWidth: 2,
        borderColor: Colors.primary500,
        marginVertical: 9,
        borderRadius: 8,
        fontWeight: 'bold',
        fontSize: 16
    }
});
export default AddPlace;
