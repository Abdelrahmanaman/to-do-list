import Image from "next/image";
import { Column } from "./components/Column";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Column />
    </div>
  );
}
