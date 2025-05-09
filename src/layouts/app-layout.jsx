import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-slate-900 text-white">
            {/* Fixed Header with Subtle Shadow */}
            <header className="w-full fixed top-0 left-0 bg-slate-950 shadow-md z-50">
                <div className="container mx-auto">
                    <Header />
                </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 container mx-auto px-0 pt-24 pb-12">
                <Outlet />
            </main>

            {/* Footer */}
            <footer id="contact" className="w-full bg-gray-900 text-gray-300 py-8 relative overflow-hidden">
                {/* Floating Gradient Accent */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-3xl opacity-20"></div>

                <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left space-y-8 sm:space-y-0 relative z-10">

                    {/* Brand & Tagline */}
                    <div className="flex flex-col items-center sm:items-start">
                        <h4 className="text-3xl font-extrabold text-white tracking-wide flex"><img width="40" height="40" src="/src/assets/icons8-broken-link-96.png" alt="broken-link" />MinURL</h4>
                        <p className="mt-2 text-gray-400 max-w-xs text-sm">
                            Shorten links in seconds and track performance in real-time.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex space-x-6 text-gray-400 text-sm font-medium">
                        <a href="#features" className="hover:text-indigo-400 transition duration-300">Features</a>
                        <a href="#faq" className="hover:text-indigo-400 transition duration-300">FAQ</a>
                        <a href="#contact" className="hover:text-indigo-400 transition duration-300">Contact</a>
                    </nav>

                    {/* Social Icons */}
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-300 text-2xl">
                            <img width="44" height="44" src="https://img.icons8.com/office/40/facebook.png" alt="facebook" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-300 text-2xl">
                            <img width="48" height="48" src="https://img.icons8.com/ios/50/twitterx--v1.png" alt="twitterx--v1" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-300 text-2xl">
                            <img width="48" height="48" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin" />
                        </a>
                    </div>
                </div>

                {/* Divider & Copyright */}
                <div className="relative z-10 mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} MinURL. All rights reserved.
                </div>
            </footer>
        </div>
    )
}

export default AppLayout;
