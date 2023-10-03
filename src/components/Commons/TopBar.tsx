import {Box, Flex, Spacer, Text} from "@chakra-ui/layout";
import ProfileMenu from "@/components/Commons/ProfileMenu";
import {requestDataFromStorage} from "@/utils/requestDataFromStorage";
import {useEffect, useState} from "react";

function TopBar() {
    const [data, setData] = useState({
        name: '',
        avatar: ''
    })
    useEffect(() => {
        const dataReq: any = requestDataFromStorage('TopBar')
        setData(dataReq)
    }, []);
    return (
        <Flex w="100%" shadow='2xl' borderBottomRadius="md" align='center' p='2' bg='purple.900' color='whiteAlpha.800'>
            <Box>
                <Text color='whiteAlpha.700' fontSize="1rem">Bem vindo,</Text>
                <Text fontWeight="extrabold" fontSize="1.1rem">{data?.name}</Text>
            </Box>
            <Spacer />
            <Box>
                <ProfileMenu avatar={data?.avatar['48']}/>
            </Box>
        </Flex>
    )
}

export default TopBar