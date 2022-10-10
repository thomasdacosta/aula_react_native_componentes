# Senac - React Native Componentes

## Objetivo

Componentes básicos do React Native e seu funcionamento

## Aulas

**Aula 01** - Apresentação<br/>
**Aula 02** - Conceitos de API REST<br/>
**Aula 03** - Microsserviços e Spring Boot<br/>
**Aula 04** - Docker e Conteinerização<br/>
**Aula 05** - Reactive Native<br/>
**Aula 06** - Componente com Estado<br/>
**Aula 07** - Componentização<br/>
**Aula 08** - FlatList<br/>
**Aula 09** - Promise e Fetch<br/>
**Aula 10** - React Navigation<br/>
**Aula 11** - Modal<br/>

## Link dos exemplos no Expo

- [01 - olaMundo] - https://snack.expo.dev/@thomasdacostaprof/01---olamundo
- [02 - clicarBotao] - https://snack.expo.dev/@thomasdacostaprof/02---clicarbotao
- [03 - saudacoes] - https://snack.expo.dev/@thomasdacostaprof/03---saudacoes
- [04 - flatList] - https://snack.expo.dev/@thomasdacostaprof/04---flatlist
- [05 - flatListOperacaoGet] - https://snack.expo.dev/@thomasdacostaprof/05---flatlistoperacaoget
- [06 - telaLogin] - https://snack.expo.dev/@thomasdacostaprof/06---telalogin
- [07 - componentes] - https://snack.expo.dev/@thomasdacostaprof/07---componentes
- [08 - reactNavigation] - https://snack.expo.dev/@thomasdacostaprof/08---reactnavigation
- [09 - modal] - https://snack.expo.dev/@thomasdacostaprof/09---modal

## Configurando o Ambiente

- Necessário instalar o **Android Studio** para configurar o ambiente com Android.

- Configurando o ambiente:
  - https://reactnative.dev/docs/environment-setup

- Listando os dispositivos do Emulador Android (Windows):
```
C:\Users\<usuario>\AppData\Local\Android\Sdk\tools\emulator -list-avds
```

- Executando o Emulador Android (Windows):
```
C:\Users\<usuario>\AppData\Local\Android\Sdk\tools\emulator -avd Pixel_2_API_26
```

- Variaveis de Ambiente (Windows):
```
ANDROID_HOME=C:\Users\<usuario>\AppData\Local\Android\Sdk
ANDROID_SDK_ROOT=C:\Users\<usuario>\AppData\Local\Android\Sdk
```

- Problemas na execução da aplicação:
  - https://stackoverflow.com/questions/57104357/react-native-task-appvalidatesigningdebug-failed

- Links importantes:
  - https://expo.dev/
  
## Criando um novo projeto

Comando para criar um novo projeto com React Native:

```
npx react-native init ex_08_reactNavigation
```

## Instalando a dependência do React Navigation

Execute os seguintes comandos:

```
npm install @react-navigation/native-stack
```

Execute comando abaixo caso aconteça esse erro: https://stackoverflow.com/questions/69043806/requirenativecomponent-rnsscreenstackheaderconfig-was-not-found-in-the-uimana

```
npm install react-native-screens react-native-safe-area-context
```

---

Thomás da Costa - [https://thomasdacosta.com.br](https://thomasdacosta.com.br)
