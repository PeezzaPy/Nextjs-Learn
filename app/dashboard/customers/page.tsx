"use client";

import { useState, useEffect } from 'react';

export default function Page() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        // Cleanup the timer if the component unmounts
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return <p>Content loaded</p>;
}