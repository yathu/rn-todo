import { Text, StyleSheet } from 'react-native';
import * as React from 'react';
import { View } from 'react-native';

interface SectionHeaderProps {
    title: string,
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.title}>
                {title}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        backgroundColor: '#fff'
    },
    title: {
        color: '#7a7789',
        fontWeight: '600',
        marginTop: 25,
        marginBottom: 7,
        fontSize: 16,
    }
});
