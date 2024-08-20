export const Device = (userAgent : string) => {
    if (/android/i.test(userAgent)) {
      return "androidIntent";
    } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
      return "iphone";
    } else {
      return "desktop";
    }
};