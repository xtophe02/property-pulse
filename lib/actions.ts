import data from "@/data/properties.json";

export async function getProperties() {
  console.log("🚀 ~ getProperties ~ new:", "need to wait 10s");
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log("🚀 ~ getProperties ~ new:", "done");
  return { properties: data };
}
