// Importando componentes e bibliotecas necessários do react-native
import { ActivityIndicator, View } from "react-native";
import colors from "tailwindcss/colors";

// Definição do componente Loading
export function Loading() {
    return (
        // View representando a área de carregamento centralizada e com fundo escuro
        <View className="flex-1 items-center justify-center bg-slate-900">
            {/* Indicador de atividade para representar o estado de carregamento */}
            <ActivityIndicator color={colors.white} />
        </View>
    );
}
