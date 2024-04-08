import { StyleSheet, View, Pressable, Text } from 'react-native';
import IconSVG from "../assets/LogoSVG"

export default function Button({ label, theme, onPress }) {
    if (theme === "primary") {
        return (
            <View style={styles.buttonContainer2}>
                <Pressable
                    style={styles.button}
                    onPress={() => alert('You pressed a button1.')}
                >
                    <Text style={styles.buttonLabel_1}>{label}</Text>
                </Pressable>
            </View>
        );
    }
    if (theme === "Registrarme") {
        return (
            <View style={styles.buttonContainer3}>
                <Pressable style={styles.button}
                    onPress={onPress}>
                    <Text style={styles.buttonLabel_1}>{label}</Text>
                </Pressable>
            </View>
        );
    }

    if (theme === "BackCheckron") {
        return (
            <Pressable style={styles.BackButton}
                onPress={onPress}>
                <IconSVG theme='BackCheckron' />
                <Text style={styles.BackButtonTex}>{label}</Text>
            </Pressable>

        );
    }

    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => alert('You pressed a button2.')}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 326,
        height: 43,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        backgroundColor: "#6979F8",
    },
    buttonContainer2: {
        width: 200,
        height: 43,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        backgroundColor: "#F4F5FE",
    },
    buttonContainer3: {
        width: 94,
        height: '100%',
        alignItems: 'flex-end',
        //borderWidth : 1,
    },
    button: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonLabel: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    buttonLabel_1: {
        fontSize: 16,
        textDecorationLine: 'underline',
        color: '#515EC0',
    },
    BackButton: {
        width: 75,
        height: 25,
        //borderWidth: 1,
        gap: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    BackButtonTex: {
        fontSize: 12,
        fontWeight: '500',
        color: '#0F172A',
        lineHeight: 15,
    },
});