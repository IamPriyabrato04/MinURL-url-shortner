import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="min-h-screen container">
                {/* header */}
                <Header />
                <Outlet />
                {/* body */}
            </main>
            {/* Footer */}
            <footer id="contact" className="w-full bg-gray-800 text-gray-200 py-6">
                <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-4">
                    <h4 className="text-xl font-semibold">MinURL 🌐</h4>
                    <p className="text-gray-400">
                        Shorten your links and simplify your sharing experience.
                    </p>
                    <p className="text-gray-400">&copy; {new Date().getFullYear()} MinURL. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}
export default AppLayout;