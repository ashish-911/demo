import React, { useState, useEffect } from "react";
import { Alert, View, Text, Button, StyleSheet, Pressable } from "react-native";
import Input from "../components/Input/Input";
import { Platform } from "react-native";
import DatePicker from "react-native-date-picker";
import { useContext } from "react";
import { ExpenesContext } from "../store/context/favorite-context";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import UpdaingExpenses from "./ShowingExpenses";


const AddingExpense = ({ route, navigation }) => {


    const currentItemId = route.params?.itemId;
    const expenseCtx = useContext(ExpenesContext);
    const updatingIndex = !!currentItemId;
    const currentItem = expenseCtx.expenses.find((item) => item.id == currentItemId);
    // console.log(currentItem.amount.toString() + 3);


    const [dateItem, setDateItem] = useState(updatingIndex ? currentItem.period : new Date());
    const [price, setPrice] = useState(updatingIndex ? currentItem.amount.toString() : '')
    const [description, setDescription] = useState(updatingIndex ? currentItem.description : '')
    const [open, setOpen] = useState(false)


    useEffect(() => {
        navigation.setOptions({

            title: updatingIndex ? 'Update Expense' : 'Add Expense',
            headerStyle: {
                backgroundColor: '#9a95df'
            }
        });
    }, [navigation, updatingIndex]);




    const UseAblePrice = +price;
    const amountIsValid = !isNaN(UseAblePrice) && UseAblePrice > 0;
    const dateIsValid = dateItem !== 'Invalid Date';
    const descriptionIsValid = description.trim().length > 0;



    function confirmHandler() {

        if (updatingIndex) {
            expenseCtx.updateExpense(currentItemId, { description: description, amount: UseAblePrice, date: dateItem })
            navigation.goBack();

        } else {

            if (amountIsValid && dateIsValid && descriptionIsValid) {
                expenseCtx.addExpense({ description: description, amount: UseAblePrice, date: dateItem })
                navigation.goBack();

            }
            else {
                Alert.alert('Warning', "Please Enter All Fields")
            }


        }


    };

    function deleteExpenseHandler() {
        expenseCtx.deleteExpense(currentItemId);
        navigation.goBack();
    };

    function CancelHandler() {
        navigation.goBack();
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.miniContainer1}>
                <View style={{ flex: 1 }}>

                    <Input inputProps={{
                        placeholder: "Rs.",
                        value: price,
                        keyboardType: "number-pad",
                        onChangeText: (value) => {
                            setPrice(value)
                        }


                    }}
                        Title={amountIsValid ? "Add Amount" : "** Add Amount"}
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <Input inputProps={{
                        placeholder: "YYYY-MM-DD",
                        inputMode: "none",
                        value: dateItem.toISOString().slice(0, 10),

                        onPressIn: () => { setOpen(true) }


                    }}
                        Title={"Date of Expense"}
                    />
                </View>
            </View>
            <View style={styles.container1}>
                <Input inputProps={{
                    placeholder: "Plz Add Description",
                    inputMode: "none",
                    height: 150,
                    multiline: true,
                    value: description,
                    textAlignVertical: "top",
                    onChangeText: (value) => {
                        setDescription(value)
                    }

                }}
                    Title={"Description"}
                />
            </View>
            <View style={styles.conatiner2}>
                <View style={styles.buttons}>
                    <Button title="cancel" onPress={CancelHandler} />
                </View>
                <View style={styles.buttons}>
                    <Button title={updatingIndex ? "Update" : "Add"} onPress={confirmHandler} />
                </View>
            </View>

            <View>
                <DatePicker
                    modal
                    open={open}
                    date={dateItem}
                    mode="date"
                    maximumDate={new Date()}
                    onConfirm={(date) => {
                        setOpen(false)
                        setDateItem(date)

                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                />
            </View>
            {updatingIndex && (<View style={{ justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                <Pressable onPress={deleteExpenseHandler}>
                    <FontAwesomeIcon icon={faTrashCan} size={30} />
                </Pressable>
            </View>)}


        </View >

    )
}

export default AddingExpense;

const styles = StyleSheet.create({
    mainContainer: {
        paddingTop: 50,
        backgroundColor: '#8c85ea',
        // backgroundColor: 'white',/

        height: '50%',
        marginTop: 'auto',
        flex: 1,
        alignItems: 'center'


    },
    container1: {
        backgroundColor: '#8c85ea',
        width: '100%'
    },
    conatiner2: {
        backgroundColor: '#8c85ea',
        flexDirection: 'row',
        paddingBottom: 25,
        borderBlockColor: 'black',
        borderBottomWidth: 1,
        maxWidth: '80%',


    },
    text: {
        color: 'white',
        textAlign: 'center',
        padding: 20,
        fontWeight: 'bold',
        fontSize: 18,
        margin: 5
    },
    buttons: {
        flex: 1,
        padding: 5,
        maxWidth: 150,

    },
    miniContainer1: {
        flexDirection: 'row',
        backgroundColor: '#8c85ea',

    }
})