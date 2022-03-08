import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';

type Props = RectButtonProps & {
    title: string;
};

export function Button ({ title, ...rest }: Props) {
    return (
        <RectButton {...rest} style={styles.container}>
            <Text style={styles.title}>
                {title}
            </Text>
        </RectButton>
    );
};