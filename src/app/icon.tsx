import { ImageResponse } from "next/og";
import { brandColors } from "@/lib/seo";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 6,
          position: "relative",
        }}
      >
        <div
          style={{
            width: 22,
            height: 22,
            borderRadius: 999,
            border: `1px solid rgba(244,237,216,0.45)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
        <div
          style={{
            position: "absolute",
            color: "#F4EDD8",
            fontSize: 18,
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
            width: 4,
            height: 4,
            borderRadius: 999,
            background: brandColors.brass,
            top: 14,
            left: 9,
          }}
        />
      </div>
    ),
    size
  );
}
