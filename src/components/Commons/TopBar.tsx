import {Box, Flex, Spacer, Text} from "@chakra-ui/layout";
import ProfileMenu from "@/components/Commons/ProfileMenu";

function TopBar() {
    return (
        <Flex w="100%" shadow='2xl' borderBottomRadius="md" align='center' p='2' bg='purple.900' color='whiteAlpha.700'>
            <Box>
                <Text color='whiteAlpha.600' fontSize="1rem">Bem vindo,</Text>
                <Text fontWeight="extrabold" fontSize="1.1rem">Fulano de tal</Text>
            </Box>
            <Spacer />
            <Box>
                <ProfileMenu />
            </Box>
        </Flex>
    )
}

export default TopBar