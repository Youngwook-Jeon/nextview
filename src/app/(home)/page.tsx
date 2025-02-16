import { trpc } from "@/trpc/server";
import { PageClient } from "./client";

export default async function Home() {
  void trpc.hello.prefetch({ text: "Lucas" });

  return (
    <div>
      <PageClient />
    </div>
  );
}
