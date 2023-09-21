import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <section className="p-5">
        <h1 className=" text-lg font-bold text-center mb-2">Primary Button</h1>
        <Button size="lg" type="primary">
          Primary
        </Button>
      </section>

      <section className="p-5">
        <h1 className=" text-lg font-bold text-center mb-2">Outline Button</h1>
        <Button size="md" type="outline">
          Primary
        </Button>
      </section>
      <section className="p-5 text-center">
        <h1 className=" text-lg font-bold text-center mb-2">Disable Button</h1>
        <Button className="text-center" size="sm" type="disabled">
          Primary
        </Button>
      </section>
    </main>
  );
}
