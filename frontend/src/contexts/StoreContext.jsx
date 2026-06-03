import axios from "axios";
import { createContext, useEffect, useState } from "react";
// import { food_list } from "../assets/assets";
// We remove this assets because in fronted these data comes from assets but we want that these data comes from our backend

export const StoreContext = createContext();

export const StoreContextProvider = (props) => {

    const [cartItem, setCartItem] = useState({});
    const url = "http://localhost:4000";
    const [token, setToken] = useState("");

    const [food_list, setFoodList] = useState([]);

    const addToCart = async (itemId) => {
        if (!cartItem[itemId]) {
            setCartItem((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
        // Think of this as a key-value pair. Here, the ID is the key, and the number is the value associated with that key. To explain it in simpler terms, when an incoming ID arrives (let's say 1), it will be used as a key in the `cartItem` object. If there is no value associated with that key in `cartItem`, the value will be initialized to 1 for that particular key.  If the same incoming ID (let's say 1) arrives again, it will check if a key for that value already exists or not. If it does, it will increment the value by 1. The same process will be followed for other incoming IDs.

        if(token){
            await axios.post(url+"/api/cart/add", {itemId}, {headers:{token}});
        }
    }

    const removeFromCart = async (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        if (token) {
            await axios.post(url+"/api/cart/remove", {itemId}, {headers:{token}});
        }
    }

    // Func to calculate total amount in Cart
    const getTotalCartAmount = () => {
        let totalAmount = 0;

        for (const key in cartItem) {
            if (cartItem[key] > 0) {
                // let itemInfo = food_list.find((product) => product._id === Number(key));
                let itemInfo = food_list.find((product) => product._id === key);
                totalAmount += cartItem[key] * itemInfo.price;
            }
            // if (cartItem[key] > 0) : Only process items that actually exist in the cart.
            // Objects keys are string and database ids are number so we've to convert string(key) to number by using Number() func but after sometime when we fetch the food_list from database not from our assets folder then we use normal key.
        }
        return totalAmount;
    }

    const fetchFoodList = async () => {
        const response = await axios.get(url + "/api/food/list");
        setFoodList(response.data.data);
    }

    // After adding items in cart, if we reloaded the page then all the itmes will be removes so we have to make a 


    const loadCartData = async (token) => {
        const response = await axios.post(url+"/api/cart/get",{},{headers:{token}});
        setCartItem(response.data.cartData);
    }

    // Restoring login state when the page refreshes.
    useEffect(() => {
        async function loadData() {
            await fetchFoodList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"));
            }
        }
        loadData();
    }, [])



    const contextValue = {
        food_list,
        cartItem,
        setCartItem,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken,
    }
    // Wrapped in an object form so the Context can later hold multiple values (state/functions) without refactoring.

    return (
        <StoreContext.Provider value={contextValue} >
            {props.children}
        </StoreContext.Provider>
    )
}