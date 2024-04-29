import { createContext, useEffect, useState } from "react";

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [cartItem, setCartItem] = useState(JSON.parse((localStorage.getItem("cartitems"))) || []);

    useEffect(() => {
        localStorage.setItem("cartitems", JSON.stringify(cartItem));
    }, [cartItem])
    
    const addProductToCart = (product) => {
        const findExistProduct = cartItem.find(item => item._id === product._id)
        if (findExistProduct) {
            setCartItem(cartItem.map(item => item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item));
        } else {
            setCartItem([...cartItem,{...product, quantity: 1}])
        }
    }

    const increaseQuantity = (productId) => {
        setCartItem(cartItem.map(item => item._id === productId ? {...item, quantity: item.quantity + 1 } : item));
    }
    const decreaseQuantity = (productId) => {
        const findProduct = cartItem.find(item => item._id === productId)
        if (findProduct.quantity > 1) {
            setCartItem(cartItem.map(item => item._id === productId ? {...item, quantity: item.quantity - 1 } : item));
        }
    }
    const removeProductFromCart = (productId) => {
        setCartItem(cartItem.filter(item => item._id !== productId));
    }

    return (
        <AppContext.Provider
            value={{
                cartItem,
                addProductToCart,
                increaseQuantity,
                decreaseQuantity,
                removeProductFromCart
            }}>
            {children}
        </AppContext.Provider>
    )
}