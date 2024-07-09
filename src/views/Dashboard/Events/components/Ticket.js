import { Image } from "@chakra-ui/react";
import Card from "components/Card/Card";

const Avatar = () => {
  return (
    <img
      src="https://images.pexels.com/photos/18505361/pexels-photo-18505361/free-photo-of-mulher-menina-garota-moca.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="avatar"
      style={{
        width: 200,
        height: 200,
        borderRadius: "50%",
        position: "absolute",
        bottom: -80,
        left: "50%",
        transform: "translateX(-50%)",
        objectFit: "cover",
        border: "5px solid #fff",
      }}
    />
  );
};

const QRcode = () => {
  return (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Link_pra_pagina_principal_da_Wikipedia-PT_em_codigo_QR_b.svg/800px-Link_pra_pagina_principal_da_Wikipedia-PT_em_codigo_QR_b.svg.png"
      alt="QRcode"
      style={{
        width: 300,
        height: 300,
      }}
    />
  );
};

const Text = ({ content, isTitle }) => {
  return (
    <p
      style={{
        color: "#000",
        fontSize: isTitle ? 24 : 16,
        textAlign: "center",
      }}
    >
      {content}
    </p>
  );
};

export const Ticket = ({ eventDetails, image }) => {
  if (!eventDetails) {
    return null; // ou uma mensagem de loading
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day} - ${month} - ${year}`;
  };

  return (
    <Card>
      <header
        style={{
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          height: 200,
          background:
            "linear-gradient(90deg, rgba(218,128,83,1) 26%, rgba(231,164,39,1) 49%, rgba(144,124,177,1) 94%)",
          position: "relative",
        }}
      >
        <Avatar />
      </header>
      <main
        style={{
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: 100,
          paddingBottom: 20,
          height: "100%",
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}
      >
        <div>
          {image && (
            <Image
              boxSize="200px"
              borderRadius="15px"
              src={image}
              alt="Event Image"
              mt="4"
              mb="4"
            />
          )}
        </div>
        <div>
          <Text content={eventDetails.eventName} isTitle />
          <QRcode />
        </div>

        <div>
          <Text content={eventDetails.maxCapacity} />
          <Text content={eventDetails.cabin} />
          <Text content={eventDetails.premiumRunway} />
          <Text content={eventDetails.runway} />
        </div>

        <div>
          <Text content={eventDetails.comments} />
        </div>

        <div>
          <Text content={formatDate(eventDetails.eventDate)} />
          <Text
            content={
              "Horário de inicío: " +
              eventDetails.eventTimeStart +
              " - Horário Final: " +
              eventDetails.eventTimeEnd
            }
          />
          <Text content={eventDetails.eventLocation} />
        </div>
      </main>
    </Card>
  );
};
