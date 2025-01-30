import { Link, useNavigate } from "react-router-dom"
import { Button } from "./ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import logo from '../assets/freepik__background__80546.png';
import { LinkIcon, LogOutIcon } from "lucide-react";
import { UrlState } from "@/context";
import useFetch from "@/hooks/use-fetch";
import { BarLoader } from "react-spinners";
import { logout } from "@/db/apiAuth";


const Header = () => {
    const navigate = useNavigate();

    const { user, fetchUser } = UrlState();
    const { loading, fn: fnLogout } = useFetch(logout);

    return (
        <>
            <nav className="border-b-2 flex justify-between py-3 px-6">
                <Link to="/" className="flex items-center space-x-2">
                    <img src={logo} className="h-14" alt="logo" />
                    <h1 className="text-2xl font-bold text-indigo-600">
                        MinURL 🌐
                    </h1>
                </Link>

                <div>
                    {!user ? (<Button className=" bg-slate-100" onClick={() => navigate("/auth")}>login</Button>) :
                        <DropdownMenu>
                            <DropdownMenuTrigger className="outline-none w-10 rounded-full overflow-hidden">
                                <Avatar>
                                    <AvatarImage src={user?.user_metadata?.profile_pic} className="object-contain" />
                                    <AvatarFallback>{user?.user_metadata?.name}</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                {/* <DropdownMenuSeparator /> */}
                                <DropdownMenuItem className="text-slate-200 font-semibold">
                                    <LinkIcon className="mr-2 text-slate-200 font-semibold" size={20} />My Links
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-red-500 font-semibold">

                                    <span className="flex flex-row" onClick={() => {
                                        fnLogout().then(() => {
                                            fetchUser();
                                            navigate("/");
                                        });
                                    }}>
                                        <LogOutIcon className="mr-2 text-red-500 font-semibold" size={20}
                                        />Log Out
                                    </span>

                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    }
                </div>
            </nav>
            {loading && <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />}
        </>
    )
};

export default Header;