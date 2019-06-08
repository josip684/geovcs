import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

const formButton = (props) => (
    <TouchableOpacity onPress={props.onPress}>
        <View style={[styles.button, props.style]}>
            <Text style={styles.buttonText}>{props.children}</Text>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#fbfcf2",
        borderWidth: 3,
        borderColor: "#000000",
        borderRadius: 5,
        margin: 10,
        padding: 10,
        alignItems: "center"
    },
    buttonText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#000000"
    }
})

export default formButton