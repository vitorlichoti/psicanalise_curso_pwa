import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import {courses} from "../../../data/mockCourse";

function ProgressIndicator() {
    const totalClasses = courses.map((e:any) => e.modules).map((e:any) => e.classes).length

    return (
        <CircularProgress value={(totalClasses / 7) * 100} size="40px" thickness='14px'>
            <CircularProgressLabel>{((totalClasses / 7) * 100).toFixed(0)}%</CircularProgressLabel>
        </CircularProgress>
    )
}

export default ProgressIndicator
