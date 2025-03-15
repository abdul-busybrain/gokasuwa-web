"use client";

import Container from "@/components/Container";
import { SignIn } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";

export default function SignInPage() {
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/kasuwa";

  return (
    <Container className={"flex justify-center"}>
      <SignIn signUpFallbackRedirectUrl={redirectTo} />
    </Container>
  );
}
