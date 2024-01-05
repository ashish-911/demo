import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Pressable, View, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";


function OutlinedButton({ icon, onPress, children }) {
    return (
        <Pressable style={({ pressed }) => [styles.container, pressed && styles.pressed]} onPress={onPress}>
            <FontAwesomeIcon icon={icon} color={Colors.primary500} />
            <Text style={{ color: Colors.primary500 }}> {children} </Text>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.gray700,
        flexDirection: 'row',
        justifyContent: 'center',
        justifyContent: 'center',
        padding: 9,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: Colors.primary500


    },
    pressed: {
        opacity: 0.6
    }
});


export default OutlinedButton;