import { SignIn, SignInButton, SignUpButton, SignedOut } from "@clerk/nextjs";
export default function Page() {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-centers-">
        <SignedOut>
          <SignIn routing="hash" />
        </SignedOut>
      </div>
    </>
  );
}
