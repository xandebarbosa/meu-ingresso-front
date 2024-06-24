// Chakra imports
import { Flex } from "@chakra-ui/react";
import React from "react";
import Projects from "./components/Projects";

function Events() {
  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Projects title={"Eventos"} />
    </Flex>
  );
}

export default Events;
