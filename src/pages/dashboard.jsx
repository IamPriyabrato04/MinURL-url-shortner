import { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";
import { Filter } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CreateLink } from "@/components/create-link";
import LinkCard from "@/components/link-card";
import Error from "@/components/error";

import useFetch from "@/hooks/use-fetch";

import { getUrls } from "@/db/apiUrls";
import { getClicksForUrls } from "@/db/apiClicks";
import { UrlState } from "@/context";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { user } = UrlState();
  const { loading, error, data: urls, fn: fnUrls } = useFetch(getUrls, user.id);
  const {
    loading: loadingClicks,
    data: clicks,
    fn: fnClicks,
  } = useFetch(
    getClicksForUrls,
    urls?.map((url) => url.id)
  );

  useEffect(() => {
    fnUrls();
  }, []);

  const filteredUrls = urls?.filter((url) =>
    url.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    if (urls?.length) fnClicks();
  }, [urls?.length]);

  return (
    <div className="flex flex-col gap-6 px-4 sm:px-8 md:px-12 py-6">
      {(loading || loadingClicks) && (
        <BarLoader width={"100%"} color="#36d7b7" className="mb-4" />
      )}

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="shadow-md p-4">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Links Created</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">{urls?.length}</p>
          </CardContent>
        </Card>
        <Card className="shadow-md p-4">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Total Clicks</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">{clicks?.length}</p>
          </CardContent>
        </Card>
      </div>

      {/* Header & Create Link Button */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold">My Links</h1>
        <CreateLink />
      </div>

      {/* Search Bar */}
      <div className="relative w-full max-w-lg">
        <Input
          type="text"
          placeholder="Filter Links..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-4 py-2 border rounded-lg w-full shadow-sm"
        />
        <Filter className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
      </div>

      {/* Error Message */}
      {error && <Error message={error?.message} />}

      {/* Link Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {(filteredUrls || []).map((url, i) => (
          <LinkCard key={i} url={url} fetchUrls={fnUrls} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
