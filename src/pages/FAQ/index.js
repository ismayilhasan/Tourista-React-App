import React from "react";
import "./style.scss";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { MinusIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
function FAQ() {
  return (
    <>
      <section id="FAQ" className="faq-hero-container">
        <div className="text-area">
          <h1 className="title">FAQ</h1>
          <div className="sub-title">Unlocking the Mysteries of Travel: Your Questions, Our Journey.</div>
        </div>
      </section>
      <section id="FaqAccardion" className="faq-hero-container">
        <Accordion>
          <AccordionItem
            borderBottom={"1px solid #E3E7EB"}
            py={"32px"}
            px={"60px"}
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      <Flex align={"center"} gap={"12px"}>
                        <Heading fontSize={"40px"} color={"#4A21EF"}>
                          01
                        </Heading>
                        <Heading fontSize={"20px"}>What are the best tips for finding budget-friendly travel accommodations?</Heading>
                      </Flex>
                    </Box>
                    {isExpanded ? (
                      <MinusIcon borderRadius={"50%"} bg={"#4A21EF"} color={"#fff"} zIndex={"-1"} padding={"20px"} fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem
            borderBottom={"1px solid #E3E7EB"}
            py={"32px"}
            px={"60px"}
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      <Flex align={"center"} gap={"12px"}>
                        <Heading fontSize={"40px"} color={"#4A21EF"}>
                          02
                        </Heading>
                        <Heading fontSize={"20px"}>How can I find authentic local experiences when traveling?</Heading>
                      </Flex>
                    </Box>
                    {isExpanded ? (
                      <MinusIcon borderRadius={"50%"} bg={"#4A21EF"} color={"#fff"} zIndex={"-1"} padding={"20px"} fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

          <AccordionItem
            borderBottom={"1px solid #E3E7EB"}
            py={"32px"}
            px={"60px"}
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      <Flex align={"center"} gap={"12px"}>
                        <Heading fontSize={"40px"} color={"#4A21EF"}>
                          03
                        </Heading>
                        <Heading fontSize={"20px"}>What should I pack for a long-term trip or backpacking adventure?</Heading>
                      </Flex>
                    </Box>
                    {isExpanded ? (
                      <MinusIcon borderRadius={"50%"} bg={"#4A21EF"} color={"#fff"} zIndex={"-1"} padding={"20px"} fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          
          <AccordionItem
            borderBottom={"1px solid #E3E7EB"}
            py={"32px"}
            px={"60px"}
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      <Flex align={"center"} gap={"12px"}>
                        <Heading fontSize={"40px"} color={"#4A21EF"}>
                          04
                        </Heading>
                        <Heading fontSize={"20px"}>What should I pack for a long-term trip or backpacking adventure?</Heading>
                      </Flex>
                    </Box>
                    {isExpanded ? (
                      <MinusIcon borderRadius={"50%"} bg={"#4A21EF"} color={"#fff"} zIndex={"-1"} padding={"20px"} fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        
          <AccordionItem
            borderBottom={"1px solid #E3E7EB"}
            py={"32px"}
            px={"60px"}
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      <Flex align={"center"} gap={"12px"}>
                        <Heading fontSize={"40px"} color={"#4A21EF"}>
                          05
                        </Heading>
                        <Heading fontSize={"20px"}>What are the visa requirements for popular tourist destinations?</Heading>
                      </Flex>
                    </Box>
                    {isExpanded ? (
                      <MinusIcon borderRadius={"50%"} bg={"#4A21EF"} color={"#fff"} zIndex={"-1"} padding={"20px"} fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </section>
    </>
  );
}

export default FAQ;
