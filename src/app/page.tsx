import { FileUpload } from "@/components/FileUpload";
import NavBar from "@/components/NavBar";


export default async function HomePage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <NavBar />
      <main className="flex-1 flex items-center justify-center">
        <FileUpload />
      </main>
    </div>
  );
}
