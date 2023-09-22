import React from 'react'
import TopBar from "@/components/Commons/TopBar";
import BottomBar from "@/components/Commons/BottomBar";
import Courses from "@/components/CoursesComponents/UI/Courses";

function AppCoursesPage() {
    return (
        <>
            <TopBar />
                <Courses />
            <BottomBar />
        </>
    )
}

export default AppCoursesPage
