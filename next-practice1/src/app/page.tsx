import FirstClient from "@/components/example-client-components/first";
import FirstServer from "@/components/example-server-components/first";

export default function Home() {
  return (
    <div>
      <h1>First home page</h1>
      <FirstServer />
      <div>
        <FirstClient />
      </div>
    </div>
  );
}
