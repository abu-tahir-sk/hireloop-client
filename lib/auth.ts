import { betterAuth } from "better-auth";
// ডাটাবেস অ্যাডাপ্টার ইমপোর্ট (Prisma ব্যবহার করলে নিচের লাইনগুলো আনকমেন্ট করবেন)
// import { prismaAdapter } from "better-auth/adapters/prisma";
// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();

export const auth = betterAuth({
    // ডাটাবেস যুক্ত করতে নিচের লাইনটি আনকমেন্ট করুন
    // database: prismaAdapter(prisma, { provider: "postgresql" }),

    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        },
        github: {
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        },
    },
});