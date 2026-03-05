"use client";

import { useRouter } from "next/navigation";

export function BackButton() {
  const router = useRouter();

  const handleClick = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/pages/table_of_contents");
    }
  };

  return (
    <div className="content-back-wrap">
      <button
        type="button"
        onClick={handleClick}
        className="content-back-btn"
        aria-label="Go back"
      >
        <span className="content-back-arrow" aria-hidden>←</span>
        Back
      </button>
    </div>
  );
}
