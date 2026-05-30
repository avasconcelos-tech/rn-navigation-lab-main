import { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const jogoMock = {
  titulo: "The Last of Us",
  genero: "Aventura / Acao / sobrevivencia ",
  plataforma: "PlayStation 5 e PC",
  nota: "10/10",
  sinopse:
    "The Last of Us se passa em um mundo pós-apocalíptico devastado por um fungo mutante que transforma humanos em criaturas agressivas.",
};

export default function DetalheScreen({ route, navigation}) {

  const { titulo, genero, plataforma, nota, sinopse } = route.params ?? jogoMock;

  const [isSalvo, setIsSalvo] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <View style={styles.heroIcone}>
            <Text style={styles.heroIconeTexto}>{titulo[0]}</Text>
          </View>
          <Text style={styles.heroTitulo}>{titulo}</Text>
          <Text style={styles.heroSubtitulo}>{genero}</Text>
          
          <View style={styles.heroMeta}>
            <View style={styles.metaItem}>
              <Text style={styles.metaLabel}>Plataforma</Text>
              <Text style={styles.metaValor}>{plataforma}</Text>
            </View>
            <View style={styles.metaSeparador} />
            <View style={styles.metaItem}>
              <Text style={styles.metaLabel}>Nota</Text>
              <Text style={styles.metaValor}>{nota}</Text>
            </View>
          </View>
        </View>

        <View style={styles.secao}>
          <Text style={styles.secaoTitulo}>Sinopse</Text>
          <Text style={styles.detalheTexto}>{sinopse}</Text>
        </View>

        <TouchableOpacity
          style={[styles.botao, isSalvo && styles.botaoAtivo]}
           onPress={() => setIsSalvo(prev => !prev)}
           >
          <Text style={styles.botaoTexto}>
            {isSalvo ? 'Remover da Lista' : 'Adicionar a Lista'}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0512', // Preto profundo com fundo levemente arroxeado
  },
  hero: {
    backgroundColor: '#140927', // Roxo escuro para destacar o topo (Hero bloco)
    alignItems: 'center',
    paddingVertical: 28,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#241445', // Linha sutil separando o bloco principal do fundo
  },
  heroIcone: {
    width: 80,
    height: 80,
    borderRadius: 40, // Metade da largura/altura para torná-lo um círculo perfeito
    backgroundColor: '#7B2CBF', // Roxo vibrante de destaque
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  heroIconeTexto: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF', // Branco puro para a letra inicial
  },
  heroTitulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 6,
  },
  heroSubtitulo: {
    fontSize: 14,
    color: '#9D4EDD', // Roxo neon para a categoria/gênero do jogo
    marginBottom: 16,
  },
  heroMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(123, 44, 191, 0.15)', // Roxo neon translúcido (15% de opacidade)
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderWidth: 1,
    borderColor: '#3C1670', // Borda em tom de roxo médio
  },
  metaItem: {
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  metaLabel: {
    fontSize: 11,
    color: '#A084CA', // Roxo pastel acinzentado para o rótulo ("Plataforma", "Nota")
    marginBottom: 2,
    textTransform: 'uppercase', // Transforma o texto automaticamente em caixa alta
  },
  metaValor: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  metaSeparador: {
    width: 1,
    height: 28,
    backgroundColor: '#3C1670', // Pequeno traço vertical roxo para dividir as informações
  },
  secao: {
    margin: 16,
    backgroundColor: '#1A0F30', // Roxo fechado para o box de conteúdo
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#241445',
  },
  secaoTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#9D4EDD', // Roxo neon destacando o título "Sinopse"
    marginBottom: 10,
  },
  detalheTexto: {
    fontSize: 14,
    color: '#C3A1E6', // Lilás pastel para uma leitura confortável no escuro
    lineHeight: 22, // Aumenta o espaçamento entre as linhas do texto
  },
  botao: {
    margin: 16,
    marginTop: 4,
    backgroundColor: '#3C1670', // Roxo médio/sóbrio para o estado inicial (Não Salvo)
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 32,
    borderWidth: 1,
    borderColor: 'transparent', // Mantém o tamanho da borda pronto para transição
  },
  botaoAtivo: {
    backgroundColor: '#7B2CBF', // Muda para o roxo vibrante quando o jogo for "Salvo"
    borderColor: '#9D4EDD', // Adiciona um contorno neon no estado ativo
  },
  botaoTexto: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
