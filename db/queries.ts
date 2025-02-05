import {revalidateTag} from "next/cache";
import db from "@/db/drizzle";
import {eq} from "drizzle-orm";
import {userProgress} from "@/db/schema";
import { auth } from "@clerk/nextjs/server"


export const getUserProgress = async () => {
     revalidateTag("user_progress");
    const { userId } = await auth();
    console.log(userId, 'userId');

    if (!userId) return null;

    const data = await db.query.userProgress.findFirst({
        where: eq(userProgress.userId, userId),
        with: {
            activeCourse: true,
        },
    })

    console.log(auth, 'auth')
    return data
}

export const getCourses = async () => {
    revalidateTag("courses");
    const data = await db.query.courses.findMany()
    return data
};

