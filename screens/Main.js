import { React, Component, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, PLatform, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import * as FaceDetector from 'expo-face-detector';
import Filter from '../components/Filter';

let data = {
    'crown': [
        {id: "filter1", src: require('../assets/filters/crown-pic1.png')},
        {id: "filter2", src: require('../assets/filters/crown-pic2.png')},
        {id: "filter3", src: require('../assets/filters/crown-pic3.png')},
    ],
    'flower': [
        {id: "filter4", src: require('../assets/filters/flower-pic1.png')},
        {id: "filter5", src: require('../assets/filters/flower-pic2.png')},
        {id: "filter6", src: require('../assets/filters/flower-pic3.png')},
    ],
    'hair': [
        {id: "filter7", src: require('../assets/filters/hair-pic1.png')},
        {id: "filter8", src: require('../assets/filters/hair-pic2.png')},
        {id: "filter9", src: require('../assets/filters/hair-pic3.png')},
    ],
    'other': [
        {id: "filter10", src: require('../assets/filters/other-pic1.png')},
        {id: "filter11", src: require('../assets/filters/other-pic2.png')},
        {id: "filter12", src: require('../assets/filters/other-pic3.png')}
    ]
};

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
            faces: [],
            currentFilter: 'filter1',
            selected: 'crown'
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
                                <Filter
                                    // key={`face-id-${face.faceID}`} commented out as faceID does not exist
                                    face={face}
                                    filter={this.state.currentFilter}
                                />
                            )
                        })
                    }
                </View>
                <View style={{
                    padding: 10,
                    backgroundColor: 'lightblue'
                }}>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        margin: 5
                    }}>
                        <TouchableOpacity style={
                            this.state.selected == 'crown'?{
                                flex: 0.2,
                                borderRadius: 10,
                                borderWidth: 1,
                                width: '100%',
                                backgroundColor: 'lightgreen',
                                padding: 1,
                                margin: 1,
                                alignItems: 'center'
                            }:{
                                flex: 0.2,
                                borderRadius: 10,
                                borderWidth: 1,
                                width: '100%',
                                backgroundColor: 'white',
                                padding: 1,
                                margin: 1,
                                alignItems: 'center'
                            }
                        } onPress={()=>{
                            this.setState({
                                selected: 'crown'
                            });
                        }}><Text>Crown</Text></TouchableOpacity>
                        <TouchableOpacity style={
                            this.state.selected == 'flower'?{
                                flex: 0.2,
                                borderRadius: 10,
                                borderWidth: 1,
                                width: '100%',
                                backgroundColor: 'lightgreen',
                                padding: 1,
                                margin: 1,
                                alignItems: 'center'
                            }:{
                                flex: 0.2,
                                borderRadius: 10,
                                borderWidth: 1,
                                width: '100%',
                                backgroundColor: 'white',
                                padding: 1,
                                margin: 1,
                                alignItems: 'center'
                            }
                        } onPress={()=>{
                            this.setState({
                                selected: 'flower'
                            });
                        }}><Text>Flower</Text></TouchableOpacity>
                        <TouchableOpacity style={
                            this.state.selected == 'hair'?{
                                flex: 0.2,
                                borderRadius: 10,
                                borderWidth: 1,
                                width: '100%',
                                backgroundColor: 'lightgreen',
                                padding: 1,
                                margin: 1,
                                alignItems: 'center'
                            }:{
                                flex: 0.2,
                                borderRadius: 10,
                                borderWidth: 1,
                                width: '100%',
                                backgroundColor: 'white',
                                padding: 1,
                                margin: 1,
                                alignItems: 'center'
                            }
                        } onPress={()=>{
                            this.setState({
                                selected: 'hair'
                            });
                        }}><Text>Hair</Text></TouchableOpacity>
                        <TouchableOpacity style={
                            this.state.selected == 'other'?{
                                flex: 0.2,
                                borderRadius: 10,
                                borderWidth: 1,
                                width: '100%',
                                backgroundColor: 'lightgreen',
                                padding: 1,
                                margin: 1,
                                alignItems: 'center'
                            }:{
                                flex: 0.2,
                                borderRadius: 10,
                                borderWidth: 1,
                                width: '100%',
                                backgroundColor: 'white',
                                padding: 1,
                                margin: 1,
                                alignItems: 'center'
                            }
                        } onPress={()=>{
                            this.setState({
                                selected: 'other'
                            });
                        }}><Text>Other</Text></TouchableOpacity>
                    </View>
                    <ScrollView style={{flexDirection: 'row'}} horizontal showsHorizontalScrollIndicator={false}>
                        {
                            data[this.state.selected].map(filterData=>{
                                return(
                                    <TouchableOpacity style={{
                                        height: 80,
                                        width: 100,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: 20,
                                        margin: 10
                                    }} onPress={()=>{
                                        this.setState({currentFilter: filterData.id});
                                    }}>
                                        <Image style={{width: 80, height: 60, resizeMode: 'contain'}} source={filterData.src}></Image>
                                    </TouchableOpacity>
                                );
                            })
                        }
                    </ScrollView>
                </View>
                <View style={lowerContainer}>
                    <Text>A face-detection project.</Text>
                </View>
            </SafeAreaView>
        );
    };
};