import { SignIn } from "@clerk/nextjs";

import "@/styles/clerk-sign-in.css";


export default function SignInPage() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <SignIn />
    </div>
  );
}
