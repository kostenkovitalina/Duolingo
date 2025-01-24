import { revalidateTag } from "next/cache";
import db from "@/db/drizzle";

export const getCourses = async () => {
    revalidateTag("courses");
    const data = await db.query.courses.findMany();
    return data;
};
