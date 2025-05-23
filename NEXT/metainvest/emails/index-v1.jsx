import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const KoalaWelcomeEmail = ({
  telephone,
  adresse,
  CustomerEmail,
  message,
}) => (
  <Html>
    <Head />
    <Body style={main}>
      <Preview>
        The sales intelligence platform that helps you uncover qualified leads.
      </Preview>

      <Container style={container}>
        {/* <Img
          src={`${baseUrl}/static/koala-logo.png`}
          width="170"
          height="50"
          alt="Koala"
          style={logo}
        /> */}
        <h1>
          📩 Contact Form —
          <span style={{ color: "oklch(58.5% 0.233 277.117)" }}> Meta</span>
          Invest
        </h1>{" "}
        <br />
        {/* <Text style={paragraph}>
          Welcome to Koala, the sales intelligence platform that helps you
          uncover qualified leads and close deals faster.
        </Text> */}
        <Text style={paragraph}>
          <b>CustomerEmail: {CustomerEmail}</b>{" "}
          <b>CustomerEmail: {CustomerEmail}</b>{" "}
        </Text>
        <Text style={paragraph}>
          <b>Télephone: {telephone}</b>{" "}
        </Text>
        <Text style={paragraph}>
          <b>Adresse: {adresse}</b>{" "}
        </Text>
        <Text style={paragraph}>
          <b>Message : {message}</b>{" "}
        </Text>
        <Text style={paragraph}>
          <b>Date d'envoi : </b> {new Date().toLocaleString("fr-FR")}
        </Text>
        {/* <Section style={btnContainer}>
          <Button style={button} href="https://getkoala.com">
            Get started
          </Button>
        </Section>
        <Text style={paragraph}>
          Best,
          <br />
          The Koala team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          470 Noor Ave STE B #1148, South San Francisco, CA 94080
        </Text> */}
      </Container>
    </Body>
  </Html>
);

KoalaWelcomeEmail.PreviewProps = {
  userFirstname: "Alan",
};

export default KoalaWelcomeEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center",
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
