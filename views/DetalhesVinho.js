import { StyleSheet, Text, View, Image } from 'react-native';
import { Headline, Subheading, Title } from 'react-native-paper';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';


function DetalhesVinho() {
    return (
        <PaperProvider theme={theme}>
            <View style={styles.container}>
                <Image source={{ uri: `https://cdn.dooca.store/2698/products/pauliteiros_600x800+fill_ffffff.jpg?v=1635638492&webp=0` }} style={styles.image} />

                <Headline style={styles.headline}>Pauliteiros</Headline>

                <Text style={styles.text}>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </Text>

                <Subheading style={styles.subheading}>Tipo:</Subheading>
                <Title>Tinto seco</Title>

                <Subheading style={styles.subheading}>Uva:</Subheading>
                <Title>Malbec</Title>

                <Subheading style={styles.subheading}>Origem:</Subheading>
                <Title>Argentina</Title>
            </View>
        </PaperProvider >
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 15,

    },
    image: {
        width: 375,
        height: 300,
        marginBottom: 10,
    },
    headline: {
        fontWeight: 700, fontSize: 30, marginTop: 20,
    },
    subheading: {
        fontWeight: 500,
    },
    text: {
        marginBottom: 15,
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

export default DetalhesVinho