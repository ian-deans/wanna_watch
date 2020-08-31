import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import ErrorBoundary from "./components/ErrorBoundary";

import { StoreProvider } from './Store';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
    
  } else {
    return (
      <SafeAreaProvider>
        <StoreProvider>
          <ErrorBoundary>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </ErrorBoundary>
        </StoreProvider>
      </SafeAreaProvider>
    );
  }
}
