import React from 'react'
import { View, Text, FlatList } from 'react-native'

const MiFlatList = () => {


    const datos = [
        { name: 'Chanchito Feliz' },
        { name: 'Fluffy' },
        { name: 'Mr. Algore' },
        { name: 'Buttersnip' },
        { name: 'Felipe' },
        { name: 'Norberto Ledo' },
        { name: 'Alicia Centurión' },
        { name: 'Elvis' },
        { name: 'La Negrita' },
        { name: 'Sebastian' },
        { name: 'Juan Pablo' },
        { name: 'Oscar Ledo' },
        { name: 'Alicante' },
        { name: 'Santa Pola' },
        { name: 'Elche' }
    ];


    const getItem = ({item}) =>{
        return (
            <Text style={{ fontSize: 60}}>{item.name}</Text>
        );
    };

    return (
        <View>
            
            {/* 
            Recibe basicamente 2 propiedades:
            - Datos que tiene que renderizar
            - Como va a renderizar esos elementos 
            - El key debe ser un String (utilizando el index 
            o un key especifico dentro del objeto)
            */}

            <FlatList
                data={ datos }
                keyExtractor={(item, index)=> index.toString()}
                renderItem={ getItem }
            ></FlatList>
            
        </View>
    )
}

export default MiFlatList
