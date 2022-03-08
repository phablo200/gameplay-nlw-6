import React from 'react';
import { StyleSheet } from 'react-native';
import { theme } from '../../shared/styles/theme';

export const styles = StyleSheet.create({
    container: {
        height: 48,
        width: 48,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
});