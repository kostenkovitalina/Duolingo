import dotenv from "dotenv"
import * as schema from '../db/schema'
import {neon} from "@neondatabase/serverless"
import {drizzle} from "drizzle-orm/neon-http"

dotenv.config({path: ".env.local"})

console.log("DATABASE_URL:", process.env.DATABASE_URL)

const sql = neon(process.env.DATABASE_URL!)
const db = drizzle(sql, {schema})

const main = async () => {
    try {
        console.log('Seeding database')

        await db.delete(schema.courses)
        await db.delete(schema.userProgress)
        await db.delete(schema.units)
        await db.delete(schema.lessons)
        await db.delete(schema.challenges)
        await db.delete(schema.challengeProgress)
        await db.delete(schema.challengeOptions)

        await db.insert(schema.courses).values([
            {
                id: 1,
                title: 'Spanish',
                imageSrc: '/flags/es.svg'
            }, {
                id: 2,
                title: 'Japan',
                imageSrc: '/flags/jp.svg'
            }, {
                id: 3,
                title: 'Italian',
                imageSrc: '/flags/it.svg'
            }, {
                id: 4,
                title: 'French',
                imageSrc: '/flags/fr.svg'
            },
        ])

        await db.insert(schema.units).values([
            {
                id: 1,
                courseId: 1, //Spanish
                title: 'Unit 1',
                description: 'Learn the basic of Spanish',
                order: 1,
            }
        ])

        await db.insert(schema.lessons).values([
            {
                id: 1,
                unitId: 1, // Unit 1
                title: 'Nouns',
                order: 1,
            },
            {
                id: 2,
                unitId: 1, // Unit 1
                title: 'Verbs',
                order: 2,
            },
        ])

        await db.insert(schema.challenges).values([
            {
                id: 1,
                lessonId: 1, //Nouns
                type: 'SELECT',
                order: 1,
                question: 'Which one of these is the "the man"?'
            },
            {
                id: 2,
                lessonId: 2, //Verbs
                type: 'SELECT',
                order: 2,
                question: 'Which one of these means "to run"?'
            }
        ])

        await db.insert(schema.challengeOptions).values([
            {
                id: 1,
                challengeId: 1,
                imageSrc: '/man.svg',
                correct: true,
                text: 'es hombre',
                audioSrc: '/es_man.mp3'
            },
            {
                id: 2,
                challengeId: 1,
                imageSrc: '/woman.svg',
                correct: true,
                text: 'la mujer',
                audioSrc: '/es_woman.mp3'
            },
            {
                id: 3,
                challengeId: 1,
                imageSrc: '/robot.svg',
                correct: true,
                text: 'el robot',
                audioSrc: '/es_robot.mp3'
            }
        ])

        console.log('Seeding finished')
    } catch (error) {
        console.error(error)
        throw new Error('Failed to seed the database')
    }
}

void main()
