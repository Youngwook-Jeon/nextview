"use client";

import { trpc } from "@/trpc/client";

export const PageClient = () => {
  const [data] = trpc.hello.useSuspenseQuery({
    text: "Lucas!",
  });
  
  return <div>PageClient: {data.greeting}</div>;
};
