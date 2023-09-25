'use client'
import {ChakraProvider} from "@chakra-ui/react";
import {NextUIProvider} from "@nextui-org/react";

import Perfil from "@/components/Perfil/Perfil";

function PerfilPage () {
    return (
        <ChakraProvider>
            <NextUIProvider>
                <Perfil />
            </NextUIProvider>
        </ChakraProvider>
    )
}

export default PerfilPage