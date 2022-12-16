import {Dimensions, StyleSheet, View,Image} from "react-native";

const {width, height} = Dimensions.get('screen')

const WIDTH = width
const HEIGHT = height
const AuthScreen = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.header,styles.shadowProp]}>
                <View style={styles.imageWrapper}><Image style={styles.logo} source={require('./../assets/icons/logo.png')}></Image>
                </View></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F2F2F2',
        width: WIDTH,
        height: HEIGHT,
        paddingVertical: 30
    },
    header:{
        width:WIDTH,
        height: HEIGHT * 0.4,
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        top: -30
    },
    shadowProp: {
        shadowOffset:{width:0,height:4},
        shadowRadius:30,
        shadowColor: '#000000',
        shadowOpacity: 0.06,
    },
    imageWrapper:{
        flex:1,
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    logo:{
        width:150,
        height:150,
    }
})
export default AuthScreen;