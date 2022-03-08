import React, { useState, useCallback } from 'react';
import { View, FlatList } from 'react-native';
import AsycStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { COLLECTION_APPOINTMENTS } from '../../configs/storage';

import { Background } from '../../components/Background';
import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Appointment, AppointmentProps } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';
import { Load } from '../../components/Load';


import { styles } from './styles';

export function Home() {
    const [category, setCategory] = useState('');
    const [appointments, setAppointments] = useState<AppointmentProps[]>([]);
    const [loading, setLoading] = useState(true);

    const navigation = useNavigation();

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    };

    function handleAppointmentDetails(guildSelected: AppointmentProps) {
        navigation.navigate('AppointmentDetails' as never, {
            guildSelected,
        } as never);
    };

    function handleAppointmentCreate() {
        navigation.navigate('AppointmentCreate' as never);
    };

    async function loadAppointments() {
        const response = await AsycStorage.getItem(COLLECTION_APPOINTMENTS);
        const storage: AppointmentProps[] = response ? JSON.parse(response) : [];
    
        if (category) {
            setAppointments(storage.filter(item => item.category === category));   
        } else {
            setAppointments(storage);
        }

        setLoading(false);
    };

    useFocusEffect(useCallback(() => {
        loadAppointments();
    }, [category]));

    return (
        <Background>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Profile />
                    <ButtonAdd onPress={handleAppointmentCreate} />
                </View>
            </View>

            <CategorySelect 
                categorySelected={category}
                setCategory={handleCategorySelect}
            />

            {
                loading ? <Load /> : (
                    <>
                        <ListHeader 
                            title="Partidas agendadas"
                            subtitle={`Total ${appointments.length}`}
                        />

                        <FlatList 
                            data={appointments}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (
                                <Appointment 
                                    data={item} 
                                    onPress={() => handleAppointmentDetails(item)}
                                />
                            )}
                            style={styles.matches}
                            showsHorizontalScrollIndicator={false}
                            ItemSeparatorComponent={() => <ListDivider />}
                            contentContainerStyle={{
                                paddingBottom: 69,
                            }}
                        />
                    </>
                )
            }
        </Background>
    );
};