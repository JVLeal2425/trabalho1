import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Linking, Alert } from 'react-native';

const albuns = [
    {
      id: 1,
      nome: "The Record",
      ano: 2021,
      genero: 'Indie-Rock',
      imagem: require('../assets/Boygenius-The-Record.jpeg'),
      review: "Album revolucionário!!",
      url: 'https://open.spotify.com/intl-pt/album/0e9GjrztzBw8oMC6n2CDeI',
    },
    {
      id: 2,
      nome: "The Rest",
      ano: 2022,
      genero: 'Indie-Rock',
      imagem: require('../assets/therest.jpeg'),
      review: "EP maravilhoso!!",
      url: 'https://open.spotify.com/intl-pt/album/1n0esOkFQdL74PwMwTVgtz',
    },
    {
      id: 3,
      nome: "Home Video",
      ano: 2022,
      genero: 'Indie-Rock',
      imagem: require('../assets/Home_Video_album.jpeg'),
      review: "Muito emocionante!!",
      url: 'https://open.spotify.com/intl-pt/album/2nwfSapJ3YIq7Ofad4Vuh1',
    },
    {
      id: 4,
      nome: "Punisher",
      ano: 2020,
      genero: 'Indie-Rock',
      imagem: require('../assets/Phoebe-Bridgers-Punisher.jpg'),
      review: "Morri mas passo bem!!",
      url: 'https://open.spotify.com/intl-pt/album/6Pp6qGEywDdofgFC1oFbSH',
    },
    {
      id: 5,
      nome: "Lost Weekend",
      ano: 2026,
      genero: 'Indie-Rock',
      imagem: require('../assets/lostweek.jpg'),
      review: "Como assim ela tá feliz???!!",
      url: 'https://open.spotify.com/intl-pt/album/2NSzwyYvQvdOQAoEjrlw9c',
    },
];

export default function Albuns({ navigation }){

    const criaItem = ({ item }) => (
        <TouchableOpacity
        style={styles.listaItem}
        onPress={() => 
            navigation.navigate('DetalhesA', {
                albuns: item
            })
        }
        >
            <Image source={item.imagem}
            style = {styles.listaImagem}
            />
            <View style={styles.listaDetalhes}>
            <Text style={styles.textoForte}>Cód: <Text style={styles.textoNormal}>{item.id}</Text></Text>
            <Text style={styles.textoForte}>Nome: <Text style={styles.textoNormal}>{item.nome}</Text></Text>
            <Text style={styles.textoForte}>Ano: <Text style={styles.textoNormal}>{item.ano}</Text></Text>
            <Text style={styles.textoForte}>Gênero: <Text style={styles.textoNormal}>{item.genero}</Text></Text>
            </View>

        </TouchableOpacity>
    )
    return (
        <View style={styles.listaContainer}>


      <FlatList
        data={albuns}
        renderItem={criaItem}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.conteudoFlatList}

      />

    </View>
    )
}

const styles = StyleSheet.create({


  listaContainer: {

    flex: 1,
    justifyContent: 'center'

  },


  conteudoFlatList: {

    paddingHorizontal: 15,

    alignItems: 'center',
    flexGrow: 0

  },


  listaItem: {

    backgroundColor: '#033f68',

    marginRight: 15,

    padding: 15,

    borderRadius: 15,

    width: 240,

    height: 360,

    flexDirection: 'column',

    alignItems: 'center',

    elevation: 3

  },


  listaImagem: {

    width: 150,

    height: 220,

    borderRadius: 8,

    marginBottom: 15

  },


  listaDetalhes: {

    width: '100%',

    alignItems: 'flex-start'

  },


  textoForte: {

    fontWeight: 'bold',

    fontSize: 14,

    color: '#09d2f5',

    marginBottom: 2

  },


  textoNormal: {

    fontWeight: 'normal',

    color: '#088fb1'

  }


});