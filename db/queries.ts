import db from "@/db/drizzle";
import {eq} from "drizzle-orm";
import {courses, userProgress} from "@/db/schema";
import {auth} from "@clerk/nextjs/server"
import {cache} from "react";

export const getCourses = cache(async () => {
    const data = await db.query.courses.findMany();

    return data;
});

export const getUserProgress = cache(async () => {
    const {userId} = await auth();

    if (!userId) return null;

    const data = await db.query.userProgress.findFirst({
        where: eq(userProgress.userId, userId),
        with: {
            activeCourse: true,
        },
    });

    return data;
});

export const getCourseById = cache(async (courseId: number) => {
    console.log("Course ID:", courseId, typeof courseId)

    const data = await db.query.courses.findFirst({
        where: eq(courses.id, courseId)
    })

    return data;
})