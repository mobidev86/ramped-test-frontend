"use server";

import { Endpoints } from "@/constants/endpoints";
import { RegisterSchema } from "@/schemas";
import * as z from "zod";
import axios from "axios";

export const Register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success) return { error: "Invalid Fields!" }

    try {
        const res = await axios.post(Endpoints.REGISTER, validatedFields.data)
        return {success : res?.data?.message}
    } catch (error : any) {
        console.log(error?.response?.data?.message)
        return {error : error?.response?.data?.message}
    }
};
