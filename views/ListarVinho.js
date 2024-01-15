import { Button, Card, Paragraph } from 'react-native-paper';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

function ListarVinho({ navigation }) {
    return (
        <Card style={{ margin: 10, padding: 5 }}>
            <Card.Title title='Pauliteiros' />
            <Card.Cover source={{ uri: `https://cdn.dooca.store/2698/products/pauliteiros_600x800+fill_ffffff.jpg?v=1635638492&webp=0` }} />
            <Card.Content>
                <Paragraph>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </Paragraph>
            </Card.Content>
            <Card.Actions>
                <Button theme={theme} onPress={() => navigation.navigate('App Vinho')}>Editar</Button>
                <Button theme={theme} onPress={() => navigation.navigate('DetalhesVinho')}>Detalhes</Button>
            </Card.Actions>
        </Card>
    )
}

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#7A2731',
        accent: '#7a2755',
    },
}

export default ListarVinho