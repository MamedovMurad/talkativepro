
import RulesCOntainer from '../../container/faq/rules';
import styles from './index.module.css'
type RulesProps = {}
 
const Rules:React.FC<RulesProps> = () => {
    return (
        <section className={styles.pageRule}>
            <div className="wrapper">
            <h1>İstifadə qaydaları</h1>
            <RulesCOntainer/>
            </div>
        </section>
    );
}
 
 
export default Rules;