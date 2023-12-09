import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, Modal, Alert } from "react-native";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import IconButton from "../components/iconButton";
import AddingExpense from "./addingExpense";
import DummyData from "../data/DummyData";
import ExpensesList from "../components/ExpensesList/ExpensesList";
import TotalTile from "../components/TotalTile";
import { ExpenesContext } from "../store/context/favorite-context";


const MainScreen = ({ route, navigation }) => {
    const expensesCtx = useContext(ExpenesContext)

    const [isModalVisible, setIsModalVisible] = useState(false)

    function addExpenseHandler() {
        setIsModalVisible(true);
    }

    function visibilityOffHandler() {
        setIsModalVisible(!isModalVisible);
    }

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton icon={faPlus}
                        color={'white'} onPress={() => { navigation.navigate('AddingExpenses') }} />
                );
            },
        });
    }, [navigation, addExpenseHandler]);


    let Period = new Date();
    Period.setHours(0, 0, 0, 0);
    const SevenDays = new Date(Period)
    SevenDays.setDate(Period.getDate() - 7);


    const TruePeriod = expensesCtx.expenses.filter((item) => {
        return item.period > SevenDays
    })





    return (
        <View style={styles.container} >
            <TotalTile list={TruePeriod} TimePeriod={'Last 7 Days Expenses'} />
            <ExpensesList list={TruePeriod} />


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



export default MainScreen;


