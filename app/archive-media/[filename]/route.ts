import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { archiveMedia } from "../../lib/site";

export async function GET(_request: Request, { params }: { params: Promise<{ filename: string }> }) {
  const { filename } = await params;
  if (!archiveMedia || !/^[a-z-]+\.jpg$/.test(filename)) {
    return new Response(null, { status: 404 });
  }

  try {
    const bytes = await readFile(join(process.cwd(), "assets", "archive", filename));
    return new Response(new Uint8Array(bytes), {
      headers: { "Content-Type": "image/jpeg", "Cache-Control": "private, max-age=0, must-revalidate" },
    });
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return new Response(null, { status: 404 });
    throw error;
  }
}
