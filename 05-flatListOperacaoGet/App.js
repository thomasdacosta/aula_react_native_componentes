import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, Pressable, Image } from 'react-native';

const App = () => {
  const [mensagem, setMensagem] = React.useState("");
  const [erro, setErro] = React.useState("");
  const [jsonData, setJsonData] = React.useState("");

  // Buscando personagens da Marvel
  const buscarPersonagens = async (url) => {
    await fetch(url)
        .then((response) => {
          if (response.status === 200) {
            response.json().then(function (result) {
              setJsonData(result.data.results)
            });
          } else {
            throw new Error("Erro ao consumir a API!");
          }
        })
        .catch((error) => {
          console.error(error);
        });
  }

  // Executando a busca
  React.useEffect(() => {
    buscarPersonagens("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=f59dbe01285f1d360542b5c47a9516e3&hash=0ea6be79e04ac1b0400d65ffc11088f9&nameStartsWith=captain");
  }, []);

  const Personagem = ({ item, evento, link }) => (
      <View>
        <Pressable onPress={evento}>
          <Image
              style={styles.tinyLogo}
              source={{
                uri: link,
              }}
          />
          <Text style={styles.paragraph}>{item.name}</Text>
        </Pressable>
      </View>
  );

  const renderItem = ({ item }) => (
      <Personagem
          item={item}
          evento={() => alert(item.description == "" ? "Personagem sem descrição" : item.description)}
          link={item.thumbnail.path + "/portrait_medium.jpg"} />
  );

  return (
      <SafeAreaView style={styles.container}>
        <FlatList
            data={jsonData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#202020',
    padding: 8,
  },
  paragraph: {
    margin: 12,
    padding: 10,
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#7F7F7F',
  },
  tinyLogo: {
    width: 100,
    height: 150,
    alignSelf: 'center',
  },
});

export default App;