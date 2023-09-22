'use client'

import {NextUIProvider} from "@nextui-org/react";
import { ChakraProvider } from '@chakra-ui/react'
import LoginPage from "@/app/login/page";

export default function App() {
  return (
      <ChakraProvider>
        <NextUIProvider>
          <LoginPage />
        </NextUIProvider>
      </ChakraProvider>
  )
}
