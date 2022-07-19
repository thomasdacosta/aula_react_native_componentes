import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View,
    FlatList,
    Pressable,
    Image, Button, ActivityIndicator
} from 'react-native';

const App = () => {
    const PERSONAGEM_DEFAULT = "thor"
    const [jsonData, setJsonData] = React.useState("");
    const [personagem, setPersonagem] = React.useState(PERSONAGEM_DEFAULT);
    const [activity, setActivity] = React.useState(false)
    const [totalPersonagens, setTotalPersonagens] = React.useState(0)

    const URL = "http://gateway.marvel.com/v1/public/" +
        "characters?ts=1" +
        "&apikey=f59dbe01285f1d360542b5c47a9516e3" +
        "&hash=0ea6be79e04ac1b0400d65ffc11088f9" +
        "&nameStartsWith=" + personagem + "&orderBy=name&limit=100";

    const jsonRetornoVazio = [
        {
            "id": 1,
            "name": "Nenhum personagem encontrado. \nVamos ficar com Cap nos nossos corações.",
            "description": "Eu também gosto dele :)",
            "modified": "2020-04-04T19:01:59-0400",
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087",
                "extension": "jpg"
            }
        }
    ]

    /**
     * Função para buscar os personagens na API da Marvel.
     *
     * @returns {Promise<void>}
     * @constructor
     */
    const BuscarPersonagens = async () => {
        setTotalPersonagens(0)
        setJsonData(null)
        setActivity(true);

        await fetch(URL)
            .then((response) => {
                if (response.status === 200) {
                    response.json().then(function (result) {
                        if (result.data.results.length == 0) {
                            setJsonData(jsonRetornoVazio)
                            setTotalPersonagens(0)
                        } else {
                            setJsonData(result.data.results)
                            setTotalPersonagens(result.data.results.length)
                        }
                    });
                } else {
                    setTotalPersonagens(0)
                    setJsonData(jsonRetornoVazio)
                }
            })
            .catch((error) => {
                setTotalPersonagens(0)
                setJsonData(jsonRetornoVazio)
                console.error(error);
            });
        setActivity(false);
    }

    /**
     * Executando a busca dos personagens na API da Marvel.
     */
    React.useEffect(() => {
        setPersonagem(PERSONAGEM_DEFAULT);
        BuscarPersonagens().then("");
    }, []);

    /**
     * Criando componente para exibir as informações do personagem.
     *
     * @param item
     * @param evento
     * @param link
     * @returns {JSX.Element}
     * @constructor
     */
    const Personagem = ({item, evento, link}) => (
        <View>
            <Pressable onPress={evento}>
                <Image
                    style={styles.imagemPersonagem}
                    source={{
                        uri: link,
                    }}
                />
                <Text style={styles.paragraph}>{item.name}</Text>
            </Pressable>
        </View>
    );

    /**
     * Exibindo o item de um personagem
     *
     * @param item
     * @returns {JSX.Element}
     * @constructor
     */
    const ExibirPersonagem = ({item}) => (
        <Personagem
            item={item}
            evento={() => alert(item.description === "" ? "Personagem sem descrição" : item.description)}
            link={item.thumbnail.path + "/portrait_uncanny.jpg"}/>
    );

    /**
     * Exibindo lista com os personagens encontrados na API da Marvel
     */
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.personagem}></Text>
            <Text style={styles.personagem}>Pesquisar Personagem:</Text>
            <TextInput
                autoCorrect={false}
                style={styles.textInput}
                clearButtonMode="always"
                defaultValue={PERSONAGEM_DEFAULT}
                onChangeText={(value) => setPersonagem(value)}
            />
            <View style={styles.button}>
                <Button title="Pesquisar"
                        onPress={() => {
                            setPersonagem(personagem);
                            BuscarPersonagens().then("");
                        }}
                />
            </View>
            <View style={{marginTop: 10}}>
                <ActivityIndicator size="large" animating={activity}/>
            </View>
            <Text style={styles.personagem}>{totalPersonagens} Personagens Encontrados</Text>
            <FlatList
                style="marginTop: 100"
                data={jsonData}
                renderItem={ExibirPersonagem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#191970',
        padding: 20,
    },
    paragraph: {
        margin: 12,
        padding: 10,
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#191970',
    },
    personagem: {
        color: 'white',
        marginTop: 10,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textInput: {
        backgroundColor: 'white',
        color: 'black',
        marginTop: 20,
        fontSize: 15,
        height: 40,
        width: 350,
        marginHorizontal:20,
        paddingHorizontal:10,
        alignSelf: 'center'
    },
    button: {
        backgroundColor: 'grey',
        color: 'white',
        fontSize: 15,
        width: 120,
        height: 35,
        marginTop: 20,
        marginHorizontal: 20,
        textAlign: 'center',
        alignSelf: 'center'
    },
    imagemPersonagem: {
        width: 200,
        height: 350,
        alignSelf: 'center',
    }
});

export default App;