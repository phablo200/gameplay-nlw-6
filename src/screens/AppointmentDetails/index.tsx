import React, { useState, useEffect } from 'react';
import { 
    ImageBackground, 
    Text, 
    View,
    FlatList,
    Alert,
    Share,
    Platform 
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Fontisto } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import * as Linking from 'expo-linking';

import { Member, MemberProps } from '../../components/Member';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { ListHeader } from '../../components/ListHeader';
import { ListDivider } from '../../components/ListDivider';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Load } from '../../components/Load';
import { AppointmentProps } from '../../components/Appointment';

import BannerImg from '../../assets/banner.png';

import { theme } from '../../shared/styles/theme';
import { api } from '../../services/api';
import { styles } from './styles';

type Params = {
    guildSelected: AppointmentProps;
};

type GuildWidget = {
    id: string;
    name: string;
    instant_invite: string;
    members: Array<MemberProps>;
    presence_count: number;
};

export function AppointmentDetails () {
    const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);
    const [loading, setLoading] = useState(false);

    const route = useRoute();
    const { guildSelected } = route.params as Params;

    async function fetchGuildInfo() {
        try {
            const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`);
            console.log('response:', response.data);
            setWidget(response.data);
        } catch (error) {
            Alert.alert('Atenção', 'não foi possível realizar a conexão com o servidor.');
        } finally {
            setLoading(false);
        }
    };

    async function handleShareInvitation() {
        const message = Platform.OS === 'ios' ? 'Junte-se a Rocketseat team' : 'Android';

        Share.share({
            message,
            url: 'http://github.com/phablo200',
        });
    };

    function handleOpenGuild() {
        Linking.openURL('https://github.com/phablo200');
    };

    useEffect(() => {
        fetchGuildInfo();
    }, []);

    return (
        <Background>
            <Header 
                title="Detalhes" 
                action={
                    <BorderlessButton onPress={handleShareInvitation}>
                        <Fontisto 
                            name="share"
                            size={24}
                            color={theme.colors.primary}
                        />
                    </BorderlessButton>
                }    
            />

            <ImageBackground 
                source={BannerImg} 
                style={styles.banner} 
            >
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>
                        {guildSelected.guild.name}
                    </Text>

                    <Text style={styles.subtitle}>
                        {guildSelected.description}
                    </Text>
                </View>
            </ImageBackground>
            
            {
                loading ? <Load /> : (
                    <>
                        <ListHeader 
                            title="Jogadores"
                            subtitle={`Total ${widget?.members?.length ?? 0}`}
                        />

                        <FlatList 
                            data={widget.members}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (
                                <Member data={item} />
                            )}
                            ItemSeparatorComponent={() => <ListDivider isCentered />}
                            style={styles.members}
                        />
                    </>
                )
            }

            <View style={styles.footer}>
                <ButtonIcon 
                    title="Entrar na partida"
                    onPress={handleOpenGuild}
                />
            </View>
        </Background>
    );
};