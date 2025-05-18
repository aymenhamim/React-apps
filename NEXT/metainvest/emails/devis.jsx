import { Body, Container, Head, Html } from "@react-email/components";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const DemandeDevisEmail = ({
  // name,
  entreprise,
  CustomerEmail,
  telephone,
  // type,
  quantity,
  lieu,
  delay,
  budget,
  detail,
}) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <h1 style={{ textAlign: "center", margin: "1rem 0 3rem " }}>
          <span style={{ color: "oklch(58.5% 0.233 277.117) " }}>Meta </span>
          Invest — 📩 Demande Devis Form
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
          {/* <tr>
            <th style={th}>
              <span>Name</span>
            </th>
            <td style={rightTd}>{name} </td>
          </tr> */}

          <tr>
            <th style={th}>
              <span>Entreprise</span>
            </th>
            <td style={rightTd}>{entreprise} </td>
          </tr>

          <tr>
            <th style={th}>
              <span>CustomerEmail</span>
            </th>
            <td style={rightTd}>{CustomerEmail} </td>
          </tr>

          <tr>
            <th style={th}>
              <span>Telephone</span>
            </th>
            <td style={rightTd}>{telephone} </td>
          </tr>

          {/* <tr>
            <th style={th}>
              <span>Type</span>
            </th>
            <td style={rightTd}>{type}</td>
          </tr> */}

          <tr>
            <th style={th}>
              <span>Quantity</span>
            </th>
            <td style={rightTd}>{quantity}</td>
          </tr>

          <tr>
            <th style={th}>
              <span>Lieu</span>
            </th>
            <td style={rightTd}>{lieu}</td>
          </tr>

          <tr>
            <th style={th}>
              <span>Delay</span>
            </th>
            <td style={rightTd}>{delay}</td>
          </tr>

          <tr>
            <th style={th}>
              <span>Budget</span>
            </th>
            <td style={rightTd}>{budget}</td>
          </tr>

          <tr>
            <th style={th}>
              <span>Detail</span>
            </th>
            <td style={rightTd}>{detail}</td>
          </tr>

          <tr>
            <th style={th}>
              <span>Date d'envoi</span>
            </th>
            <td style={rightTd}>{new Date().toLocaleString("fr-FR")}</td>
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

DemandeDevisEmail.PreviewProps = {
  userFirstname: "Alan",
};

export default DemandeDevisEmail;

const rightTd = {
  padding: "10px 20px",
  // border: "1px solid black",
};

const th = {
  border: "none",
  borderBottom: "1px solid black",
  padding: "10px 20px",
  backgroundColor: "#f2f2f2",
  minHeight: "100%",
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
