import React, {Dispatch} from "react";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import jwt from 'jsonwebtoken';

export async function handleLoginAuth(username: string, password: string, setError: Dispatch<React.SetStateAction<boolean>>, setLoading: Dispatch<React.SetStateAction<boolean>>, router: AppRouterInstance) {
    setLoading(true)
    fetch(`https://psicanalise.digital/?rest_route=/simple-jwt-login/v1/auth&email=${username}&password=${password}`, {
        method: "POST",
        headers: {}
    })
        .then((response) => response.json()
        )
        .then((data) => {
            setError(!data.success)
            if (!data.success) setLoading(false)
            if (data.success) {
                localStorage.setItem('token', JSON.stringify(data.data.jwt))
                fetchingUser(data.data.jwt)
                fetchingUserCourses(data.data.jwt, router, setLoading)


            }
        })
        .catch((error) => {
            setLoading(false)
            console.log(error)
        });
}

function fetchingUser(token: string) {
    fetch("https://psicanalise.digital/wp-json/wp/v2/users/me",
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    ).then((res) => res.json())
        .then((dataRes) => {
            localStorage.setItem('data', JSON.stringify(dataRes))
        })
        .catch((e) => console.log(e))
}

function fetchingUserCourses(token: any, router:any, setLoading: any) {
    const decode: any = jwt.decode(token)
    fetch(`https://psicanalise.digital/wp-json/ldlms/v2/users/${Number(decode.id)}/courses`,
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    ).then((res) => res.json())
        .then((dataRes) => {
            localStorage.setItem('user_courses', JSON.stringify(dataRes))
            if (dataRes.length > 0) {
                localStorage.setItem('course_progress', JSON.stringify([]))
                dataRes.map((e: any) => {
                    fetchCourseProgress(e.id, decode, token)
                })
                setLoading(false)
                router.push('/home')
            }
        })
        .catch((e) => console.log(e))

}

export function fetchCourseProgress(courseId: any, decode: any, token: any) {
    fetch(`https://psicanalise.digital/wp-json/ldlms/v2/users/${Number(decode.id)}/course-progress/${Number(courseId)}`,
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    ).then((res) => res.json())
        .then((dataRes) => {
            const prevState: any = localStorage.getItem('course_progress')
            const new_item: any = [...JSON.parse(prevState), dataRes[0]]
            localStorage.setItem('course_progress', JSON.stringify(new_item))
        })
        .catch((e) => console.log(e))
}