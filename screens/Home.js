import { React, Component } from 'react';
import { View, StyleSheet, Text, SafeAreaView, Platform, Image, StatusBar, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class Home extends Component {
    render() {
        return (
            <View style={Styles.mainContainer}>
                    <View style={Styles.upperContainer}>
                        <Text style={Styles.title}>Look at me!</Text>
                    </View>
                    <View style={Styles.middleContainer}>
                        <View style={Styles.captionContainer}>
                            <Text style={Styles.caption}>New filters on your phone!</Text>
                        </View>
                        <View style={Styles.innerContainer}>
                            <View style={Styles.descriptionContainer}>
                                <Text style={Styles.description}>This is an app to place filters upon your face! Press the button below to have fun!</Text>
                            </View>
                            <View style={Styles.imagesContainer}>
                                <View style={Styles.imageContainer}>
                                    <Image source={require('../assets/filters/crown-pic1.png')} style={Styles.image}/>
                                </View>
                                <View style={Styles.imageContainer}>
                                    <Image source={require('../assets/filters/flower-pic1.png')} style={Styles.image}/>
                                </View>
                            </View>
                            <View style={Styles.imagesContainer}>
                                <View style={Styles.imageContainer}>
                                    <Image source={require('../assets/filters/hair-pic1.png')} style={Styles.image}/>
                                </View>
                                <View style={Styles.imageContainer}>
                                    <Image source={require('../assets/filters/other-pic1.png')} style={Styles.image}/>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={Styles.lowerContainer}>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Main');}} style={Styles.button}>
                            <Text>Try now!</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        );
    }
};

const Styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : Platform.OS === 'ios' ? 0 : 20,
        backgroundColor: 'lightblue'
    },
    upperContainer: {
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    middleContainer: {
        flex: 0.6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    lowerContainer: {
        flex: 0.2
    },
    title: {
        fontSize: RFValue(30),
        fontWeight: 'bold',
        fontStyle: 'italic',
        textShadowColor: 'rgba(200, 200, 200, 0.75)',
        textShadowOffset: {width: -3, height: 3},
        textShadowRadius: 1
    },
    captionContainer: {
        flex: 0.2
    },
    caption: {
        fontSize: RFValue(25),
        color: 'orangered',
        fontWeight: 'bold',
        fontStyle: 'italic',
        textShadowColor: 'rgba(184, 184, 184, 0.75)',
        textShadowOffset: {width: -3, height: 3},
        textShadowRadius: 1
    },
    innerContainer: {
        flex: 0.8,
        margin: RFValue(5),
        borderRadius: RFValue(30),
        backgroundColor: 'white',
        padding: RFValue(20)
    },
    descriptionContainer: {
        flex: 0.4
    },
    description: {
        fontSize: RFValue(17),
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    imagesContainer: {
        flex: 0.3,
        flexDirection: 'row',
        margin: 10
    },
    imageContainer: {
        flex: 0.5
    },
    image: {
        height: 64,
        width: 160
    },
    button: {
        backgroundColor: 'orangred',
        width: 90,
        height: 40,
        borderRadius: 15,
        borderColor: 'black',
        borderWidth: 2,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        margin: 10
    }
});