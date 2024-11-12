"use server";

import { redirect } from "next/navigation";

const NotFound = () => redirect("/users");

export default NotFound;
