import DirectusSDK from "@directus/sdk-js";
const client = new DirectusSDK({
  url: "https://api.chz.dev",
  project: "api",
});
export default client;
