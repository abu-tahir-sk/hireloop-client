import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

// Better Auth স্বয়ংক্রিয়ভাবে সব GET এবং POST রিকোয়েস্ট হ্যান্ডেল করবে
export const { GET, POST } = toNextJsHandler(auth);