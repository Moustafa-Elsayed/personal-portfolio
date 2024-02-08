import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_iN4BswSW_MDVQNJPfGZYxwu6MrUYQqSdo");

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "moelsayed949@gmail.com",
      subject: "Hello World",
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}