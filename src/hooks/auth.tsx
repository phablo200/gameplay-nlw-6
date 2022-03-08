import React, { 
    createContext, 
    useContext, 
    useState, 
    ReactNode,
    useEffect 
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../services/api';

import { COLLECTION_USERS } from '../configs/storage';

type UserType = {
    id: string;
    username: string;
    firstName: string;
    avatar: string;
    email: string;
    token: string;
};

type AuthContextData = {
    user: UserType;
    loading: boolean;
    signIn: () => Promise<void>;
    signOut: () => Promise<void>;
};

type AuthProviderProps = {
    children: ReactNode;
};

type AuthorizationReponse = {

};

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<UserType>({} as UserType);
    const [loading, setLoading] = useState(false);

    async function signIn() {
        try {
            setLoading(true);
            if (true) {
                setTimeout(async () => {
                    const token = '5aqDIVQxsq3bsmoLUGP8aFwGDhq8t8';
                    api.defaults.headers.common.authorization = `Bearer ${token}`;
                    const userData = {
                        id: '1',
                        username: 'mock',
                        firstName: 'john',
                        avatar: 'github.com/phablo200.png',
                        email: 'johnduo@email.com',
                        token,
                    };
                    setUser(userData);

                    await AsyncStorage.setItem(COLLECTION_USERS, JSON.stringify(userData));
                }, 3000);
            }
        } catch (e) {
            throw new Error('Autenticação falhou.');
        } finally {
            setLoading(false);
        }
    };

    async function signOut() {
        setUser({} as UserType);
        await AsyncStorage.removeItem(COLLECTION_USERS);
    };

    useEffect(() => {
        
    }, []);

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            signIn,
            signOut
        }}>
            {children}
        </AuthContext.Provider>
    );
};

function useAuth() {
    return useContext(AuthContext);
};

export {
    useAuth,
    AuthProvider
};
