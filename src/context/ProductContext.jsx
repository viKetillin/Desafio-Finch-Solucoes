import { useEffect, createContext, useState, useReducer } from "react";
import Axios from "axios";

export const ProductContext = createContext({});

function reducer(state, action) {
    var index = state.indexOf(action.id);

    if (index === -1) {
        return [...state, action.id];
    } else {
        return state.filter((__, i) => i !== index);
    }
}

export function ProductContextProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [favorites, ToggleFavorite] = useReducer(reducer, JSON.parse(localStorage.getItem("favorites") || "[]"));

    useEffect(() => {
        
        Axios.get("https://www.mocky.io/v2/5d3b57023000005500a2a0a6").then(resp => setProducts(resp.data.produtos));
    }, []);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    return (
        <ProductContext.Provider value={{ products, favorites, ToggleFavorite }}>
            {children}
        </ProductContext.Provider>
    );
}