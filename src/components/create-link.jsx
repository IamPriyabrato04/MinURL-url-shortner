import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useNavigate, useSearchParams } from "react-router-dom";
import Error from "@/components/error";
import * as yup from "yup";
import useFetch from "@/hooks/use-fetch";
import { createUrl } from "@/db/apiUrls";
import { BeatLoader } from "react-spinners";
import { UrlState } from "@/context";
import { QRCode } from "react-qrcode-logo";

export function CreateLink() {
  const { user } = UrlState();
  const navigate = useNavigate();
  const ref = useRef();

  let [searchParams, setSearchParams] = useSearchParams();
  const longLink = searchParams.get("createNew");

  const [errors, setErrors] = useState({});
  const [formValues, setFormValues] = useState({
    title: "",
    longUrl: longLink ? longLink : "",
    customUrl: "",
  });

  const schema = yup.object().shape({
    title: yup.string().required("Title is required"),
    longUrl: yup.string().url("Must be a valid URL").required("Long URL is required"),
    customUrl: yup.string(),
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const { loading, error, data, fn: fnCreateUrl } = useFetch(createUrl, { ...formValues, user_id: user.id });

  useEffect(() => {
    if (error === null && data) {
      navigate(`/link/${data[0].id}`);
    }
  }, [error, data]);

  const createNewLink = async () => {
    setErrors([]);
    try {
      await schema.validate(formValues, { abortEarly: false });
      const canvas = ref.current.canvasRef.current;
      const blob = await new Promise((resolve) => canvas.toBlob(resolve));
      await fnCreateUrl(blob);
    } catch (e) {
      const newErrors = {};
      e?.inner?.forEach((err) => {
        newErrors[err.path] = err.message;
      });
      setErrors(newErrors);
    }
  };

  return (
    <Dialog
      defaultOpen={longLink}
      onOpenChange={(res) => {
        if (!res) setSearchParams({});
      }}
    >
      <DialogTrigger asChild>
        <Button variant="destructive" className="w-full sm:w-auto">Create New Link</Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg w-full p-6 rounded-lg shadow-lg">
        <DialogHeader>
          <DialogTitle className="font-bold text-xl sm:text-2xl">Create New</DialogTitle>
        </DialogHeader>
        {formValues?.longUrl && <QRCode ref={ref} size={200} value={formValues?.longUrl} className="mx-auto" />}

        <Input id="title" placeholder="Short Link's Title" value={formValues.title} onChange={handleChange} className="w-full" />
        {errors.title && <Error message={errors.title} />}
        
        <Input id="longUrl" placeholder="Enter your Long URL" value={formValues.longUrl} onChange={handleChange} className="w-full" />
        {errors.longUrl && <Error message={errors.longUrl} />}
        
        <div className="flex flex-col sm:flex-row items-center gap-2 w-full">
          <Card className="p-2 w-full sm:w-auto text-center">minurl.in</Card>
          <Input id="customUrl" placeholder="Custom Link (optional)" value={formValues.customUrl} onChange={handleChange} className="w-full" />
        </div>
        {error && <Error message={error.message} />}

        <DialogFooter className="flex justify-center sm:justify-start">
          <Button type="button" variant="destructive" onClick={createNewLink} disabled={loading} className="w-full sm:w-auto">
            {loading ? <BeatLoader size={10} color="white" /> : "Create"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
