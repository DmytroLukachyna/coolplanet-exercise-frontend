import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CoolPlanet | Front-end part",
    short_name: "CoolPlanet",
    description: "CoolPlanet | Front-end part",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "./favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
