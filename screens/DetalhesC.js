import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking
} from 'react-native';


export default function DetalhesC({ route, navigation }) {


  const { cantores } = route.params;


  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>
        {cantores.nome}
      </Text>


      <Text style={styles.informacao}>
        Álbuns: {cantores.albuns}
      </Text>

      {/* Volta para a tela anterior */}

      <TouchableOpacity

        style={styles.botaoVoltar}

        onPress={() => navigation.goBack()}

      >

        <Text style={styles.textoBotao}>
          Voltar
        </Text>

      </TouchableOpacity>


    </View>

  );

}


const styles = StyleSheet.create({

  container: {

    flex: 1,

    alignItems: 'center',

    padding: 25,

    backgroundColor: '#022057'

  },


  titulo: {

    fontSize: 26,

    fontWeight: 'bold',

    textAlign: 'center',

    marginBottom: 10

  },


  informacao: {

    fontSize: 17,

    marginBottom: 5

  },


  botaoVoltar: {

    backgroundColor: '#455261',

    width: '100%',

    padding: 15,

    borderRadius: 10,

    alignItems: 'center'

  },


  textoBotao: {

    color: '#0ed2ec',

    fontWeight: 'bold',

    fontSize: 16

  }

});