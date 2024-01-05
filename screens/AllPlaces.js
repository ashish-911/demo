import { useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native'
import PlacesList from '../components/Places/PlacesList'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Colors } from '../constants/colors'


const AllPlaces = ({ places, navigation }) => {

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <Pressable style={({ pressed }) => pressed && { opacity: 0.5 }} onPress={() => navigation.navigate('AddPlace')}>
                        <FontAwesomeIcon icon={faPlus} size={25} />
                    </Pressable>
                )
            }
        })
    }, [])

    if (!places) {
        return (
            <View style={styles.fallbackContainer}>
                <Text style={styles.text}> No Places added. Please add new places....</Text>
            </View >
        )
    }
    return (
        <FlatList
            data={places}
            keyExtractor={(place) => place.id}
            renderItem={(itemData) => <PlacesList place={itemData} />}
        />
    )
}
const styles = StyleSheet.create({
    fallbackContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: Colors.primary50,
        fontSize: 18
    }
});

export default AllPlaces;