import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import Estilos from '../estilos/Estilos';

const App = ({route, navigation}) => {
  const { name, description, item } = route.params;

  const Separator = () => (
    <View style={Estilos.separator} />
  );

  return (
    <SafeAreaView style={Estilos.container}>
      <ScrollView>
        <Text style={Estilos.detalhePersonagem}>{name}</Text>
        <Image
          style={Estilos.imagemPersonagem}
          source={{
            uri: item.thumbnail.path + "/portrait_uncanny.jpg",
          }}
        />
        <Separator/>
        <Text style={Estilos.detalheDescricaoPersonagem}>{description === "" ? "Personagem sem descrição" : item?.description}</Text>
        <Separator/>
        <Text style={Estilos.detalhePersonagem}>HQ´s</Text>
        <Separator/>
        <Text style={Estilos.detalhePersonagem}>Series</Text>
        <Separator/>
        <Text style={Estilos.detalhePersonagem}>História</Text>
        <Separator/>
        <Text style={Estilos.detalhePersonagem}>Eventos</Text>
      </ScrollView>
    </SafeAreaView>
  )
}
export default App;
