// Importando hooks e componentes necessários do react-native
import { useState } from "react";
import { View, FlatList } from "react-native";

// Importando dados de categorias da fonte de dados de produtos
import { CATEGORIES } from "@/utils/data/products";

// Importando componentes personalizados
import { Header } from "@/components/header";
import { CategoryButton } from "@/components/category-button";

// Componente Home
export default function Home() {
  // Estado para armazenar a categoria selecionada
  const [category, setCategory] = useState(CATEGORIES[0]);

  // Função para lidar com a seleção de uma categoria
  function handleCategorySelect(selectedCategory: string) {
    setCategory(selectedCategory);
  }
  
  return (
    // View principal que ocupa toda a altura disponível, com padding no topo
    <View className="flex-1 pt-8">
      {/* Componente Header com título e quantidade de itens no carrinho */}
      <Header title="Faça seu pedido" cartQuantityItems={3} />

      {/* FlatList horizontal contendo botões de categoria */}
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          // Componente CategoryButton representando um botão de categoria
          <CategoryButton
            tittle={item}
            isSelected={item === category}
            onPress={() => handleCategorySelect(item)}
          />
        )}
        horizontal
        className="max-h-10 mt-5"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
      />
    </View>
  );
}
