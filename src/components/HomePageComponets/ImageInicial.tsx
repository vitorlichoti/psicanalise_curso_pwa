'use client';

import React from "react";

import {Image} from "@nextui-org/react";
import {Center, Flex} from "@chakra-ui/react"

function ImageInicial({src}:{src:string}) {
  return (
    <Center w='80%' bg='#ffff' mt={10} p={5} style={{borderRadius:"10px"}}>
      <Flex flexDirection='row' alignItems='center' justifyContent='space-around'>

        <Image
            width= '100%'
            height='100%'
            src= {src
            }
            alt="NextUI hero Image"
        />
        <Flex flexDirection="column" w="100%" ml="5%">
          <h2 style={{
            fontSize:"1.2rem",
            fontWeight:"bold",
            color:"#3E3F5E"
            }}
          >Campus Virtual</h2>
          <p style={{
            fontSize:"0.7rem",
            color:'#8e8e8f',
            marginTop: '10%'
          }}
          >Cursos de psicicanálise online e precensial</p>
        </Flex>

      </Flex>
    </Center>
  );
}

export default ImageInicial


