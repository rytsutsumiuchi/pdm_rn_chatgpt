import {
    Modal,
    StyleSheet,
    Text,
    View
} from 'react-native'
import React from 'react'
import {
    Button
} from '@rneui/themed'



const RemoveItemModal = (props) => {

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={props.modalVisible}
                onRequestClose={() => {                  
                    props.closeModal();
                  }}
                >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Quer remover esse resultado?</Text>
                        <Button
                            containerStyle={[styles.button]}
                            buttonStyle={styles.buttonCancel}
                            onPress={() => props.closeModal()}>
                            <Text style={styles.textStyle}>Cancelar</Text>
                        </Button>
                        <Button
                            containerStyle={[styles.button]}
                            buttonStyle={styles.buttonDelete}
                            onPress={() => props.onDeleteById(props.itemId)}>
                            <Text style={styles.textStyle}>Remover</Text>
                        </Button>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default RemoveItemModal


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalView: {
        margin: 20,
        backgroundColor: '#f0f0f1',
        borderRadius: 8,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 10,
            height: 15,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        width: '100%',
        borderRadius: 8,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 4,
            height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5
    },
    buttonCancel: {
        backgroundColor: 'grey',
        height: 42
    },
    buttonDelete: {
        backgroundColor: 'red',
        height: 42
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    }
});