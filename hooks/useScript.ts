export function useScript(src: string, type?: string, nomodule?: boolean): Promise<HTMLScriptElement> {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.defer = true;

    if (type) {
      script.type = type;
    }

    if (nomodule) {
      script.setAttribute("nomodule", "");
    }

    script.onload = () => resolve(script);
    script.onerror = reject;

    document.head.appendChild(script);
  });
}