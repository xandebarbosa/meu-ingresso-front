import { useParams } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

function EventForm() {
  const params = useParams();

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <h1>{params.id ? "Editando Evento" : "Novo Evento"}</h1>
    </Flex>
  );
}

export default EventForm;
