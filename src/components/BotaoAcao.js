import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function BotaoAcao({ texto, onPress, ativo }) {
  return (
    <TouchableOpacity
      style={[styles.botao, ativo && styles.botaoAtivo]}
      onPress={onPress}
    >
      <Text style={styles.texto}>{texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#1A0F30', // Roxo bem escuro/fechado para o estado normal do botão
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center', // Centraliza o texto horizontalmente dentro do botão
    justifyContent: 'center', // Centraliza o texto verticalmente
    borderWidth: 1,
    borderColor: '#3C1670', // Borda em roxo intermediário para dar destaque no fundo preto do app
    marginVertical: 8,
  },
  botaoAtivo: {
    backgroundColor: '#7B2CBF', // Muda para um roxo vibrante/neon quando ativo
    borderColor: '#9D4EDD', // Linha de contorno mais clara e brilhante para o estado ativo
    // Efeito de elevação/sombra sutil para dispositivos Android
    elevation: 4,
    // Efeito de sombra para dispositivos iOS
    shadowColor: '#9D4EDD',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  texto: {
    fontSize: 16,
    fontWeight: 'bold', // Deixa a fonte em negrito para facilitar a leitura do clique
    color: '#FFFFFF', // Texto sempre em branco puro para máximo contraste
    letterSpacing: 0.5, // Espaçamento elegante entre as letras
  },
});
