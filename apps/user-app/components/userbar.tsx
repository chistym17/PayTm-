"use client"

import { getServerSession } from "next-auth";
import { authOptions } from "../app/lib/auth";
import { signIn, signOut } from "next-auth/react";

const Userbar = async () => {
    const session = await getServerSession(authOptions)
    return (
        <div>

       session?.user.name

        </div>
    );
};

export default Userbar;