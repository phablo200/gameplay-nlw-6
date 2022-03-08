# Install fonts expo font to handle with the user, and font inter
# Intall font inter (OK)
expo install expo-font @expo-google-fonts/inter

# install font rajdhani (OK)
expo install @expo-google-fonts/rajdhani
App.tsx

# install loading (OK)
expo install expo-app-loading
App.tsx

# install linear gradient (OK)
expo install expo-linear-gradient
src/components/Background/

# install iphone helper to help with ios (OK)
yarn add react-native-iphone-x-helper
Example:
- src/screens/Home/styles.ts
- src/components/Header/styles.ts

# install react-navigation
yarn add @react-navigation/native
- Core

expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context 
- Lib to handler with user gesture 

yarn add @react-navigation/stack
- Stack navigation

# libs to handle with svg 
- expo install react-native-svg
- yarn add --dev react-native-svg-transformer
- create file metro.config.js
- add ./src/@types/svg.d.ts

# Install libs for authentication
- expo install expo-auth-session expo-random
- using in ./src/hooks/auth.tsx

# Adding axios
yarn add axios

# Ignoring logs the application: (OK)
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Your Messages']);


# Props ListHeaderComponent FlatList: (OK)
- <FlatList ListHeaderComponent={() => <ListDivider isCentered />} />

# the best lib dotenv: (OK)
- yarn add dotenv babel-plugin-inline-dotenv
- babel.config.js
- "plugins": ["inline-dotenv"]
- full example babel.config.js'

# Persist data application (OK)
- expo install @react-native-async-storage/async-storage
- use example in ./src/hooks/auth.tsx
- you can create a new file configs/storage.ts with the keys the storage.

# Lib to generate dinamic id (OK)
- yarn add react-native-uuid

# To create share link: (OK)
- import { Share, Platform } from 'react-native';
- const message = Platform.OS === 'ios' ? 'Junte-se a Rocketseat team' : 'Android';
- Share.share({
    message,
    url: 'http://github.com/phablo200',
});


# To link another apps
- import * as Linking from 'expo-linking';
- Linking.openURL('https://github.com/phablo200');

# Splash screen: (OK)
- Google search by "expo splash screen", then enter in the first link
- Search for the figma template
- this link: https://www.figma.com/file/ddc0glVeILssZl0Dcn1lSS/App-Icon-and-Splash?node-id=0%3A1
- config the splash in the app.json file
