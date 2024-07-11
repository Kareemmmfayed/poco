"use client";

import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const t = useTranslations("Index");

  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (locale: string) => {
    const pathParts = pathname.split("/");
    pathParts[1] = locale;
    const newPath = pathParts.join("/");
    router.push(newPath);
  };

  const pickLang = () => {
    const pathParts = pathname.split("/");
    if (pathParts[1] === "en") {
      changeLanguage("ar");
    } else {
      changeLanguage("en");
    }
  };

  return (
    <div>
      <h1>{t("title")}</h1>
      <button onClick={pickLang}>Change</button>
    </div>
  );
}
