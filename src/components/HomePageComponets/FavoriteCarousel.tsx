import { useEffect, useRef, useState } from 'react';

import { motion } from 'framer-motion';
import { Flex, Text } from "@chakra-ui/layout";
import Favorite from './Favorite';

function FavoriteCarousel() {
    const carousel = useRef<HTMLDivElement | null>(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (carousel.current) {
            console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth);
            setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth || 0);
        }
    }, []);

    return (
        <>
            <Text as='b' fontSize='1.2rem' color='purple.900' ml="5%">Cursos Favoritos</Text>
            <Flex w="100%" justifyContent="center" maxWidth="100%" flexDirection="column">
                <motion.div ref={carousel} style={{ overflow: "hidden" }}>
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        initial = {{ x: 100}}
                        animate = {{ x: 0 }}
                        transition={{ duration: 0.80}}
                    >
                        <Favorite />
                    </motion.div>
                </motion.div>
            </Flex>
        </>
    );
}

export default FavoriteCarousel;
