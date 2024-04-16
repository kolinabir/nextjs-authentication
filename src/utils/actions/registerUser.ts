"use server";

import { UserData } from "@/app/register/page";

const baseUrl = "http://localhost:5000/api/v1";

export const registerUser = async (data: UserData) => {
  const res = await fetch(`${baseUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });   
  const userInfo = await res.json();
  return userInfo;
};
