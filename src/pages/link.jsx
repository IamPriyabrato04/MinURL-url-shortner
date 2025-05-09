import DeviceStats from "@/components/device-stats";
import Location from "@/components/location-stats";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UrlState } from "@/context";
import { getClicksForUrl } from "@/db/apiClicks";
import { deleteUrl, getUrl } from "@/db/apiUrls";
import useFetch from "@/hooks/use-fetch";
import { Copy, Download, LinkIcon, Trash } from "lucide-react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BarLoader, BeatLoader } from "react-spinners";

const LinkPage = () => {
    const navigate = useNavigate();
    const { user } = UrlState();
    const { id } = useParams();

    const { loading, data: url, fn, error } = useFetch(getUrl, { id, user_id: user?.id });
    const { loading: loadingStats, data: stats, fn: fnStats } = useFetch(getClicksForUrl, id);
    const { loading: loadingDelete, fn: fnDelete } = useFetch(deleteUrl, id);

    const BASE_URL = import.meta.env.VITE_BASE_URL;


    useEffect(() => {
        fn();
    }, []);

    useEffect(() => {
        if (!error && loading === false) fnStats();
    }, [loading, error]);

    if (error) navigate("/dashboard");

    const link = url ? (url?.custom_url ? url?.custom_url : url.short_url) : "";

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

    return (
        <>
            {(loading || loadingStats) && (
                <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />
            )}
            <div className="flex flex-col mx-16 mt-4 sm:flex-row gap-6 justify-between">
                {/* Link Details */}
                <div className="flex flex-col items-center sm:items-start gap-6 rounded-lg sm:w-2/5">
                    <span className="text-3xl sm:text-4xl font-extrabold text-center sm:text-left hover:underline cursor-pointer">
                        {url?.title}
                    </span>

                    <a
                        href={`${BASE_URL}/${link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg sm:text-2xl text-blue-400 font-bold hover:underline cursor-pointer break-all"
                    >
                        {`${BASE_URL}/${link}`}
                    </a>

                    <a
                        href={url?.original_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm sm:text-base hover:underline cursor-pointer break-all"
                    >
                        <LinkIcon className="w-5 h-5" />
                        {url?.original_url}
                    </a>

                    <span className="text-xs sm:text-sm font-light">
                        {new Date(url?.created_at).toLocaleString()}
                    </span>

                    {/* Action Buttons */}
                    <div className="flex gap-2 flex-wrap justify-center sm:justify-start">
                        <Button
                            variant="ghost"
                            onClick={() =>
                                navigator.clipboard.writeText(`${BASE_URL}/${link}`)
                            }
                        >
                            <Copy className="w-5 h-5" />
                        </Button>
                        <Button variant="ghost" onClick={downloadImage}>
                            <Download className="w-5 h-5" />
                        </Button>
                        <Button
                            variant="ghost"
                            onClick={() =>
                                fnDelete().then(() => {
                                    navigate("/dashboard");
                                })
                            }
                            disabled={loadingDelete}
                        >
                            {loadingDelete ? (
                                <BeatLoader size={5} color="white" />
                            ) : (
                                <Trash className="w-5 h-5" />
                            )}
                        </Button>
                    </div>

                    {/* QR Code */}
                    <img
                        src={url?.qr}
                        className="w-32 sm:w-40 self-center sm:self-start ring ring-blue-500 p-1 object-contain rounded-lg"
                        alt="QR code"
                    />
                </div>

                {/* Stats Card */}
                <Card className="w-full sm:w-3/5">
                    <CardHeader>
                        <CardTitle className="text-2xl sm:text-3xl font-extrabold">Stats</CardTitle>
                    </CardHeader>
                    {stats && stats.length ? (
                        <CardContent className="flex flex-col gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Total Clicks</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-lg font-semibold">{stats?.length}</p>
                                </CardContent>
                            </Card>

                            <CardTitle className="text-lg sm:text-xl font-semibold">Location Data</CardTitle>
                            <Location stats={stats} />

                            <CardTitle className="text-lg sm:text-xl font-semibold">Device Info</CardTitle>
                            <DeviceStats stats={stats} />
                        </CardContent>
                    ) : (
                        <CardContent>
                            {loadingStats === false ? (
                                <p className="text-center text-gray-400">No Statistics yet</p>
                            ) : (
                                "Loading Statistics..."
                            )}
                        </CardContent>
                    )}
                </Card>
            </div>
        </>
    );
};

export default LinkPage;
