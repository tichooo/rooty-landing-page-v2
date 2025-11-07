import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const Button = ({ 
  onPress, 
  title, 
  variant = 'primary', 
  backgroundColor,
  textColor,
  borderColor,
  showArrow = false,
  style,
  textStyle 
}) => {
  // Styles de base
  const buttonStyles = [
    styles.button,
    variant === 'primary' && styles.primaryButton,
    variant === 'secondary' && styles.secondaryButton,
    variant === 'outline' && styles.outlineButton,
    variant === 'white' && styles.whiteButton,
    variant === 'black' && styles.blackButton,
    variant === 'whiteOutline' && styles.whiteOutlineButton,
    variant === 'blackOutline' && styles.blackOutlineButton,
    // Personnalisation via props
    backgroundColor && { backgroundColor },
    borderColor && { borderColor, borderWidth: 2 },
    style,
  ];

  const textStyles = [
    styles.buttonText,
    variant === 'primary' && styles.primaryText,
    variant === 'secondary' && styles.secondaryText,
    variant === 'outline' && styles.outlineText,
    variant === 'white' && styles.blackText,
    variant === 'black' && styles.whiteText,
    variant === 'whiteOutline' && styles.whiteText,
    variant === 'blackOutline' && styles.blackText,
    // Personnalisation via props
    textColor && { color: textColor },
    textStyle,
  ];

  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress}>
      <View style={styles.buttonContent}>
        <Text style={textStyles}>{title}</Text>
        {showArrow && (
          <Text style={[textStyles, styles.arrow]}>→</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  arrow: {
    fontSize: 20,
    marginLeft: 8,
  },
  primaryButton: {
    backgroundColor: '#4A90E2',
  },
  secondaryButton: {
    backgroundColor: '#333',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#4A90E2',
  },
  whiteButton: {
    backgroundColor: '#ffffff',
  },
  blackButton: {
    backgroundColor: '#000000',
  },
  whiteOutlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  blackOutlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#000000',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  primaryText: {
    color: '#ffffff',
  },
  secondaryText: {
    color: '#ffffff',
  },
  outlineText: {
    color: '#4A90E2',
  },
  whiteText: {
    color: '#ffffff',
  },
  blackText: {
    color: '#000000',
  },
});

export default Button;
