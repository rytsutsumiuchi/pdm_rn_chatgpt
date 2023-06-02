import React from 'react'
import {
    StyleSheet
} from 'react-native'
import {
    Button,
    Card,
    Input
} from '@rneui/themed'
import LinearGradient from 'react-native-web-linear-gradient';

const PostFraseComponent = (props) => {
    return (
        <>
            <Card
                containerStyle={styles.card}>
                <Card.Title style={styles.title}>Verifique o sentimento da sua frase!</Card.Title>
                <Card.Divider></Card.Divider>
                <Input
                    placeholder='Digite a frase'                  
                    style={styles.textInput}
                    onChangeText={props.onCapturarTexto}
                    value={props.texto}
                    multiline={true}  
                    maxLength={200}    
                />
                <Button
                    ViewComponent={LinearGradient}
                    linearGradientProps={{
                        colors: ['#9f5de6', '#305cdc'],
                        start: { x: 0, y: 0.5 },
                        end: { x: 1, y: 0.5 },
                    }}
                    containerStyle={styles.button}
                    title='Ver sentimento'
                    onPress={props.onPostFrase}              
                />

            </Card>
        </>
    )
}

export default PostFraseComponent

const styles = StyleSheet.create({
    button: {
        shadowColor: '#000',
        shadowOffset: {
            width: 4,
            height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,
        borderRadius: 8
    },
    card: {
        margin: 0,
        width: 355,
        padding: 10,
        borderRadius: 8,
        borderColor: '#9f5de6'
    },
    textInput: {
        textAlign: 'left',
        margin: 0,
        padding: 0,
        outlineStyle: 'none'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'
    }
})