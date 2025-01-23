import { Outlet } from "react-router-dom";

const AppLayout = () => {
    return (
        <div>
            <main className="min-h-screen container">
                {/* header */}
                <Outlet />
                {/* body */}
            </main>
            {/* footer */}
            <div className="p-10 bg-gray-800 text-white text-center py-4 mt-10">

                <p>&copy; 2023 URL Shortner. All rights reserved.</p>
            </div>
        </div>
    )
}
export default AppLayout;