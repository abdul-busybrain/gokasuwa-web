"use client";
import Logo from "./Logo";
import Navigation from "./Navigation";
import ThemeToggle from "./ThemeToggle";
import AuthButtons from "./AuthButtons";

function Header() {
  return (
    <header className="flex flex-row justify-between items-center border-b p-4">
      <Logo />
      <Navigation />
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <AuthButtons />
      </div>
    </header>
  );
}

export default Header;
