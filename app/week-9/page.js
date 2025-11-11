"use client";

import Link from "next/link";
import { useUserAuth } from "@/app/contexts/AuthContext";

export default function LandingPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleSignIn() {
    await gitHubSignIn();
  }

  async function handleSignOut() {
    await firebaseSignOut();
  }


  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4 p-6 rounded-lg shadow-sm">
        {!user ? (
          <button
            onClick={handleSignIn}
            className="px-4 py-2 border border-gray-300 text-white rounded hover:bg-gray-100 bg-gradient-to-br from-blue-400 to-blue-900 "
          >
            Log In
          </button>
        ) : (
          <>
            <p className="text-lg font-medium text-white text-center">
              Welcome, {user.displayName}
              <span className="block text-sm text-gray-500">
                ({user.email})
              </span>
            </p>

            <div className="flex gap-4">
              <Link
                href="/week-9/shopping-list"
                className="inline-block px-4 py-2 border border-gray-300  text-white rounded hover:bg-gray-100 bg-gradient-to-br from-blue-400 to-blue-900"
              >
                Shopping List
              </Link>

              <button
                onClick={handleSignOut}
                className="px-4 py-2 border border-gray-300 text-white rounded hover:bg-gray-100 bg-gradient-to-br from-blue-400 to-blue-900"
              >
                Log Out
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
