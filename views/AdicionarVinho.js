import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { Button, TextInput, } from 'react-native-paper';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';


function AdicionarVinho() {
    return (
        <PaperProvider theme={theme}>
            <View style={styles.container}>
                <ScrollView >

                    <Image source={{ uri: `https://cdn.dooca.store/2698/products/pauliteiros_600x800+fill_ffffff.jpg?v=1635638492&webp=0` }} style={styles.image} />

                    <TextInput label='Nome' underlineColor='#7A2731' style={styles.textInput} />
                    <TextInput label='Tipo' underlineColor='#7A2731' style={styles.textInput} />
                    <TextInput label='Uva' underlineColor='#7A2731' style={styles.textInput} />
                    <TextInput label='Origem' underlineColor='#7A2731' style={styles.textInput} />
                    <TextInput label='Descrição' underlineColor='#7A2731' multiline style={styles.description} />
                    <Button icon='plus' mode='contained'>Adicionar</Button>

                    <StatusBar style="auto" />
                </ScrollView>

            </View>
        </PaperProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 15,

    },
    textInput: {
        marginBottom: 10,
        backgroundColor: '#fff',
    },
    description: {
        backgroundColor: '#fff',
        marginTop: 25,
        marginBottom: 25,
        height: 200,
    },
    image: {
        width: 375,
        height: 300,
        marginBottom: 10,
    },
});

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#7A2731',
        accent: '#7a2755',
    },
}


export default AdicionarVinho