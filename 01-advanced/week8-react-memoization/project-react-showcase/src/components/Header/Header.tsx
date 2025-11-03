import * as React from "react";
import { I18nContext } from "../../contexts/I18nProvider";
import styles from "./Header.module.css";
import clsx from "clsx";
import Spanish from "../../assets/spanish.svg";
import English from "../../assets/english.svg";

const languages = [{ langCode: "en" }, { langCode: "es" }];

export default function Header() {
  const { language, handleLanguageChange, t } = React.useContext(I18nContext);

  return (
    <header className={styles.container}>
      <h1 className={styles.headerTitle}>{t("app-title")}</h1>
      <div className={styles.languages}>
        {languages.map(({ langCode }) => {
          const isActive = language === langCode;
          return (
            <button
              key={langCode}
              // without clsx
              // className={[styles.button, isActive && styles.buttonActive].filter(Boolean).join(' ')}
              className={clsx(styles.langIcon, {
                [styles.langIconActive]: isActive,
              })}
              onClick={() => handleLanguageChange(langCode)}
              type="button"
            >
              <img
                src={langCode === "en" ? English : Spanish}
                height={25}
                width={25}
              />
            </button>
          );
        })}
      </div>
    </header>
  );
}
