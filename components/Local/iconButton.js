import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Pressable, StyleSheet, View } from 'react-native';

function IconButton({ icon, color, onPress }) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => pressed && styles.pressed}
        >
            <View style={styles.view}>
                <FontAwesomeIcon icon={icon} color={color} size={25} />
            </View>
        </Pressable>
    );
}

export default IconButton;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7,

    },
    view: {
        marginRight: 8
    }
});
