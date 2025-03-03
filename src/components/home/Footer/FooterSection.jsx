import Container from "@/components/Container";

function FooterSection() {
  return (
    <footer className="mt-auto py-4">
      <Container className={"flex justify-between gap-4"}>
        <p className="text-sm">Gokasuwa &copy; {new Date().getFullYear()}</p>

        <p className="text-sm">
          Designed & Engineered by Abdullahi.Busybrain @ ABILabs.ng
        </p>
      </Container>
    </footer>
  );
}

export default FooterSection;
