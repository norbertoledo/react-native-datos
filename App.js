import React, {useState} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Button, 
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableOpacity 
} from 'react-native';

import MiButton from './components/MiButton';
import MiScrollView from './components/MiScrollView';
import MiFlatList from './components/MiFlatList';
import MiSectionList from './components/MiSectionList';
import MiApiData from './components/MiApiData';

export default function App() {

  const initialState = {texto:''};
  const [state, setState] = useState(initialState);
  const { texto } = state;
  

  const handleChange = texto => {
    setState( 
      {
        texto
      } 
    );
  };

  // const handlePress = () => {
  //   alert(`Tu nombre es ${texto}`);
  // };


  return (
    <View style={styles.container}>
      
      {/* <MiScrollView/> */}


      {/* <TextInput
        onChangeText={handleChange}
        placeholder='Ingrese su nombre'
      /> */}

      {/* <MiButton texto={texto}/> */}


      {/* <Text>{texto && `Mi nombre es ${texto}`}</Text> */}

      {/* <MiFlatList/> */}

      {/* <MiSectionList/> */}

      <MiApiData/>

    </View>
  );
}

const styles = StyleSheet.create({
  button:{
    backgroundColor: 'orange',
    height: 50,
    padding: 15

  },
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
