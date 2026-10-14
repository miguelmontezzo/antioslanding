import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import {
  defaultLandingContent,
  loadContent,
  saveContent,
  type LandingContent,
} from '../types/landing';

interface ContentContextValue {
  content: LandingContent;
  setContent: (content: LandingContent) => void;
  updateSection: <K extends keyof LandingContent>(
    section: K,
    data: Partial<LandingContent[K]>
  ) => void;
}

const ContentContext = createContext<ContentContextValue | null>(null);

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContentState] = useState<LandingContent>(loadContent);

  const setContent = useCallback((next: LandingContent) => {
    setContentState(next);
    saveContent(next);
  }, []);

  const updateSection = useCallback(
    <K extends keyof LandingContent>(section: K, data: Partial<LandingContent[K]>) => {
      setContentState((prev) => {
        const next = {
          ...prev,
          [section]: { ...prev[section], ...data },
        };
        saveContent(next);
        return next;
      });
    },
    []
  );

  const value = useMemo(
    () => ({ content, setContent, updateSection }),
    [content, setContent, updateSection]
  );

  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  );
}

export function useContent() {
  const ctx = useContext(ContentContext);
  if (!ctx) throw new Error('useContent must be used within ContentProvider');
  return ctx;
}
