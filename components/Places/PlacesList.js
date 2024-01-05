import { Text, View, Image } from 'react-native'

const PlacesList = ({ place }) => {
    return (
        <View>
            <View>
                <Image source={place.ImgUri} />
            </View>
            <View>
                <Text>{place.title}</Text>
                <Text>{place.location}</Text>\</View>

        </View>
    )
}


export default PlacesList;