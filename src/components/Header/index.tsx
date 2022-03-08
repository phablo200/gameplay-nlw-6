import React, { ReactNode } from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { BorderlessButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';

import { theme } from '../../shared/styles/theme';
import { styles } from './styles';

type Props = {
    title: string;
    action?: ReactNode;
};

export function Header ({ title, action }: Props) {
    const { secondary100, secondary40, heading } = theme.colors;
    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    };

    return (
        <LinearGradient
            colors={[secondary100, secondary40]}
            style={styles.container}
        >
            <BorderlessButton onPress={handleGoBack}>
                <Feather 
                    name="arrow-left"
                    size={24}
                    color={heading}
                />
            </BorderlessButton>

            <Text style={styles.title}>
                {title}
            </Text>
            {action ? <View>{action}</View> : <View style={{ width: 24 }} />}
        </LinearGradient>
    );
};