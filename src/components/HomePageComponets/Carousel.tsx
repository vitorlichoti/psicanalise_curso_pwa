import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Flex, Center, Text } from "@chakra-ui/layout";
import EveryCourses from './EveryCourses';

function Carousel() {
    const carousel = useRef<HTMLDivElement | null>(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (carousel.current) {
            console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth);
            setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth || 0);
        }
    }, []);

    return (
        <Flex w="100%" justifyContent="center" maxWidth="100%" flexDirection="column">
            <Center paddingTop='5%'>
                <Text as='b' fontSize='1.2rem' color='purple.900'>Todos os cursos</Text>
            </Center>
            <motion.div ref={carousel} style={{ overflow: "hidden" }} whileTap={{ cursor: "grab" }}>
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                >
                    <EveryCourses />
                </motion.div>
            </motion.div>
        </Flex>
    );
}

export default Carousel;
