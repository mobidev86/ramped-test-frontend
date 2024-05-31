import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { JobPost } from "@/types"
import { PaginationJobs } from "./pagination-jobs"
import { Dispatch, SetStateAction } from "react"

interface TableProps {
    jobs: JobPost[]
    pagination : number
    onPageClick : (page : number) => void
    setSelectedJob : Dispatch<SetStateAction<JobPost | null>>
}

export const TableCard = ({ jobs , pagination , onPageClick , setSelectedJob }: TableProps) => {
    return (
        <Card>
            <CardHeader className="px-7">
                <CardTitle>Available Jobs</CardTitle>
                <CardDescription>Click on them to see more details.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Sr. No.</TableHead>
                            <TableHead className="hidden sm:table-cell">Job Name</TableHead>
                            <TableHead className="hidden sm:table-cell">Company Name</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            jobs?.map((job, index) => (
                                <TableRow key={index} className="bg-accent" onClick={() => setSelectedJob(job)}>
                                    <TableCell>
                                        <div className="font-medium">{index + 1}</div>
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">{job.job_name}</TableCell>
                                    <TableCell className="hidden md:table-cell">{job.company_name}</TableCell>
                                </TableRow>
                            ))
                        }

                    </TableBody>
                </Table>
            </CardContent>
            <CardFooter>
                <PaginationJobs pagination={pagination} onPageClick={onPageClick} />
            </CardFooter>
        </Card>
    )
}
