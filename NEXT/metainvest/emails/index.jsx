import { Body, Container, Head, Html } from "@react-email/components";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const KoalaWelcomeEmail = ({
  telephone,
  adresse,
  CustomerEmail,
  message,
  Name,
}) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <h1 style={{ textAlign: "center", margin: "1rem 0 3rem " }}>
          📩 Contact Form —
          <span
            style={{
              color: "oklch(58.5% 0.233 277.117) ",
            }}
          >
            {" "}
            Meta
          </span>
          Invest
        </h1>
        {/* Table */}
        <table
          border={"1"}
          style={{
            borderCollapse: "collapse",
            width: "90%",
            margin: "0 auto",
          }}
        >
          <tr>
            <th style={th}>
              <span>👤 </span> <span>Name</span>
            </th>
            <td style={rightTd}>{Name} </td>
          </tr>

          <tr>
            <th style={th}>
              <span>📧 </span> <span>CustomerEmail</span>
            </th>
            <td style={rightTd}>{CustomerEmail} </td>
          </tr>

          <tr>
            <th style={th}>
              <span>📞 </span> <span>Telephone</span>
            </th>
            <td style={rightTd}>{telephone} </td>
          </tr>

          <tr>
            <th style={th}>
              <span>📍 </span> <span>Adresse</span>
            </th>
            <td style={rightTd}>{adresse}</td>
          </tr>

          <tr>
            <th style={th}>
              <span>🗓️ </span> <span>Date d'envoi</span>
            </th>
            <td style={rightTd}>{new Date().toLocaleString("fr-FR")}</td>
          </tr>

          <tr>
            <th
              style={{
                border: "2px solid black",
                borderTop: "1px solid gray",
                textAlign: "left",
                padding: "10px 20px",
              }}
            >
              <span>📝</span> <span>Message</span>
            </th>
            <td style={rightTd}>{message} </td>
          </tr>
        </table>
        <p style={{ margin: "3rem 1rem" }}>
          🔗 <a href="http://localhost:3000">metalinvest.com</a> | 📞 +212 6 64
          05 50 92 | ✉️ support@metalinvest.com
        </p>
      </Container>
    </Body>
  </Html>
);

KoalaWelcomeEmail.PreviewProps = {
  userFirstname: "Alan",
};

export default KoalaWelcomeEmail;

const rightTd = {
  padding: "10px 20px",
  border: "1px solid black",
};

const th = {
  border: "1px solid black",
  padding: "10px 20px",
  display: "flex",
};

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

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};
