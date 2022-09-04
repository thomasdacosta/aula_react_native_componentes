import React, { useState } from 'react';
import { SafeAreaView, Text, View } from "react-native";
import Componentes, { Exemplo1, Exemplo2, Exemplo3, Exemplo4 } from './Componentes';

export default () => (
  <SafeAreaView style={{flex: 1,justifyContent: "center",alignItems: "center"}}>
    <Exemplo1/>
    <Exemplo2/>
    <Exemplo3/>
    <Exemplo4 nome="Maria" idade={45} />
    <Componentes/>
  </SafeAreaView>
)
