import DummyData from "../data/DummyData";
import { View, Text, StyleSheet, Pressable } from 'react-native'


const TotalTile = ({ data, list, TimePeriod }) => {

    const TotalSum = list.reduce((sum, currentValue) => {

        return (
            sum + currentValue.amount

        )
    }, 0
    )


    return (
        <View style={styles.container}>
            <Pressable style={{ flex: 4 }}>
                <Text style={styles.text} >{TimePeriod}</Text>
            </Pressable>
            <Pressable style={{ flex: 2 }}>
                <Text style={styles.text} >{TotalSum.toFixed(2)} Rs.</Text>
            </Pressable>
        </View >
    )
}


export default TotalTile;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d5e5f9',
        marginVertical: 15,
        width: 370,
        flexDirection: 'row',
        padding: 14,
        borderRadius: 10,
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 17,
        color: '#1a086a',
        fontWeight: 'bold'

    }
});