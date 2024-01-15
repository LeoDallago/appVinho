import { useState } from 'react'
import { StyleSheet } from 'react-native';
import { Menu } from 'react-native-paper';
import { DefaultTheme, Appbar, Provider as PaperProvider } from 'react-native-paper';

function CustonHeader({ navigation, back }) {
    const [visible, setVisible] = useState(false)
    const openMenu = () => setVisible(true)
    const closeMenu = () => setVisible(false)

    return (
        <Appbar.Header theme={theme}>
            {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
            {!back ? (
                <PaperProvider>
                    <Menu
                        visible={visible}
                        onDismiss={closeMenu}
                        anchor={
                            <Appbar.Action icon='menu' color='white' onPress={openMenu} style={styles.menu} />
                        }>
                        <Menu.Item onPress={() => navigation.navigate('ListarVinho')} title='Lista de vinhos' />
                    </Menu>
                </PaperProvider>
            ) : null}

            <Appbar.Content title='App Vinho' titleStyle={{ textAlign: 'right' }} />
        </Appbar.Header>
    )
}


const styles = StyleSheet.create({
    menu: {
        alignSelf: 'flex-start'
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

export default CustonHeader