import { useState } from 'react';
import FaqItem from '../../components/faq_item';
import ButtonUI from '../../components/UI/Button';
import styles from './index.module.css'
type FaqProps = {}
 
const questions = [{id:1, title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit?', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida metus diam, eget hendrerit nibh sagittis ut. Nulla diam arcu, mattis eu augue vel, venenatis gravida mi.'},
{id:2, title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit?', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida metus diam, eget hendrerit nibh sagittis ut. Nulla diam arcu, mattis eu augue vel, venenatis gravida mi.'},
{id:3, title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit?', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida metus diam, eget hendrerit nibh sagittis ut. Nulla diam arcu, mattis eu augue vel, venenatis gravida mi.'},
{id:4, title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit?', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida metus diam, eget hendrerit nibh sagittis ut. Nulla diam arcu, mattis eu augue vel, venenatis gravida mi.'}]
const Faq:React.FC<FaqProps> = () => {
    const [first, setfirst] = useState(false)
    return (
        <div className={styles.faq}>
            <div className="wrapper">
                <h2>Ən çox verilən suallar</h2>
                <div className={styles.faqWrapper}>
                {questions.map(item=>( <FaqItem key={item.id} data={item}/>))}
                <div className={styles.button}><ButtonUI text="Sualın varsa bizə yaz" width="248px" height='56px'/></div>
                </div>
               
                
            </div>
        </div>
    );
}
 
 
export default Faq;