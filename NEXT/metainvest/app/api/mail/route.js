import { Resend } from "resend";
import KoalaWelcomeEmail from "@/emails";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { email, CustomerEmail, telephone, adresse, message } =
      await request.json();

    // Log what we're working with
    // console.log("User data:", { email, userFirstname });

    const { data, error } = await resend.emails.send({
      from: "MetaInvest <onboarding@resend.dev>",
      to: [email],
      subject: "MetaInvest — Contact Form 📩",
      react: KoalaWelcomeEmail({ CustomerEmail, telephone, adresse, message }),
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
