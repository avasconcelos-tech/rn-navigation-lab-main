import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function PerfilScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>Perfil</Text>
      </View>

      <View style={styles.cartao}>
        <View style={styles.avatar}>
          <Text style={styles.avatarTexto}>U</Text>
        </View>

        <Text style={styles.nome}>Nome do Usuario</Text>
        <Text style={styles.email}>usuario@email.com</Text>

        <View style={styles.separador} />

        <View style={styles.infoLinha}>
          <Text style={styles.infoLabel}>Itens salvos</Text>
          <Text style={styles.infoValor}>0</Text>
        </View>
        <View style={styles.infoLinha}>
          <Text style={styles.infoLabel}>Itens favoritos</Text>
          <Text style={styles.infoValor}>0</Text>
        </View>
        <View style={styles.infoLinha}>
          <Text style={styles.infoLabel}>Membro desde</Text>
          <Text style={styles.infoValor}>Maio 2026</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoTexto}>Editar perfil</Text>
      </TouchableOpacity>
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
  cartao: {
    backgroundColor: '#1A0F30', // Roxo fechado para o corpo do bloco de perfil
    margin: 16,
    borderRadius: 16,
    padding: 20,
    alignItems: 'center', // Centraliza o avatar, nome e email na horizontal
    borderWidth: 1,
    borderColor: '#241445', // Contorno discreto para dar relevo ao cartão
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50, // Metade da largura/altura para transformá-lo em um círculo perfeito
    backgroundColor: '#7B2CBF', // Roxo vibrante de destaque para o fundo da foto/inicial
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#9D4EDD', // Linha brilhante neon ao redor do avatar
  },
  avatarTexto: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: '#A084CA', // Roxo pastel acinzentado para dados secundários menos importantes
    marginBottom: 8,
  },
  separador: {
    width: '100%', // Ocupa toda a largura interna do cartão
    height: 1, // Espessura de um fio/linha horizontal
    backgroundColor: '#3C1670', // Roxo intermediário para dividir os blocos de texto
    marginVertical: 16, // Espaço em cima e embaixo da linha separadora
  },
  infoLinha: {
    flexDirection: 'row', // Coloca o rótulo e o valor lado a lado (em linha)
    justifyContent: 'space-between', // Empurra o rótulo para a extrema esquerda e o valor para a extrema direita
    width: '100%',
    paddingVertical: 10,
  },
  infoLabel: {
    fontSize: 14,
    color: '#C3A1E6', // Lilás pastel para facilitar a identificação do campo
  },
  infoValor: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF', // Branco para destacar a informação preenchida
  },
  botao: {
    backgroundColor: '#7B2CBF', // Roxo vibrante para convidar ao clique
    marginHorizontal: 16,
    marginTop: 8,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center', // Centraliza o texto do botão horizontalmente
  },
  botaoTexto: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

