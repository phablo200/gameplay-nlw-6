import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { theme } from '../../shared/styles/theme';
import { styles } from './styles';

export function ButtonAdd ({...rest}: TouchableOpacityProps) {
    return (
        <TouchableOpacity 
            {...rest}
            style={styles.container} {...rest}
        >
            <MaterialCommunityIcons 
                name="plus"
                color={theme.colors.heading}
                size={24}
            />
        </TouchableOpacity>
    );
};