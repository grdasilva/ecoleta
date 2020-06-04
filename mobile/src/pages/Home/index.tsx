import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';

const Home = () => {
  const navigation = useNavigation();
  const text = 'hakha';

  function handleNavigateToPoints() {
    navigation.navigate('Points');
  }

  return (
    <ImageBackground source={require('../../assets/home-background.png')} style={styles.container} imageStyle={{ width: 274, height: 368 }}>
      <View style={styles.main}>
        <Image source={require('../../assets/logo.png')} />
        <Text style={styles.title}>Seu marketplace de coleta de resíduos</Text>
        <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente</Text>

      </View>

      <View style={styles.footer}>
        <RNPickerSelect placeholder={{
                    label: 'Selecione o estado', value: null }}
          onValueChange={(value) => console.log(value)}
          items={[
            { label: 'SP', value: 'SP' },
            { label: 'RJ', value: 'RJ' },
            { label: 'SC', value: 'SC' },
          ]}
        />
        <RNPickerSelect placeholder={{
                    label: 'Selecione a cidade', value: null }} useNativeAndroidPickerStyle
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'São Paulo', value: 'São Paulo' },
                { label: 'Rio de Janeiro', value: 'Rio de Janeiro' },
                { label: 'Santa Catarina', value: 'Santa Catarina' },
            ]}
        />
        <RectButton style={styles.button} onPress={handleNavigateToPoints}>
          <View style={styles.buttonIcon}>
            <Text>
              <Icon name="arrow-right" color="#FFF" size={24} />
            </Text>
          </View>
          <Text style={styles.buttonText}>
            Entrar
          </Text>
        </RectButton>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },

  main: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    color: '#322153',
    fontSize: 32,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 260,
    marginTop: 64,
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 16,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 260,
    lineHeight: 24,
  },

  footer: {},

  select: {
    flex: 1,
    backgroundColor: '#F0F0F5',
    borderRadius: 8,
    borderWidth: 0,
    padding: 16,
    fontSize: 16,
    color: '#6C6C80'
    // padding: 16px 24px,
  },

  input: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#34CB79',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  }
});

export default Home; 