import React from 'react';
import { View, StyleSheet } from 'react-native';

const BackgroundShapes = ({ children }) => {
  return (
    <View style={styles.container}>
      {/* Formes vertes en arrière-plan avec HTML/CSS natif */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        zIndex: 0,
        pointerEvents: 'none',
      }}>
        <div style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          backgroundColor: '#5CC9B4',
          opacity: 0.3,
          borderRadius: '50%',
          top: '-100px',
          right: '-100px',
        }} />
        <div style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          backgroundColor: '#5CC9B4',
          opacity: 0.3,
          borderRadius: '50%',
          bottom: '100px',
          left: '-80px',
        }} />
        <div style={{
          position: 'absolute',
          width: '250px',
          height: '250px',
          backgroundColor: '#5CC9B4',
          opacity: 0.3,
          borderRadius: '50%',
          top: '40%',
          right: '10%',
        }} />
        <div style={{
          position: 'absolute',
          width: '350px',
          height: '350px',
          backgroundColor: '#5CC9B4',
          opacity: 0.3,
          borderRadius: '50%',
          bottom: '-150px',
          right: '20%',
        }} />
      </div>
      
      {/* Contenu */}
      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    position: 'relative',
  },
  content: {
    flex: 1,
    zIndex: 1,
    position: 'relative',
  },
});

export default BackgroundShapes;
