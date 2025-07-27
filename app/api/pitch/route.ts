import { auth } from "@/auth";
import { writeClient } from "@/sanity/lib/Write-client";
import slugify from "slugify";

export async function POST(req: Request) {
  const body = await req.json();
  const session = await auth();

  if (!session) return Response.json({ status: "ERROR", error: "Not signed in" });

  const { title, description, category, image, pitch } = body;
  const slug = slugify(title, { lower: true, strict: true });

  try {
    const result = await writeClient.create({
      _type: "startup",
      title,
      description,
      category,
      image,
      slug: {
        _type: "slug",
        current: slug,
      },
      author: {
        _type: "reference",
        _ref: session.id,
      },
      pitch,
    });

    return Response.json({ status: "SUCCESS", _id: result._id });
  } catch (error) {
    return Response.json({ status: "ERROR", error: error });
  }
}
