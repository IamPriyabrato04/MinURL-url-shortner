import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Rocket, Lock, BarChart } from "lucide-react";


const LandingPage = () => {
    const [longUrl, setLongUrl] = useState("");
    const navigate = useNavigate();

    const handleShorten = (e) => {
        e.preventDefault();
        if (longUrl) navigate(`/auth?createNew=${longUrl}`);
    };

    return (
        <div className="flex flex-col min-h-screen bg-slate-900 text-slate-100">
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center min-h-screen w-full px-6 sm:px-8 lg:px-20 py-5 text-center bg-gradient-to-b from-slate-900 to-slate-800 text-white">

                {/* Main Heading */}
                <h1 className="text-5xl font-extrabold leading-tight sm:text-5xl lg:text-6xl animate-fadeIn max-w-9xl">
                    Long URLs? Not anymore. <br />
                    <span className="text-indigo-400 drop-shadow-lg">MinURL keeps it short and simple.</span> ✂️
                </h1>

                {/* Subheading */}
                <p className="mt-4 text-lg sm:text-2xl text-indigo-300 max-w-3xl font-medium tracking-wide">
                    <Rocket className="inline-block animate-bounce mr-3 text-lime-200" />
                    Shorten your links, track performance, and share them effortlessly.
                </p>

                {/* Additional Info (Better Layout for Large Screens) */}
                {/* <div className="mt-7 max-w-9xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-800 p-8 rounded-xl shadow-xl border border-slate-700 text-left">
                    <div className="text-slate-300 text-lg leading-relaxed">
                        <h3 className="text-indigo-400 font-bold text-xl">🔗 Custom Short Links</h3>
                        <p>Create memorable, branded short links for better engagement.</p>
                    </div>
                    <div className="text-slate-300 text-lg leading-relaxed">
                        <h3 className="text-indigo-400 font-bold text-xl">📊 Real-Time Analytics</h3>
                        <p>Track how many people are clicking on your links with live analytics.</p>
                    </div>
                    <div className="text-slate-300 text-lg leading-relaxed">
                        <h3 className="text-indigo-400 font-bold text-xl">🚀 Lightning Fast</h3>
                        <p>Shorten and share your links instantly with our ultra-fast API.</p>
                    </div>
                    <div className="text-slate-300 text-lg leading-relaxed">
                        <h3 className="text-indigo-400 font-bold text-xl">🔒 Secure & Reliable</h3>
                        <p>Your links are safe, and your data is protected with top security.</p>
                    </div>
                </div> */}

                {/* URL Shortener Input */}
                <form onSubmit={handleShorten} className="flex flex-col sm:flex-row items-center w-full max-w-xl mt-6 space-y-4 sm:space-y-0 sm:space-x-4">
                    <div className="relative w-full sm:w-[450px]">
                        <Input
                            type="url"
                            value={longUrl}
                            onChange={(e) => setLongUrl(e.target.value)}
                            placeholder="Enter your long URL"
                            className="h-14 w-full bg-slate-800 border border-slate-700 text-slate-100 focus:ring-indigo-500 px-4 rounded-lg placeholder-slate-400 shadow-md"
                        />
                        <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400">🔗</span>
                    </div>
                    <Button type="submit" className="h-14 w-full sm:w-auto px-8 bg-indigo-500 hover:bg-indigo-600 transition-all duration-300 rounded-lg shadow-lg hover:scale-105">
                        Shorten URL 🚀
                    </Button>
                </form>

                {/* Call to Action (Scales Beautifully for Large Screens) */}
                <div className="mt-14 w-full max-w-9xl bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-2xl text-white text-center p-10">
                    <h3 className="text-4xl font-bold">✨ Get Started for Free!</h3>
                    <p className="mt-3 text-indigo-100 text-lg">
                        Sign up now and manage all your shortened links in one place.
                    </p>
                    <Button className="mt-6 bg-white text-indigo-600 hover:bg-gray-200 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-lg shadow-md hover:scale-105">
                        Join Now 🚀
                    </Button>
                </div>

            </section>





            {/* How It Works Section */}
            <section className="w-full px-6 py-16 bg-gradient-to-b from-slate-900 to-slate-800 text-center text-white">
                <h2 className="text-4xl font-bold tracking-tight">How It Works</h2>
                <p className="mt-4 text-slate-300">Shorten and track your links in three simple steps.</p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
                    {[
                        { step: "1", title: "Paste URL", desc: "Enter the long URL you want to shorten." },
                        { step: "2", title: "Generate Short Link", desc: "Click the button to get a short, shareable link." },
                        { step: "3", title: "Track Stats", desc: "Monitor link performance with analytics." }
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="p-6 bg-slate-900 rounded-xl shadow-xl border border-slate-700 hover:border-slate-500 transition-all duration-300 hover:scale-105"
                        >
                            <div className="flex items-center justify-center w-12 h-12 text-xl font-bold bg-slate-700 rounded-full mx-auto">
                                {item.step}
                            </div>
                            <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                            <p className="mt-2 text-slate-300 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>


            {/* Features Section */}
            <section className="w-full px-6 py-16 bg-gradient-to-b from-slate-900 to-slate-800 text-center text-white">
                <h2 className="text-4xl font-bold tracking-tight">Why Choose MinURL?</h2>
                <p className="mt-4 text-slate-300">The best link shortener with powerful features.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                    {[
                        { icon: "⚡", title: "Fast", desc: "Shorten links instantly with no delays." },
                        { icon: "📈", title: "Analytics", desc: "Track your links with real-time insights." },
                        { icon: "🔒", title: "Secure", desc: "Your data is protected with top-notch security." }
                    ].map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center p-6 bg-slate-800 rounded-xl shadow-xl border border-slate-700 hover:border-slate-500 transition-all duration-300 hover:scale-105"
                        >
                            <span className="text-6xl">{feature.icon}</span>
                            <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                            <p className="mt-2 text-slate-300 text-sm">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>


            {/* Testimonials Section */}
            <section className="w-full px-6 py-16 bg-gradient-to-b from-slate-900 to-slate-800 text-center text-white">
                <h2 className="text-4xl font-bold tracking-tight">What Users Say</h2>
                <p className="mt-4 text-slate-300">Hear from our happy users!</p>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { name: "Alex Johnson", quote: "MinURL made my life easier!", image: "https://i.pravatar.cc/100?img=1" },
                        { name: "Sophia Carter", quote: "The best link shortener I've used.", image: "https://i.pravatar.cc/100?img=5" },
                        { name: "Daniel Smith", quote: "Simple, fast, and reliable!", image: "https://i.pravatar.cc/100?img=8" }
                    ].map((testimonial, index) => (
                        <blockquote key={index} className="p-6 bg-slate-900 rounded-xl shadow-xl border border-slate-700 text-lg">
                            <div className="flex items-center gap-4">
                                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full border-2 border-slate-500" />
                                <div className="text-left">
                                    <p className="text-slate-300 italic">"{testimonial.quote}"</p>
                                    <span className="text-sm text-slate-400 mt-2 block">— {testimonial.name}</span>
                                </div>
                            </div>
                        </blockquote>
                    ))}
                </div>
            </section>

            {/* Pricing Section */}
            <section className="w-full px-6 py-16 bg-slate-900 text-white text-center">
                <h2 className="text-4xl font-bold tracking-tight">Choose Your Plan</h2>
                <p className="mt-2 text-lg text-slate-300">Flexible pricing to meet your needs.</p>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto">

                    {/* Free Plan */}
                    <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl shadow-md border border-slate-600 transition-all duration-300 hover:scale-105">
                        <h3 className="text-2xl font-extrabold text-indigo-300 tracking-tight">Free Plan</h3>
                        <p className="mt-2 text-lg text-slate-300 font-medium">₹0/month</p>

                        <ul className="mt-5 space-y-3 text-slate-400 text-sm font-medium">
                            <li className="flex items-center gap-2">✔️ Shorten 5 URLs/day</li>
                            <li className="flex items-center gap-2 opacity-50 ">✔️ Basic Analytics</li>
                            <li className="flex items-center gap-2 opacity-50 ">✔️ Custom Short Links</li>
                            <li className="flex items-center gap-2 opacity-50 ">❌ Advanced Analytics</li>
                        </ul>

                        <button className="mt-8 w-full py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors shadow">
                            Get Started
                        </button>
                    </div>


                    {/* Pro Plan */}
                    <div className="p-8 bg-gradient-to-br from-indigo-600 to-indigo-500 rounded-2xl shadow-xl border border-indigo-400 transition-all duration-300 hover:scale-105 relative">
                        <span className="absolute top-3 right-3 bg-yellow-300 text-black text-xs font-semibold px-2 py-1 rounded-md shadow-sm">
                            ⭐ Most Popular
                        </span>
                        <h3 className="text-2xl font-extrabold text-white tracking-tight">Pro Plan</h3>
                        <p className="mt-2 text-lg text-yellow-200 font-medium">₹499/month <span className="text-sm text-white/80">(30-day free trial)</span></p>

                        <ul className="mt-5 space-y-3 text-indigo-100 text-sm font-medium">
                            <li className="flex items-center gap-2">✔️ Shorten unlimited URLs</li>
                            <li className="flex items-center gap-2">✔️ Custom Short Links</li>
                            <li className="flex items-center gap-2">✔️ Basic Analytics</li>
                            <li className="flex items-center gap-2">✔️ API Access</li>
                        </ul>

                        <a
                            href="https://buy.stripe.com/aEU7trgP56D55dm288"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 inline-block w-full text-center py-3 bg-white text-indigo-700 font-semibold rounded-xl hover:bg-slate-100 transition-colors shadow-md"
                        >
                            Start Free Trial
                        </a>
                    </div>


                    {/* Premium Plan */}
                    <div className="p-8 bg-gradient-to-br from-yellow-300 via-yellow-200 to-yellow-100 rounded-2xl shadow-2xl border border-yellow-400 transition-all duration-300 hover:scale-105 hover:shadow-yellow-400/50">
                        <h3 className="text-3xl font-extrabold text-indigo-700 tracking-tight">🌟 Premium Plan</h3>
                        <p className="mt-2 text-2xl text-slate-800 font-semibold">₹1499<span className="text-base font-medium text-slate-600">/month</span></p>

                        <ul className="mt-6 space-y-3 text-slate-700 text-sm font-medium">
                            <li className="flex items-center gap-2">✅ All Pro Plan Features</li>
                            <li className="flex items-center gap-2">✅ Team Collaboration</li>
                            <li className="flex items-center gap-2">✅ Premium Support</li>
                            <li className="flex items-center gap-2">✅ Advanced Analytics</li>
                        </ul>

                        <a
                            href="https://buy.stripe.com/eVadRP6ar9Ph9tC7st"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 inline-block w-full text-center py-3 bg-indigo-600 text-white text-lg font-semibold rounded-xl hover:bg-indigo-700 transition-colors shadow-md"
                        >
                            Upgrade to Premium
                        </a>
                    </div>


                </div>
            </section>


            {/* FAQ Section */}
            <section className="w-full px-6 py-16 bg-gradient-to-b from-slate-900 to-slate-800 text-center text-white">
                <h2 className="text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
                <p className="mt-4 text-slate-300">Find answers to common queries about MinURL.</p>

                <div className="max-w-3xl mx-auto mt-8">
                    <Accordion type="single" collapsible className="w-full">
                        {["Is MinURL free to use?", "Can I track my shortened links?", "Do my links expire?"].map((question, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border border-slate-700 rounded-xl shadow-lg">
                                <AccordionTrigger className="text-lg font-medium px-4 py-3 hover:bg-slate-700/50 rounded-xl transition-all">
                                    {question}
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-300 px-4 py-2 bg-slate-800 rounded-b-xl">
                                    {question === "Is MinURL free to use?"
                                        ? "Yes! You can shorten unlimited links for free."
                                        : question === "Can I track my shortened links?"
                                            ? "Absolutely! We provide analytics for each link."
                                            : "No, unless you set an expiry date."}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>




        </div>
    );
};

export default LandingPage;
