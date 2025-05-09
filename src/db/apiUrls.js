import supabase, { supabaseUrl } from "./supabase";


export async function getUrls(user_id) {
    let { data, error } = await supabase
        .from("urls")
        .select("*")
        .eq("user_id", user_id);

    if (error) {
        console.error(error);
        throw new Error("Unable to load URLs");
    }

    return data;
}

export async function getUrl({ id, user_id }) {
    const { data, error } = await supabase
        .from("urls")
        .select("*")
        .eq("id", id)
        .eq("user_id", user_id)
        .single();

    if (error) {
        console.error(error);
        throw new Error("Short Url not found");
    }

    return data;
}

export async function getLongUrl(id) {
    let { data, error } = await supabase
        .from("urls")
        .select("id, original_url")
        .or(`short_url.eq.${id},custom_url.eq.${id}`)
        .single();

    if (error) {
        console.error(error.message);
        throw new Error("Error fetching short link:", error);
    }

    return data;
}

export async function createUrl({ title, longUrl, customUrl, user_id }, qrcode) {
    const short_url = Math.random().toString(36).substr(2, 6);
    const fileName = `qr-${short_url}.png`; // Ensure file extension is included

    // Ensure qrcode is a valid Blob, you can check its type here
    if (!(qrcode instanceof Blob)) {
        throw new Error("QRCode must be a valid Blob object");
    }

    // Upload the QR code image to Supabase Storage
    const { error: storageError } = await supabase.storage
        .from("qrs")
        .upload(fileName, qrcode, { contentType: 'image/png' }); // Specify contentType

    if (storageError) {
        console.error('Error uploading QR code:', storageError);
        throw new Error(storageError.message);
    }

    // Get the public URL for the uploaded QR code image
    const qr = `${supabaseUrl}/storage/v1/object/public/qrs/${fileName}`;

    // Insert URL details into the database
    const { data, error } = await supabase
        .from("urls")
        .insert([
            {
                title,
                user_id,
                original_url: longUrl,
                custom_url: customUrl || null,
                short_url,
                qr,
            },
        ])
        .select();

    if (error) {
        console.error('Error creating short URL:', error);
        throw new Error("Error creating short URL");
    }

    return data;
}

// In apiUrls.js or another utility file

export async function uploadToSupabase(blob) {
    try {
        const fileName = `qr-${Math.random().toString(36).substr(2, 6)}.png`;
        const { error } = await supabase.storage
            .from('qrs')
            .upload(fileName, blob, {
                cacheControl: '3600',
                upsert: false,
            });

        if (error) throw new Error(error.message);

        const qrUrl = `${supabaseUrl}/storage/v1/object/public/qrs/${fileName}`;
        return qrUrl;
    } catch (error) {
        console.error("Error uploading QR code:", error);
        throw error;
    }
}





export async function deleteUrl(id) {
    const { data, error } = await supabase.from("urls").delete().eq("id", id);

    if (error) {
        console.error(error);
        throw new Error("Unable to delete Url");
    }

    return data;
}