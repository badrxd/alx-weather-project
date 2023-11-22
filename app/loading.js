import Image from "next/image";
import sun from "@/public/sunny.svg";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <main>
      <div className="main-loading">
        <Image src={sun} width={300} height={300} alt="Picture of the author" />
      </div>
    </main>
  );
}
