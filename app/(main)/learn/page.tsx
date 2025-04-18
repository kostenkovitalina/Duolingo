import React from 'react';
import {StickyWrapper} from "@/components/sticky-wrapper";
import {FeedWrapper} from "@/components/feed-wrapper";
import {Header} from "@/app/(main)/learn/header";
import {UserProgress} from "@/components/user-progress";
import {getCourseProgress, getLessonPercentage, getUnits, getUserProgress} from "@/db/queries";
import {redirect} from "next/navigation";
import {Unit} from "@/app/(main)/learn/unit";
import {lessons, units as unitsSchema} from "@/db/schema";

const LearnPage = async () => {
    const userProgressData = getUserProgress()
    const unitsData = getUnits()
    const courseProgressData = getCourseProgress()
    const lessonPercentageData = getLessonPercentage()

    const [
        userProgress,
        units,
        courseProgress,
        lessonPercentage
    ]
        = await Promise.all([
        userProgressData,
        unitsData,
        courseProgressData,
        lessonPercentageData
    ])

    console.log(userProgress)

    if (!userProgress || !userProgress.activeCourse) {
        return redirect('/courses')
    }

    if (!courseProgress) {
        return redirect('/courses')
    }

    return (
        <div className='flex flex-row-reverse gap-[48px] px-6'>
            <StickyWrapper>
                <UserProgress
                    activeCourses={userProgress.activeCourse}
                    hearts={userProgress.hearts}
                    points={userProgress.point} //Todo: fix 5 point on 0
                    hasActiveSubscription={false}
                />
            </StickyWrapper>
            <FeedWrapper>
                <Header title={userProgress.activeCourse.title}/>
                {units.map((unit) => (
                    <div key={unit.id} className='mb-10'>
                        <Unit
                            id={unit.id}
                            order={unit.order}
                            description={unit.description}
                            title={unit.title}
                            lessons={unit.lessons}
                            activeLesson={courseProgress.activeLesson as typeof lessons
                                .$inferSelect & {
                                unit: typeof unitsSchema.$inferSelect
                            } | undefined}
                            activeLessonPercentage={lessonPercentage}
                        />
                    </div>
                ))}
            </FeedWrapper>
        </div>
    );
};

export default LearnPage

