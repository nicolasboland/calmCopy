
export const sendClarityCustomEvent = (key, value) => {
    if (typeof window !== "undefined" && window.clarity) {
      window.clarity("set", key, value);
    }
  };