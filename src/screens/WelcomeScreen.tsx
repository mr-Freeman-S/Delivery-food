import {Animated, BackHandler, Dimensions, StyleSheet} from "react-native";
import View = Animated.View;
import Image = Animated.Image;
import Text = Animated.Text;
import {Button} from "../components/Button";

const {width, height} = Dimensions.get('screen')

const WIDTH = width
const HEIGHT = height

export const WelcomeScreen = () => {

    return (
        <View style={styles.container}>
            <View style={styles.logoWrapper}>
                <Image style={styles.logo} source={require('./../assets/icons/logo.png')}/>
            </View>
            <Text style={styles.tagline}>
                Food for Everyone
            </Text>
            <Button textButton={'Get started'} colorText={'#FF4B3A'} backgroundColor={'#ffffff'} onPress={()=>{}}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
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
    tagline : {
        marginLeft: WIDTH * 0.12,
        marginTop:HEIGHT * 0.0178,
        fontWeight:'800',
        color:'#ffffff',
        fontSize:65,
        letterSpacing: -0.03
    }
})

