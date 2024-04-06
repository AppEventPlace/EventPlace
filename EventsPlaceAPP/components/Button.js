import { StyleSheet, View, Pressable, Text } from 'react-native';

export default function Button({ label, theme }) {
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
    button: {
        borderRadius: 10,
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
    }
});


