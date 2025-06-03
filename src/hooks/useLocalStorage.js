import { useEffect, useState } from "react";

const useLocalStorage = (storageKey, defaultValue) => {
    const getStoredValue = () => {
        try {
            const stored = localStorage.getItem(storageKey);
            if (stored === null || stored === "undefined") {
                return defaultValue;
            }
            return JSON.parse(stored);
        } catch (e) {
            console.warn(`Error parsing localStorage key "${storageKey}":`, e);
            return defaultValue;
        }
    };

    const [value, setValue] = useState(getStoredValue);

    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(value));
    }, [value, storageKey]);

    return [value, setValue];
};

export default useLocalStorage;
