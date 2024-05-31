"use client"

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
} from "@/components/ui/pagination"

interface PaginationProps {
    pagination: number
    onPageClick: (page: number) => void
}


export const PaginationJobs = ({ pagination, onPageClick }: PaginationProps) => {
    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    {
                        Array.from({ length: pagination }, (_item, index) => (
                            <PaginationLink key={index} onClick={() => onPageClick(index + 1)}>{index + 1}</PaginationLink>
                        ))
                    }
                </PaginationItem>
            </PaginationContent>
        </Pagination>

    )
}