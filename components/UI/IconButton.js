import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Pressable, View, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";


function IconButton({ icon, onPress, children }) {
    return (
        <Pressable style={({ pressed }) => [styles.container, pressed && styles.pressed]} onPress={onPress}>
            <FontAwesomeIcon icon={icon} />
            <Text> {children} </Text>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: Colors.primary500,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 6,
        borderRadius: 6

    },
    pressed: {
        opacity: 0.6
    }
});


export default IconButton;