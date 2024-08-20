import { useState, useEffect } from 'react';
import {  SuscribeForm  } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { IStore } from '@/state/types';
import { onAddEmailToNewsletterFailed, onAddEmailMailchimp, onSubscribeStockoutFailed, onCleanErrorsNewsletter, onCleanErrorsStockout } from '@/state/mailchimp/mailchimpActions';
import { getNewsLetterResponse, getSubscribeStockoutResponse } from '@/state/mailchimp/mailchimpSelector';
import { isValidEmail } from '@/utils/emailValidator';
import { IProps } from './types';
import { getLoadingNewsletter, getLoadingSubscribeStockout } from '@/state/loading/loadingSelector';
import Images from '@/components/Atoms/Images/Images';
import Margin from '@/components/Atoms/Spacing/Margin/Margin';
import Text from '@/components/Atoms/Typography/Text';
import Input from '@/components/Atoms/Input/Input';
import Button from '@/components/Atoms/Buttons/Button';


const MailChimpForm = ({ tag, btnText }: IProps) => {
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const loadingSubsStockout = useSelector((state: IStore) => getLoadingSubscribeStockout(state));
    const loadingNewsletter = useSelector((state: IStore) => getLoadingNewsletter(state));
    const newsletter = useSelector((state: IStore) => getNewsLetterResponse(state))
    const subscribe = useSelector((state: IStore) => getSubscribeStockoutResponse(state))
    const [mailchimpReq, setMailchimpReq] = useState(tag === 'footer' ? newsletter : subscribe)
    const [loadingMailchimp, setLoadingMailchimp] = useState(tag === 'footer' ? loadingNewsletter : loadingSubsStockout)


    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (isValidEmail(email)) {

            setMailchimpReq(tag === 'footer' ? newsletter : subscribe)
            setLoadingMailchimp(tag === 'footer' ? loadingNewsletter : loadingSubsStockout)

            dispatch(onAddEmailMailchimp(email, tag))
        } else {
            if (tag === 'footer') {
                dispatch(onAddEmailToNewsletterFailed({ error: "Formato de mail incorrecto" }))
            } else {
                dispatch(onSubscribeStockoutFailed({ error: "Formato de mail incorrecto" }))
            }
        }
    };

    useEffect(() => {
        if (tag === 'footer') {
            dispatch(onCleanErrorsNewsletter())
        } else {
            dispatch(onCleanErrorsStockout())
        }
    }, [email])

    useEffect(() => {
        setLoadingMailchimp(tag === 'footer' ? loadingNewsletter : loadingSubsStockout)
    }, [loadingNewsletter, loadingSubsStockout])

    useEffect(() => {
        setMailchimpReq(tag === 'footer' ? newsletter : subscribe)
    }, [newsletter, subscribe])

    const showContentBtn = () => {
        return btnText ?? (
            <>
            <Margin margin="3px" />
            <Images 
                src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/a26881a3-9194-484e-491f-642e0818ac00/fit=cover"
                alt="flecha"
                height='70%'
            />
            </>
        )
    }
    

    return (
        <div>
            {
                mailchimpReq.response && mailchimpReq.response.message == "success" ? (
                    <>
                    <Margin margin='8px'/>
                    <Text 
                        color="steel"
                        align={tag !== 'footer' ? "center" : "left"}
                        >¡Gracias por suscribirte!</Text></>
                ) : (
                    <SuscribeForm>
                        <Input 
                            type='email'
                            name='EMAIL'
                            placeholder='Tu correo electrónico'
                            value={email}
                            onChange={(e: any) => setEmail(e.target.value)}
                            required
                            borderRadius='8px 0 0 8px'
                            disabled={loadingMailchimp}
                            
                        />
                        <Button 
                        onClick={handleSubmit} 
                        size='small'
                        disabled={loadingMailchimp}
                        borderRadius='0 8px 8px 0'
                        textColor='white'
                        backgroundColor='offBlack'
                        backgroundColorHover='lead'>
                        {
                            loadingMailchimp ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    style={{ margin: 'auto', background: 'none', display: 'block', shapeRendering: 'auto' }}
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="xMidYMid"
                                >
                                    <circle cx="50" cy="50" fill="none" stroke="#ffd500" strokeWidth="10" r="24" strokeDasharray="113.09733552923255 39.69911184307752">
                                        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.8695652173913042s" values="0 50 50;360 50 50" keyTimes="0;1" />
                                    </circle>
                                </svg>

                            ) : (
                                showContentBtn()
                            )
                        }
                        </Button>
                    </SuscribeForm>
                )
            }
            {
                mailchimpReq.error && 
                <>
                <Margin margin='0.5em'/>
                <Text
                    color='rareRed'
                    align='center'
                >{!mailchimpReq.errorMessage
                    ? "Hubo un error"
                    : mailchimpReq.errorMessage.toLowerCase().includes("exist")
                        ? "Tu email ya estaba suscripto!"
                        : mailchimpReq.errorMessage.toLowerCase().includes("formato")
                            ? mailchimpReq.errorMessage
                            : "Hubo un error"}</Text></>}
        </div >
    );
};

export default MailChimpForm;