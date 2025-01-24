import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-between">
            {/* Hero Section */}
            <section className="w-full flex-1 flex flex-col items-center justify-center text-center px-6 py-16">
                {/* <div className="w-full max-w-4xl mx-auto">
                    <img
                        src="/assets/hero-image.png"
                        alt="Hero Section"
                        className="w-full h-auto mb-8 rounded-lg shadow-lg"
                    />
                </div> */}
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-100 leading-tight">
                    Long URLs? Not anymore. <br />
                    <span className="text-indigo-400">MinURL keeps it short and simple.</span> ✂️
                </h2>
                <p className="mt-6 text-lg sm:text-xl text-slate-300">
                    Simplify your links with our easy-to-use tool and track their performance in real time.
                </p>
                <div className="w-4/5 justify-center mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <form className="  flex flex-col sm:flex-row items-center w-full md:w-3/4 p-4 gap-2">
                        <Input
                            type="text"
                            placeholder="Enter your long URL"
                            className=" h-12 bg-slate-700 border-slate-700 text-slate-100 focus:ring-indigo-500 font-medium"
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
            <section id="features" className="w-full bg-slate-800 py-16 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h3 className="text-3xl font-bold text-slate-100">Why Choose MinURL?</h3>
                    <p className="mt-4 text-lg text-slate-300">
                        Here&apos;s what makes MinURL the best choice for shortening your links:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
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
        </div>
    );
};

export default LandingPage;
