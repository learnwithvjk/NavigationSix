import React from 'react';
import {StyleSheet, View} from 'react-native';

interface CenterComponentProps {}

export const CenterComponent: React.FC<CenterComponentProps> = ({children}) => {
  return <View style={styles.centerAlignment}>{children}</View>;
};

const styles = StyleSheet.create({
  centerAlignment: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
