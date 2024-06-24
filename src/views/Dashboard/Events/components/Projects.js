import React from "react";
import { FaPlus } from "react-icons/fa";
import { useHistory } from "react-router-dom";
// Chakra imports
import {
  Button,
  Flex,
  Grid,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar4 from "assets/img/avatars/avatar4.png";
import avatar6 from "assets/img/avatars/avatar6.png";
import imageArchitect1 from "assets/img/ImageArchitect1.png";
import imageArchitect2 from "assets/img/ImageArchitect2.png";
import imageArchitect3 from "assets/img/ImageArchitect3.png";
// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import EventCard from "./EventCard";

const EventsList = ({ title, description }) => {
  const history = useHistory();

  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card p="16px">
      <CardHeader p="12px 5px" mb="12px">
        <Flex direction="column">
          <Text fontSize="lg" color={textColor} fontWeight="bold">
            {title}
          </Text>
          <Text fontSize="sm" color="gray.500" fontWeight="400">
            {description}
          </Text>
        </Flex>
      </CardHeader>
      <CardBody px="5px">
        <Grid
          templateColumns={{ sm: "1fr", md: "1fr 1fr", xl: "repeat(4, 1fr)" }}
          templateRows={{ sm: "1fr 1fr 1fr auto", md: "1fr 1fr", xl: "1fr" }}
          gap="24px"
        >
          <Button
            p="0px"
            bg="transparent"
            color="gray.500"
            border="1px solid lightgray"
            borderRadius="15px"
            minHeight={{ sm: "200px", md: "100%" }}
            onClick={() => history.push("/admin/events/form")}
          >
            <Flex direction="column" justifyContent="center" align="center">
              <Icon as={FaPlus} fontSize="lg" mb="12px" />
              <Text fontSize="lg" fontWeight="bold">
                Criar novo evento
              </Text>
            </Flex>
          </Button>
          <EventCard
            image={imageArchitect1}
            name={"22 setembro 2024 19:00 - 23:00"}
            category={"Festa São João"}
            description={
              "A maior festa junina do Brasil, com muita comida, bebida e música boa!"
            }
            avatars={[avatar2, avatar4, avatar6]}
            count={110}
          />
          <EventCard
            image={imageArchitect2}
            name={"13 setembro 2024 19:00 - 23:00"}
            category={"Festa do Axé"}
            description={
              "A festa mais animada do Brasil, com muita música, bebida e diversão!"
            }
            avatars={[avatar4, avatar2, avatar6, avatar4]}
            count={20}
          />
          <EventCard
            image={imageArchitect3}
            name={"14 setembro 2024 19:00 - 23:00"}
            category={"Festa do Rock"}
            description={
              "A festa mais rock'n roll do Brasil, com muita música, bebida e diversão!"
            }
            avatars={[avatar2, avatar4, avatar6]}
            count={30}
          />
          <EventCard
            image={imageArchitect1}
            name={"22 setembro 2024 19:00 - 23:00"}
            category={"Festa São João"}
            description={
              "A maior festa junina do Brasil, com muita comida, bebida e música boa!"
            }
            avatars={[avatar2, avatar4, avatar6]}
            count={110}
          />
          <EventCard
            image={imageArchitect2}
            name={"13 setembro 2024 19:00 - 23:00"}
            category={"Festa do Axé"}
            description={
              "A festa mais animada do Brasil, com muita música, bebida e diversão!"
            }
            avatars={[avatar4, avatar2, avatar6, avatar4]}
            count={20}
          />
          <EventCard
            image={imageArchitect3}
            name={"14 setembro 2024 19:00 - 23:00"}
            category={"Festa do Rock"}
            description={
              "A festa mais rock'n roll do Brasil, com muita música, bebida e diversão!"
            }
            avatars={[avatar2, avatar4, avatar6]}
            count={30}
          />
        </Grid>
      </CardBody>
    </Card>
  );
};

export default EventsList;
