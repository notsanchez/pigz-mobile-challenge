import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
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
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import NewDelivery from './src/screens/NewDelivery';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {

  const [route, setRoute] = useState('home')

  const [username, setUsername]: any = useState('')
  const [password, setPassword]: any = useState('')


  const credentials = {
    username: 'matheus',
    password: 'matheus1'
  }

  const reset = () => {
    setUsername('')
    setPassword('')
  }

  const handleLogin = () => {

    if (username === credentials.username) {
      if (password === credentials.password) {
        alert("LOGADO")
        setRoute('home')
        reset()
      } else {
        alert("Senha incorreta")
      }
    } else {
      alert("Usuario nao encontrado")
    }

  }

  const [fontsLoaded] = useFonts({
    'Poppins-Black': require('./assets/fonts/Poppins-Black.ttf'),
    'Poppins': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ScrollView>

      {route === 'index' && (
        <>
          <Login setRoute={setRoute} />

          {/* <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 30 }}>Inter Black</Text>
          <Text>Sem fonte</Text> */}
        </>
      )}

      {route === 'home' && (
        <>
          <Home setRoute={setRoute} />
        </>
      )}

      {route === 'new-delivery' && (
        <NewDelivery setRoute={setRoute} />
      )}

    </ScrollView>
  );
}

