import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const Signup = () => {
    return (
        <>
            <Card className="mt-2">
                <CardHeader>
                    <CardTitle>Signup</CardTitle>
                    <CardDescription>
                        Create an account and start shortening your links.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="space-y-1">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" placeholder="Enter your email here" />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" placeholder="Enter your password here" />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button>{}</Button>
                </CardFooter>
            </Card>
        </>
    )
}

export default Signup