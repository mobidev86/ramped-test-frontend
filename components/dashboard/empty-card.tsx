import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"

export const EmptyCard = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    No Data
                </CardTitle>
                <CardDescription>
                Please serch for the other jobs.
                </CardDescription>
            </CardHeader>
        </Card>
    )
}