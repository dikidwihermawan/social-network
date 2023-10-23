import React from "react";
import { Head } from "@inertiajs/react";

function Guest({ children, title }) {
    return (
        <div>
            <Head title={title} />
            {children}
        </div>
    );
}

export default Guest;
