import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';

import {theme} from '../constants/theme';

interface Props {
  children: React.ReactNode;
}

/** Root container: paints the base colour under every screen. */
export function AppShell({children}: Props) {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor={theme.bgDeep} translucent={false} />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: theme.bg,
  },
});
