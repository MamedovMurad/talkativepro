import  Router  from 'next/router';
import { useEffect, useState } from 'react';
import agent from '../../Api/agent';
import FaqItem from '../../components/faq_item';
import ButtonUI from '../../components/UI/Button';
import useResponsivenenessAdjuster from '../../hooks/useResponsivenenessAdjuster';
import { IFaq } from '../../Model/DTO';
import { PostSVG } from '../../svg/postSVG';
import styles from './index.module.css'
type RulesCOntainerProps = {}
 
const RulesCOntainer:React.FC<RulesCOntainerProps> = () => {
    return (
        <div className={styles.faq} style={{background:'unset'}}>
        <div className="wrapper">
        
            <div className={styles.faqWrapper}>
            {[{id:12,question:'test test', answer:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'},
        {id:15,question:'test', answer:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'},
        {id:25,question:'test', answer:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'}
         ]?.map(item=>( <FaqItem key={item.id} data={item}/>))}
            <div className={styles.button}>
                <ButtonUI text={"Sualın varsa bizə yaz "} icon={<PostSVG/>} width={useResponsivenenessAdjuster(800)?'100%':"248px"} height='56px' color='#00C1DD'  onclick={()=>Router.push('/contact')}/></div>
            </div>
           
            
        </div>
    </div>
    );
}
 
 
export default RulesCOntainer;