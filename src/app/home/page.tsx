'use client';
import { Box } from "@chakra-ui/react"

import TextoDeApresentacao from "@/components/HomePageComponets/TextoDeApresentacao"
import ImageInicial from "@/components/HomePageComponets/ImageInicial"
import Popular from "@/components/HomePageComponets/Popular";
import TopBar from "@/components/Commons/TopBar";
import BottomBar from "@/components/Commons/BottomBar";

export default function MyApplication() {
    return (
        <>
            <TopBar />
            <Box display="flex" alignItems='center' flexDirection="column">
                <TextoDeApresentacao />
                <ImageInicial
                    src="https://academiaenlevo.com.br/wp-content/uploads/2021/04/cropped-Academia-Enlevo-Psicanalise-Clinica.png"
                />
                <Popular
                    src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                />
            </Box>
            <BottomBar />
        </>
    )
}