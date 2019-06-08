import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, Picker, TouchableOpacity, ToastAndroid } from 'react-native'

class LayerConfigScreen extends Component {
    constructor(){
        super();
        this.state = {
            language: '',
            layerNumber: '',
            layerName: '',
            layerType: '',
            points: []

        }
    }
    layerNumberHandler = (value) => {
        this.setState({layerNumber: value})
    }

    layerNameHandler = (value) => {
            this.setState({layerName: value})
    }

    layerTypeHandler = (value) => {
        this.setState({layerType: value})
    }

    submitCodeHandler = () => {
        if(parseInt(this.state.layerNumber) > 20){
            ToastAndroid.show('Dobro je',ToastAndroid.SHORT);
            return;
        }else{
            ToastAndroid.show('Nije dobro',ToastAndroid.SHORT);
            return;
        }

    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputBox}>
                    <Text style={styles.label}>Layer number:</Text>
                    <TextInput 
                    style={styles.input} 
                    placeholder="Layer Number"
                    onChangeText={(value) => this.setState({layerNumber: value})}
                    value={this.state.layerNumber} 
                    />

                    <Text style={styles.label}>Layer name:</Text>
                    <TextInput 
                    style={styles.input} 
                    placeholder="Layer Name"
                    onChangeText={(value) => this.setState({layerName: value})}
                    value={this.state.layerName} 
                    />
                    
                    <Text style={styles.label}>Layer type:</Text>
                    <Picker style={{height: 50, width: 300}}
                    selectedValue={this.state.language}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({language: itemValue})
                      }
                    >   
                        <Picker.Item label="Point type" value="point" />
                        <Picker.Item label="Line type" value="line" />
                    </Picker>
                    <Text style={styles.label}>{this.state.layerNumber+" "+ this.state.layerName}</Text>
                    <TouchableOpacity>
                        <Text style = {styles.btnForm} onPress={this.submitCodeHandler}>
                            Submit
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text  style={styles.label}></Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        
    },
    inputBox: {
        borderWidth: 3,
        margin: "auto",
        width: "95%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        color: "black",
        alignItems: "baseline"
    },
    input: {
        fontSize: 24,
        fontWeight: "bold",
        width: "95%",
        borderWidth: 1,
        borderColor: "black",
        margin: 15
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

export default LayerConfigScreen

/*
Layer config
Layer –i (slojevi) su ključni za rad s aplikacijom. Postoje dva tipa:
• Point tip
• Line tip
Forma za unos postavki treba imati tri stavke
1. Broj layer-a ide od 1 do n
2. Tip layera – point ili line
3. Ime layera-a – tekst string do 64 znaka s dozvoljenim unosom velikih i 
malih slova, brojeva. Nisu dozvoljeni naši znakovi ć,č,đ,š,ž. 
Od specijalnih znakova dozvoljeni su jedino znakovi – (minus) i _ (donja crta).

*/