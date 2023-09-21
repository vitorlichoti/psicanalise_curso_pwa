import { 
    Card, 
    Image, 
    Stack, 
    CardBody, 
    Heading, 
    Text, 
    Flex } from "@chakra-ui/react"

function Popular ({src}: {src:string}) {
    return (
        <Flex maxWidth="90%" m="5%" flexDirection="column">
            <h2 style={{
                fontSize:"1.2rem",
                fontWeight:"bold",
                textAlign:"center",
                color:"#3E3F5E",
                marginBottom:"2%"
            }}
            >Populares</h2>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
            >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src={src}
                alt='Imagem de curso popular'
            />

            <Stack>
                <CardBody>
                <Heading size='md'>The perfect latte</Heading>

                <Text py='2'>
                    Caffè latte is a coffee beverage of Italian origin made with espresso
                    and steamed milk.
                </Text>
                </CardBody>
            </Stack>
            </Card>
        </Flex>
    )
}

export default Popular