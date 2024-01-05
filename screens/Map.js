import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from 'react-native-maps'


const Map = () => {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    longitude: 37.4226711,
                    latitude: -122.0849872
                }}
                mapType="hybrid"
                showsUserLocation
                zoomEnabled

            >
                <Marker
                    coordinate={{ longitude: 37.4226711, latitude: -122.0849872 }}
                    title="Marked"
                    description="Placed has been marked"
                />
            </MapView>
        </View>

    )
}

export default Map;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    map: {
        flex: 1
    }
});