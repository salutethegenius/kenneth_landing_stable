import { ImageResponse } from "next/og";
import {
  brandColors,
  siteShortName,
  siteTagline,
  siteUrl,
} from "@/lib/seo";

export const alt = `${siteShortName} — ${siteTagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: `linear-gradient(135deg, ${brandColors.ink} 0%, #2a1a0e 100%)`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
          fontFamily: "serif",
        }}
      >
        {/* Brass seal mark */}
        <div
          style={{
            position: "absolute",
            top: 70,
            left: 80,
            display: "flex",
            alignItems: "center",
            gap: 18,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 999,
              border: `2px solid ${brandColors.brass}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: brandColors.parchment,
              fontSize: 32,
              fontWeight: 700,
            }}
          >
            K
          </div>
          <div
            style={{
              color: brandColors.brass,
              fontSize: 18,
              letterSpacing: 6,
              textTransform: "uppercase",
              fontFamily: "monospace",
            }}
          >
            Freeport · Grand Bahama
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 84,
            fontWeight: 700,
            color: brandColors.parchment,
            lineHeight: 1.05,
            maxWidth: 980,
            marginTop: 60,
          }}
        >
          Kenneth C. Moncur
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 34,
            fontStyle: "italic",
            color: "rgba(244,237,216,0.78)",
            marginTop: 18,
            maxWidth: 920,
          }}
        >
          Founder, Kemis Group of Companies
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 36,
            width: 120,
            height: 3,
            background: brandColors.brass,
          }}
        />

        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: brandColors.brass,
            marginTop: 36,
            letterSpacing: 2,
            textTransform: "uppercase",
            fontFamily: "monospace",
          }}
        >
          {siteTagline}
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: 80,
            display: "flex",
            color: "rgba(244,237,216,0.5)",
            fontSize: 20,
            fontFamily: "monospace",
          }}
        >
          {siteUrl.replace("https://", "")}
        </div>
      </div>
    ),
    size
  );
}
