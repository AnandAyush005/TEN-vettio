import { loginSchema } from "../../../schemas/authSchemas";

export async function POST(req) {
  try {
    const body = await req.json();

    // Validate request
    const parsed = loginSchema.safeParse(body);
    if (!parsed.success) {
      return new Response(
        JSON.stringify({
          error: parsed.error.issues.map((e) => e.message).join(", "),
        }),
        { status: 400 }
      );
    }

    // 👉 If validation passes, continue login logic
    // (You already have next-auth signIn handling)
    return new Response(JSON.stringify({ message: "Validation passed" }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
}
