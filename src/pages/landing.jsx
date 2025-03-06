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
                    🚀 Shorten your links, track performance, and share them effortlessly.
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
                    <div className="p-8 bg-slate-800 rounded-xl shadow-lg border border-slate-700 transition-all duration-300 hover:scale-105">
                        <h3 className="text-2xl font-bold text-indigo-400">Free</h3>
                        <p className="mt-2 text-lg text-slate-300">$0/month</p>
                        <ul className="mt-4 space-y-2 text-slate-400 text-sm">
                            <li>✔️ Shorten unlimited URLs</li>
                            <li>✔️ Basic Analytics</li>
                            <li>❌ Custom Short Links</li>
                            <li>❌ Advanced Analytics</li>
                        </ul>
                        <button className="mt-6 w-full py-3 bg-indigo-500 hover:bg-indigo-600 rounded-lg font-semibold shadow-md">
                            Get Started
                        </button>
                    </div>

                    {/* Pro Plan (Highlighted) */}
                    <div className="p-8 bg-indigo-600 rounded-xl shadow-lg border border-indigo-500 transition-all duration-300 hover:scale-105 relative">
                        <span className="absolute top-3 right-3 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-md">
                            Most Popular
                        </span>
                        <h3 className="text-2xl font-bold text-white">Pro</h3>
                        <p className="mt-2 text-lg text-indigo-100">$9.99/month</p>
                        <ul className="mt-4 space-y-2 text-indigo-100 text-sm">
                            <li>✔️ All Free Plan Features</li>
                            <li>✔️ Custom Short Links</li>
                            <li>✔️ Detailed Analytics</li>
                            <li>✔️ API Access</li>
                        </ul>
                        <button className="mt-6 w-full py-3 bg-white text-indigo-600 hover:bg-gray-200 rounded-lg font-semibold shadow-md">
                            Upgrade to Pro
                        </button>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="p-8 bg-slate-800 rounded-xl shadow-lg border border-slate-700 transition-all duration-300 hover:scale-105">
                        <h3 className="text-2xl font-bold text-indigo-400">Enterprise</h3>
                        <p className="mt-2 text-lg text-slate-300">Custom Pricing</p>
                        <ul className="mt-4 space-y-2 text-slate-400 text-sm">
                            <li>✔️ All Pro Plan Features</li>
                            <li>✔️ Team Collaboration</li>
                            <li>✔️ Premium Support</li>
                            <li>✔️ Dedicated Infrastructure</li>
                        </ul>
                        <button className="mt-6 w-full py-3 bg-indigo-500 hover:bg-indigo-600 rounded-lg font-semibold shadow-md">
                            Contact Sales
                        </button>
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
