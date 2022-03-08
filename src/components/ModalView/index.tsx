import React from 'react';
import { 
    View, 
    Modal, 
    ModalProps,
    TouchableWithoutFeedback 
} from 'react-native';

import { Background } from '../Background';

import { styles } from './styles';

type Props = ModalProps & { 
    children: React.ReactNode;
    closeModal: () => void;
};

export function ModalView({
    children,
    closeModal,
    ...rest
}: Props) {
    return (
        <Modal 
            {...rest}    
            style={styles.container}
            transparent
            animationType="slide"
            statusBarTranslucent
        >
            <TouchableWithoutFeedback onPress={closeModal}>
                <View style={styles.overlay}>
                    <Background>
                        <View style={styles.bar}/>
                        {children}
                    </Background>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};