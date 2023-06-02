import { useState } from 'react';
import {
  StyleSheet,
  View
} from 'react-native'

import RemoveItemModal from './components/RemoveItemModal';
import PostFraseComponent from './components/PostFraseComponent'
import ListComponent from './components/ListComponent'
import * as service from './service/Service'

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [itemId, setItemId] = useState()
  const [texto, setTexto] = useState('')
  const [ultimoId, setultimoId] = useState(3)
  const [item, setItem] = useState([
    {
      id: 1,
      frase: "Estou muito triste",
      sentimento: "Negativo"
    },
    {
      id: 2,
      frase: "Hoje o dia foi bom",
      sentimento: "Positivo"
    },
    {
      id: 3,
      frase: "Quarta-feira",
      sentimento: "Neutro"
    }
  ])

  const modalIsVisible = () => {
    setModalVisible(!modalVisible)
  }

  const removeItemInModal = id => {
    modalIsVisible()
    setItemId(id)
  }

  const closeModal = () => {
    setItemId(-1)
    modalIsVisible()
  }

  const capturarTexto = (fraseDigitada) => {
    setTexto(fraseDigitada)
  }

  const adicionarItem = (texto, resp) => {
    const aux = [
      {
        id: ultimoId + 1,
        frase: texto,
        sentimento: resp
      },
      ...item
    ]
    setItem(aux)
    setultimoId(ultimoId + 1)
  }

  const deleteById = id => {
    modalIsVisible()
    setItemId(-1)
    setItem(oldValues => {
      return oldValues.filter(i => i.id !== id)
    })
  }


  const postFrase = async () => {
    try {
      const res = await service.detectarSentimento({ texto })
      const resp = res.data.sentimento.split('\n').pop().replace('.','')
      adicionarItem(texto, resp)
      setTexto('')


      console.log(res.data.sentimento.split('\n').pop())
      console.log(item)
      //ToastAndroid.show("Frase enviada com sucesso", ToastAndroid.LONG)


    }
    catch (e) {
      console.log('erro', e)
      //ToastAndroid.show('Falha. Tente novamente mais tarde', ToastAndroid.LONG)
    }
  }

  return (
    <View style={styles.centeredView}>
      <PostFraseComponent
        texto={texto}
        onCapturarTexto={capturarTexto}
        onPostFrase={postFrase}
      />
        
      <ListComponent
        itens={item}
        onDeleteById={deleteById}
        modalIsVisible={modalIsVisible}
        onRemoveItemInModal={removeItemInModal}/>  
        
      <RemoveItemModal
      modalVisible={modalVisible}
      closeModal={closeModal}
      itemId={itemId}
      onDeleteById={deleteById}
      />

    </View>

  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
},
  container: {
    padding: 40,
    width: '100%'
  },
  fraseView: {
    marginBottom: 4
  },
  fraseTextInput: {
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
    padding: 12,
    textAlign: 'center',
    outlineStyle: 'none',
    marginBottom: 4
  },
  itemNaLista: {
    padding: 12,
    borderColor: '#EEE',
    borderWidth: 1,
    backgroundColor: '#DDD',
    marginBottom: 4,
    textAlign: 'center',
    borderRadius: 4
  }
})


// npm i @rneui/themed @rneui/base