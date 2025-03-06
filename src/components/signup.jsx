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
import { signup } from "@/db/apiAuth"
import { useNavigate, useSearchParams } from "react-router-dom"
import { UrlState } from "@/context"

const Signup = () => {
    const [errors, setErrors] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        profile_pic: null,
    });

    const navigate = useNavigate();
    let [searchParams] = useSearchParams();
    const longLink = searchParams.get("createNew");


    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: files ? files[0] : value,
        }));
    };

    const { data, error, loading, fn: fnSignup } = useFetch(signup, formData);
    const { fetchUser } = UrlState();

    useEffect(() => {
        console.log("Data received:", data);
        console.log("Error received:", error);

        if (error === null && data) {
            navigate(`/dashboard?createNew=${longLink ? `createNew=${longLink}` : ''} `);
            fetchUser();
        }
    }, [loading, data, error]);



    const handleSignup = async () => {
        setErrors([]);
        try {
            const schema = Yup.object().shape({
                name: Yup.string().required("Name is required"),
                email: Yup.string().email("Invalid email").required("Email is required"),
                password: Yup.string().min(6, "Password must be at least 8 characters").required("Password is required"),
                profile_pic: Yup.mixed().required("Profile picture is required"),
            });
            await schema.validate(formData, { abortEarly: false });
            // api call
            console.log("Submitting formData:", formData);
            await fnSignup();

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
            <Card className="mt-0">
                <CardHeader>
                    <CardTitle>Signup</CardTitle>
                    <CardDescription>
                        Create an account and start shortening your links.
                    </CardDescription>
                    {error && <Error message={error.message} />}
                </CardHeader>

                <CardContent className="space-y-2">
                    <div className="space-y-1">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" name="name" type="text" placeholder="Enter your text here" onChange={handleInputChange} value={formData.name} />
                        {errors.name && <Error message={errors.name} />}
                    </div>
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
                    <div className="space-y-1">
                        <Label htmlFor="profile_pic">Upload Profile Picture</Label>
                        <Input id="profile_pic" name="profile_pic" type="file" accepy="image/*" onChange={handleInputChange} />
                        {errors.profile_pic && <Error message={errors.profile_pic} />}
                    </div>
                </CardContent>
                <CardFooter>
                    <Button onClick={handleSignup}>{loading ? <BeatLoader size={8} color="#0284c7" /> : "Create Account"}</Button>
                </CardFooter>
            </Card>
        </>
    )
}

export default Signup;