import React, {useState, useEffect} from 'react'
import { View, Text, FlatList } from 'react-native'

const MiApiData = () => {
    
    const initialState = {
        loading: true,
        users: []
    }
    const [state, setState] = useState(initialState);
    
    const {loading, users} = state;
    const urlFetch = 'https://jsonplaceholder.typicode.com/users';

    // CON THEN
    // const fetchUsers = () => {
    //     fetch( urlFetch )
    //     .then(res => res.json())
    //     .then(data => setState({users: data, loading:false}))
    //     .catch( error => console.log(error));
    // }

    // CON ASYNC AWAIT
    const fetchUsers = async () => {
        const response = await fetch( urlFetch )
        const data = await response.json();
        const users = data.map( user => ({ ...user, key: String(user.id) }) )
        setState(
            {
                loading: false,
                users
            }
        );
    }
    

    const printItem = ({item})=>{
        return (
            <Text style={{fontSize:30, height:50}}>{item.name}</Text>
        )
    }

    useEffect( ()=>{
        fetchUsers();
    }, []);

    return(
        
        loading 
        ?
        <View>
            <Text>Loading...</Text>        
        </View>
        :
        <View>
            <FlatList
                data={users}
                // keyExtractor={(item,index)=>item.id.toString()}
                renderItem={printItem}
            >
            </FlatList>

        </View>
    
    )
}

export default MiApiData
