import {Animated, Dimensions, StyleSheet, TouchableOpacity} from "react-native";
import Text = Animated.Text;

const {width,height} = Dimensions.get('screen')

const WIDTH = width
const HEIGHT = height
interface ButtonProps {
    textButton: string
    colorText?: string
    backgroundColor?:string
    onPress: () => void
}

export const MainButton = ({textButton,colorText,backgroundColor,onPress}:ButtonProps) => {
    return (
        <TouchableOpacity style={{...style.container, backgroundColor:`${backgroundColor}`}}  onPress={onPress}>
            <Text style={{...style.text, color:`${colorText}`}}>
                {textButton}
            </Text>
        </TouchableOpacity>
    );
};

const style = StyleSheet.create({
    container : {
        marginHorizontal:WIDTH * 0.12,
        marginTop:WIDTH * 0.88,
        marginBottom:HEIGHT* 0.04,
        backgroundColor:'#ffffff',
        borderRadius: 30,
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:25
    },
    text: {
        fontWeight: '600',
        fontSize: 17,
        lineHeight:20.29,
        color: '#ffffff'
    }
})