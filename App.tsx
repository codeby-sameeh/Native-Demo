import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCards from './components/FancyCards'
import TajMahal from  './components/TajMahal'
import IndiaGate from './components/IndiaGate'


const App = () => {
  return (
  
  <SafeAreaView>
    <ScrollView>
      <FlatCards/>
      <ElevatedCards/>
      <FancyCards/>
      <TajMahal/>
      <IndiaGate/>
    </ScrollView>
  </SafeAreaView>
  )
}

export default App
