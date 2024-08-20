import ClientReviews from "@/components/Molecules/Reviews/ClientsReviews/ClientReviews";
import RelatedProducts from "@/components/Organisms/RelatedProducts/RelatedProducts";

const OpinionesRealesDeClientesReales = ({currentProductsRelated} : any) => {
    return(
        <>
        <ClientReviews />
        <RelatedProducts isYellowTitle relatedItems={currentProductsRelated} title="tu descanso" boldTitle="ideal"/>
        </>
           
       
    )
}
export default OpinionesRealesDeClientesReales;