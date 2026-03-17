"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";

export default function HealthCheck() {
  const trpc = useTRPC();
    const { data } = useSuspenseQuery(
        trpc.health.queryOptions()
    );

  return (
    <div>
      <h1>Health Check</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}