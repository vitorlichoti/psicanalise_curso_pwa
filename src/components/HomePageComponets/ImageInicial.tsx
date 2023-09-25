'use client';

import React from "react";

import Image from 'react-bootstrap/Image';
import {Center, Flex} from "@chakra-ui/react"

function ImageInicial() {
  return (
    <Center w='90%' bg='#ffff' style={{borderRadius:"10px"}} mt="10%" mb="10%">
      <Flex flexDirection='row' alignItems='center' justifyContent='space-around' width="80%">

        <Image
          style={{
            width: '100%',
            height: '80%'
          }}
          src="https://academiaenlevo.com.br/wp-content/uploads/2021/04/cropped-Academia-Enlevo-Psicanalise-Clinica.png"
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
