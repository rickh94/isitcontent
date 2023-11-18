import { ImageResponse } from "next/og";
import { env } from "~/env.mjs";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Better Practicing";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
export const metadata = {
  metadataBase: new URL(env.SITE_URL),
};

// Image generation
export default async function Image() {
  // Font
  const comfortaa = fetch(
    new URL("/public/Comfortaa-Regular.ttf", import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 96,
          background: "linear-gradient(135deg, #000000 0%, #2e1065 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          paddingTop: 128,
          paddingRight: 128,
          paddingLeft: 128,
          paddingBottom: 16 + 128,
        }}
      >
        <svg
          enable-background="new 0 0 24 24"
          height="24px"
          version="1.1"
          viewBox="0 0 24 24"
          width="24px"
          style={{
            width: 256,
            height: 256,
          }}
        >
          <g id="Outline_Icons_1_">
            <g>
              <path
                d="M3.404,7.307    L3.404,7.307c-2.539,2.539-2.539,6.654,0,9.193"
                fill="none"
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
              />
              <path
                d="M4.818,8.722    c-1.757,1.757-1.757,4.607,0,6.364"
                fill="none"
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
              />
              <path
                d="M21.596,7.307    L21.596,7.307c2.539,2.539,2.539,6.654,0,9.193"
                fill="none"
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
              />
              <path
                d="M20.182,8.722    c1.757,1.757,1.757,4.607,0,6.364"
                fill="none"
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
              />
              <path
                d="M18.5,21.5    c0,1.105-0.895,2-2,2h-8c-1.105,0-2-0.895-2-2v-19c0-1.105,0.895-2,2-2h8c1.105,0,2,0.895,2,2V21.5z"
                fill="none"
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
              />
              <circle
                cx="12.5"
                cy="21"
                fill="none"
                r="0.5"
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
              />
              <line
                fill="none"
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                x1="11.5"
                x2="13.5"
                y1="2.5"
                y2="2.5"
              />
              <polygon
                fill="none"
                points="10.5,9.5     10.5,14.5 14.5,12   "
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
              />
            </g>
          </g>
          <g id="Invisible_Shape">
            <rect fill="none" height="24" width="24" />
          </g>
        </svg>
        <div
          style={{
            color: "#ffffff",
            paddingTop: 16,
            paddingBottom: 16,
          }}
        >
          Is it Content?
        </div>
        <div
          style={{
            color: "#ddd6fe",
            textAlign: "center",
            fontSize: 24,
            paddingTop: 32,
            marginBottom: -48,
          }}
        >
          isitcontent.com
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Comfortaa",
          data: await comfortaa,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
