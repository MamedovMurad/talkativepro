import { useEffect, useState } from 'react';
import agent from '../../Api/agent';
import FaqItem from '../../components/faq_item';
import ButtonUI from '../../components/UI/Button';
import { IFaq } from '../../Model/DTO';
import { PostSVG } from '../../svg/postSVG';
import styles from './index.module.css'
type RulesCOntainerProps = {}
 
const RulesCOntainer:React.FC<RulesCOntainerProps> = () => {
    return (
        <div className={styles.faq} style={{background:'unset'}}>
        <div className="wrapper">
        
            <div className={styles.faqWrapper}>
            {[{id:12,question:'test test', answer:'llll'},
        {id:15,question:'test', answer:'answer answer'}]?.map(item=>( <FaqItem key={item.id} data={item}/>))}
            <div className={styles.button}><ButtonUI text={"Sualın varsa bizə yaz "} icon={<PostSVG/>} width="248px" height='56px' color='#00C1DD'/></div>
            </div>
           
            
        </div>
    </div>
    );
}
 
 
export default RulesCOntainer;