import { JobPost } from "@/types"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import Link from "next/link"
import { Button } from "../ui/button"

interface SidebarProps {
    job: JobPost
}

export const Sidebar = ({ job }: SidebarProps) => {
    return (
        <Card>
            <CardHeader className="w-full flex justify-between items-center">
                <CardTitle>
                    {job?.job_name}
                </CardTitle>
                <a href={job.post_apply_url} target="_blank">
                    <Button variant={"link"} >
                        Apply
                    </Button>
                </a>
            </CardHeader>
            <CardContent>
                <ul className="flex flex-col gap-y-4 list-disc ml-4">
                    <li>
                        Company name : {job?.company_name}
                    </li>
                    <li>
                        Job Type : {job.job_hours}
                    </li>
                    <li>
                        Education : {job.minimum_education}
                    </li>
                    <li>
                        Minimun Compensastion : {`$${job.minimum_compensation}`}
                    </li>
                    <li>
                        Maximum Compensasion : {`$${job.maximum_compensation}`}
                    </li>

                    <li>
                        Company URL : {job.company_url}
                    </li>

                    <li>
                        City : {job.city}
                    </li>

                    <li>
                        Region : {job.region}
                    </li>

                    <li>
                        Country : {job.country}
                    </li>

                    <li>
                        Description : {job.job_full_text}
                    </li>
                </ul>
            </CardContent>
        </Card>
    )
}