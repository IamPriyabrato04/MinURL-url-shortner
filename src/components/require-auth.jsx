import { useNavigate } from "react-router-dom";
import { UrlState } from "../context";
import { useEffect } from "react";
import { BarLoader } from "react-spinners";

export default function RequireAuth({ Children }) {
    const navigate = useNavigate();
    const { isAuthenticated, loading } = UrlState();

    useEffect(() => {
        if (!isAuthenticated && loading === false) {
            navigate("/auth")
        }
    }, [isAuthenticated, loading]);

    if (loading) return <BarLoader width={"100%"} color="#36d7b7" />;

    if (isAuthenticated) return Children;
}
