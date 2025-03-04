import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const AuthButtons = () => {
  return (
    <div>
      <SignedOut>
        <div className="flex gap-2">
          <Button variant={"outline"} asChild>
            <SignInButton />
          </Button>
          <Button asChild>
            <SignUpButton />
          </Button>
        </div>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default AuthButtons;
