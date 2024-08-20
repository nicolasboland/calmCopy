import colchonLandingContent from '@/jsons/ProductContent/colchonCalm.json'
import colchonHibridoLandingContent from '@/jsons/ProductContent/colchonHibrido.json'
import baseLandingContent from '@/jsons/ProductContent/base.json'
import sommierLandingContent from '@/jsons/ProductContent/sommier.json'

export const itemIsEDEAble = (sku: string): boolean => {
    let skus = colchonLandingContent.skus.concat(colchonHibridoLandingContent.skus);
    skus = skus.concat(baseLandingContent.skus)
    skus = skus.concat(sommierLandingContent.skus)
    return skus.includes(sku)
}