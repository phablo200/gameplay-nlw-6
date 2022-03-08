import { StatusBar, LogBox } from 'react-native';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';

import { Routes } from './src/routes';
import { theme } from './src/shared/styles/theme';
import { AuthProvider } from './src/hooks/auth';

LogBox.ignoreLogs(['Your Message']);

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor={theme.colors.secondary100}
        translucent    
      /> 
      
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
};
