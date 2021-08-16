import { Text, StyleSheet } from 'react-native';
import * as React from 'react';

interface SectionHeaderProps {
    title: string,
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
    return (
        <Text style={styles.title}>
            {title}
        </Text>
    );
}

const styles = StyleSheet.create({
    title: {
        color: '#7a7789',
        fontWeight: '600',
        marginTop: 25,
        marginBottom: 7,
        fontSize: 16,
    }
});
