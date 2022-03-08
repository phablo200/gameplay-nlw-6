import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { theme } from '../../shared/styles/theme';

type Props = {
    children: ReactNode;
};

export function Background({ children }: Props) {
    return(
        <LinearGradient
            style={styles.container}
            colors={[ theme.colors.secondary80, theme.colors.secondary100 ]} 
        >
            {children}
        </LinearGradient>
    );
};