import { useEffect } from "react";

const useIOSFontFix = () => {
  const isIOS = () => {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
  };

  useEffect(() => {
    if (isIOS()) {
      document.querySelectorAll("input").forEach((el) => {
        el.style.fontSize = "16px";
      });
    }
  }, []);
};

export default useIOSFontFix;
