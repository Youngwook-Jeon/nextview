import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center space-x-2">
      <Image src="/logo.svg" height={50} width={50} alt="logo" />
      <p className="text-xl font-semibold tracking-tighter">NextView</p>
    </div>
  );
}
