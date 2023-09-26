'use client'
import {ChakraProvider} from "@chakra-ui/react";
import {NextUIProvider} from "@nextui-org/react";

import EditarPerfil from "@/components/EditarPerfil/EditarPerfil";

function EditarPerfilPage () {
    return (
        <ChakraProvider>
            <NextUIProvider>
                <EditarPerfil />
            </NextUIProvider>
        </ChakraProvider>
    )
}

export default EditarPerfilPage