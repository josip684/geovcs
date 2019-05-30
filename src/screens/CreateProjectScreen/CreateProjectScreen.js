import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

class CreateProjectScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputBox}>
                    <Text style={styles.label}>Enter Project Name:</Text>
                    <TextInput style={styles.input} placeholder="Project Name" />
                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    inputBox: {
        borderWidth: 3,
        margin: "auto",
        width: "95%",
        alignItems: "center",
        justifyContent: "center"
    },
    label: {
        margin: 15,
        fontSize: 24,
        fontWeight: "bold",
        color: "black"
    },
    input: {
        fontSize: 24,
        fontWeight: "bold",
        width: "95%",
        borderWidth: 1,
        borderColor: "black",
        margin: 15
    }
})

export default CreateProjectScreen