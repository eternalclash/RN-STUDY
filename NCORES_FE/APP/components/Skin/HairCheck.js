import React, {useState,useEffect} from 'react'
import { Text, View, StyleSheet } from 'react-native'
import CustomButton from '../CustomButton'
import BorderedInput from '../BorderedInput'
import { useDispatch,useSelector } from 'react-redux'
import { actionCreators as signActions } from '../../redux/modules/sign'
const HairCheck = ({ navigation, route }) => {
    const check = useSelector((state) => state.sign.check); 
    const [num1, setNum1] = useState(false)
    const [num2, setNum2] = useState(false)
    const [num3, setNum3] = useState(false)
    const [num4, setNum4] = useState(false)
    const [num5, setNum5] = useState(false)
    const dispatch = useDispatch();
    useEffect(() => {
        if (check)
        {   
            dispatch(signActions.check(false))
            navigation.navigate("MainPage")
            }
    }, [check])
    const worryHandler = () => {
        const arr = [];
        if (num1)
            arr.push(num1)
        if (num2)
            arr.push(num2)
        if (num3)
            arr.push(num3)
        if (num4)
            arr.push(num4)
        if (num5)
            arr.push(num5)
        // dispatch(signActions.setWorryAPI())
        navigation.navigate("CameraConcern")
        // if (check)
        //     navigation.navigate("GetAge")
    }

   
    return (
        <>
            <View style={styles.fullscreen}>
                <Text style={styles.text}>두피 고민</Text>
                <Text style={styles.textMedium}>다중 선택 가능</Text>
                <View style={styles.form}>
                { num1==true
                         ?<CustomButton color="red"
                         title="따가움" theme="secondary" hasMarginBottom
                         onPress={() => {
                                         setNum1(!num1)
                            }} />:
                            <CustomButton
                            title="따가움" theme="secondary" hasMarginBottom
                            onPress={() => {
                                setNum1(!num1)
                        }} />
                    }
                 { num2==true
                         ?<CustomButton color="red"
                         title="건조함" theme="secondary" hasMarginBottom
                         onPress={() => {
                                         setNum2(!num2)
                            }} />:
                            <CustomButton
                            title="건조함" theme="secondary" hasMarginBottom
                            onPress={() => {
                                setNum2(!num2)
                        }} />
                    }
                 { num3==true
                         ?<CustomButton color="red"
                         title="트러블" theme="secondary" hasMarginBottom
                         onPress={() => {
                                         setNum3(!num3)
                            }} />:
                            <CustomButton
                            title="트러블" theme="secondary" hasMarginBottom
                            onPress={() => {
                                setNum3(!num3)
                        }} />
                    }
                 { num4==true
                         ?<CustomButton color="red"
                         title="유분기" theme="secondary" hasMarginBottom
                         onPress={() => {
                                         setNum4(!num4)
                            }} />:
                            <CustomButton
                            title="유분기" theme="secondary" hasMarginBottom
                            onPress={() => {
                                setNum4(!num4)
                        }} />
                    }
                 { num5==true
                         ?<CustomButton color="red"
                         title="없음" theme="secondary" hasMarginBottom
                         onPress={() => {
                                         setNum5(!num5)
                            }} />:
                            <CustomButton
                            title="없음" theme="secondary" hasMarginBottom
                            onPress={() => {
                                setNum5(!num5)
                        }} />
                    }
               
                   
                    <View style={styles.buttons}/>
                    <CustomButton title="다음" onPress={
                        ()=>navigation.navigate("MainSkin")
                    } style={styles.buttons}/>
                    </View>
            </View>   
        </>
    )
}
const styles = StyleSheet.create({
    fullscreen: {
        flex: 1,
        alignItems: 'center',
        marginTop: 104,
    },
    text: {
        fontSize: 32,
        fontWeight: 'bold'
    },
    textMedium: {
        marginTop:20,
        fontSize:20,
    },
    form: {
        marginTop: 44,
        width: '100%',
        paddingHorizontal: 16,
    },
    buttons: {
        marginTop: 82,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})
export default HairCheck