import {Box, Flex, VStack, Spacer, Text} from "@chakra-ui/layout";
import {BiCaretRightSquare, BiBarChartSquare, BiBookOpen, BiColumns} from "react-icons/bi";
import {useRouter} from "next/navigation";
import {Button} from "@chakra-ui/react";

function BottomBar() {
    const router = useRouter()
    return (
        <Flex borderTopRadius="md" alignItems="center" h='60px' p='2' bg='purple.900' color='whiteAlpha.700' pos="fixed" w="100%" zIndex={2} bottom="0">
            <Box>
                <VStack spacing={0.7} onClick={() => router.push('/home')}>
                    <Button variant="ghost" colorScheme="purple.200" color="whiteAlpha.800">
                        <Flex direction="column" alignItems="center">
                            <BiColumns />
                            <Text fontSize="0.7rem">Seu Painel</Text>
                        </Flex>
                    </Button>
                </VStack>
            </Box>
            <Spacer />
            <Box>
                <VStack spacing={0.7} onClick={() => router.push('/courses')}>
                    <Button variant="ghost" colorScheme="purple.200" color="whiteAlpha.800">
                        <Flex direction="column" alignItems="center">
                            <BiCaretRightSquare />
                            <Text fontSize="0.7rem">Meus Cursos</Text>
                        </Flex>
                    </Button>
                </VStack>
            </Box>
            <Spacer />
            <Box>
                <VStack spacing={0.7}>
                    <Button variant="ghost" colorScheme="purple.200" color="whiteAlpha.800">
                        <Flex direction="column" alignItems="center">
                            <BiBarChartSquare />
                            <Text fontSize="0.7rem">Minhas Notas</Text>
                        </Flex>
                    </Button>
                </VStack>
            </Box>
            <Spacer />
            <Box>
                <VStack spacing={0.7} onClick={() => router.push('/articles')}>
                    <Button variant="ghost" colorScheme="purple.200" color="whiteAlpha.800">
                        <Flex direction="column" alignItems="center">
                            <BiBookOpen />
                            <Text fontSize="0.7rem">Leia Artigos</Text>
                        </Flex>
                    </Button>
                </VStack>
            </Box>
        </Flex>
    )
}

export default BottomBar