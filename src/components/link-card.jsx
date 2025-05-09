/* eslint-disable react/prop-types */
import { Copy, Download, Trash } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import useFetch from "@/hooks/use-fetch";
import { deleteUrl } from "@/db/apiUrls";
import { BeatLoader } from "react-spinners";

const LinkCard = ({ url = [], fetchUrls }) => {
    const downloadImage = () => {
        const imageUrl = url?.qr;
        const fileName = url?.title;

        const anchor = document.createElement("a");
        anchor.href = imageUrl;
        anchor.download = fileName;
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    };

    const { loading: loadingDelete, fn: fnDelete } = useFetch(deleteUrl, url.id);

    const BASE_URL = import.meta.env.VITE_BASE_URL;


    return (
        <div className="relative w-full flex flex-col md:flex-row gap-4 p-4 bg-gray-900 rounded-lg shadow-md">
            {/* Action Buttons - Positioned at Top Right */}
            <div className="absolute top-2 right-2 flex gap-2">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() =>
                        navigator.clipboard.writeText(`${BASE_URL}${url?.short_url}`)
                    }
                >
                    <Copy className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" onClick={downloadImage}>
                    <Download className="w-5 h-5" />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => fnDelete().then(() => fetchUrls())}
                    disabled={loadingDelete}
                >
                    {loadingDelete ? <BeatLoader size={5} color="white" /> : <Trash className="w-5 h-5" />}
                </Button>
            </div>

            {/* QR Code Image */}
            <div className="flex justify-center md:justify-start">
                <img
                    src={url?.qr}
                    className="h-24 w-24 md:h-28 md:w-28 object-contain ring ring-blue-500 rounded-lg"
                    alt="QR code"
                />
            </div>

            {/* Link Details */}
            <div className="flex-1 flex flex-col space-y-1">
                <Link to={`/link/${url?.id}`} className="flex flex-col">
                    <span className="text-base md:text-lg font-extrabold hover:underline cursor-pointer break-words">
                        {url?.title}
                    </span>
                    <span className="text-sm md:text-base text-blue-400 font-bold hover:underline cursor-pointer break-words">
                        {`${BASE_URL}`}{url?.custom_url ? url?.custom_url : url.short_url}
                    </span>
                    <span className="text-xs md:text-sm font-extralight">
                        {new Date(url?.created_at).toLocaleString()}
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default LinkCard;
