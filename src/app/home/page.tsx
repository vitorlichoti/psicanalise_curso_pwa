'use client';
import {Box, ChakraProvider} from "@chakra-ui/react"

import TextoDeApresentacao from "@/components/HomePageComponets/TextoDeApresentacao"
import ImageInicial from "@/components/HomePageComponets/ImageInicial"
import TopBar from "@/components/Commons/TopBar";
import BottomBar from "@/components/Commons/BottomBar";
import Carousel from "@/components/HomePageComponets/Carousel";
import RecentCourse from "@/components/HomePageComponets/RecentCourse";
import FavoriteCarousel from "@/components/HomePageComponets/FavoriteCarousel";

import {NextUIProvider, Skeleton} from "@nextui-org/react";
import {useEffect, useState} from "react";

export default function MyApplication() {
    return (
        <ChakraProvider>
            <NextUIProvider>
                <Skeleton>
                    <TopBar />
                    <Box display="flex" alignItems='center' flexDirection="column" mt={10}>
                        <TextoDeApresentacao />
                        <ImageInicial/>
                    </Box>
                    <RecentCourse />
                    <Carousel />
                    <FavoriteCarousel />
                    <BottomBar />
                </Skeleton>
            </NextUIProvider>
        </ChakraProvider>
    )
}