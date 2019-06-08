import React, { Component } from 'react'
import { View, Button, StyleSheet, Text, TouchableOpacity, BackHandler, Alert, ImageBackground, ScrollView } from 'react-native'

class StartScreen extends Component {
    constructor(props) {
        super(props)
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent)
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.backPressed);
     }
     
     componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
     }

    onNavigatorEvent = (event) => {
        if(event.type === "NavBarButtonPress") {
            if(event.id === "sideDrawer") {
                this.props.navigator.toggleDrawer({side: "right"})
            }
        }
    }

    startCodingHandler = () => {
        this.props.navigator.push({
            screen: "geovcs.CodeScreen",
            title: "New Code"
        })
    }

    exitAppHandler = () =>{
        
        Alert.alert(
            'Exit App',
            'Do you want to exit?',
            [
              {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'Yes', onPress: () => BackHandler.exitApp()},
            ],
            { cancelable: false });
            return true;
    }

    render() {
        return(
                <View style = {styles.mainBackground}>
                    <ScrollView >
                        <TouchableOpacity>
                            <Text style = {styles.btnForm}>
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
                            <Text style = {styles.btnForm}>
                                Layer Config
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style = {styles.btnForm} onPress={this.startCodingHandler}>
                                Start Coding
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style = {styles.btnForm} onPress={this.exitAppHandler}>
                                Exit
                            </Text>
                        </TouchableOpacity>
                        </ScrollView>
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
      },
      mainBackground: {
          backgroundColor: "#0073AC",
          
      }
    
})


export default StartScreen