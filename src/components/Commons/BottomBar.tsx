import {Box, Flex, VStack, Spacer, Text} from "@chakra-ui/layout";
import {BiCaretRightSquare, BiBarChartSquare, BiBookOpen, BiColumns} from "react-icons/bi";

function BottomBar() {
    return (
        <Flex borderTopRadius="md" alignItems="center" h='60px' p='2' bg='purple.900' color='whiteAlpha.700' pos="fixed" w="100%" zIndex={2} bottom="0">
            <Box>
                <VStack spacing={0.7}>
                    <BiColumns />
                    <Text fontSize="0.7rem">Seu Painel</Text>
                </VStack>
            </Box>
            <Spacer />
            <Box>
                <VStack spacing={0.7}>
                    <BiCaretRightSquare />
                    <Text fontSize="0.7rem">Meus Cursos</Text>
                </VStack>
            </Box>
            <Spacer />
            <Box>
                <VStack spacing={0.7}>
                    <BiBarChartSquare />
                    <Text fontSize="0.7rem">Minhas Notas</Text>
                </VStack>
            </Box>
            <Spacer />
            <Box>
                <VStack spacing={0.7}>
                    <BiBookOpen />
                    <Text fontSize="0.7rem">Leia Artigos</Text>
                </VStack>
            </Box>
        </Flex>
    )
}

export default BottomBar