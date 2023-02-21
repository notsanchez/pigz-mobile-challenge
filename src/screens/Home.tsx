import React, { useState } from 'react'
import {
    View,
    Text,
    Pressable,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    ScrollView
} from 'react-native';
import Feather from '@expo/vector-icons/Feather'

import colors from 'tailwindcss/colors'
import AntDesign from '@expo/vector-icons/AntDesign'
import Animated, { FadeInRight, FadeInLeft } from 'react-native-reanimated'


const Home = ({ setRoute }: any) => {

    const [isShowResults, SetIsShowResults] = useState(true)

    return (
        <Animated.View entering={FadeInRight}>

            <View className="flex items-center justify-center h-screen bg-[#fff] w-full">

                <View className='absolute top-0 bottom-0 mt-16 flex flex-row justify-between w-screen px-12'>
                    <TouchableOpacity onPress={() => setRoute('index')}>
                        <Feather name='arrow-left' size={25} color='orange' />
                    </TouchableOpacity>
                    <Text style={{ fontFamily: 'Poppins' }} className="text-black text-xl ">
                        Visão geral
                    </Text>

                    <TouchableOpacity >
                        <Feather name='align-justify' size={25} color='orange' />
                    </TouchableOpacity>
                </View>

                <View className='flex justify-between h-[120px] w-[350px] bg-orange-600 rounded-lg p-4'>
                    <View className='flex flex-row items-center justify-between'>
                        <Text style={{ fontFamily: 'Poppins' }} className="text-white text-lg">
                            Ganhos do dia
                        </Text>
                        <Text style={{ fontFamily: 'Poppins' }} className="text-white text-lg">
                            21/02
                        </Text>
                    </View>

                    <View className='flex flex-row items-center justify-between px-6'>
                        <Text style={{ fontFamily: 'Poppins-Black' }} className="text-white text-2xl">
                            {isShowResults === true ? 'R$ 150' : 'R$ ---'}
                        </Text>
                        <TouchableOpacity >
                            <Text onPress={() => {
                                SetIsShowResults(!isShowResults)
                            }} style={{ fontFamily: 'Poppins-Black' }} className="text-white text-2xl">
                                {isShowResults === true ? 'O' : '-'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View className='flex justify-center h-[180px] w-[350px] bg-gray-200 rounded-lg p-4 shadow-2xl mt-4'>

                    <Text style={{ fontFamily: 'Poppins-Black' }} className="text-black text-md">
                        Resumo das entregas
                    </Text>

                    <View className='flex flex-row items-center justify-evenly'>
                        <View className='flex flex-col items-center border-2 border-gray-300 justify-center p-4 rounded-lg'>
                            <Text style={{ fontFamily: 'Poppins' }} className="text-black text-sm">
                                Aceitos
                            </Text>
                            <Text style={{ fontFamily: 'Poppins-Black' }} className="text-black text-4xl mt-2">
                                15
                            </Text>
                        </View>

                        <View className='flex flex-col items-center border-2 border-gray-300 justify-center p-4 rounded-lg'>
                            <Text style={{ fontFamily: 'Poppins' }} className="text-black text-sm">
                                Rejeitados
                            </Text>
                            <Text style={{ fontFamily: 'Poppins-Black' }} className="text-black text-4xl mt-2">
                                5
                            </Text>
                        </View>

                        <View className='flex flex-col items-center border-2 border-gray-300 justify-center p-4 rounded-lg'>
                            <Text style={{ fontFamily: 'Poppins' }} className="text-black text-sm">
                                Total
                            </Text>
                            <Text style={{ fontFamily: 'Poppins-Black' }} className="text-black text-4xl mt-2">
                                20
                            </Text>
                        </View>
                    </View>

                </View>

                <View className='flex justify-center h-[230px] w-[350px] bg-gray-200 rounded-lg p-4 shadow-2xl mt-4'>

                    <Text style={{ fontFamily: 'Poppins-Black' }} className="text-black text-md">
                        Inicar nova entrega
                    </Text>

                    <View className='mt-4'>
                        <Text style={{ fontFamily: 'Poppins' }} className="text-black text-md">
                            Numero de identificação
                        </Text>
                        <View className="flex flex-row items-center justify-center w-100 gap-2">
                            <TextInput
                                style={{ fontFamily: 'Poppins' }}
                                placeholderTextColor={colors.black}
                                className='text-black w-64 h-14 rounded-2xl px-2 border-2 border-orange-600 transition-all duration-300'
                                secureTextEntry={true}
                            // onChangeText={(e: any) => setUsername(e)}
                            // value={username}
                            />

                            <TouchableOpacity className='flex items-center justify-center px-4 py-4 rounded-2xl bg-orange-600' >
                                <Text style={{ fontFamily: 'Poppins-Bold' }} className='text-white font-bold text-sm'>OK</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity onPress={() => setRoute('new-delivery')} className='flex flex-row items-center justify-center px-4 py-4 rounded-2xl bg-orange-600 mt-4' >
                            <AntDesign name='qrcode' size={25} color='white' />
                            <Text style={{ fontFamily: 'Poppins-Bold' }} className='text-white font-bold text-sm ml-2'>Escanear QR-CODE</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>

            <View className='w-screen h-20 bg-white absolute bottom-0 flex flex-row items-center justify-evenly'>
                <TouchableOpacity className='flex items-center justify-center' >
                    <Feather name='shopping-bag' size={25} color='gray' />
                    <Text style={{ fontFamily: 'Poppins-Bold' }} className='text-gray-400 font-bold text-sm'>Historico</Text>
                </TouchableOpacity>

                <TouchableOpacity className='flex items-center justify-center' >
                    <Feather name='home' size={25} color='orange' />
                    <Text style={{ fontFamily: 'Poppins-Bold' }} className='text-orange-600 font-bold text-sm'>Visão geral</Text>
                </TouchableOpacity>

                <TouchableOpacity className='flex items-center justify-center' >
                    <Feather name='user' size={25} color='gray' />
                    <Text style={{ fontFamily: 'Poppins-Bold' }} className='text-gray-400 font-bold text-sm'>Perfil</Text>
                </TouchableOpacity>
            </View>
        </Animated.View>
    )
}

export default Home