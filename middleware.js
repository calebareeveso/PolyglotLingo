export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/",
    "/instructions",
    "/memorisation",
    "/practice",
    "/repetition",
    "/results/previous",
    "/results/view",
    "/speedandaccuracy",
  ],
};
