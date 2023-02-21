import React from 'react'
import {
  View,
  Text,
  Pressable,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView
} from 'react-native';

import colors from 'tailwindcss/colors'
import AntDesign from '@expo/vector-icons/AntDesign'

import Animated, { FadeInRight, FadeInLeft } from 'react-native-reanimated'

const Login = ({ setRoute }: any) => {

  return (
    <>
      <Animated.View entering={FadeInRight} className="flex items-center justify-center h-screen bg-[#fff] w-full">

        <View className='flex items-center justify-center'>
          <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 65 }} className="text-orange-600">
            Pigz
          </Text>
          <Text style={{ fontFamily: 'Poppins-Bold' }} className="text-black text-xl -mt-4">
            Para entregadores
          </Text>
        </View>

        <View className='w-100 flex flex-col gap-4 mt-12'>

          <View className='w-100 flex items-start justify-center'>
            <Text style={{ fontFamily: 'Poppins' }} className="text-black text-md">
              Email ou telefone
            </Text>
            <TextInput
              style={{ fontFamily: 'Poppins' }}
              placeholderTextColor={colors.gray[400]}
              className='text-black w-96 h-14 rounded-2xl px-2 border-2 border-orange-600 transition-all duration-300'
              placeholder='example@pigz.com.br'
            // onChangeText={(e: any) => setUsername(e)}
            // value={username}
            />
          </View>

          <View className='flex items-start justify-center'>
            <Text style={{ fontFamily: 'Poppins' }} className="text-black text-md">
              Senha
            </Text>
            <TextInput
              style={{ fontFamily: 'Poppins' }}
              placeholderTextColor={colors.gray[400]}
              className='text-black w-96 h-14 rounded-2xl px-2 border-2 border-orange-600 transition-all duration-300'
              secureTextEntry={true}
              placeholder='*****'
            // onChangeText={(e: any) => setUsername(e)}
            // value={username}
            />
          </View>

          <TouchableOpacity >
            <Text style={{ fontFamily: 'Poppins' }} className="text-black text-md">
              Esqueci minha senha
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setRoute('home')} className='flex items-center px-24 py-3 rounded-2xl bg-orange-600 mt-8' >
            <Text style={{ fontFamily: 'Poppins-Bold' }} className='text-white font-bold text-xl'>Entrar</Text>
          </TouchableOpacity>

          <View className='w-100 flex items-center'>
            <Text style={{ fontFamily: 'Poppins' }} className="text-black">
              Não tem uma conta?
            </Text>
            <TouchableOpacity >
              <Text style={{ fontFamily: 'Poppins' }} className='font-bold text-orange-600'> Criar agora!</Text>
            </TouchableOpacity>
          </View>

        </View>

        <View className='flex flex-col items-center mt-12'>

          <View className='flex flex-row items-center justify-start w-screen h-100 px-4'>
            <Text style={{ fontFamily: 'Poppins' }} className="text-black">
              Entrar com
            </Text>
            <View className='h-[2px] w-full bg-black ml-4'></View>
          </View>

          <TouchableOpacity className='flex flex-row border-2 border-black items-center w-[300px] justify-evenly py-2 rounded-2xl bg-white mt-6' >
            <AntDesign name='google' color='black' size={25} />
            <Text style={{ fontFamily: 'Poppins' }} className='text-black text-md'>Continuar com o Google</Text>
          </TouchableOpacity>

        </View>

      </Animated.View>
    </>
  )
}

export default Login