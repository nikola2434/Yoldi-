export const getLocalStorage = (key: string) => {
  if (typeof window !== "undefined") {
    const ls = localStorage.getItem(key);
    return ls ? ls : null;
  }
  return null;
};
