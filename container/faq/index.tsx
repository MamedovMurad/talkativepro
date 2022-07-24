import { useEffect, useState } from 'react';
import agent from '../../Api/agent';
import FaqItem from '../../components/faq_item';
import ButtonUI from '../../components/UI/Button';
import { IFaq } from '../../Model/DTO';
import styles from './index.module.css'
type FaqProps = {}
 

const Faq:React.FC<FaqProps> = () => {
    const [questions, setfaqs] = useState<IFaq[]|null>(null)
    async function fetchFaqs(){
        const data = await agent.faq.list();
        data&&setfaqs(data.data)
      }
    useEffect(() => {
        fetchFaqs()
    }, [])
    
    return (
        <div className={styles.faq}>
            <div className="wrapper">
                <h2>Ən çox verilən suallar</h2>
                <div className={styles.faqWrapper}>
                {questions?.map(item=>( <FaqItem key={item.id} data={item}/>))}
                {/* <div className={styles.button}><ButtonUI text="Sualın varsa bizə yaz" width="248px" height='56px' color='#e48402'/></div> */}
                </div>
               
                
            </div>
        </div>
    );
}
 
 
export default Faq;