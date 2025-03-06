import React from 'react';
import {StickyWrapper} from "@/components/sticky-wrapper";
import {FeedWrapper} from "@/components/feed-wrapper";
import {Header} from "@/app/(main)/learn/header";
import {UserProgress} from "@/components/user-progress";
import {getUserProgress} from "@/db/queries";
import {redirect} from "next/navigation";

const LearnPage = async () => {
    const userProgressData = getUserProgress()

    const [userProgress] = await Promise.all([userProgressData])

    console.log(userProgress)

    if (!userProgress || !userProgress.activeCourse) {
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
            </FeedWrapper>
        </div>
    );
};

export default LearnPage

