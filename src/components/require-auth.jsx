import { useNavigate } from "react-router-dom";
import { UrlState } from "../context";
import { useEffect } from "react";
import { BarLoader } from "react-spinners";
import { useState } from "react";

export default function RequireAuth({ children }) {
    const navigate = useNavigate();
    const { isAuthenticated, loading } = UrlState();
    const [timedOut, setTimedOut] = useState(false);

    useEffect(() => {
        if (!isAuthenticated && !loading) {
            navigate("/auth", { replace: true });
        }
    }, [isAuthenticated, loading, navigate]);

    useEffect(() => {
        const timer = setTimeout(() => setTimedOut(true), 5000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return timedOut ? <p>Loading taking too long...</p> : <BarLoader width={"100%"} color="#36d7b7" />;
    
    if (isAuthenticated) return children;

    return null;
}
