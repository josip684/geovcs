import React, { Component } from 'react'
import { View, Button, StyleSheet, Text, TouchableOpacity } from 'react-native'

class StartScreen extends Component {
    constructor(props) {
        super(props)
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent)
    }

    onNavigatorEvent = (event) => {
        if(event.type === "NavBarButtonPress") {
            if(event.id === "sideDrawer") {
                this.props.navigator.toggleDrawer({side: "right"})
            }
        }
    }

    createNewProjectHandler = () => {
        this.props.navigator.push({
            screen: "geovcs.CreateProjectScreen",
            title: "Create New Project"
        })
    }

    startCodingHandler = () => {
        this.props.navigator.push({
            screen: "geovcs.CodeScreen",
            title: "New Code"
        })
        
    }

    layerConfigHandler = () => {
        this.props.navigator.push({
            screen: "geovcs.LayerConfigScreen",
            title: "Layer Config"
        })
        
    }

    render() {
        return(
            <View >
                <View>
                    <TouchableOpacity>
                        <Text style = {styles.btnForm} onPress={this.createNewProjectHandler}>
                            New Project
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style = {styles.btnForm}>
                            Open Project
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style = {styles.btnForm}>
                            Edit Project
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style = {styles.btnForm}>
                            Share Project
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style = {styles.btnForm} onPress={this.layerConfigHandler}>
                            Layer Config
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style = {styles.btnForm} onPress={this.startCodingHandler}>
                            Start Coding
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    baseText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red'
      },
      btnForm: {
        borderWidth: 3,
        padding: 5,
        margin: 10,
        borderColor: 'black',
        backgroundColor: '#efefef',
        fontSize: 26,
        fontWeight: "bold",
        borderRadius: 10,
        textAlign: "center",
        height: 70,
        padding: 10,
        textAlignVertical: "center",
        color: 'black'
      }
})

export default StartScreen