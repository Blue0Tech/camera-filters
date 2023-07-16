import { React, Component, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, PLatform, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import * as FaceDetector from 'expo-face-detector';
import Filter1 from '../components/Filter1';

const upperContainer = StyleSheet.create({
    marginTop: 50,
    marginBottom: 20,
    alignSelf: 'center'
});
const middleContainer = StyleSheet.create({
    height: 500
});
const lowerContainer = StyleSheet.create({
    marginTop: 20,
    marginBottom: 100,
    alignSelf: 'center'
});

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasCameraPermission: null,
            faces: []
        };
        this.onFacesDetected = this.onFacesDetected.bind(this);
    };
    async componentDidMount() {
        const { status } = await Camera.requestCameraPermissionsAsync();
        this.setState({
            hasCameraPermission: status === 'granted'
        });
    };
    onFacesDetected({ faces }) {
        this.setState({
            faces: faces
        });
    };
    render() {
        const { hasCameraPermission } = this.state;
        if(hasCameraPermission !== true) {
            return (
                <View style={middleContainer}>
                    <Text>Please enable camera permissions.</Text>
                </View>
            );
        };
        return (
            <SafeAreaView>
                <View style={upperContainer}>
                    <Text>Look at me!</Text>
                </View>
                <View style={middleContainer}>
                    <Camera
                        style={{flex: 1}}
                        type={Camera.Constants.Type.front}
                        faceDetectorSettings={{
                            mode: FaceDetector.FaceDetectorMode.fast,
                            detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
                            runClassifications: FaceDetector.FaceDetectorClassifications.all
                        }}
                        onFacesDetected={this.onFacesDetected}
                    />
                    {
                        this.state.faces.map(face=>{
                            return (
                                <Filter1
                                    // key={`face-id-${face.faceID}`} commented out as this does not exist
                                    face={face}
                                />
                            )
                        })
                    }
                </View>
                <View style={lowerContainer}>
                    <Text>A face-detection project.</Text>
                </View>
            </SafeAreaView>
        );
    };
};