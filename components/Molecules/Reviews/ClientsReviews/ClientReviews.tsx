import { useEffect, useState, ChangeEvent } from 'react'
import {
  DivReviews,
  TabsContainer,
  TabsContent,
  DivReviewsTabs,
} from './styled'
import Tab from './Tab/Tab'
import scriptReviews from '@/utils/ScriptReviews'
import { useScript } from '@/hooks/useScript'
import Titles from '@/components/Atoms/Typography/Titles'
import Margin from '@/components/Atoms/Spacing/Margin/Margin'

const ClientReviews = () => {
  const [deleteFirstScript, setDeleteFirstScript] = useState<HTMLScriptElement | null>(null);
  /* const [deleteSecondScript, setDeleteSecondScript] = useState<HTMLScriptElement | null>(null);
 */
  useEffect(() => {
    const script1 = useScript('https://widget.reviews.io/polaris/build.js')
   /*  const script2 = useScript("https://cdn.reamaze.com/assets/reamaze.js")
 */
      Promise.all([script1/* , script2 */])
      .then(([script1/* , script2 */]) => {
        setDeleteFirstScript(script1)
       /*  setDeleteSecondScript(script2) */
        for (const element of scriptReviews) {
          setTimeout(() => {
            const script = document.createElement('script')
            script.innerHTML = element.script
            document.body.appendChild(script)
          }, 10)
        }
      })
      .catch((error) => {
        console.error('Error al cargar el script:', error)
      })
    return () => {
      for (const element of scriptReviews) {
        const scriptDelete = document.querySelector(
          `script[data-widget="${element.sku}"]`
        )
        scriptDelete && document.body.removeChild(scriptDelete);
      }
      deleteFirstScript && document.head.removeChild(deleteFirstScript);
    /*   deleteSecondScript && document.head.removeChild(deleteSecondScript); */
    }
  }, [])

  const [showReview, setShowReview] = useState('Colchón Calm')

  function tabHandle(e: ChangeEvent<HTMLInputElement>) {
    setShowReview(e.target.id)
  }

  return (
    <DivReviews>
      <Titles
        titleTag='h2'
        color='thamarBlack'
        font='extraBold'
        align='center'
        fontSize='2em'>Opiniones reales de clientes reales.</Titles>
        <Margin margin="1rem" />
      <TabsContainer>
        {scriptReviews.map((item) => (
          <Tab
            key={item.sku}
            sku={item.sku}
            name={item.name}
            tabHandle={tabHandle}
          />
        ))}
      </TabsContainer>
      <DivReviewsTabs>
        {scriptReviews.map((item) => (
          <TabsContent
            key={item.sku}
            id={item.sku}
            name={item.name}
            show={showReview}
          ></TabsContent>
        ))}
      </DivReviewsTabs>
    </DivReviews>
  )
}

export default ClientReviews

