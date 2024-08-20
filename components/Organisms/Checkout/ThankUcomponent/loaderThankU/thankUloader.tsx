
import { SpinnerContainer, ContainerLoader, TitleLoader, TextLoader } from './loaderCss';
import { LogoCalm, logoImg, ContainerLogoCalm } from '../thanUcomponentCss';


export const ThankUloader= () => {
  return (
    <div>
      <ContainerLogoCalm>
      <LogoCalm src={logoImg}/>
      </ContainerLogoCalm>
      <ContainerLoader>
      <SpinnerContainer/>
      <TitleLoader>Estamos procesando el pago.</TitleLoader>
      <TextLoader>Estás muy cerca de mejorar tu descanso.</TextLoader>
    </ContainerLoader>
    </div>
  )
}

export default ThankUloader