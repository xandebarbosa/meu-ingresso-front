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

export const Ticket = () => {
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
          <Text content="João da silva" isTitle />
          <QRcode />
          <Text content="Rock in Rio" />
          <Text content="Camarote" />
        </div>

        <div>
          <Text content="22 setembro 2024 - 19:00 às 20:00" />
          <Text content="Praia de copacabana" />
        </div>
      </main>
    </Card>
  );
};
