import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    InputGroup,
    InputRightElement,
    Text  
  } from "@chakra-ui/react";
  import { Image } from "@chakra-ui/react";
  import React from "react";
  import loginImage from "../../assets/images/SignImagePlaceHolder.png";
  import webLogo from '../../assets/images/Logo.jpg'
function ForgotPassword() {
  return (
    <section id="LoginPage">
    <Flex justifyContent={"center"}>
      <Box w="50%">
        <Image src={loginImage} w="100%" alt="Dan Abramov" height={"100vh"} />
      </Box>

      <Box
        textAlign={"center"}
        w={"50%"}
        paddingY={"160px"}
        paddingX={"76px"}  
      >
    
        <Heading fontSize={"24px"}  textAlign="left" mb="16px" >
        Looking to change your password?
        </Heading>
        <Text textAlign="left" mb="16px" color="#5E6F7D">
        Enter your email below and we'll send you instructions on how to reset your password.
        </Text>
     
        <FormControl id="email" mb={4} >
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
  
        <Button w="100%" bg={"blue"} color={"#fff"}>Reset my Password</Button>

      </Box>
      
    </Flex>
  
  </section>
  )
}

export default ForgotPassword