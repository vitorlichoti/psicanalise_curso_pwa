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
            setLoading(false)
            if (data.success) router.push('/home')
        })
        .catch((error) => console.log(error));
}