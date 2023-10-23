import React from "react";
import Navbar from "../Components/Navbar";
import { Head } from "@inertiajs/react";

function App({ children, title }) {
    return (
        <header>
            <Head title={title} />
            <Navbar />
            {children}
        </header>
    );
}

export default App;
