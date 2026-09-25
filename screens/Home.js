import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function Home ({ navigation }){
     return(
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Catálogo de Álbuns
            </Text>
            <Text style={styles.texto}>
                Confira alguns álbuns bons.
            </Text>
            <TouchableOpacity
            style={styles.botao}
            onPress={() => navigation.navigate('Albuns')}
            >
             <Text style={styles.textoBotao}>
                Ver Álbuns
             </Text>
            </TouchableOpacity>
        </View>
     )
}

const styles = StyleSheet.create({

  container: {

    flex: 1,

    justifyContent: 'center',

    alignItems: 'center',

    padding: 20,

    backgroundColor: '#022841'

  },


  titulo: {

    fontSize: 30,

    fontWeight: 'bold',

    marginBottom: 15

  },


  texto: {

    fontSize: 16,

    textAlign: 'center',

    marginBottom: 30

  },
})