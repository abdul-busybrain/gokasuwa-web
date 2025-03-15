"use client";
import Logo from "./Logo";
import Navigation from "./Navigation";
import ThemeToggle from "./ThemeToggle";
import AuthButtons from "./AuthButtons";
import Container from "@/components/Container";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

function Header() {
  const { user } = useUser();

  return (
    <header className="mt-2 mb-12 ">
      <Container>
        <div className="flex flex-row justify-between items-center border-b p-4 gap-4">
          {!user ? (
            <Logo />
          ) : (
            <div className="flex gap-2">
              <Logo />
              <span> / </span>
              <p>
                <Link href={"/kasuwa"} className="text-gray-500">
                  Kasuwa
                </Link>
              </p>
            </div>
          )}
          <Navigation />
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <AuthButtons />
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
