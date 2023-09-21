'use client'

import {NextUIProvider} from "@nextui-org/react";
import MyApplication from "@/app/home/page";
import { ChakraProvider } from '@chakra-ui/react'

export default function App() {
  return (
      <ChakraProvider>
        <NextUIProvider>
          <MyApplication />
        </NextUIProvider>
      </ChakraProvider>
  )
}
