import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, Modal } from "react-native";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import IconButton from "../components/iconButton";
import AddingExpense from "./addingExpense";
import DummyData from "../data/DummyData";
import ExpensesList from "../components/ExpensesList/ExpensesList";
import TotalTile from "../components/TotalTile";
import { ExpenesContext } from "../store/context/favorite-context";


const AllExpenses = ({ route, navigation }) => {
    const expensesCtx = useContext(ExpenesContext)

    const [isModalVisible, setIsModalVisible] = useState(false)

    function addExpenseHandler() {
        setIsModalVisible(true);
    }

    function visibilityOffHandler() {
        setIsModalVisible(false)
        console.log('pressed')
    }

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton icon={faPlus}
                        color={'white'} onPress={addExpenseHandler} />
                );
            },
        });
    }, [navigation, addExpenseHandler]);


    return (
        <View style={styles.container} >
            <TotalTile list={expensesCtx.expenses} TimePeriod={'All Expenses'} />
            <ExpensesList list={expensesCtx.expenses} />
            <Modal visible={isModalVisible} animationType="slide">
                <AddingExpense onPress={visibilityOffHandler} />
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3e35bb',
        flex: 1,
        alignItems: 'center',
        padding: 10
        // justifyContent:'center'
    },
    textInput: {
        backgroundColor: 'white',
        borderRadius: 15,
        width: "90%",
        margin: 20,
    },
    text: {
        color: 'white',
        padding: 12,
        fontWeight: 'bold'
    }
})



export default AllExpenses;