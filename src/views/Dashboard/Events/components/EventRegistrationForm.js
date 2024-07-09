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
  Divider,
  Textarea,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import React, { useState } from "react";
// react icons
import { BsArrowRight } from "react-icons/bs";
import { useDropzone } from "react-dropzone";
import { Separator } from "components/Separator/Separator";

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
    <Card minHeight="290.5px" p="2rem">
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
                width={400}
                placeholder="nome do evento"
                name="eventName"
                value={eventDetails.eventName}
                onChange={handleChange}
              />
              <Input
                variant="outline"
                width={400}
                placeholder="Local do evento"
                name="eventLocation"
                value={eventDetails.eventLocation}
                onChange={handleChange}
              />

              <Input
                variant="outline"
                width={200}
                placeholder="Lotação máxima"
                name="maxCapacity"
                value={eventDetails.maxCapacity}
                onChange={handleChange}
              />

              <Separator w="220%" />

              <Text pt={15}>
                <strong>Data / horários</strong>
              </Text>
              <InputGroup width={300}>
                <InputLeftAddon>Data</InputLeftAddon>
                <Input
                  placeholder="Selecionar a data do evento"
                  size="md"
                  type="date"
                  name="eventDate"
                  value={eventDetails.eventDate}
                  onChange={handleChange}
                />
              </InputGroup>

              <InputGroup width={300}>
                <InputLeftAddon>Horário inicío</InputLeftAddon>
                <Input
                  placeholder="Selecionar o horáio inicial"
                  size="md"
                  type="time"
                  name="eventTimeStart"
                  value={eventDetails.eventTimeStart}
                  onChange={handleChange}
                />
              </InputGroup>

              <InputGroup width={300}>
                <InputLeftAddon>Horário termíno</InputLeftAddon>
                <Input
                  placeholder="Selecionar o horário final"
                  size="md"
                  type="time"
                  name="eventTimeEnd"
                  value={eventDetails.eventTimeEnd}
                  onChange={handleChange}
                />
              </InputGroup>

              <Separator w="220%" mt="5px" />

              <Text pt={15}>
                <strong>Tipos / Valores ingressos</strong>
              </Text>
              <InputGroup width={300}>
                <InputLeftAddon>Camarote</InputLeftAddon>
                <Input
                  variant="outline"
                  width={200}
                  placeholder="Camarote"
                  name="cabin"
                  value={eventDetails.cabin}
                  onChange={handleChange}
                />
              </InputGroup>
              <InputGroup width={300}>
                <InputLeftAddon>Pista Premium</InputLeftAddon>
                <Input
                  variant="outline"
                  width={200}
                  placeholder="Pista premium"
                  name="premiumRunway"
                  value={eventDetails.premiumRunway}
                  onChange={handleChange}
                />
              </InputGroup>
              <InputGroup width={300}>
                <InputLeftAddon>Pista</InputLeftAddon>
                <Input
                  variant="outline"
                  width={230}
                  placeholder="Pista"
                  name="runway"
                  value={eventDetails.runway}
                  onChange={handleChange}
                />
              </InputGroup>

              <Separator w="220%" mt="5px" />

              <Text pt={15}>
                <strong>Informações sobre o evento</strong>
              </Text>
              <Textarea
                width={400}
                minHeight={150}
                placeholder="Digite informações sobre o evento"
                name="comments"
                value={eventDetails.comments}
                onChange={handleChange}
              />
            </Stack>

            <Text pt={15}>
              <strong>Imagem do evento do evento</strong>
            </Text>
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
