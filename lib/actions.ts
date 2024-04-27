"use server";
// import data from "@/data/properties.json";
import prisma from "@/utils/prisma";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function getProperties() {
  try {
    const allProperties = await prisma.property.findMany({
      // relationLoadStrategy :'join',
      select: {
        id: true,
        name: true,
        type: true,
        description: true,
        beds: true,
        baths: true,
        square_feet: true,
        rates: true,
        location: true,
        images: true,
      },
    });
    // console.log("🚀 ~ getProperties ~ allProperties:", allProperties[0]);

    // console.log("🚀 ~ getProperties ~ new:", "need to wait 10s");
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    // console.log("🚀 ~ getProperties ~ new:", "done");
    return { properties: allProperties };
  } catch (error) {
    console.log("🚀 ~ getProperties ~ error:", error);
    throw new Error("oops! something went wrong!");
  }
}

export async function login() {
  const supabase = createClient();
  console.log("🚀 ~ login ~ supabase:");

  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    console.log("🚀 ~ login ~ data:", data);
    redirect(data.url);
  } catch (error) {
    console.log("🚀 ~ login ~ error:", error);
  }
}

export async function logout() {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();
}
