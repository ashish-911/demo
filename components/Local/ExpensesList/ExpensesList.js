import { View, Text, FlatList, StyleSheet, Pressable, Modal } from 'react-native'
import DummyData from "../../data/DummyData";
import { Dimensions } from 'react-native';
import ModalScreen from '../ModalScreen';
import { useNavigation } from '@react-navigation/native';

const ExpensesList = ({ list }) => {

    const navigation = useNavigation();



    function renderHandler(itemData) {

        function pressHandler() {
            return (
                navigation.navigate('AddingExpenses', {
                    itemId: itemData.item.id
                })
            )
        }


        return (
            <Pressable style={styles.view} onPress={pressHandler} android_ripple={{ color: '#478beb' }}>
                <View style={{ flex: 2 }}>
                    <Text style={styles.text1}>{itemData.item.description} </Text>
                </View>
                <View style={{ flex: 1, }}>
                    <Text style={styles.text2}>{itemData.item.amount} </Text>
                </View>
            </Pressable>
        )
    }

    return (
        <FlatList
            data={list}
            renderItem={renderHandler}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
        />

    )
}
const deviceWidth = Dimensions.get('window').width

export default ExpensesList;

const styles = StyleSheet.create({
    text1: {
        color: 'white',
        textAlign: 'left',
        fontWeight: 'bold',
        padding: 5,



    },
    view: {
        flexDirection: 'row',
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#478beb',
        borderRadius: 15,
        width: 330,


    },
    text2: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 5,



    },
})