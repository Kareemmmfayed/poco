import Image from "next/image";

export default function Home() {
  return (
    <div style={{ height: "87vh" }}>
      <Image src="/logo.svg" alt="picture" fill />
    </div>
  );
}
