import React from 'react';
import { Image, View } from 'react-native';

import DiscordSvg from '../../assets/discord.svg';

import { styles } from './styles';

type Props = {
    guildId: string;
    iconId: string;
};

export function GuildIcon({ guildId, iconId }: Props) {
    const uri = `${process.env.CDN_IMAGE}/icons/${guildId}/${iconId}.png`;

    return (
        <View style={styles.container}>
            {
                iconId ? (
                    <Image 
                        style={styles.image}
                        source={{uri: 'https://play-lh.googleusercontent.com/0oO5sAneb9lJP6l8c6DH4aj6f85qNpplQVHmPmbbBxAukDnlO7DarDW0b-kEIHa8SQ'}}        
                        resizeMode="cover"
                    />
                ) : (
                    <DiscordSvg 
                        width={40}
                        height={40}
                    />
                )
                
            }
        </View>
    );
};