import {integer, pgTable, serial, text} from "drizzle-orm/pg-core";
import {relations} from "drizzle-orm";

export const courses = pgTable('courses', {
    id: serial('id').primaryKey(),
    title: text('title').notNull(),
    imageSrc: text('image_src').notNull(),
})

export const userProgress = pgTable('user_progress', {
    userId: text('user_id').primaryKey(),
    userName: text('user_name').notNull().default('User'),
    userImageSrc: text('user_image_src').notNull().default('/mascot.svg'),
    activeCourseId: integer('active_course_id')
        .references(() => courses.id, {onDelete: 'cascade'}),
    hearts: integer('hearts').notNull().default(5),
    point: integer('point').notNull().default(5),
})

export const coursesRelation = relations(courses, ({many}) => ({
    userProgress: many(userProgress)
}))