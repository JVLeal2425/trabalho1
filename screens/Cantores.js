import { FlatList, StyleSheet, Text, View } from "react-native";
import { useState } from 'react';
import * as Speech from 'expo-speech';

const cantores = [
    {
        id: '1',
        nome: 'Phoebe Bridgers',
        albuns: 'Lost Weekend'
    },
    {
        id: '2',
        nome: 'Lucy Dacus',
        albuns: 'Home Video'
    },
    {
        id: '3',
        nome: 'Laufey',
        albuns: 'A Matter Of Time: The Final Hour'
    },
    {
        id: '4',
        nome: 'Ethel Cain',
        albuns: 'Preachers Daughter'
    },
    {
        id: '5',
        nome: 'Hayley Williams',
        albuns: 'Ego Death'
    },
    {
        id: '6',
        nome: 'Lana Del Rey',
        albuns: 'Born To Die'
    },
];
export default function Cantores(){

    const falar = () => {
    Speech.speak(nome, {
      language: 'eng-US',
      pitch: 1.0,
      rate: 1.5,
    });

    const criaItem = ({item}) => (
        <View style={styles.item}>
            <Text style={styles.nome}>
                {item.nome}
            </Text>
            <Text style={styles.album}>
                {item.album}
            </Text>
        </View>
    );
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Artistas
            </Text>
            <Text style={styles.subtitulo}>
                Artistas Bons :3
            </Text>
            <FlatList
              data={cantores}
              renderItem={criaItem}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
            />
            <Button style={styles.botao}
        title="Ouvir Texto"
        onPress={falar}
        color = "#bd0a0a"
        />
        </View>
    )
};
}

const styles = StyleSheet.create({

    container: {

        flex: 1,

        padding: 20,

        backgroundColor: '#3e7294',

    },


    titulo: {

        fontSize: 28,

        fontWeight: 'bold',

        textAlign: 'center',

        marginBottom: 5,

    },


    subtitulo: {

        fontSize: 16,

        textAlign: 'center',

        color: '#0abeeb',

        marginBottom: 20,

    },


    item: {

        backgroundColor: '#073858',

        padding: 20,

        marginBottom: 12,

        borderRadius: 10,

        elevation: 2,

    },


    nome: {

        fontSize: 19,

        fontWeight: 'bold',

        marginBottom: 5,

    },

    botao: {
        width: '100%',
    },

})