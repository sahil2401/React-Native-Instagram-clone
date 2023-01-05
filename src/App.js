import { SafeAreaView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import NavContainer from './navigation/NavContainer'

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <NavContainer />
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default App