import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    // প্রোডাকশনে গেলে এটি আপনার লাইভ ডোমেইন হবে
    baseURL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
});

// এই ফাংশনগুলোই আমরা আমাদের পেজগুলোতে ইমপোর্ট করে ব্যবহার করব
export const { signIn, signUp, signOut, useSession } = authClient;