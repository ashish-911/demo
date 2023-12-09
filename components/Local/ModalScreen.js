import React from "react";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { View, Text, StyleSheet, Modal, Pressable } from 'react-native'
import { UpdatingItemContext } from "../store/context/favorite-context";
import DummyData from "../data/DummyData";


const ModalScreen = ({ onPress, isModalVisible }) => {
    const RecentExpensesCtx = useContext(UpdatingItemContext);
    const UpdatedItems = DummyData.filter((item) => RecentExpensesCtx.ids.includes(item.id))


    return (
        <Modal visible={isModalVisible} animationType='slide'>
            <View style={styles.container}>
                <View style={{}}>
                    <Text style={styles.text}>Edit Expenses</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <Pressable onPress={onPress}><Text style={styles.text2}>Cancel</Text></Pressable>
                    <Pressable onPress={onPress}><Text style={styles.text2}>Update</Text></Pressable>
                </View>
                <Text style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>------------------------------------------------------------</Text>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Pressable onPress={() => { }}>
                        <FontAwesomeIcon icon={faTrashCan} size={30} />
                    </Pressable>
                </View>
            </View>
        </Modal>

    )
}

export default ModalScreen;

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

