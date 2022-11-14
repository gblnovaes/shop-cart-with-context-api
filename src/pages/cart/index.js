import { View,Text, FlatList, StyleSheet, TouchableOpacity } from "react-native"
import { useCart } from "../../../context/cart"


export default function Cart(){
    const {cart,add} = useCart()
    return(
     <>
     <View style={{marginTop:10}}>

       </View>
          <FlatList showsVerticalScrollIndicator={false} data={cart} renderItem={
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