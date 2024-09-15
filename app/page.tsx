import Image from "next/image";
import Link from "next/link";
import Clip from "./components/clippy-example";
import Hero from "./components/hero";
import Portfolio from "./components/portfolio";
import EmailForm from "./components/EmailForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* <Clip /> */}
      <Hero />
      <Portfolio />
      <EmailForm />
    </main>
  );
}
