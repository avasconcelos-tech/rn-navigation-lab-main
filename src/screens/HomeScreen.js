import { useState, useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const jogos = [
  {
    id: "1",
    titulo: "The Last of Us",
    genero: "Aventura / Acao / sobrevivencia ",
    plataforma: "PlayStation 5 e PC",
    nota: "10/10",
    sinopse:
      "The Last of Us se passa em um mundo pós-apocalíptico devastado por um fungo mutante que transforma humanos em criaturas agressivas.",
  },
  {
    id: "2",
    titulo: "Sonic the Hedgehog",
    genero: "Acao / Plataforma",
    plataforma: "PS4 / Xbox / PC",
    nota: "10/10",
    sinopse:
      "A franquia Sonic the Hedgehog segue o ouriço azul mais veloz do mundo em sua missão de frustrar os planos de dominação mundial do cientista louco Dr. Eggman (também conhecido como Dr. Robotnik). O vilão captura animais da floresta para transformá-los em robôs e busca reunir as mágicas Esmeraldas do Caos.",
  },
  {
    id: "3",
    titulo: "God of War",
    genero: "Acao / Aventura",
    plataforma: "PS4 / PC",
    nota: "10/10",
    sinopse:
      "Kratos e seu filho Atreus embarcam em uma jornada pelos Nove Reinos da mitologia nordica. Um dos jogos mais premiados de sua geracao.",
  },
  {
    id: "4",
    titulo: "donkey kong",
    genero: "Acao / Plataforma",
    plataforma: "PC / Switch / PS4",
    nota: "9/10",
    sinopse:
      "A franquia Donkey Kong acompanha as aventuras do famoso gorila antropomórfico da Nintendo. A história evoluiu desde um clássico resgate de donzela nos fliperamas até tramas épicas onde o herói defende sua ilha tropical e suas preciosas bananas contra croatas e criaturas místicas malignas.",
  },
  {
    id: "5",
    titulo: "Celeste",
    genero: "Plataforma / Indie",
    plataforma: "PC / Switch / PS4",
    nota: "9/10",
    sinopse:
      "Ajude Madeline a sobreviver sua viagem interior pela montanha Celeste. Um platformer desafiador com uma historia tocante sobre superacao.",
  },
  {
    id: "6",
    titulo: "Stardew Valley",
    genero: "Simulacao / RPG",
    plataforma: "PC / Switch / Mobile",
    nota: "9/10",
    sinopse:
      "Herde a fazenda do seu avo e comece uma nova vida. Plante, colete, construa relacionamentos e explore cavernas neste mundo relaxante.",
  },
];

export default function HomeScreen({ navigation }) { 
  const [busca, setBusca] = useState(""); 
  const [jogosFiltrados, setJogosFiltrados] = useState(jogos);

  useEffect(() => {
    const resultado = jogos.filter((jogo) =>
      jogo.titulo.toLowerCase().includes(busca.toLowerCase())
    );
    setJogosFiltrados(resultado);
  }, [busca]);

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('Detalhe', { ...item })}
      >
        <View style={styles.cardIcone}>
          <Text style={styles.cardIconeTexto}>{item.titulo[0]}</Text>
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitulo}>{item.titulo}</Text>
          <Text style={styles.cardSubtitulo}>{item.genero}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>Catálogo de Games</Text>
        <Text style={styles.headerSubtitulo}>
          Escolha um jogo para ver os detalhes
        </Text>
      </View>

      <View style={styles.buscaContainer}>
        <TextInput
          style={styles.buscaInput}
          placeholder="Buscar jogo..."
          placeholderTextColor="#999"
          value={busca}          
          onChangeText={setBusca} 
        />
      </View>

      {/* Lista de jogos */}
      <FlatList
        data={jogosFiltrados} 
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.lista}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
import { StyleSheet } from 'react-native';

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
    letterSpacing: 0.5,
  },
  headerSubtitulo: {
    fontSize: 14,
    color: '#9D4EDD', // Roxo claro/neon para chamar a atenção de forma suave
    marginTop: 6,
  },
  lista: {
    padding: 16,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A0F30', // Roxo fechado para o corpo do card
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#241445', // Borda sutil para dar profundidade
  },
  cardIcone: {
    width: 50,
    height: 50,
    borderRadius: 25, // Metade da largura/altura para virar um círculo perfeito
    backgroundColor: '#7B2CBF', // Roxo vibrante de destaque
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  cardIconeTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  cardInfo: {
    flex: 1, // Ocupa todo o espaço restante à direita do ícone
  },
  cardTitulo: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  cardSubtitulo: {
    fontSize: 13,
    color: '#C3A1E6', // Lilás pastel para garantir boa leitura no fundo escuro
  },
});