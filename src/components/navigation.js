"use client";
import Link from "next/link";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Image from "next/image";

const Navigation = () => {
  const session = useSession();
  console.log(session);

  const handleSignIn = () => {
    signIn("google", { callbackUrl: "/profile" });
  };
  const handleSignOut = () => {
    signOut({ callbackUrl: "/" }); // Redirect to homepage after sign out
  };
  return (
    <div className="hidden md:flex items-center space-x-4">
      <Link
        // onClick={scrollToMoreCourses}
        href="/courses"
        className="font-lato text-gray-600 hover:text-black"
      >
        Browse
      </Link>
      <Link
        href="/counselling"
        // onClick={() => setShowCounsellingPopup(true)}
        className="font-lato text-gray-600 hover:text-black"
      >
        Counselling
      </Link>

      {session?.data ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <Image
                src={session?.data?.user.image || "/default-profile.png"} // Fallback image
                width={30}
                height={30}
                alt={session?.data?.user.name || "User"}
                className="rounded-full" // Circular image
              />
              {session?.data?.user.name}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white shadow-lg p-2 rounded-md">
            <DropdownMenuItem>
              <Button
                variant="ghost"
                onClick={handleSignOut}
                className="w-full text-left"
              >
                Sign Out
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button
          onClick={handleSignIn}
          className="bg-[#00ff00] text-black px-4 py-2 rounded-lg font-lato"
        >
          Sign In
        </Button>
      )}
    </div>
  );
};

export default Navigation;
