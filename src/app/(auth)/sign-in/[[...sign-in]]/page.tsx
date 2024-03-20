import { SignIn } from "@clerk/nextjs";

import "@/styles/clerk-sign-in.css";
import "@/styles/clerk-theme.css";


export default function SignInPage() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <SignIn />
    </div>
  );
}
