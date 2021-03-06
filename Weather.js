import React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze: {
        iconName: 'weather-hail',
        gradient: ['#4da0b0', '#d39d38'],
        title: 'Haze',
        subtitle: "Just don't go outside.",
    },
    Thunderstorm: {
        iconName: 'weather-lightning',
        gradient: ['#373B44', '#4286f4'],
        title: 'Thunderstorm in the house',
        subtitle: 'Actually, outside of the house',
    },
    Drizzle: {
        iconName: 'weather-hail',
        gradient: ['#89f7fe', '#66a6ff'],
        title: 'Drizzle',
        subtitle: 'Is like rain, but gay 🏳️‍🌈',
    },
    Rain: {
        iconName: 'weather-rainy',
        gradient: ['#00c6fb', '#005bea'],
        title: 'Raining like a MF',
        subtitle: 'For more info look outside',
    },
    Snow: {
        iconName: 'weather-snowy',
        gradient: ['#7de2fc', '#b9b6e5'],
        title: 'Cold as balls',
        subtitle: 'Do you want to build a snowman? Fuck no.',
    },
    Atmosphere: {
        iconName: 'weather-hail',
        gradient: ['#89f7f3', '#66a6ff'],
        title: 'Atmosphere',
        subtitle: '',
    },
    Clear: {
        iconName: 'weather-sunny',
        gradient: ['#FF7300', '#FEF253'],
        title: 'Sunny as fuck',
        subtitle: 'Go get your ass burnt',
    },
    Clouds: {
        iconName: 'weather-cloudy',
        gradient: ['#D7D2CC', '#304352'],
        title: 'Clouds',
        subtitle: 'I know, fucking boring',
    },
    Mist: {
        iconName: 'weather-hail',
        gradient: ['#4DA0B0', '#D39D38'],
        title: 'Mist!',
        subtitle: "It's like you have no glasses on.",
    },
    Dust: {
        iconName: 'weather-hail',
        gradient: ['#4DA0B0', '#D39D38'],
        title: 'Dusty',
        subtitle: 'Thanks a lot China 🖕🏻',
    },
};

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle='light-content' />
            <View style={styles.haltContainer}>
                <MaterialCommunityIcons
                    name={weatherOptions[condition].iconName}
                    size={96}
                    color='white'
                />
                <Text style={styles.temp}>{temp}</Text>
            </View>
            <View style={{ ...styles.haltContainer, ...styles.textContainer }}>
                <Text style={styles.title}>
                    {weatherOptions[condition].title}
                </Text>
                <Text style={styles.subtitle}>
                    {weatherOptions[condition].subtitle}
                </Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        'Thunderstorm',
        'Drizzle',
        'Rain',
        'Snow',
        'Atmosphere',
        'Clear',
        'Clouds',
        'Haze',
        'Mist',
        'Dust',
    ]).isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    temp: {
        fontSize: 42,
        color: 'white',
    },
    haltContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 44,
        fontWeight: '300',
        marginBottom: 10,
        color: 'white',
    },
    subtitle: {
        fontSize: 24,
        fontWeight: '600',
        color: 'white',
    },
    textContainer: {
        alignItems: 'flex-start',
        paddingHorizontal: 40,
    },
});
