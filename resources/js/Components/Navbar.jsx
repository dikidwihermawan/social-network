import { Link } from "@inertiajs/react";
import React from "react";

function Navbar() {
    return (
        <>
            <Link href="/">Home</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
        </>
    );
}

export default Navbar;
