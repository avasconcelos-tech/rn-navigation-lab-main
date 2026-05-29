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

// TODO: substituir pelos jogos que voce escolheu
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

const styles = StyleSheet.create({
  buscaContainer: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  buscaInput: {
    backgroundColor: "#F0F0F0",
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 14,
    color: "#1A1A1A",
  },
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    backgroundColor: "#333333",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 24,
  },
  headerTitulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  headerSubtitulo: {
    fontSize: 13,
    color: "#CCCCCC",
    marginTop: 4,
  },
  lista: {
    padding: 16,
    gap: 12,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  cardIcone: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#E0E0E0",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  cardIconeTexto: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#555555",
  },
  cardInfo: {
    flex: 1,
  },
  cardTitulo: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1A1A1A",
    marginBottom: 4,
  },
  cardSubtitulo: {
    fontSize: 13,
    color: "#888888",
  },
});
