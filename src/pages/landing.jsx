import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {

    const [longUrl, setLongUrl] = useState("");
    const navigate = useNavigate();

    const handleShorten = (e) => {
        e.preventDefault();
        console.log(longUrl);
        if (longUrl) navigate(`/auth?createNew=${longUrl}`);
    }

    return (
        <div className="flex flex-col items-center justify-between min-h-screen bg-slate-900">
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center flex-1 w-full px-6 py-16 text-center">
                {/* <div className="w-full max-w-4xl mx-auto">
                    <img
                        src="/assets/hero-image.png"
                        alt="Hero Section"
                        className="w-full h-auto mb-8 rounded-lg shadow-lg"
                    />
                </div> */}
                <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl text-slate-100">
                    Long URLs? Not anymore. <br />
                    <span className="text-indigo-400">MinURL keeps it short and simple.</span> ✂️
                </h2>
                <p className="mt-6 text-lg sm:text-xl text-slate-300">
                    Simplify your links with our easy-to-use tool and track their performance in real time.
                </p>
                <div className="flex flex-col justify-center w-4/5 mt-8 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">

                    {/* input fields and button for url shortening */}
                    <form onSubmit={handleShorten} className="flex flex-col items-center w-full gap-2 p-4 sm:flex-row md:w-3/4">
                        <Input
                            type="url"
                            value={longUrl}
                            onChange={(e) => setLongUrl(e.target.value)}
                            placeholder="Enter your long URL"
                            className="h-12 font-medium bg-slate-700 border-slate-700 text-slate-100 focus:ring-indigo-500"
                        />
                        <Button
                            type="submit"
                            className="h-12 bg-indigo-500 hover:bg-indigo-800 text-slate-100"
                        >
                            Let&apos;s Shorten
                        </Button>
                    </form>

                </div>
            </section>


            {/* Features Section */}
            <section id="features" className="w-full px-6 py-16 bg-slate-800">
                <div className="max-w-5xl mx-auto text-center">
                    <h3 className="text-3xl font-bold text-slate-100">Why Choose MinURL?</h3>
                    <p className="mt-4 text-lg text-slate-300">
                        Here&apos;s what makes MinURL the best choice for shortening your links:
                    </p>
                    <div className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="flex flex-col items-center">
                            <span className="text-4xl text-slate-300">⚡</span>
                            <h4 className="mt-4 text-xl font-semibold text-slate-100">Fast</h4>
                            <p className="mt-2 text-slate-400">Shorten links in just seconds!</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-4xl text-slate-300">📈</span>
                            <h4 className="mt-4 text-xl font-semibold text-slate-100">Analytics</h4>
                            <p className="mt-2 text-slate-400">Track your clicks and engagement.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-4xl text-slate-300">🔒</span>
                            <h4 className="mt-4 text-xl font-semibold text-slate-100">Secure</h4>
                            <p className="mt-2 text-slate-400">Your links are safe with us.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="flex flex-col items-center justify-center w-full px-6 py-16 border border-red-700 bg-slate-800">
                <h3 className="text-5xl font-semibold text-slate-100 ">Frequently Asked Questions</h3>
                <p className="mt-4 text-2xl text-slate-300">
                    Can&apos;t find the answer you&apos;re looking for? Send us a <a href="#" className=" text-violet-500 hover:text-violet-300 underline-offset-2">message</a>.
                </p>
                <div className="flex flex-col items-center justify-center w-full mt-8 border border-red-700 ">
                    <Accordion type="single" collapsible className="w-4/5 border border-red-700 md:px-11">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-xl justify-center text">Is it accessible?</AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-xl justify-center">Is it styled?</AccordionTrigger>
                            <AccordionContent>
                                Yes. It comes with default styles that matches the other
                                components&apos; aesthetic.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-xl justify-center">Is it animated?</AccordionTrigger>
                            <AccordionContent>
                                Yes. It's animated by default, but you can disable it if you prefer.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger className="text-xl justify-center">Is it animated?</AccordionTrigger>
                            <AccordionContent>
                                Yes. It's animated by default, but you can disable it if you prefer.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger className="text-xl justify-center">Is it animated?</AccordionTrigger>
                            <AccordionContent>
                                Yes. It's animated by default, but you can disable it if you prefer.
                            </AccordionContent>
                        </AccordionItem>

                    </Accordion>
                </div>
            </section>

        </div >
    );
};

export default LandingPage;
