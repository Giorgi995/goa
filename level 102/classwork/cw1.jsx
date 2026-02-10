import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;

import useLocalStorage from "./useLocalStorage";

function Settings() {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [language, setLanguage] = useLocalStorage("language", "ka");

  return (
    <div>
      <h2>Settings</h2>

      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Theme: {theme}
      </button>

      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="ka">ქართული</option>
        <option value="en">English</option>
      </select>
    </div>
  );
}

export default Settings;