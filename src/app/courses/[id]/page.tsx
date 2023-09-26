'use client'
import {courses} from "@/data/mockCourse";
import {Box, Flex, Text, VStack} from "@chakra-ui/layout";
import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Button,
    ChakraProvider, CircularProgress, CircularProgressLabel,
    Image
} from "@chakra-ui/react";
import {NextUIProvider} from "@nextui-org/react";
import Link from "next/link";
import BottomBar from "@/components/Commons/BottomBar";
import {BiArrowBack} from "react-icons/bi";
import {element} from "prop-types";

interface coursePageProps {
    params: { id: string }
}

function CourseModulesPage({params}: coursePageProps) {
    const course: any = courses.filter((e:any) => e.id === Number(params.id))

    const handleProgress = (element:any) => {
        const total = (((element.classes.filter((elm:any) => elm.done === true)).length) / element.classes.length * 100).toFixed(0)
        return Number(total)
    }

    return (
        <ChakraProvider>
            <NextUIProvider>
                <Link href={`/courses/`}>
                    <Button leftIcon={<BiArrowBack />} colorScheme='purple' variant='ghost'>
                        Voltar
                    </Button>
                </Link>
                {
                    course.map((e: any) => (
                        <VStack key={e.id} marginBottom="70px">
                            <Box>
                                <Image src={e.image_url} alt="foto do curso"/>
                            </Box>
                            <Box
                                w='90%'
                                p="3"
                                border='1px'
                                borderColor='gray.200'
                                marginTop="-35px"
                                bg="white"
                                borderRadius="10"
                            >
                                <Text textAlign="center" marginBottom="30px" fontWeight="bold">{e.course_name}</Text>
                                <Text marginBottom="20px">Curso Conteúdo</Text>
                                {
                                    e.modules.map((f: any) => (
                                        <Accordion key={f.id} allowToggle>
                                            <AccordionItem marginBottom="5px">
                                                <h2>
                                                    <AccordionButton>
                                                        <Flex justifyContent="space-between" alignItems="center" width="200%">
                                                            <Text fontWeight="bold">{`${f.id}º - ${f.module_name}`}</Text>
                                                            <CircularProgress value={handleProgress(f)} size="40px">
                                                                <CircularProgressLabel>{handleProgress(f)}%</CircularProgressLabel>
                                                            </CircularProgress>
                                                        </Flex>
                                                    </AccordionButton>
                                                </h2>
                                                <AccordionPanel pb={4}>
                                                    {f.classes.map((g: any) => (
                                                       <div key={g.id}>
                                                           <AccordionButton>
                                                               <Link href={`/courses/aulas/${e.id}${f.id}${g.id}`}>
                                                                    <Text textAlign="left">{`Aula ${g.id} - ${g.title}`}</Text>
                                                                    <hr style={{marginTop: '10px'}}/>
                                                               </Link>
                                                           </AccordionButton>
                                                       </div>
                                                    ))}
                                                </AccordionPanel>
                                            </AccordionItem>
                                        </Accordion>
                                    ))
                                }
                            </Box>
                        </VStack>
                    ))
                }
                <BottomBar />
            </NextUIProvider>
        </ChakraProvider>
    )
}

export default CourseModulesPage
