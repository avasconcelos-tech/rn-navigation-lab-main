import { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { CardJogo } from '../components';


const jogosMock = [
  {
   id: "1",
    titulo: "The Last of Us",
    genero: "Aventura / Acao / sobrevivencia ",
    plataforma: "PlayStation 5 e PC",
    nota: "10/10",
  },
  {
    id: "3",
    titulo: "God of War",
    genero: "Acao / Aventura",
    plataforma: "PS4 / PC",
    nota: "10/10",
  },
];

export default function ListaScreen({ route }) {
  const [itensSalvos, setItensSalvos] = useState(jogosMock);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>Minha Lista</Text>
      </View>

      <FlatList
        data={itensSalvos}
        keyExtractor={(item) => item.id.toString()}
        
        renderItem={({ item }) => (
          <CardJogo 
            titulo={item.titulo} 
            genero={item.genero} 
            plataforma={item.plataforma} 
            nota={item.nota} 
          />
        )}
        ListEmptyComponent={
          <View style={styles.conteudo}>
            <View style={styles.iconeContainer}>
              <Text style={styles.icone}>G</Text>
            </View>
            <Text style={styles.titulo}>Nenhum jogo salvo</Text>
            <Text style={styles.descricao}>Sua lista aparecerá aqui</Text>
            <Text style={styles.dica}>
              Acesse um jogo e toque em "Adicionar a Lista" para salvá-lo aqui.
            </Text>
          </View>
        }
        contentContainerStyle={itensSalvos.length === 0 && styles.listaVazia}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0512', // Preto profundo com fundo levemente arroxeado
  },
  header: {
    backgroundColor: '#140927', // Roxo bem escuro para destacar o topo
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 28,
    borderBottomWidth: 2,
    borderBottomColor: '#3C1670', // Linha sutil em roxo intermediário
  },
  headerTitulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF', // Branco puro para máximo contraste
  },
  listaVazia: {
    flex: 1, // Força o container da FlatList a ocupar a tela inteira quando vazia
  },
  conteudo: {
    flex: 1,
    alignItems: 'center', // Centraliza o ícone e os textos na horizontal
    justifyContent: 'center', // Centraliza o conteúdo na vertical (meio da tela)
    paddingHorizontal: 32, // Margem interna grande nas laterais para o texto não tocar as bordas
  },
  iconeContainer: {
    width: 96,
    height: 96,
    borderRadius: 48, // Metade da largura/altura para criar um círculo perfeito
    backgroundColor: '#1A0F30', // Roxo fechado de fundo
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#7B2CBF', // Borda roxa vibrante para destacar o círculo
  },
  icone: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#9D4EDD', // Letra/Ícone principal em roxo neon
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
    textAlign: 'center',
  },
  descricao: {
    fontSize: 16,
    fontWeight: '600',
    color: '#9D4EDD', // Roxo claro/neon secundário
    textAlign: 'center',
    marginBottom: 12,
  },
  dica: {
    fontSize: 13,
    color: '#C3A1E6', // Lilás pastel para leitura confortável de textos longos
    textAlign: 'center',
    lineHeight: 20, // Espaçamento entre as linhas da dica
  },
});
