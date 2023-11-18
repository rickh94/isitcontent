import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { env } from "~/env.mjs";

const openai = new OpenAI({
  apiKey: env.OPENAI_API_KEY,
});

export const runtime = "edge";

export async function POST(req: Request) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { prompt } = await req.json();
  if (!prompt || !(typeof prompt === "string")) {
    return new Response(JSON.stringify({ error: "Invalid request" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const response = await openai.completions.create({
    model: "gpt-3.5-turbo-instruct",
    stream: true,
    temperature: 0.7,
    max_tokens: 150,
    prompt: prompt,
  });

  const stream = OpenAIStream(response);

  return new StreamingTextResponse(stream);
}
