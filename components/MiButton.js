import React, {useState, useEffect} from 'react';
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

export default MiButton = ({texto}) => {

  console.log("HOLAAAAAAA", texto);
  const initialState = {texto:''};
  const [state, setState] = useState(initialState);
  
  useEffect(() => {
      setState(texto);
  }, [texto])


  const handlePress = () => {
    alert(`Tu nombre es ${texto}`);
  };

  

    return (
        <View>
            <Button
                title='Aceptar'
                onPress={handlePress}
            />

            <TouchableHighlight
                style={styles.button}
                onPress={handlePress}
            >
                <Text>Aceptar</Text>
            </TouchableHighlight>


            <TouchableOpacity
                style={styles.button}
                onPress={handlePress}
            >
                <Text>Aceptar</Text>
            </TouchableOpacity>


            <TouchableWithoutFeedback
                // No acepta propiedad de style. Hay que embeberlo en un view
                onPress={handlePress}
            >
                <Text>Aceptar</Text>
            </TouchableWithoutFeedback>
         </View>
    )

    
}


const styles = StyleSheet.create({
    button:{
      backgroundColor: 'orange',
      height: 50,
      padding: 15
  
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
  });