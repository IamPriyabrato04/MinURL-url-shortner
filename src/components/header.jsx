import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
            {/* Navigation Bar */}
            <nav className="border-b-2 flex items-center justify-between py-4 px-6 bg-slate-900 text-white">
                <Link to="/" className="flex items-center space-x-2">
                    <img width="48" height="48" src="/src/assets/icons8-broken-link-96.png" alt="broken-link" />
                    <h1 className="text-2xl font-bold text-indigo-100">MinURL </h1>
                </Link>

                <div>
                    {!user ? (
                        <Button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2" onClick={() => navigate("/auth")}>
                            Login
                        </Button>
                    ) : (
                        <DropdownMenu>
                            <DropdownMenuTrigger className="outline-none w-10 h-10 rounded-full overflow-hidden border-2 border-indigo-400">
                                <Avatar>
                                    <AvatarImage
                                        src={user?.user_metadata?.profile_pic || "https://via.placeholder.com/150"}
                                        className="object-cover"
                                        onError={(e) => (e.target.src = "https://via.placeholder.com/150")} // Fallback image
                                    />
                                    <AvatarFallback>
                                        {user?.user_metadata?.name?.charAt(0)?.toUpperCase() || "U"}
                                    </AvatarFallback>
                                </Avatar>

                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="bg-slate-800 text-white rounded-md shadow-lg">
                                <DropdownMenuItem className="hover:bg-slate-700 px-4 py-2 cursor-pointer">
                                    <LinkIcon className="mr-2 text-indigo-400" size={20} />
                                    <Link to="/dashboard">My Links</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    className="hover:bg-red-600 px-4 py-2 cursor-pointer text-red-400"
                                    onClick={() => {
                                        fnLogout().then(() => {
                                            fetchUser();
                                            navigate("/");
                                            console.log("User Metadata:", user?.user_metadata);
                                        });
                                    }}
                                >
                                    <LogOutIcon className="mr-2" size={20} /> Log Out
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    )}
                </div>
            </nav>

            {/* Loading Bar */}
            {loading && <BarLoader className="w-full" color="#36d7b7" />}
        </>
    );
};

export default Header;
