'use client'
import {ChakraProvider} from "@chakra-ui/react";
import {NextUIProvider} from "@nextui-org/react";

import AppArticlesPage from "@/components/ArticlesComponents/AppArticlesPage";

function ArticleslPage () {
    return (
        <ChakraProvider>
            <NextUIProvider>
                <AppArticlesPage />
            </NextUIProvider>
        </ChakraProvider>
    )
}

export default ArticleslPage