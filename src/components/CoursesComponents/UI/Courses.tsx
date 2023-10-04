import {Box, Flex, Text, VStack} from "@chakra-ui/layout";
import {Button, Card, CardBody, Center, Heading, Image} from "@chakra-ui/react";
import Link from "next/link";
import ProgressIndicator from "@/components/CoursesComponents/UI/ProgressIndicator";
import {useEffect, useState} from "react";
function Courses() {
    const [courses, setCourses] = useState([])
    const [progress, setProgress] = useState<any>([])

    useEffect(() => {
        const storageCourse:any = localStorage.getItem('user_courses')
        setCourses(JSON.parse(storageCourse))

        const storageProgress:any = localStorage.getItem('course_progress')
        const parseStorage = JSON.parse(storageProgress)
        setProgress(parseStorage)

    }, []);

    return (
        <>
            <Center paddingTop='5%'>
                <Text as='b' fontSize='4xl' color='purple.900'>Meus Cursos</Text>
            </Center>
            <VStack paddingTop='5%' paddingBottom='20%' spacing={4}>
                {
                    courses.length > 0 ? courses.map((e: any) => (
                        <Flex
                            key={e.id}
                            justifyContent='center'
                            w='100%'
                        >
                            <Card w='90%'>
                                <CardBody>
                                    <Image src={e.image_url} alt="imagem do curso" />
                                    <Heading color='purple.900' fontSize='1.3rem'>{e.title.rendered}</Heading>
                                    <Flex justifyContent="space-between">
                                        <Link href={`/courses/${e.id}`}>
                                            <Button colorScheme='purple'>Ir para o Curso</Button>
                                        </Link>
                                        {progress.filter((f:any) => f.course === e.id).map((c: any) => (
                                            <ProgressIndicator key={c.course} steps_total={Number(c.steps_total)} steps_completed={Number(c.steps_completed)}/>
                                        ))}
                                    </Flex>
                                </CardBody>
                            </Card>
                        </Flex>
                    ))
                        : 'Você ainda não se matriculou em nenhum curso'
                }
            </VStack>
        </>
    )
}

export default Courses
