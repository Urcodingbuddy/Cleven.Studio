"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { User } from "next-auth";

export default function Profile() {
    const { data: session } = useSession();
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (session?.user?.id) {
            fetch("/api/user")
                .then((res) => res.json())
                .then((data: User) => {
                    console.log("Fetched User Data:", data); 
                    setUser(data);
                    setLoading(false);
                })
                .catch((err) => console.error("Error fetching user: ", err));
        }
    }, [session]);

    return (
        <div className="h-20 w-20 bg-slate-700 text-2xl text-amber-50">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <h1>{user?.name}</h1>
                    <p>{user?.email}</p>
                    {user?.imageURL && <img src={user.imageURL} alt="Profile" />}
                </>
            )}
        </div>
    );
}
