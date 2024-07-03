// Chakra imports
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  Spacer,
  Stack,
  Text,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import React, { useState } from "react";
// react icons
import { BsArrowRight } from "react-icons/bs";
import { useDropzone } from "react-dropzone";

const EventRegistrationForm = ({
  eventDetails,
  handleChange,
  onDrop,
  image,
}) => {
  const textColor = useColorModeValue("gray.700", "white");
  const [startDate, setStartDate] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <Card minHeight="290.5px" p="2rem" my="4">
      <CardBody w="100%">
        <Flex flexDirection={{ sm: "column", lg: "row" }} w="100%">
          <Flex
            flexDirection="column"
            h="100%"
            lineHeight="1.6"
            width={{ lg: "45%" }}
          >
            <Stack spacing={3}>
              <Heading as="h4" size="md">
                {" "}
                Cadastrar evento
              </Heading>
              <Input
                variant="outline"
                width={500}
                placeholder="nome do evento"
                name="eventName"
                value={eventDetails.eventName}
                onChange={handleChange}
              />
              <Input
                variant="outline"
                width={500}
                placeholder="Local do evento"
                name="eventLocation"
                value={eventDetails.eventLocation}
                onChange={handleChange}
              />

              <InputGroup width={300}>
                <InputLeftAddon>Data/Hora</InputLeftAddon>
                <Input
                  placeholder="Select Date and Time"
                  size="md"
                  type="datetime-local"
                  name="eventDateTime"
                  value={eventDetails.eventDateTime}
                  onChange={handleChange}
                />
              </InputGroup>
              <Input
                variant="outline"
                width={200}
                placeholder="Lotação máxima"
                name="maxCapacity"
                value={eventDetails.maxCapacity}
                onChange={handleChange}
              />
            </Stack>
            <Box
              {...getRootProps()}
              p="2rem"
              border="2px dashed"
              borderColor="gray.200"
              borderRadius="md"
              textAlign="center"
              cursor="pointer"
              width="400px"
              mt="1.6rem"
              mb="1.6rem"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <input {...getInputProps()} />
              {image ? (
                <Image boxSize="200px" src={image} alt="Uploaded Image" />
              ) : (
                <p>
                  Arraste e solte uma imagem aqui, ou clique para selecionar um
                  arquivo
                </p>
              )}
            </Box>
            <Button colorScheme="blue">Criar</Button>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default EventRegistrationForm;
