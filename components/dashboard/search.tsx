"use client"

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Dispatch, SetStateAction, useState } from "react";
import { Jobs } from "@/actions/jobs";
import { JobPost } from "@/types";

interface SearchProps {
    setResult: Dispatch<SetStateAction<JobPost[]>>
    setPagination: Dispatch<SetStateAction<number>>
    setQuery: Dispatch<SetStateAction<string>>
    query: string
}

export const Search = ({ setResult, setPagination, setQuery, query }: SearchProps) => {

    const onSubmit = async (e: any) => {
        e.preventDefault()
        const res = await Jobs(query)
        if (res.data) {
            setResult(res.data)
            setPagination(res.pagination)
        }
        if (res.error) {
            setResult([])
            setPagination(1)
        }
    }

    return (
        <div className="mx-auto">
            <form action="" className="flex items-center gap-x-8" onSubmit={(e) => onSubmit(e)}>
                <Input
                    className="w-[300px]"
                    value={query}
                    placeholder="Frontend Developer"
                    type="text"
                    onChange={(e) => setQuery(e.target.value)}
                />
                <Button disabled={query.length <= 1} type="submit">
                    Search
                </Button>
            </form>
        </div>
    )
}