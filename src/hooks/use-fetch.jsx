import { useState } from "react"

const useFetch = (cb, options = {}) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const fn = async (...args) => {
        setLoading(true);
        setError(null);
        try {
            const response = await cb(options, ...args);
            setData(response);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        { data, error, loading, fn }
    )
}

export default useFetch;