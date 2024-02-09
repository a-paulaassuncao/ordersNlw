// Importando componentes e bibliotecas necessários do react-native
import { SafeAreaView } from "react-native";
import { Slot } from "expo-router";
import {
    useFonts,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,  
} from "@expo-google-fonts/inter";
import { Loading } from "@/components/loading"; // Importando o componente de carregamento

// Componente Layout
export default function Layout() {
    // Carrega as fontes definidas
    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold,
    });

    // Verifica se as fontes foram carregadas
    if (!fontsLoaded){
        // Se as fontes não foram carregadas, exibe o componente de carregamento
        return <Loading />;
    }

    // Se as fontes foram carregadas, renderiza o layout principal
    return (
        // Área segura para renderizar conteúdo, ocupando toda a altura disponível
        <SafeAreaView className="flex-1 bg-slate-900">
            {/* Slot representa o conteúdo principal que será renderizado neste ponto */}
            <Slot />
        </SafeAreaView>
    );
}
