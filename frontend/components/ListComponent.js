import React from 'react'
import {
    StyleSheet,
    TouchableHighlight,
    View
} from 'react-native'

import {
    Card,
    ListItem
} from '@rneui/themed'

import LinearGradient from 'react-native-web-linear-gradient';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ListComponent = (props) => {
    const corPositivo = ['rgba(253,29,29,0.9)', 'rgba(131,58,180,1)']
    const corNegativo = ['rgba(22,26,66,0.8)', 'rgba(11,13,33,1)']
    const corNeutro = ['rgba(116,145,138,1)', 'rgba(47,72,88,1)']
    const iconePositivo = 'emoticon-excited'
    const iconeNegativo = 'emoticon-cry'
    const iconeNeutro = 'emoticon-neutral'

    const lista = props.itens.map(i =>
        <ListItem
            key={i.id}
            containerStyle={styles.listItem}
            ViewComponent={LinearGradient}
            linearGradientProps={{
                colors: i.sentimento == 'Positivo' ? corPositivo : i.sentimento == 'Negativo' ? corNegativo : corNeutro,
                start: { x: 0, y: 0.5 },
                end: { x: 1, y: 0.5 },
            }}
            Component={TouchableHighlight}

            onLongPress={() => props.onRemoveItemInModal(i.id)}>
            <ListItem.Content style={styles.listContent}>
                <ListItem.Title style={styles.listTitle}>Sentimento {i.sentimento}
                </ListItem.Title>
                <View style={styles.view}>
                    <ListItem.Subtitle style={styles.listSubtitle}>{i.frase}
                    </ListItem.Subtitle>
                    <Icon style={styles.icone}
                        name={i.sentimento == 'Positivo' ? iconePositivo : i.sentimento == 'Negativo' ? iconeNegativo : iconeNeutro} />
                </View>
            </ListItem.Content>
        </ListItem>
    )

    return <>
        <Card containerStyle={styles.card}>
            <Card.Title style={styles.title}>Resultados</Card.Title>
            <Card.Divider></Card.Divider>
            {lista}
        </Card>

    </>
}

export default ListComponent

const styles = StyleSheet.create({
    card: {
        marginVertical: 10,
        width: 355,
        padding: 10,
        borderRadius: 8,
        borderColor: '#305cdc'
    },
    listContent: {
        alignItems: 'center'
    },
    listTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff'
    },
    listSubtitle: {
        color: '#f4f4f4',
        width: '100%',
        textAlignVertical: 'center'
    },
    listItem: {
        padding: 10,
        marginVertical: 5,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 4,
            height: 8,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    icone: {
        textAlign: 'center',
        fontSize: 25,
        marginLeft: 10,
        color: '#fcdf3b',
    },
    view: {
        flexDirection: 'row',
        width: '95%',
        marginVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'
    }
})