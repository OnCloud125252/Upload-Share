import { ThemeSwitch } from "@/components/ThemeSwitch";
import { Skeleton } from "@/components/ui/skeleton";
import {
  UserButton,
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton
} from "@clerk/nextjs";


export default function NavBar() {
  return (
    <nav className="container flex h-14 max-w-screen-2xl items-center justify-between">
      <ClerkLoading>
        <Skeleton className="h-8 w-8 rounded-full cursor-not-allowed" />
      </ClerkLoading>
      <ClerkLoaded>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <SignInButton
            afterSignInUrl="/"
            children={
              <p className="h-8 w-20 rounded-md cursor-pointer flex items-center justify-center bg-foreground text-primary-foreground">
                Sign in
              </p>
            }
          />
        </SignedOut>
      </ClerkLoaded>
      <ThemeSwitch />
    </nav>
  );
}
