import colchonLandingContent from '@/jsons/ProductContent/colchonCalm.json'
import colchonHibridoLandingContent from '@/jsons/ProductContent/colchonHibrido.json'
import baseLandingContent from "@/jsons/ProductContent/base.json"
import sommierLandingContent from "@/jsons/ProductContent/sommier.json"
import marcoSuavidad from '@/jsons/ProductContent/marcoSuavidad.json'
import camaSuavidad from '@/jsons/ProductContent/camaSuavidad.json'
import respaldoHorizonte from '@/jsons/ProductContent/camaSuavidad.json'

export const skuColchonesOrBases = () => {
    let skusColchon = colchonLandingContent.skus.concat(colchonHibridoLandingContent.skus);
    let skusBases = baseLandingContent.skus.concat(sommierLandingContent.skus);
    let skus = skusColchon.concat(skusBases)
    return skus
}

export const skuBases = () => {
    let skusBases = baseLandingContent.skus.concat(sommierLandingContent.skus);
    return skusBases
}

export const skuColchones = () => {
    let skusColchon = colchonLandingContent.skus.concat(colchonHibridoLandingContent.skus);
    return skusColchon
}

export const skuNewProducts = () => {
    let skuks = marcoSuavidad.skus.concat(camaSuavidad.skus.concat(respaldoHorizonte.skus));
    return skuks
}