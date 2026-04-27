import { Produto } from "@/types/Produto"
import { Frete } from "@/types/Frete"


interface CartContextType {
    produto: Produto | null
    frete: Frete | null
}