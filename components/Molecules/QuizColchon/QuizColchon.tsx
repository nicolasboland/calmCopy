import { Container } from "./styled";
import Text from "@/components/Atoms/Typography/Text";
import Modal from "@/components/Organisms/Modals/Modal"
import ModalQuizz from "@/components/Organisms/Modals/ModalQuizz/ModalQuizz"
import { QuizzUnit } from '@/components/Organisms/Modals/ModalQuizz/ModalQuizz';
import Margin from "@/components/Atoms/Spacing/Margin/Margin";

const QuizColchon = () => {
    return (
        <Container>
            <Text
            color="millionGray"
            font="medium"
            fontSize="0.9rem"
            align="left"
            >¿No sabés por cuál decidirte? Completá nuestro quiz y encontrá tu match perfecto.</Text>

            {/* <Modal>
                <QuizzUnit />
                <ModalQuizz />
            </Modal> */}

            <Margin margin="15px 0"/>

            <Text
            color="wildViolet"
            font="medium"
            fontSize="0.9rem"
            align="left"
            >Empeza Quizz</Text>
        </Container>
      );
}

export default QuizColchon