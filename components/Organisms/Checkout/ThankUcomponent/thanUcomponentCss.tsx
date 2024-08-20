import { styled } from "styled-components";

export const TextInfo = styled.p`
  color: ${(props) => props.theme.colors.carbon};
  font-size: 1rem;
  margin: 0.5rem 0;
  @media ${(props) => props.theme.devices.mobile} {
    font-size: 0.9rem;
  }
`

export const ContainerThankU = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ContainerLogoCalm = styled.div`
  width: 200px;
  padding: 2rem 3rem;
  margin-right: auto;
  @media ${(props) => props.theme.devices.mobile} {
    font-size: 1.1rem;
    padding: 1rem 1rem;
    width: 100px;
  }
`;

export const logoImg =
  "data:image/png;base64,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";

export const LogoCalm = styled.img`
  width: 100%;
  height: auto;
`;

export const ContainerText = styled.div`
  width: 70%;
  text-align: center;
  @media ${(props) => props.theme.devices.mobile} {
    width: 90%;
  }
`;

export const TitleThankU = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 30px;
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.carbon};

  @media ${(props) => props.theme.devices.biggerMobile} {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
  @media ${(props) => props.theme.devices.mobile} {
    font-size: 1rem;
    height: 6vh;
    margin-bottom: 0;
  }
`;

export const TextThankU = styled.div`
  text-align: center;
  font-size: 1.4 rem;
  font-family: ${(props) => props.theme.fonts.medium};
  color: ${(props) => props.theme.colors.black};
  b {
    ${(props) => props.theme.fonts.bold};
  }

  @media ${(props) => props.theme.devices.biggerMobile} {
    font-size: 1rem;
  }
  @media ${(props) => props.theme.devices.mobile} {
    font-size: 0.7rem;
    justify-self: start;
  }
`;

export const ContainerDetailOrder = styled.div`
  max-width: 80vw;
  min-height: 80vh;
  display: flex;
  align-items: flex-start;

  @media ${(props) => props.theme.devices.biggerMobile} {
    max-width: 100vw;
    @media ${(props) => props.theme.devices.mobile} {
      flex-direction: column;
      padding: 0.8rem;
    }
  }
`;

export const ContainerCart = styled.div`
  width: 30vw;
  margin: 30px 0;
  margin-right: 2rem;

  @media ${(props) => props.theme.devices.biggerMobile} {
    width: 40vw;
  }
  @media ${(props) => props.theme.devices.mobile} {
    width: 100%;
    margin-right: 0;
    margin: 10px 0;
  }
`;

export const ContainerUserDetail = styled.div`
  width: 30vw;
  display: flex;
  padding: 1rem;
  flex-direction: column;

  @media ${(props) => props.theme.devices.biggerMobile} {
    width: 40vw;
  }
  @media ${(props) => props.theme.devices.mobile} {
    width: 100%;
  }
`;

export const TitleOrderDetail = styled.h1`
  font-size: 1.5rem;
  margin: 1.2rem 0 0.5rem 0;
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.carbon};
  height: auto;

  @media ${(props) => props.theme.devices.biggerMobile} {
    font-size: 1.2rem;
  }
`;

export const TextOrderDetail = styled.div`
  font-size: 1rem;
  font-family: ${(props) => props.theme.fonts.medium};
  color: ${(props) => props.theme.colors.millionGray};

  @media ${(props) => props.theme.devices.biggerMobile} {
    font-size: 0.8rem;
  }
`;

export const LinkSoporte = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  margin: 1rem 0 0 0;
  font-size: 0.9rem;
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.dullViolet};
  @media ${(props) => props.theme.devices.biggerMobile} {
    font-size: 0.7rem;
  }
`;

export const ContainerRuedaCalm = styled.div`
  width: 63vw;
  max-height: 60vh;
  background: url("https://calmessimple.com.ar/wp-content/uploads/2023/06/Banner_RLC.webp")
    no-repeat center center;
  background-size: cover;
  display: flex;
  border-style: solid #888;
  border-radius: 20px;
  flex-direction: column;
  margin-bottom: 4.5rem;

  @media ${(props) => props.theme.devices.biggerMobile} {
    width: 80vw;
    height: 50vh;
  }
  @media ${(props) => props.theme.devices.mobile} {
    width: 100vw;
    border-radius: 0;
    height: 30vh;
    margin-bottom: 2rem;
  }
`;

export const ContainerTextRuedaCalm = styled.div`
  width: 40vw;
  height: 48vh;
  justify-content: left;
  align-items: center;
  padding: 3rem;
  @media ${(props) => props.theme.devices.biggerMobile} {
    width: 60vw;
    height: 60vh;
  }
  @media ${(props) => props.theme.devices.mobile} {
    width: 90vw;
    padding: 1.5rem;
  }
`;

export const FraseRuedaCalm = styled.h3`
  font-size: 1rem;
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.dullViolet};
  @media ${(props) => props.theme.devices.biggerMobile} {
    font-size: 0.8rem;
  }
  @media ${(props) => props.theme.devices.mobile} {
    font-size: 0.5rem;
  }
`;

export const TitleRuedaCalm = styled.h1`
  font-size: 1.7rem;
  margin: 5px;
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.carbon};
  @media ${(props) => props.theme.devices.biggerMobile} {
    font-size: 1.5rem;
  }
  @media ${(props) => props.theme.devices.mobile} {
    font-size: 1rem;
    margin: 0;
    margin-top: 5px;
  }
`;

export const TextRuedaCalm = styled.p`
  font-size: 1rem;
  margin-top: 15px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.carbon};
  b {
    font-family: ${(props) => props.theme.fonts.bold};
    color: #535353;
  }
  @media ${(props) => props.theme.devices.biggerMobile} {
    font-size: 1rem;
  }
  @media ${(props) => props.theme.devices.mobile} {
    font-size: 0.7rem;
  }
`;

export const ButtonContainer = styled.div`
  height: 17vh;
  display: flex;
  justify-content: left;
  align-items: center;
  @media ${(props) => props.theme.devices.mobile} {
    height: 7vh;
  }
`;

export const ButtonCalm = styled.a`
  max-width: 260px;
  width: 15vw;
  height: 7vh;
  background-color: ${(props) => props.theme.colors.dullViolet};
  border: 2px solid ${(props) => props.theme.colors.dullViolet};
  border-radius: 10px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: white;
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: 1rem;

  @media ${(props) => props.theme.devices.biggerMobile} {
    font-size: 0.8rem;
  }

  @media ${(props) => props.theme.devices.mobile} {
    width: 26vw;
    height: 4vh;
    font-size: 0.5rem;
  }
`;

export const LogoConfirmacionSVG = () => {
  return (
    <svg
      width="69"
      height="69"
      viewBox="0 0 69 69"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M46.8068 26.5057C47.0073 26.706 47.1663 26.9438 47.2748 27.2055C47.3834 27.4673 47.4392 27.7479 47.4392 28.0312C47.4392 28.3146 47.3834 28.5952 47.2748 28.857C47.1663 29.1187 47.0073 29.3565 46.8068 29.5568L31.7131 44.6505C31.5128 44.851 31.275 45.0101 31.0132 45.1186C30.7515 45.2271 30.4709 45.2829 30.1875 45.2829C29.9041 45.2829 29.6236 45.2271 29.3618 45.1186C29.1 45.0101 28.8622 44.851 28.662 44.6505L22.1932 38.1818C21.7886 37.7772 21.5613 37.2284 21.5613 36.6562C21.5613 36.0841 21.7886 35.5353 22.1932 35.1307C22.5978 34.7261 23.1466 34.4988 23.7188 34.4988C24.291 34.4988 24.8397 34.7261 25.2443 35.1307L30.1875 40.0766L43.7557 26.5057C43.956 26.3052 44.1938 26.1462 44.4555 26.0377C44.7173 25.9292 44.9979 25.8733 45.2813 25.8733C45.5646 25.8733 45.8452 25.9292 46.107 26.0377C46.3687 26.1462 46.6066 26.3052 46.8068 26.5057ZM62.5313 34.5C62.5313 40.0441 60.8873 45.4636 57.8071 50.0733C54.727 54.683 50.3491 58.2759 45.2271 60.3975C40.1051 62.5191 34.4689 63.0742 29.0314 61.9926C23.5939 60.911 18.5992 58.2413 14.6789 54.3211C10.7587 50.4008 8.08897 45.4062 7.00738 39.9686C5.92578 34.5311 6.4809 28.8949 8.60251 23.7729C10.7241 18.6509 14.317 14.273 18.9267 11.1929C23.5364 8.11275 28.956 6.46875 34.5 6.46875C41.932 6.4766 49.0573 9.4324 54.3124 14.6876C59.5676 19.9428 62.5234 27.0681 62.5313 34.5ZM58.2188 34.5C58.2188 29.8089 56.8277 25.2231 54.2214 21.3226C51.6152 17.422 47.9108 14.3819 43.5768 12.5867C39.2428 10.7915 34.4737 10.3218 29.8727 11.237C25.2717 12.1522 21.0455 14.4112 17.7283 17.7283C14.4112 21.0454 12.1522 25.2717 11.237 29.8727C10.3218 34.4737 10.7915 39.2427 12.5867 43.5768C14.382 47.9108 17.4221 51.6152 21.3226 54.2214C25.2231 56.8277 29.8089 58.2188 34.5 58.2188C40.7884 58.2116 46.8172 55.7104 51.2638 51.2638C55.7104 46.8172 58.2116 40.7884 58.2188 34.5Z"
        fill="#FABD00"
      />
    </svg>
  );
};
