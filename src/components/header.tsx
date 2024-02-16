// Importando componentes e bibliotecas necessários do react-native
import { Image, View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";
import { Link } from "expo-router";

// Definindo as props para o componente Header
type HeaderProps = {
  title: string; // Título do cabeçalho
  cartQuantityItems?: number; // Quantidade de itens no carrinho (opcional, padrão é 0)
};

// Definição do componente Header
export function Header({ title, cartQuantityItems = 0 }: HeaderProps) {
  return (
    // View representando o cabeçalho com uma borda na parte inferior
    <View className="flex-row items-center border-b border-slate-700 pb-5 mx-5">
      <View className="flex-1">
        {/* Imagem do logo */}
        <Image source={require("@/assets/logo.png")} className="h-6 w-32" />
        {/* Texto do título do cabeçalho */}
        <Text className="text-white text-xl font-heading mt-2">{title}</Text>
      </View>

      {/* Renderização condicional do ícone de carrinho se houver itens no carrinho */}
      {cartQuantityItems > 0 && (
        <Link href="/cart" asChild>
          {/* TouchableOpacity para tornar o ícone clicável */}
          <TouchableOpacity className="relative" activeOpacity={0.7}>
            <View className="bg-lime-300 w-4 h-4 rounded-full items-center justify-center top-2 z-10 -right-3.5">
              <Text className="text-slate-900 font-bold text-xs">
                {cartQuantityItems}
              </Text>
            </View>

            <Feather name="shopping-bag" color={colors.white} size={24} />
          </TouchableOpacity>
        </Link>
      )}
    </View>
  );
}
