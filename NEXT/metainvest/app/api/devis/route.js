import DemandeDevisEmail from "@/emails/devis";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const {
      email,
      name,
      entreprise,
      CustomerEmail,
      telephone,
      type,
      quantity,
      lieu,
      delay,
      budget,
      detail,
    } = await request.json();

    // Log what we're working with
    // console.log("User data:", { email, userFirstname });

    const { data, error } = await resend.emails.send({
      from: "MetaInvest <onboarding@resend.dev>",
      to: [email],
      subject: "MetaInvest — 📩 Demande Devis Form",
      react: DemandeDevisEmail({
        email,
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
      }),
    });

    if (error) {
      console.error("Resend API error:", error);
      return Response.json(error, {
        status: 500,
      });
    }

    return Response.json({ message: "Email sent successfully", data });
  } catch (error) {
    console.error("Server error:", error);
    return Response.json(
      {
        message: "An error occurred while sending the email",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
