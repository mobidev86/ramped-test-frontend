"use client"

import { Logout } from "@/actions/logout"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"

export const LogoutBtn = () => {
    const router = useRouter()

    const onLogout = () => {
        Logout()
        router.push("/auth/login")
    }
    return (
        <Button variant={'secondary'} onClick={onLogout}>
            Logout
        </Button>
    )
}