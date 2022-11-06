import React from 'react'
import { NextopayProvider } from './src/context/NextopayContext'
import AppNavigation from './src/navigation/AppNavigation'

export default function App() {
  return (
    <NextopayProvider>
      <AppNavigation />
    </NextopayProvider>
  )
}