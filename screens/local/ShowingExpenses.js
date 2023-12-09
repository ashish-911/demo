import React, { useCallback, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { View, Text, StyleSheet, Modal, Pressable } from 'react-native'
import { ExpenesContext } from "../store/context/favorite-context";

const UpdaingExpenses = ({ navigation }) => {

    // const currentItemId = route.params?.itemId;
    const expenseCtx = useContext(ExpenesContext)

    function deleteExpenseHandler() {
        expenseCtx.deleteExpense(currentItemId);
        navigation.goBack();
    };

    function cancelHandler() {
        navigation.goBack();
    };

    function confirmHandler() {
        navigation.goBack();
    };




    return (
        <View style={styles.container}>
            <View style={{}}>
                <Text style={styles.text}>Edit Expenses</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <Pressable onPress={cancelHandler}><Text style={styles.text2}>Cancel</Text></Pressable>
                <Pressable onPress={confirmHandler}><Text style={styles.text2}>Update?</Text></Pressable>
            </View>
            <Text style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>------------------------------------------------------------</Text>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Pressable onPress={deleteExpenseHandler}>
                    <FontAwesomeIcon icon={faTrashCan} size={30} />
                </Pressable>
            </View>
        </View>

    )
}

export default UpdaingExpenses;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8c85ea',
        flex: 1,

    },
    text: {
        color: 'white',
        textAlign: 'center',
        padding: 18,
        fontSize: 17,
        backgroundColor: '#5d52f0',
        borderRadius: 8,
        fontWeight: 'bold',
        marginBottom: 15
    },
    text2: {
        color: 'white',
        textAlign: 'center',
        paddingHorizontal: 25,
        paddingVertical: 10,
        fontSize: 15,
        backgroundColor: '#5d52f0',
        borderRadius: 8,
        marginBottom: 10,
    }
});

