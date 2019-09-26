import React from 'react'
import { View, Text, SectionList } from 'react-native'

const MiSectionList = () => {
    

    const dataHombres = [
        { name: 'Oscar Ledo' },
        { name: 'Sebastian Presti' },
        { name: 'Juan Pablo Vai' },
        { name: 'Norberto Ledo' },
        { name: 'Elvis Mostro' }
    ];

    const dataMujeres = [
        { name: 'Alicia Centurion' },
        { name: 'La Negrita' },
        { name: 'Mercedes Suegra' },
        { name: 'Cristina Vecina' }
    ];


    const getItem = ({item}) =>{
        return (
            <Text style={{ fontSize: 60}}>{item.name}</Text>
        );
    };

    return (
        <View>
            
            {/* 
            Recibe basicamente 3 propiedades:
            - Datos que tiene que renderizar
            - Como va a renderizar esos elementos 
            - Los headers que separan las sections
            - El key debe ser un String (utilizando el index 
            o un key especifico dentro del objeto)
            */}

            <SectionList
                sections={[
                    {
                        title: "Hombres",
                        data: dataHombres
                    },
                    {
                        title: "Mujeres",
                        data: dataMujeres
                    }
                ]}
                keyExtractor={(item,index)=> index.toString()}
                renderItem={getItem}
                renderSectionHeader={({ section })=> <Text style={{fontSize:40, backgroundColor:'grey', color:'white'}}>{section.title}</Text>}
                
            ></SectionList>
            
        </View>
    )

}

export default MiSectionList
