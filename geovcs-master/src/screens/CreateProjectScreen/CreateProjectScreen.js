import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import * as RNFS from 'react-native-fs'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/index'

class CreateProjectScreen extends Component {
    state = {
        projectName: ''
    }

    projectNameHandler = ( value ) => {
        this.setState({
            projectName: value
        })
    }

    createProjectHandler = async () => {
        await RNFS.writeFile(RNFS.ExternalDirectoryPath + '/' + this.state.projectName + '.txt', '', 'utf8')
            .then(result => {})
            .catch(error => alert(error))
        await this.props.createNewProject(this.state.projectName);
        await alert("New Project Successfully created!")
        this.props.navigator.pop();
    }

    cancelCreatingProject = () => {
        this.props.navigator.pop();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputBox}>
                    <Text style={styles.label}>Enter Project Name:</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Project Name" 
                        value={this.state.projectName}
                        onChangeText={this.projectNameHandler} />
                    <View style={styles.buttonsContainer}>
                        <Button 
                            onPress={this.createProjectHandler}
                            title="Create"/>
                        <Button 
                            onPress={this.cancelCreatingProject}
                            title="Cancel"/>
                    </View>
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
    },
    buttonsContainer: {
        flexDirection: "row",
        width: "70%",
        justifyContent: "space-between",
        margin: 10
    }
})

const mapStateToProps = (state) => {
    return {
        currentProject: state.project.currentProject
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createNewProject: (projectName) => dispatch(createProject(projectName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProjectScreen)