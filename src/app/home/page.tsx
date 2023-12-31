'use client';
import {Box, ChakraProvider} from "@chakra-ui/react"

import TextoDeApresentacao from "@/components/HomePageComponets/TextoDeApresentacao"
import ImageInicial from "@/components/HomePageComponets/ImageInicial"
import TopBar from "@/components/Commons/TopBar";
import BottomBar from "@/components/Commons/BottomBar";
import Carousel from "@/components/HomePageComponets/Carousel";
import RecentCourse from "@/components/HomePageComponets/RecentCourse";
import FavoriteCarousel from "@/components/HomePageComponets/FavoriteCarousel";

import {NextUIProvider} from "@nextui-org/react";
import {useEffect} from "react";
import {useRouter} from "next/navigation";

export default function MyApplication() {
    const router = useRouter()
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            localStorage.clear()
            router.push('/')
        }
    }, []);
    return (
        <ChakraProvider>
            <NextUIProvider>
                <TopBar />
                <Box display="flex" alignItems='center' flexDirection="column" mt={10}>
                    <TextoDeApresentacao />
                    <ImageInicial/>
                </Box>
                <RecentCourse />
                <Carousel />
                <FavoriteCarousel />
                <BottomBar />
            </NextUIProvider>
        </ChakraProvider>
    )
}