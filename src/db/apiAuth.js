import supabase from "./supabase";
// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

export async function login({ email, password }) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        throw new Error(error.message);
    }

    return data;
}
// get current user from supabase session object and return it
export async function getCurrentUser() {
    const { data: session, error } = await supabase.auth.getSession();

    if (error) throw new Error(error.message);
    if (!session.session) return null;

    return session.session?.user;
}



export async function signup({ name, email, password, profile_pic }) {
    // Sign up the user
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { name } }, // Store name in metadata
    });

    if (error) throw new Error(error.message);

    // If there's no profile picture, return user data immediately
    if (!profile_pic) return data;

    // Upload profile picture separately
    try {
        const timestamp = Date.now();
        const fileExt = profile_pic.name.split(".").pop(); // Get file extension
        const fileName = `dp-${name.replace(/\s+/g, "-")}-${timestamp}.${fileExt}`;
        const filePath = `profile_pic/${fileName}`;

        const { error: storageError } = await supabase.storage
            .from("profile_pic") // Ensure this is the correct bucket name
            .upload(filePath, profile_pic, { cacheControl: "3600", upsert: false });

        if (storageError) throw new Error(storageError.message);

        // Get Public URL
        const { data: publicURLData } = supabase.storage.from("profile_pic").getPublicUrl(filePath);
        const profilePicUrl = publicURLData.publicUrl;

        // Update user metadata with profile picture URL
        const { error: updateError } = await supabase.auth.updateUser({
            data: { profile_pic: profilePicUrl },
        });

        if (updateError) throw new Error(updateError.message);

    } catch (uploadError) {
        console.error("Profile picture upload failed:", uploadError);
        // If upload fails, user still has an account without a profile picture
    }

    return data;
}



export async function logout() {
    const { error } = await supabase.auth.signOut();
    if (error) console.error("Logout failed:", error.message);
}
