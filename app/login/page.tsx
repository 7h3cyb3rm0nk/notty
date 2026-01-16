import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="flex items-center bg-background justify-center min-h-screen dark">
      <Card className="w-[350px] ">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Enter your email to access your account.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 dark">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="example@example.com" />
          </div>
          <Button className="w-full">Sign In</Button>
          <div className="text-center text-sm text-muted-foreground">
            <Link href="/" className="hover:underline ">Back to Home</Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
