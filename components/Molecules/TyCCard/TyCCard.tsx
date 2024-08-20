import parse from "html-react-parser";
import { Iprops } from "./types";
import { Container } from "./styled";

const TyCCard = ({
    text
}: Iprops) => {
  return (
        <Container>
            {parse(text)}
        </Container>
  );
};

export default TyCCard;
