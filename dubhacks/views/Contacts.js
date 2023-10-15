import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import { useNavigation } from '@react-navigation/native';
    
    const Contacts = () => {
        const [fontLoaded, setFontLoaded] = useState(false);
        const [groupedContacts, setGroupedContacts] = useState({});
        const [activeTab, setActiveTab] = useState('Contacts'); // Default to 'Contacts'
        const navigation = useNavigation();
    
        useEffect(() => {
            async function loadFont() {
                await Font.loadAsync({
                    'poppins-thin': require('../fonts/Poppins/Poppins-Light.ttf'),
                });
                setFontLoaded(true);
            }
    
            loadFont();
        }, []);
    
        // Sample data for a list of contacts
        const contactsData = [
            { id: '1', name: 'John Doe', phone: '123-456-7890' },
            { id: '2', name: 'Jane Smith', phone: '987-654-3210' },
            { id: '3', name: 'Alice Johnson', phone: '555-555-5555' },
            { id: '4', name: 'Bob Brown', phone: '111-222-3333' },
            { id: '5', name: 'Nicole', phone: '123-456-7890' },
            { id: '6', name: 'John', phone: '987-654-3210' },
            { id: '7', name: 'Edward', phone: '555-555-5555' },
            { id: '8', name: 'Shawna', phone: '111-222-3333' },
            { id: '9', name: 'Evan', phone: '123-456-7890' },
            { id: '10', name: 'Sydney', phone: '987-654-3210' },
            { id: '11', name: 'Kaylin', phone: '555-555-5555' },
            { id: '12', name: 'Lena', phone: '111-222-3333' },
        ];
    
        // Group contacts by the first letter of their name
        useEffect(() => {
            const grouped = contactsData.reduce((acc, contact) => {
                const firstLetter = contact.name[0].toUpperCase();
                if (!acc[firstLetter]) {
                    acc[firstLetter] = [];
                }
                acc[firstLetter].push(contact);
                return acc;
            }, {});
            setGroupedContacts(grouped);
        }, []);
    
        const renderContactItem = (contact) => (
            <View style={styles.contactItem} key={contact.id}>
                <Text style={styles.contactName}>{contact.name}</Text>
                <Text style={styles.contactPhone}>{contact.phone}</Text>
            </View>
        );
    
        return (
            <View style={styles.container}>
                <View style={styles.tabs}>
                    <TouchableOpacity
                        style={[styles.tabButton, activeTab === 'Contacts' ? styles.activeTab : null]}
                        onPress={() => navigation.navigate('Contacts')}
                    >
                        <Text style={styles.tabButtonText}>Contacts</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.tabButton, activeTab === 'Dial' ? styles.activeTab : null]}
                        onPress={() => navigation.navigate('Dial')} // Navigate to 'Dial' when 'Dial' tab is clicked
                    >
                        <Text style={styles.tabButtonText}>Dial</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.contactsContainer}>
                    {fontLoaded ? (
                        <ScrollView>
                            {activeTab === 'Contacts' ? (
                                <View>
                                    <Text style={[styles.groupTitle, { color: '#5267B3', textAlign: 'left' }]}>Contacts</Text>
                                    {Object.keys(groupedContacts)
                                        .sort()
                                        .map((letter) => (
                                            <View key={letter}>
                                                <Text style={[styles.groupTitle, { color: '#5267B3', textAlign: 'left' }]}>{letter}</Text>
                                                {groupedContacts[letter].map((contact) => renderContactItem(contact))}
                                            </View>
                                        ))}
                                </View>
                            ) : null}
                        </ScrollView>
                    ) : (
                        <ActivityIndicator size="large" color="#9E896A" />
                    )}
                </View>
            </View>
        );
    };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    tabs: {
        flexDirection: 'row',
        padding: 10,
    },
    tabButton: {
        padding: 10,
        borderRadius: 10,
    },
    activeTab: {
        backgroundColor: '#5267B3',
    },
    tabButtonText: {
        fontSize: 16,
        color: 'black',
    },
    contactsContainer: {
        width: '100%',
        padding: 20,
    },
    pageTitle: {
        fontFamily: 'poppins-thin',
        fontSize: 24,
        marginBottom: 20,
    },
    groupTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10,
    },
    contactItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    contactName: {
        fontSize: 18,
    },
    contactPhone: {
        fontSize: 14,
        color: '#888',
    },
});

export default Contacts;