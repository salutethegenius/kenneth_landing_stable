import { ImageResponse } from "next/og";
import { brandColors } from "@/lib/seo";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: brandColors.ink,
          position: "relative",
        }}
      >
        <div
          style={{
            width: 124,
            height: 124,
            borderRadius: 999,
            border: `2px solid rgba(244,237,216,0.45)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
        <div
          style={{
            position: "absolute",
            color: "#F4EDD8",
            fontSize: 96,
            fontWeight: 700,
            fontFamily: "serif",
            lineHeight: 1,
            display: "flex",
          }}
        >
          K
        </div>
        <div
          style={{
            position: "absolute",
            width: 20,
            height: 20,
            borderRadius: 999,
            background: brandColors.brass,
            top: 80,
            left: 52,
          }}
        />
      </div>
    ),
    size
  );
}
