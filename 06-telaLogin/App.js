import * as React from 'react';
import { Text, View, StyleSheet, Platform,TextInput, TouchableOpacity,ActivityIndicator } from 'react-native';

//exemplo de validacao de login
async function validateLogin(user,password,statusSetter,activitySetter){
  if (user == "") {
    alert("Digite o email")
    return
  }

  if (password == "") {
    alert("Digite a senha")
    return
  }

  activitySetter(true)

  var obj = { "email": user,
    "password":password};

  await fetch(
      'https://reqres.in/api/login',
      {
        method: 'POST',
        headers:
            {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
        body: JSON.stringify(obj)
      }).then(response => {
    if (response.status === 200) {
      statusSetter('OK, autenticado')
      response.text().then(function(result){
        console.log(result);
      });
    } else {
      statusSetter('Falha no login')
    }
    activitySetter(false)
  })
      .then(response => {
        console.debug(response);
      }).catch(error => {
        console.error(error);
      });
}

export default function App() {

  const [user,setUser]=React.useState('eve.holt@reqres.in')
  const [password,setPassword]=React.useState('cityslicka')
  const [status,setStatus]=React.useState('')
  const [activity,setActivity]=React.useState(false)

  return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Minha tela de Login</Text>
        <Text style={styles.loginLabel}>Email</Text>

        <TextInput
            autoCorrect = {false}
            placeholder = "Digite seu email"
            placeholderTextColor = "grey"
            style = {styles.textInput}
            clearButtonMode = "always"
            defaultValue="eve.holt@reqres.in"
            onChangeText={(value) => setUser(value)}
        />

        <Text style={styles.loginLabel}>Senha</Text>

        <TextInput
            autoCorrect = {false}
            placeholder = "Digite seu senha"
            placeholderTextColor = "grey"
            secureTextEntry={true}
            style = {styles.textInput}
            clearButtonMode = "always"
            defaultValue="cityslicka"
            onChangeText={(value) => setPassword(value)}
        />

        <TouchableOpacity
            onPress={()=>{
              validateLogin(user,password,setStatus,setActivity)
            }}>
          <Text style={styles.button}>OK</Text>
        </TouchableOpacity>

        <View style={{marginTop:10}}>
          <ActivityIndicator size="large" animating={activity}/>
        </View>

        <Text style={styles.loginLabel}>{status}</Text>
      </View>
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
    margin: 24,
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loginLabel: {
    color: 'white',
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button:{
    backgroundColor:'grey',
    color:'white',
    fontSize: 15,
    width: 120,
    height: 30,
    marginTop: 20,
    marginHorizontal:20,
    paddingHorizontal:10,
    textAlign: 'center',
    alignSelf: 'center'
  },
  textInput: {
    backgroundColor:'#666',
    color:'white',
    fontSize: 15,
    height: 40,
    width: 250,
    marginTop: 20,
    marginHorizontal:20,
    paddingHorizontal:10,
    alignSelf: 'center'
  }
});
