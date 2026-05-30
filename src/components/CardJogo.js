import { StyleSheet, Text, View } from "react-native";

export default function CardJogo({ titulo, genero, plataforma, nota }) {
  return (
    <View style={styles.card}>
      <View style={styles.infoContainer}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.subtitulo}>{genero} • {plataforma}</Text>
      </View>
      <View style={styles.notaContainer}>
        <Text style={styles.notaTexto}>{nota}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1A0F30', // Roxo fechado para o fundo do cartão
    flexDirection: 'row', // Alinha as informações e a nota lado a lado (em linha)
    alignItems: 'center', // Centraliza verticalmente a nota e os textos entre si
    justifyContent: 'space-between', // Empurra os textos para a esquerda e a nota para a direita
    padding: 16,
    marginHorizontal: 16,
    marginTop: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#241445', // Borda discreta para destacar o card do fundo preto do app
  },
  infoContainer: {
    flex: 1, // Faz com que os textos ocupem todo o espaço restante, empurrando a nota
    paddingRight: 12, // Evita que o texto encoste na caixinha da nota se o título for muito longo
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF', // Branco puro para leitura imediata do nome do jogo
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 13,
    color: '#C3A1E6', // Lilás pastel para dar um contraste suave
  },
  notaContainer: {
    backgroundColor: 'rgba(157, 78, 221, 0.15)', // Fundo roxo neon translúcido (15% de opacidade)
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#7B2CBF', // Borda fina em roxo vibrante para destacar o selo da nota
  },
  notaTexto: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#9D4EDD', // Texto da nota em roxo neon brilhante
  },
});