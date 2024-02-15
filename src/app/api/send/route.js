import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_iN4BswSW_MDVQNJPfGZYxwu6MrUYQqSdo");

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "moelsayed949@gmail.com",
      subject: subject,
      react: (
        <>
          <h1>{email}</h1>
          <h1>{subject}</h1>
          <p>{message}</p>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
