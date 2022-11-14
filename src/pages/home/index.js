import { View,Text, FlatList, StyleSheet, TouchableOpacity } from "react-native"
import { useCart } from "../../../context/cart"


export default function Home(){
    const {cart,totalValue,add} = useCart()
    const data = [{
        id:'1',
        name:'Leite',
        price:3
    },{
        id:'2',
        name:'Arroz',
        price:8
    },{
        id:'3',
        name:'Feijao',
        price:10
    }]
    return(
     <>
     <View style={{marginTop:10}}>
       <Text>{totalValue}</Text>
       <Text>{cart.length}</Text>
       </View>
          <FlatList showsVerticalScrollIndicator={false} data={data} renderItem={
        ({item}) =>{
            return(
                <TouchableOpacity onPress={() => add(item)} style={styles.listStyle} key={item.id} >
                     
                    <Text>id: {item.id} </Text>
                    <Text>nome: {item.name} </Text>
                    <Text>preço: {item.price}</Text>
                </TouchableOpacity>
            )
        }
       } keyExtractor={(item) => item.id}> 
       </FlatList>

       
     </>
  
    )
}

const styles = StyleSheet.create({
    listStyle:{
        flexDirection:'row',
        height:50,
         padding:16,
        backgroundColor:'#fff',
        borderWidth:1,
        marginVertical:10,
        marginHorizontal:16,
    }   
})