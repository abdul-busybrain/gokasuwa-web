"use client";
import Logo from "./Logo";
import Navigation from "./Navigation";
import ThemeToggle from "./ThemeToggle";
import AuthButtons from "./AuthButtons";
import Container from "@/components/Container";

function Header() {
  return (
    <header className="mt-2 mb-12 ">
      <Container>
        <div className="flex flex-row justify-between items-center border-b p-4 gap-4">
          <Logo />
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
