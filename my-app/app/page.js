import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div >
      <Link href={"/blog"}>Go to blog page</Link>
      <Link href={"/events"}>Go to Events page</Link>
    </div>
  );
}
