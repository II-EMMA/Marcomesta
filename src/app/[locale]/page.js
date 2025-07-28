import Boot from "@/sections/boot/Boot";
import Clients from "@/sections/clients/Clients";
import Fields from "@/sections/fields/Fields";
import HomePage from "@/sections/home/HomePage";
import Image from "@/sections/image/Image";
import Read from "@/sections/read/Read";

export default function Home() {
  return (
    <>
      <main className="overflow-x-hidden">
        <HomePage />
        <Read />
        <Image />
        <Fields />
        <Boot />
        <Clients />
      </main>
    </>
  );
}
