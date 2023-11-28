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
import GoogleImage from "../../assets/images/googleLoginItem.png"
import AppleImage from "../../assets/images/appleLogin.png"
import FacebookImage from "../../assets/images/FaceBookLogin.png"
import { ViewOffIcon, ViewIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

function SignIn() {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <section id="LoginPage">
      <Flex justifyContent={"center"}>
        <Box w="50%">
          <Image src={loginImage} w="100%" alt="Dan Abramov" height={"100vh"} />
        </Box>

        <Box
          textAlign={"center"}
          w={"50%"}
          paddingY={"120px"}
          paddingX={"126px"}
        >
          <Heading fontSize={"24px"} mb={4} textAlign="left" marginY={"36px"}>
            Sign in for your exciting journey
          </Heading>
          <FormControl id="email" mb={4}>
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password" mb={6}>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input type={showPassword ? "text" : "password"} />
              <InputRightElement width="3rem">
                <Button
                  h="1.5rem"
                  size="sm"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Button backgroundColor={"#4A21EF"} color={"#fff"} w="100%" borderRadius="24px" mb={"23px"}>
            Sign In
          </Button>
          <Link>
            Forgot Password
          </Link>


          <Box mx="auto">
                <Text>or use one of this</Text>

                <Flex justifyContent="center" gap="16px" marginTop="40px">
                    <Button w="158px" borderRadius="24px" bg="#fff" border="1px" borderColor="#E3E7EB">
                        <Image src={GoogleImage}/>
                    </Button>
                    <Button w="158px" borderRadius="24px" bg="#fff" border="1px" borderColor="#E3E7EB">
                        <Image src={AppleImage}/>
                    </Button>
                    <Button w="158px" borderRadius="24px" bg="#fff" border="1px" borderColor="#E3E7EB">
                        <Image src={FacebookImage}/>
                    </Button>
                </Flex>

                <Text mt="30px">Dont Have and account? <span style={{color:"#4A21EF"}}>Create one for new Adventure</span></Text>
          </Box>
        </Box>
        
      </Flex>
    
    </section>
  );
}

export default SignIn;
