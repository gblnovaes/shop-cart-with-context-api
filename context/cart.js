import React,{useState,createContext,useContext, useEffect} from "react"

const CartContext = createContext()

export default function CartProvider({children}){
    const [cart,setCart] = useState([])
    const [totalValue,setTotalValue] = useState(30)

    useEffect(()=>{
       
        let total = 0

        total = cart.map((value) =>{ value += value.price} )
        
        setTotalValue(total)
    },[cart])

    function add(item){
        const newCart = cart

        newCart.push(item)

        setCart([...newCart])
 
     }

    const store = {
        add,
        cart,
        totalValue
    }

    return(
        <CartContext.Provider value={store}>
            {children}
        </CartContext.Provider>
    )

 
}

export function useCart(){
        const context = useContext(CartContext)

        const {
            cart,
            add,
            totalValue
        } = context

        return{
            cart,
            add,
            totalValue
        }

}