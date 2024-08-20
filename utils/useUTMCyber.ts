export const useUTMCyber = (params?: any) => {
    let UTMdata = {
        "funnel": "sin-funnel",
        "canal": "sin-canal",
        "categoria": "sin-categoria",
        "leadsTag": "PRE_CM23_LEADS"
    }
    const storedCanal = localStorage.getItem("canal");
    const storedFunnel = localStorage.getItem("funnel");
    const storedCategoria = localStorage.getItem("categoria");
    const storedLeadsTag = localStorage.getItem("leadsTag");
  
    if (storedCanal && storedFunnel && storedCategoria && storedLeadsTag) {
        UTMdata = {
            canal: storedCanal,
            funnel: storedFunnel,
            categoria: storedCategoria,
            leadsTag: storedLeadsTag
        }
        return UTMdata
    } else if (params) {
      const utmData = params.split("-");
      if (utmData && utmData.length >= 7) {
        const newCanal = utmData[1] == "FBIG" ? "FB" : utmData[1] == "GOO" ? "GOOGLE" : utmData[1];
        const newFunnel = utmData[1] == "GOO" ? utmData[5] : utmData[4];
        const newCategoria = utmData[6] == "RopaDeCama" ? "RDC" : utmData[6].toUpperCase();
        const newLeadsTag = utmData[1] == "GOO" ? "PRE_LEADS_CM23" : "PRE_CM23_LEADS";
  
        localStorage.setItem("canal", newCanal);
        localStorage.setItem("funnel", newFunnel);
        localStorage.setItem("categoria", newCategoria);
        localStorage.setItem("leadsTag", newLeadsTag);

        UTMdata = {
            canal: newCanal,
            funnel: newFunnel,
            categoria: newCategoria,
            leadsTag: newLeadsTag
        }
        return UTMdata
      }
    } else {
        return UTMdata
    }
}