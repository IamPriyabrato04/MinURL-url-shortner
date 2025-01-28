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


const Header = () => {
    const navigate = useNavigate();
    const user = false;
    return (
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
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>PS</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            {/* <DropdownMenuSeparator /> */}
                            <DropdownMenuItem className="text-slate-200 font-semibold">
                                <LinkIcon className="mr-2 text-slate-200 font-semibold" size={20} />My Links
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-500 font-semibold" onClick={() => navigate("/auth")}>
                                <LogOutIcon className="mr-2 text-red-500 font-semibold" size={20} />Log Out
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                }
            </div>
        </nav>
    )
};

export default Header;