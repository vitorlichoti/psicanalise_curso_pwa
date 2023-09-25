'use client';

import React from "react";

import Image from 'react-bootstrap/Image';
import {Center, Flex} from "@chakra-ui/react"

function ImageInicial({src}:{src:string}) {
  return (
    <Center w='90%' bg='#ffff' style={{borderRadius:"10px"}} mt="10px">
      <Flex flexDirection='row' alignItems='center' justifyContent='space-around'>

        <Image
          style={{
            width: '100%',
            height: '100%'
          }}
          src="data:image/jpeg;base64,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" 
          alt="imagem inicial"
          fluid 
        />
        <Flex flexDirection="column" w="60%" ml="5%">
          <h2 style={{
            fontSize:"1rem",
            fontWeight:"bold",
            color:"#3E3F5E"
            }}
          >Campus Virtual</h2>
          <p style={{
            fontSize:".9rem",
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


