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
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import Entypo from '@expo/vector-icons/Entypo'

import colors from 'tailwindcss/colors'
import Animated, { FadeInRight, FadeInLeft } from 'react-native-reanimated'


const NewDelivery = ({ setRoute }: any) => {
    return (
        <Animated.View entering={FadeInRight}>
            <View className="flex items-center justify-start h-screen bg-[#fff] w-full">

                <View className='absolute top-0 bottom-0 mt-16 flex flex-row justify-between w-screen px-12'>
                    <TouchableOpacity onPress={() => setRoute('home')}>
                        <Feather name='arrow-left' size={25} color='orange' />
                    </TouchableOpacity>
                    <Text style={{ fontFamily: 'Poppins' }} className="text-black text-xl ">
                        Nova entrega
                    </Text>

                    <TouchableOpacity >
                        <Feather name='align-justify' size={25} color='orange' style={{ opacity: 0 }} />
                    </TouchableOpacity>
                </View>

                <View className='px-4 mt-[150px]'>
                    <View className='flex flex-row items-center justify-evenly border-b-2 border-gray-400 w-full py-4'>

                        <View className='flex flex-col items-center'>
                            <Text style={{ fontFamily: 'Poppins-Bold' }} className='text-gray-400 text-md'>
                                Tempo Estimado
                            </Text>
                            <Text style={{ fontFamily: 'Poppins-Bold' }} className='text-orange-600 text-2xl'>
                                30 Min
                            </Text>

                        </View>

                        <View className='flex flex-col items-center'>
                            <Text style={{ fontFamily: 'Poppins-Bold' }} className='text-gray-400 text-md'>
                                Número do ID
                            </Text>
                            <Text style={{ fontFamily: 'Poppins-Bold' }} className='text-orange-600 text-2xl'>
                                #6789
                            </Text>

                        </View>
                    </View>
                </View>

                <View className='py-6 flex items-center justify-center'>
                    <Text style={{ fontFamily: 'Poppins-Bold' }} className='text-gray-400 text-md'>
                        Valor da entrega
                    </Text>
                    <Text style={{ fontFamily: 'Poppins-Bold' }} className='text-orange-600 text-4xl'>
                        R$ 15,72
                    </Text>
                </View>

                <View className='flex flex-col items-center'>
                    <View className='flex flex-row items-center justify-start bg-orange-600 h-[60px] w-[360px] px-4 rounded-lg' >
                        <MaterialIcons name='delivery-dining' size={25} color='white' />
                        <View className='ml-2'>
                            <Text style={{ fontFamily: 'Poppins-Bold' }} className='text-white text-lg'>
                                Entrega
                            </Text>
                            <Text style={{ fontFamily: 'Poppins' }} className='text-white text-md -mt-2'>
                                Percurso total: 8km
                            </Text>
                        </View>
                    </View>

                    <View className='border-l-2 border-gray-400 w-72 px-4'>
                        <View className='mt-4'>
                            <Text style={{ fontFamily: 'Poppins-Bold' }} className='text-orange-600 text-lg'>
                                Coleta
                            </Text>
                            <Text style={{ fontFamily: 'Poppins' }} className='text-black text-md -mt-2'>
                                Restaurante recanto da peixada
                            </Text>
                        </View>

                        <View className='mt-6'>
                            <Text style={{ fontFamily: 'Poppins-Bold' }} className='text-orange-600 text-lg'>
                                Entrega
                            </Text>
                            <Text style={{ fontFamily: 'Poppins' }} className='text-black text-md -mt-2'>
                                Av. cabo dos soldados - Caranã
                            </Text>
                        </View>
                    </View>

                    <View className='mt-6'>
                        <TouchableOpacity className='flex flex-row items-center justify-center bg-orange-600 h-[50px] w-[360px] px-4 rounded-lg' >
                            <MaterialIcons name='done' size={25} color='white' />

                            <Text style={{ fontFamily: 'Poppins' }} className='text-white text-lg'>
                                Aceitar
                            </Text>

                        </TouchableOpacity>

                        <TouchableOpacity className='flex flex-row mt-4 items-center justify-center bg-white border-2 border-red-600 h-[50px] w-[360px] px-4 rounded-lg' >
                            <Entypo name='cross' size={25} color='red' />

                            <Text style={{ fontFamily: 'Poppins' }} className='text-red-600 text-lg'>
                                Recusar
                            </Text>

                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </Animated.View>
    )
}

export default NewDelivery