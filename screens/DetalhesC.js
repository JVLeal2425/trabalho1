import React from 'react';
import * as Speech from 'expo-speech';

import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from 'react-native';

export default function DetalhesC({ route, navigation }) {

  const { cantores } = route.params;

  const falar = () => {
    const texto = `${cantores.nome}.`;

    Speech.speak(texto, {
      language: 'en-US',
      pitch: 1.0,
      rate: 1.0,
    });
  };

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        {cantores.nome}
      </Text>

      <Text style={styles.informacao}>
        Álbuns: {cantores.albuns}
      </Text>

      <Button
        title="Ouvir Texto"
        onPress={falar}
        color="#09768a"
      />

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
    marginBottom: 10,
    color: 'white'
  },

  informacao: {
    fontSize: 17,
    color: 'rgb(61, 146, 106)',
    marginBottom: 20,
    color: 'white'
  },

  botaoVoltar: {
    backgroundColor: '#455261',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20
  },

  textoBotao: {
    color: '#0ed2ec',
    fontWeight: 'bold',
    fontSize: 16
  }

});