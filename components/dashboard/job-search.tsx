"use client"

import { useState } from "react"
import { Search } from "./search"
import { TableCard } from "./table"
import { JobPost } from "@/types"
import { EmptyCard } from "./empty-card"
import { Jobs } from "@/actions/jobs"
import { Sidebar } from "./sidebar"

export const JobSearch = () => {
    const [result, setResult] = useState<JobPost[]>([])
    const [pagination, setPagination] = useState<number>(1)
    const [query, setQuery] = useState("")
    const [selectedJob, setSelectedJob] = useState<JobPost | null>(null)

    const onPAginationClick = async (page: number) => {
        const res = await Jobs(query, page)
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
        <div className="space-y-20">
            <div className="w-full flex items-center mx-auto">
                <Search setResult={setResult} setPagination={setPagination} query={query} setQuery={setQuery} />
            </div>
            <div className="w-full flex gap-x-16">
                <div className="w-[700px] mx-auto">
                    {
                        result?.length > 0 ? (
                            <TableCard jobs={result} pagination={pagination} onPageClick={onPAginationClick} setSelectedJob={setSelectedJob} />
                        ) : (
                            <EmptyCard />
                        )
                    }
                </div>

                {
                    selectedJob &&
                    <div className="w-[700px]"><Sidebar job={selectedJob} /></div>
                }
            </div>
        </div>
    )
}