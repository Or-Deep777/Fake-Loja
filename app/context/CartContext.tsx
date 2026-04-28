"use client"

import { Produto } from "@/types/Produto"
import { Frete } from "@/types/Frete"
import { createContext, ReactNode, useContext, useState } from "react"
import { error } from "console"


interface CartContextType {
    produto: Produto | null
    frete: Frete | null
    setProduto: (produto:Produto) => void
    setFrete: (frete:Frete) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

//O Provider
export function CartProvider({children}: {children: ReactNode}){
    const [produto, setProduto] = useState<Produto | null>(null)
    const [frete, setFrete] = useState<Frete | null>(null)

    return(
        <CartContext.Provider value={{produto, frete, setProduto, setFrete}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)
    if(!context) throw new Error("Esqueceu o provider no layout")
    return context
}