// Importando componentes e utilitários necessários das bibliotecas react-native e clsx
import { Text, Pressable, PressableProps } from "react-native"
import { clsx } from "clsx"

// Definindo as props para o componente CategoryButton, estendendo PressableProps
type CategoryProps = PressableProps & {
    tittle: string // Título do botão da categoria
    isSelected?: boolean // Propriedade opcional para determinar se o botão está selecionado
}

// Definição do componente CategoryButton
export function CategoryButton({ tittle, isSelected, ...rest }: CategoryProps){
    return (
        // Componente Pressable representando o botão da categoria
        <Pressable 
            className={clsx(
                "bg-slate-800 px-4 justify-center rounded-md h-10", // Estilos para o botão
                isSelected && "border-2 border-lime-300" // Adiciona estilos de borda se isSelected for verdadeiro
            )}
            {...rest} // Espalha as props restantes para o componente Pressable
        >
            {/* Componente Text exibindo o título do botão da categoria com estilos de texto específicos */}
            <Text className="text-slate-100 font-subtitle text-sm">{tittle}</Text>
        </Pressable>
    )
}
