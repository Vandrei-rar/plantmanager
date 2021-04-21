import React from 'react'; // Importando biblioteca do REACT
import { SafeAreaView,
        View,
        Text,
        Image,
        TouchableOpacity,
        StyleSheet,
        Dimensions } from 'react-native'; // Importando biblioteca do REACT NATIVE + componentes.

import { useNavigation } from '@react-navigation/core';

import { Feather } from '@expo/vector-icons';
        
import wateringImg from '../assets/watering.png';   // Importando assets do projeto (Imagem e cores).
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { processFontFamily } from 'expo-font';


export function Welcome(){
    const navigation = useNavigation();

    function handleStart(){
        navigation.navigate('UserIdentification');
    }

    return(
        <SafeAreaView style={styles.container}>  
            <View style={styles.wrapper}>
                <Text style={styles.title}> 
                    Gerencie {'\n'} 
                    suas plantas de {'\n'}
                    forma fácil.
                </Text>

                <Image 
                    source={wateringImg} 
                    style={styles.image}
                    resizeMode='contain'
                />

                <Text style={styles.subtitle}>
                    Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você {'\n'}
                    sempre que precisar.
                </Text>

                <TouchableOpacity 
                    style={styles.button} 
                    activeOpacity={0.5}
                    onPress={handleStart}
                >

                    <Feather
                    name='chevron-right'
                    style={styles.buttonIcon}
                    />
                
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({ // Folha de estilo, parecido com CSS, aqui criamos uma constante e atribuimos o Componente + função de criar o componente.
    container: { // Container básico para organizar os itens dentro da tela, parecido com CSS. 
        flex: 1,
        
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38,
        fontFamily: fonts.heading,
        lineHeight: 34,
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading,
        fontFamily: fonts.text,
    },
    image: {
        height: Dimensions.get('window').width * 0.7 // Maneira de manter a imagem responsiva em aparelhos diferentes, junto com resizeMode na linha 20.
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56,
    },
    buttonIcon: {
        color: colors.white,
        fontSize: 28
    },

});


/* SafeArea é um componente responsável por manter o conteúdo abaixo da linha do horário, bateria e etc */
/* Tag Text é o mesmo que label no Java */
/* Tag image para adicionar a imagem ao projeto, a imagem dentro de "{linha 4 aqui}" */
/* Componente button criado para o projeto, está na pasta /components/ */