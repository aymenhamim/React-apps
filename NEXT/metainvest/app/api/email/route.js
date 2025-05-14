import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request, res) {
  const { email, name, message } = await request.json();

  const { data, error } = await resend.emails.send({});
}
