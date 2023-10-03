import React, {Dispatch} from "react";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

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
                fetch("https://psicanalise.digital/wp-json/wp/v2/users/me",
                    {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${data.data.jwt}`
                        }
                    }
                ).then((res) => res.json())
                    .then((dataRes) => {
                        setLoading(false)
                        router.push('/home')
                    })
                    .catch((e) => console.log(e))
            }
        })
        .catch((error) => {
            setLoading(false)
            console.log(error)
        });
}