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
import { BeatLoader } from "react-spinners"
import Error from "./error"
import * as Yup from "yup"
import { useState, useEffect } from "react"
import useFetch from "@/hooks/use-fetch"
import { login } from "@/db/apiAuth"
import { useNavigate, useSearchParams } from "react-router-dom"
import { UrlState } from "@/context"

const Login = () => {
    const [errors, setErrors] = useState([]);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();
    let [searchParams] = useSearchParams();
    const longLink = searchParams.get("createNew");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const { data, error, loading, fn: fnLogin } = useFetch(login, formData);
    const { fetchUser } = UrlState();

    useEffect(() => {
        console.log("Data received:", data);
        console.log("Error received:", error);

        if (error === null && data) {
            navigate(`/dashboard?createNew=${longLink ? `createNew=${longLink}` : ''} `);
            fetchUser();
        }
    }, [data, error]);



    const handleLogin = async () => {
        setErrors([]);
        try {
            const schema = Yup.object().shape({
                email: Yup.string().email("Invalid email").required("Email is required"),
                password: Yup.string().min(6, "Password must be at least 8 characters").required("Password is required"),
            });
            await schema.validate(formData, { abortEarly: false });
            // api call
            console.log("Submitting formData:", formData);
            await fnLogin();
        } catch (e) {
            const newErrors = {};

            e?.inner?.forEach((err) => {
                newErrors[err.path] = err.message;
            });
            setErrors(newErrors);
        }
    }


    return (
        <>
            <Card className="mt-2">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>
                        Login to your account to access your links.
                    </CardDescription>
                    {error && <Error message={error.message} />}
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="space-y-1">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" placeholder="Enter your email here" onChange={handleInputChange} value={formData.email} />
                        {errors.email && <Error message={errors.email} />}
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" name="password" type="text" placeholder="Enter your password here" onChange={handleInputChange} value={formData.password} />
                        {errors.password && <Error message={errors.password} />}
                    </div>
                </CardContent>
                <CardFooter>
                    <Button onClick={handleLogin}>{loading ? <BeatLoader size={8} color="#0284c7" /> : "Login"}</Button>
                </CardFooter>
            </Card>
        </>
    )
}

export default Login