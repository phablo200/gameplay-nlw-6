import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { GuildeProps } from '../../components/Appointment';

import { Guild } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';
import { Load } from '../../components/Load';
import { api } from '../../services/api';

import { styles } from './styles';

type Props = {
    handleGuildSelect: (guild: GuildeProps) => void;
};

export function Guilds({
    handleGuildSelect
}: Props) {
    const [guilds, setGuilds] = useState<GuildeProps[]>([]);
    const [loading, setLoading] = useState(true);

    async function fetchGuilds() {
        try {
            const response = await api.get(`/users/@me/guilds`);
            setGuilds(response.data);
            setLoading(false);
        } catch (e) {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchGuilds();
    }, []);
    
    return (
        <View style={styles.container}>
            {
                loading ? <Load /> : (
                    <FlatList 
                        data={guilds}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <Guild 
                                data={item} 
                                onPress={() => handleGuildSelect(item)}    
                            />
                        )}
                        ListHeaderComponent={() => <ListDivider isCentered />}
                        showsVerticalScrollIndicator={false}
                        ItemSeparatorComponent={() => <ListDivider isCentered />}
                        style={styles.guilds}
                        contentContainerStyle={{
                            paddingBottom: 69,
                            paddingTop: 104,
                        }}
                    />
                )
            }
        </View>
    );
};