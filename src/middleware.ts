import { authMiddleware } from "@clerk/nextjs";


export default authMiddleware({
  publicRoutes: ["/", "/sign-in"]
  // ignoredRoutes: ["/sign-in"]
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/(api|trpc)(.*)"]
};
