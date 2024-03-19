import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <p className="text-3xl font-bold text-indigo-500">Hello world</p>;
      <Button>Click me</Button>
    </>
  );
}
