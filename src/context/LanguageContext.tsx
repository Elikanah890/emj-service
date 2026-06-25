import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import en from '../translations/en.json';
import sw from '../translations/sw.json';

type Lang = 'en' | 'sw';

const translations: Record<Lang, Record<string, string>> = { en, sw };

interface LanguageContextValue {
  lang: Lang;
  t: (key: string) => string;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'en',
  t: (key: string) => key,
  setLang: () => {},
  toggleLang: () => {},
});

function getInitialLang(): Lang {
  const stored = localStorage.getItem('emj-lang') as Lang | null;
  if (stored === 'en' || stored === 'sw') return stored;
  return 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem('emj-lang', l);
  }, []);

  const toggleLang = useCallback(() => {
    setLangState(prev => {
      const next = prev === 'en' ? 'sw' : 'en';
      localStorage.setItem('emj-lang', next);
      return next;
    });
  }, []);

  const t = useCallback(
    (key: string): string => translations[lang]?.[key] ?? key,
    [lang],
  );

  return (
    <LanguageContext.Provider value={{ lang, t, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
