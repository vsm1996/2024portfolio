import Hero from "./components/hero";
import Portfolio from "./components/portfolio";
import EmailForm from "./components/EmailForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <Portfolio />
      <EmailForm />
    </main>
  );
}
