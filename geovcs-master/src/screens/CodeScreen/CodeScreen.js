import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, ScrollView, FlatList } from 'react-native'
import * as RNFS from 'react-native-fs'

import FormButton from '../../components/UI/FormButton/FormButton'

class CodeScreen extends Component {

    state = {
        pointNumber: '',
        layer: '',
        layerView: '',
        code: '',
        points: [],
        file: ''
    }

    pointNumberHandler = (value) => {
        this.setState({ pointNumber: value })
    }

    layerHandler = (value) => {
        this.setState({ layer: value })
    }

    layerViewHandler = (value) => {
        this.setState({ layerView: value })
    }

    codeHandler = (value) => {
        this.setState({ code: value })
    }

    saveCodeHandler = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                points: prevState.points.concat({
                    pointNumber: prevState.pointNumber,
                    layer: prevState.layer,
                    layerView: prevState.layerView,
                    code: prevState.code
                })
            }
        })
    }

    endCodingHandler = () => {
        RNFS.readDir(RNFS.DocumentDirectoryPath).then(result => alert(result[0].path.toString())).catch(error => {alert(error)})
        //RNFS.writeFile('data/project1.txt', 'Project1', 'utf8').then(success =>{}).catch(error => {alert(error)})
    }

    render() {
        return (
            <View style = {styles.mainBackground}>
            <ScrollView >
                <FormButton>Activate Voice Mode</FormButton>
                <FormButton>New Code</FormButton>
                <View style={styles.inputs} >
                    <View style={styles.labelAndInput}>
                        <Text style={styles.labelFont}>Point Number:</Text>
                        <TextInput  keyboardType = "numeric" style={styles.textInputs} placeholder="..." onChangeText={this.pointNumberHandler} value={this.state.pointNumber} />
                    </View>
                    <View style={styles.labelAndInput}>
                        <Text style={styles.labelFont}>Layer:</Text>
                        <TextInput style={styles.textInputs} placeholder="..." onChangeText={this.layerHandler} value={this.state.layer} />
                    </View>
                    <View style={styles.labelAndInput}>
                        <Text style={styles.labelFont}>Layer View:</Text>
                        <TextInput style={styles.textInputs} placeholder="..." onChangeText={this.layerViewHandler} value={this.state.layerView} />
                    </View>
                    <View style={styles.labelAndInput}>
                        <Text style={styles.labelFont}>Code:</Text>
                        <TextInput  style={styles.textInputs} placeholder="..." onChangeText={this.codeHandler} value={this.state.code} />
                    </View>
                </View>
                <FormButton onPress={this.saveCodeHandler}>Save Code</FormButton>
                <View style={styles.codeContainer}>
                    <View style={styles.code}>
                        <FlatList style = {styles.bgFlatList} data={this.state.points} renderItem={(point) => (
                            <Text key={Math.random()}>{point.item.pointNumber + ' ' + point.item.layer + ' ' + point.item.layerView + ' ' + point.item.code }</Text>
                        )} />
                    </View>
                </View>
                <Text>{this.state.file}</Text>
                <FormButton onPress={this.endCodingHandler}>End Coding</FormButton>
            </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputs: {
        width: "95%",
        margin: "3%",
    },
    codeContainer: {
        alignItems: "center"
    },  
    code: {
        width: "95%",
        borderWidth: 3,
        borderColor: "black",
        height: 100
    },
    textInputs: {
        fontSize: 24,
        fontWeight: "bold",
        width: "55%",
        backgroundColor: "#FFFFFF"
    },
    labelAndInput: {
        flex: 1,
        flexDirection: "row",
        borderWidth: 1,
        margin: 2,
        backgroundColor: "#FFFFFF"
    },
    labelFont:{
        margin: 5,
        fontSize: 24,
        fontWeight: "bold",
        color: "black"
    },
    mainBackground: {
        backgroundColor: "#0073AC",
        
    },
    bgFlatList: {
        backgroundColor: "#FFFFFF",
    },
    scroolViewStyle: {
        alignItems: "center"
    }
})

export default CodeScreen