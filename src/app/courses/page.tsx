'use client'
import {ChakraProvider} from "@chakra-ui/react";
import {NextUIProvider} from "@nextui-org/react";
import AppCoursesPage from "@/components/CoursesComponents/AppCoursesPage";

function CoursesPage() {
    return (
        <ChakraProvider>
            <NextUIProvider>
                <AppCoursesPage />
            </NextUIProvider>
        </ChakraProvider>
    )
}

export default CoursesPage
