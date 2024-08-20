import { getLoadingRedirect } from "@/state/loading/loadingSelector"
import { IStore } from '@/state/types';
import { useSelector } from 'react-redux';
import Spinner from "@/components/Atoms/Spinner/Spinner";
import { Container } from "./styled"

export const GlobalSpinner = () => {
  const loadingRedirect = useSelector((state: IStore) => getLoadingRedirect(state))

  return (
    <>
        {
            loadingRedirect &&
            <Container>
                <Spinner isCenterScreen isBlack containerHeight="800px" height="50px" width="50px"></Spinner>
            </Container>
        }
    </>
       
  );
};

export default GlobalSpinner;