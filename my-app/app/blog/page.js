import Link from "next/link";

export default function Blog() {
  return (
    <div >
      <Link href={"/"}>Go to home page</Link>
     <br></br>
      <Link href={"/blog/technology"}>Go to Technology page</Link>
    </div>
  );
}
 