// Importando hooks e componentes necessários do react-native
import { useState, useRef } from "react"
import { View, FlatList, SectionList, Text } from "react-native"
import { Link } from "expo-router"

// Importando dados de categorias da fonte de dados de produtos
import { CATEGORIES, MENU, ProductProps } from "@/utils/data/products"

// Importando componentes personalizados
import { Header } from "@/components/header"
import { Product } from "@/components/product"
import { CategoryButton } from "@/components/category-button"
import { useCartStore } from "@/stores/cart-store"


// Componente Home
export default function Home() {
  const cartStore = useCartStore()
  // Estado para armazenar a categoria selecionada
  const [category, setCategory] = useState(CATEGORIES[0])

  const sectionListRef = useRef<SectionList<ProductProps>>(null)

  const cartQuantityItems = cartStore.products.reduce((total, product) => total + product.quantity, 0 )

  // Função para lidar com a seleção de uma categoria
  function handleCategorySelect(selectedCategory: string) {
    setCategory(selectedCategory)

    const sectionIndex = CATEGORIES.findIndex((category) => category === selectedCategory
    )
    
    if(sectionListRef.current){
      sectionListRef.current?.scrollToLocation({
        animated: true,
        sectionIndex,
        itemIndex: 0,
      })
    }
  }
  
  return (
    // View principal que ocupa toda a altura disponível, com padding no topo
    <View className="flex-1 pt-8">
      {/* Componente Header com título e quantidade de itens no carrinho */}
      <Header title="Faça seu pedido" cartQuantityItems={cartQuantityItems} />

      {/* FlatList horizontal contendo botões de categoria */}
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          // Componente CategoryButton representando um botão de categoria
          <CategoryButton
            title={item}
            isSelected={item === category}
            onPress={() => handleCategorySelect(item)}
          />
        )}
        horizontal
        className="max-h-10 mt-5"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
      />

      <SectionList
      ref={sectionListRef}
      sections={MENU}
      keyExtractor={(item) => item.id} 
      stickySectionHeadersEnabled={false}
      renderItem={({ item }) => (
      <Link href={`/product/${item.id}`} asChild>
        <Product data={item} />
      </Link>
      )}
      renderSectionHeader={({ section: {title } }) =>  (
        <Text className="text-xl text-white font-heading mt-8 
        mb-3">
          {title}
        </Text>
      )}
      className="flex-1 pd-5"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  )
}
