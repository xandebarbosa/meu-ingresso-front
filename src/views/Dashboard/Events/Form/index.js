import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useParams } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import { Grid, Image } from "@chakra-ui/react";
import EventRegistrationForm from "views/Dashboard/Events/components/EventRegistrationForm";
import WorkWithTheRockets from "views/Dashboard/Dashboard/components/WorkWithTheRockets";
import peopleImage from "assets/img/people-image.png";
import logoChakra from "assets/svg/logo-white.svg";
import { Ticket } from "../components/Ticket";

function EventForm() {
  const params = useParams();
  const [eventDetails, setEventDetails] = useState({
    eventName: "",
    eventLocation: "",
    eventDate: "",
    eventTimeStart: "",
    eventTimeEnd: "",
    maxCapacity: "",
    cabin: "",
    runway: "",
    premiumRunway: "",
    comments: "",
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
      //setEventDetails(reader.result);
    };
    reader.readAsDataURL(file);
  }, []);

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <h1>{params.id ? "Editando Evento" : "Novo Evento"}</h1>
      <Grid
        templateColumns={{ md: "1fr", lg: "1.8fr 1.2fr" }}
        templateRows={{ md: "1fr auto", lg: "1fr" }}
        my="26px"
        gap="24px"
      >
        <EventRegistrationForm
          eventDetails={eventDetails}
          handleChange={handleChange}
          onDrop={onDrop}
          image={image}
        />

        <Ticket eventDetails={eventDetails} />
      </Grid>
    </Flex>
  );
}

export default EventForm;
