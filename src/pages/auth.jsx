import Login from "@/components/login";
import Signup from "@/components/signup";
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { UrlState } from "@/context";
import { TabsContent } from "@radix-ui/react-tabs";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom"

const Auth = () => {

  const [searchParams] = useSearchParams();
  const longLink = searchParams.get("createNew");
  const navigate = useNavigate();

  const { isAuthenticated, loading } = UrlState();

  useEffect(() => {
    if (isAuthenticated && !loading) {
      navigate(`/dashboard?createNew=${longLink ? `createNew=${longLink}` : ''}`);
    }
  }, [isAuthenticated, loading]);

  return (
    <div className="flex flex-col items-center pt-10 gap-10 min-h-screen bg-slate-900">
      <h1 className="text-4xl font-bold leading-tight sm:text-2xl lg:text-5xl text-slate-100">
        {searchParams.get("createNew") ? "Hold Up! Lets login first" : "Login / Sign Up"}
      </h1>
      <Tabs defaultValue="login" className="w-[330px]">
        <TabsList className="grid p-1 h-12 border border-slate-500 w-full grid-cols-2">
          <TabsTrigger value="login" className="text-slate-200 font-semibold h-10">Login</TabsTrigger>
          <TabsTrigger value="signup" className="text-slate-200 font-semibold h-10">Signup</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Login />
        </TabsContent>
        <TabsContent value="signup">
          <Signup />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Auth