/*import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

import MenuButton from '../../components/UI/MenuButton/MenuButton'

class SideDrawerScreen extends Component {

    startCodingHandler = () => {
        this.props.navigator.push({
            screen: "geovcs.CodeScreen",
            title: "Coding..."
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.heading}>
                    <Text style={styles.headingText}>MENU</Text>
                </View>
                <View>
                    <MenuButton>New Project</MenuButton>
                    <MenuButton>Open Project</MenuButton>
                    <MenuButton>Edit Project</MenuButton>
                    <MenuButton>Share</MenuButton>
                    <MenuButton>Layer Config</MenuButton>
                    <MenuButton onPress={this.startCodingHandler}>Start Coding</MenuButton>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width * 0.7,
        flex: 1,
        backgroundColor: "#ffe4c4"
    },
    heading: {
        alignItems: "center"
    },  
    headingText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#a52a2a",
        marginBottom: 30
    },
    buttonsContainer: {
        width: "95%"
    }
})

export default SideDrawerScreen*/