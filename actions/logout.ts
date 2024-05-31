"use server"

import { removeCookie } from "@/utils/cookies"

export const Logout = () => {
    removeCookie("token")
    removeCookie("email")
}