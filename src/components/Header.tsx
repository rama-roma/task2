"use client";
import { ThemeProvider } from "./theme-provider";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { useTranslations } from "next-intl";
import "../app/globals.css";
import { LanguagesIcon, Menu, X } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const t = useTranslations("HomePage");
  const router = useRouter();

  const changeLocale = (locale: "en" | "ru") => {
    router.push(`/${locale}`);
    setLangOpen(false);
  };

  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  return (
    <>
      <div className="hidden md:block">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="max-w-[1400px] m-auto p-4">
            <nav className="flex items-center justify-center">
              <div className="flex items-center gap-[30px]">
                <Link href="/">
                  <span>{t("title")}</span>
                </Link>
                <Link href="/facilities">
                  <span>{t("title1")}</span>
                </Link>
                <span>{t("title2")}</span>
                <span>{t("title3")}</span>
                <span>{t("title4")}</span>
              </div>
              <div className="relative left-90 flex items-center gap-[10px]">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-2"
                >
                  <LanguagesIcon/>
                </button>

                {langOpen && (
                  <div className="absolute right-0 mt-2 rounded-xl border bg-background shadow">
                    <button
                      onClick={() => changeLocale("en")}
                      className="flex items-center gap-2 px-3 py-2 hover:bg-muted"
                    >
                      <img src="/eng.png" className="w-5" />
                      ENG
                    </button>

                    <button
                      onClick={() => changeLocale("ru")}
                      className="flex items-center gap-2 px-3 py-2 hover:bg-muted"
                    >
                      <img src="/rus.png" className="w-5" />
                      RUS
                    </button>
                  </div>
                )}
                <ModeToggle />
                <button className="text-[white] bg-[#24AB70] p-2 w-30 rounded-[20px]">
                  {t("title5")}
                </button>
              </div>
            </nav>
          </header>
        </ThemeProvider>
      </div>

      <div className="block md:hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="p-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="font-semibold text-lg">
                {t("title")}
              </Link>

              <div className="flex items-center gap-3">
                <ModeToggle />
                <button onClick={() => setOpen(!open)}>
                  {open ? <X size={26} /> : <Menu size={26} />}
                </button>
              </div>
            </div>

            {open && (
              <nav className="mt-4 flex flex-col gap-4 rounded-2xl bg-background p-4 shadow">
                <Link href="/facilities" onClick={() => setOpen(false)}>
                  {t("title1")}
                </Link>
                <span>{t("title2")}</span>
                <span>{t("title3")}</span>
                <span>{t("title4")}</span>

                <button className="mt-2 bg-[#24AB70] text-white py-2 rounded-xl">
                  {t("title5")}
                </button>
              </nav>
            )}
          </header>
        </ThemeProvider>
      </div>
    </>
  );
};

export default Header;
