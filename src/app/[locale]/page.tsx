"use client";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");

  const handleChange = () => {
    window.location.href = "/ar";
  };

  return (
    <div>
      <h1>{t("title")}</h1>
      <button onClick={handleChange}>change</button>
    </div>
  );
}
