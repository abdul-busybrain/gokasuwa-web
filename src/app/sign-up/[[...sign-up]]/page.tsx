"use client";

import Container from "@/components/Container";
import { SignUp } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();

  const redirectTo = searchParams.get("redirectTo") || "/market";
  return (
    <Container className={"flex justify-center"}>
      <SignUp signInFallbackRedirectUrl={redirectTo} />
    </Container>
  );
}
