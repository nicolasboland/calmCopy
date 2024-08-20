import { topPage } from "@/utils/topPage";
import { useEffect, useState } from "react";

export const Render3d = () => {
  const [render, setRender] = useState(false);
  useEffect(() => {
    topPage();
    setRender(true);
  }, []);
  return (
    <>
      {render && (
        <main>
          <h1>REDNDER 3D PRUEBAS</h1>

          <h3>iphone</h3>
          <div>
            <a
              rel="ar"
              href="https://calmessimple.com.ar/lab/test/AR/Colchón-Original-2-Plazas.usdz"
            >
              Iphone Colchon
            </a>
          </div>
          <br />
          <h2>VERSION 0</h2>
          <h3>Android</h3>
          <a href="intent://arvr.google.com/scene-viewer/1.0?file=https://calmessimple.com.ar/lab/test/AR/Colchón-Original-2Plazas-blender-2.gltf&mode=ar_only&link=https://calmessimple.com.ar/producto/colchon-calm-hibrido&title=ColchonCalm#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=https://developers.google.com/ar;end;">
            Colchon
          </a>
          <br />  <br />
          <h2>VERSION 1</h2>
          <h3>Android</h3>
          <a href="intent://arvr.google.com/scene-viewer/1.1?file=https://calmessimple.com.ar/lab/test/AR/Colchón-Original-2Plazas-blender-2.gltf&mode=ar_only&link=https://calmessimple.com.ar/producto/colchon-calm-hibrido&title=ColchonCalm#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=https://developers.google.com/ar;end;">
            Colchon
          </a>
          <br />  <br />
          <h2>Desktop</h2>
        </main>
      )}
    </>
  );
};

export default Render3d;
