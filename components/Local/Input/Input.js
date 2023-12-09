import React from "react";
import { Text, View, TextInput, StyleSheet } from 'react-native'



const Input = ({ inputProps, Title }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {Title}
            </Text>
            <TextInput
                style={{ margin: 10, backgroundColor: 'white', borderRadius: 12, padding: 11, fontSize: 15 }}
                {...inputProps}



            />
        </View>
    )
}


export default Input;

const styles = StyleSheet.create({
    text: {
        color: 'white',
        textAlign: 'center',
        padding: 2,
        fontWeight: 'bold',
        fontSize: 18,
    },
    container: {
        marginBottom: 10

    }
});