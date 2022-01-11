import React, {useState,useRef} from 'react'
import { Text, View, StyleSheet } from 'react-native'
import CustomButton from '../CustomButton'
import BorderedInput from '../BorderedInput'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators as signActions } from '../../redux/modules/sign'
const GetPassword = ({ navigation, route }) => {
    const [password,setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const confirmPasswordRef = useRef();
    const dispatch = useDispatch()
    const check=useSelector((state)=>state.sign.check)
    const passwordHandler = () => {
        dispatch(signActions.checkPasswordAPI(password,confirmPassword))
       
        if (check)
            navigation.navigate("GetNickName")
    }
    return (
        <>
            <View style={styles.fullscreen}>
                <Text style={styles.text}>회원가입</Text>
                <View style= {styles.form}>
                <BorderedInput placeholder="비밀번호"
                    value={password}
                    onChangeText={(value) => setPassword(value)}
                    returnKeyType="next"
                        secureTextEntry
                        onSubmitEditing={()=>confirmPasswordRef.current.focus()}
                    />
                <View style={styles.buttons2}/>
                 <BorderedInput placeholder="비밀번호확인"
                    value={confirmPassword}
                    onChangeText={(value) => setConfirmPassword(value)}
                    returnKeyType="done"
                        secureTextEntry
                        ref={confirmPasswordRef}
                    />
                    <View style={styles.buttons}/>
                    <CustomButton title="다음" onPress={
                        passwordHandler
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
    form: {
        marginTop: 44,
        width: '100%',
        paddingHorizontal: 16,
    },
    buttons: {
        marginTop: 24,
    },
    buttons2: {
        marginTop:12
    }
})
export default GetPassword