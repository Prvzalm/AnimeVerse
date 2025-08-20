import React from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { ToggleDarkMode } from './ui/ToggleDarkMode';

const Navbar: React.FC = () => {
    const { data: session } = useSession();

    return (
        <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <div className="text-2xl font-bold">
                <Link href="/">AnimeVerse</Link>
            </div>
            <div className="flex items-center space-x-4">
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/community">Community</Link>
                <Link href="/news">News</Link>
                <ToggleDarkMode />
                {session ? (
                    <>
                        <Link href={`/profile/${session.user?.name}`}>Profile</Link>
                        <button onClick={() => signOut()} className="text-red-500">Sign Out</button>
                    </>
                ) : (
                    <>
                        <Link href="/auth/sign-in">Sign In</Link>
                        <Link href="/auth/register">Register</Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;