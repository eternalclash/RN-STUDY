import React, {useEffect} from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import SignInScreen from './SignInScreen';
import GetEmail from './SignUp/GetEmail';
import GetPassword from './SignUp/GetPassword';
import GetNickName from './SignUp/GetNickName';
import GetFinish from './SignUp/GetFinish';
import GetGender from './SignUp/GetGender';
import MainPage from './MainPage';
import GetAge from './SignUp/GetAge';
import GetIndicate from './SignUp/GetIndicate';
import GetWorry from './SignUp/GetWorry';
import UploadScreen from './UploadScreen';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as signActions } from '../redux/modules/sign';
import { TouchableOpacity,Text,View, Image } from 'react-native';
const RootStack = () => {
    const dispatch = useDispatch();
    const isLogin= useSelector(state=>state.sign.checkLogin)
    useEffect(()=>{
       dispatch(signActions.checkLoginMD())
    }, [])
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator >
            {
                isLogin ?  
              <>
              <Stack.Screen
              name="MainPage"
              component={MainPage}
              options={{
                  headerLeft: ({ onPress }) => (
                      <TouchableOpacity>
                         <Text style={{fontSize:20}}>Logo</Text>
                    </TouchableOpacity>  
                  ),
                  headerTitle: ({ onPress }) => (
                      <View>
                          <Text>메인페이지</Text>
                      </View>
                  ),
                  headerRight: ({ onPress }) => (
                      <TouchableOpacity>
                         <Text  style={{fontSize:30}}>+</Text>
                      </TouchableOpacity>
                  )
              }}
              />          
              <Stack.Screen
              name="SignIn"
              component={SignInScreen}
              options={{
                  title:''
              }}
        
                        
                        />
                        </>
                    :
                    <>
                     <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{
              title:''
          }}
                        />
                           <Stack.Screen
              name="MainPage"
              component={MainPage}
              options={{
                  title:''
              }}
              />       
                    </>

            }
          {/* {
              !isLogin?  <Stack.Screen
              name="MainPage"
              component={MainPage}
              options={{
                  title:''
              }}
                />
                    : <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{
              title:''
          }}
      />
            } */}
            
            
            <Stack.Screen
                name="GetEmail"
                component={GetEmail}
                options={{
                    title:''
                }}
            />
            <Stack.Screen
                name="GetPassword"
                component={GetPassword}
                options={{
                    title:''
                }}
            />
            <Stack.Screen
                name="GetNickName"
                component={GetNickName}
                options={{
                    title:''
                }}
            />
             <Stack.Screen
                name="GetFinish"
                component={GetFinish}
                options={{headerShown: false}}
            />
            
            <Stack.Screen
                name="GetGender"
                component={GetGender}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="GetAge"
                component={GetAge}
                options={{headerShown: false}}
            />
              <Stack.Screen
                name="GetIndicate"
                component={GetIndicate}
                options={{headerShown: false}}
            />
              <Stack.Screen
                name="GetWorry"
                component={GetWorry}
                options={{headerShown: false}}
            />
                <Stack.Screen
                name="Upload"
                component={UploadScreen}
                options={{headerShown: false}}
            />
       
      </Stack.Navigator>  
    )
}

export default RootStack
