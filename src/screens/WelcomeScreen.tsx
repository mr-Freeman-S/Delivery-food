import {Animated, Dimensions, StyleSheet} from "react-native";
import View = Animated.View;
import Image = Animated.Image;
import Text = Animated.Text;
import {MainButton} from "../components/MainButton";
import {LinearGradient} from "expo-linear-gradient";

const {width, height} = Dimensions.get('screen')

const WIDTH = width
const HEIGHT = height

export const WelcomeScreen = () => {

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.logoWrapper}>
                    <Image style={styles.logo} source={require('./../assets/icons/logo.png')}/>
                </View>
                <Text style={styles.tagline}>
                    Food for Everyone
                </Text>
                <View style={styles.imagesWrapper}>
                    <Image style={styles.woman} source={require('./../assets/images/woman.png')}/>
                    <Image style={styles.man} source={require('./../assets/images/man.png')}/>
                    <LinearGradient start={{x:0,y:0.1}} end={{x:0,y:0.4}} colors={['rgba(255, 71, 11, 0.1)','#FF470B']} style={styles.gradientFigureLeft}/>
                </View>
            </View>

            <MainButton textButton={'Get started'} colorText={'#FF4B3A'} backgroundColor={'#ffffff'} onPress={() => {
            }}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        backgroundColor: '#FF4B3A',
        width: WIDTH,
        height: HEIGHT
    },
    logoWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: WIDTH * 0.17,
        height: WIDTH * 0.17,
        backgroundColor: '#FFFFFF',
        borderRadius: (WIDTH * 0.17) / 2,
        marginTop: HEIGHT * 0.0625,
        marginLeft: WIDTH * 0.12
    },
    logo: {
        display: 'flex',
        width: WIDTH * 0.13,
        height: WIDTH * 0.13,
    },
    tagline: {
        marginLeft: WIDTH * 0.12,
        marginTop: HEIGHT * 0.0178,
        fontWeight: '800',
        color: '#ffffff',
        fontSize: 65,
        letterSpacing: -0.03
    },
    imagesWrapper: {
        position:'relative'
    },
    woman: {
        position: "absolute",
        width: WIDTH * 0.86,
        height: HEIGHT * 0.48,
        transform: [{rotate: '-3.1deg'}],
        top: 40,
        left: -50
    },
    man: {
        position: "absolute",
        width: WIDTH * 0.54,
        height: HEIGHT * 0.33,
        zIndex: -1,
        transform: [{rotate: '8.57deg'}],
        top: 160,
        right: -35
    },
    gradientFigureLeft: {
        position: "absolute",
        width: WIDTH,
        height: 200,
        top: 300,
        opacity:0.85
    },
    gradientFigureRight: {
        position: "absolute",
        width: 300,
        height: 200,
        top: 300,
        right:0,
    }

})

