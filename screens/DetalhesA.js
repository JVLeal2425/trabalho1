import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking
} from 'react-native';


export default function DetalhesA({ route, navigation }) {


  const { albuns } = route.params;


  return (

    <View style={styles.container}>


      <Image
        source={albuns.imagem}
        style={styles.imagem}
      />


      <Text style={styles.titulo}>
        {albuns.nome}
      </Text>


      <Text style={styles.informacao}>
        Ano: {albuns.ano}
      </Text>


      <Text style={styles.informacao}>
        Gênero: {albuns.genero}
      </Text>


      <Text style={styles.sinopse}>
        {albuns.review}
      </Text>


      {/* Abre o album no spotify */}

      <TouchableOpacity

        style={styles.botao}

        onPress={() => Linking.openURL(albuns.url)}

      >

        <Text style={styles.textoBotao}>
          Ouvir Album
        </Text>

      </TouchableOpacity>


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


  imagem: {

    width: 200,

    height: 300,

    borderRadius: 10,

    marginBottom: 20

  },


  titulo: {

    color: 'rgb(29, 120, 156)',

    fontSize: 26,

    fontWeight: 'bold',

    textAlign: 'center',

    marginBottom: 10

  },


  informacao: {

    color: 'rgb(29, 120, 156)',

    fontSize: 17,

    marginBottom: 5

  },


  sinopse: {

    color: 'rgb(29, 120, 156)',

    fontSize: 16,

    textAlign: 'justify',

    marginTop: 15,

    marginBottom: 25

  },


  botao: {

    backgroundColor: '#455f97',

    width: '100%',

    padding: 15,

    borderRadius: 10,

    alignItems: 'center',

    marginBottom: 10

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