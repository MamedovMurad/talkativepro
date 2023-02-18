
import { useEffect, useState } from "react";
import agent from "../../Api/agent";
import ButtonUI from "../../components/UI/Button";
import useResponsivenenessAdjuster from "../../hooks/useResponsivenenessAdjuster";
import { GenericDTO, ITariff } from "../../Model/DTO";
import styles from "./index.module.css";
type PricesProps = {};

const Prices: React.FC<PricesProps> = () => {
  const [priceses, setpriceses] = useState<ITariff[] | null>(null)
  async function fetchApi(){
    const res = await agent.tariff.list()
    res&& setpriceses(res.data)
  }
  useEffect(() => {fetchApi()}, [])
  
  return (
    <section className={styles.Prices}>
      <div className="wrapper">
        <div>
          <h3>Qiymətlər</h3>
          <div className={styles.body}>
            <div>
              <header>
                <h5>Tarif seçin</h5>
                <p>Sizin tələblərinizə ən uyğun olan tarifi seçin</p>
              </header>
              <ul>
                {
                  priceses?.map(item=>(
                    <li key={item.id}>
                    <label htmlFor={item.id+'test'}>
                      <div>
                        <input type="radio" name="time" id={item.id+'test'} onChange={()=>console.log('test')}/>
                        <article> {item.hoursCount} saat</article>
                      </div>
                      <div>
                        <label htmlFor="">{item.price} ₼</label>
                      </div>
                    </label>
                  </li>
                  ))
                }
               

                
              </ul>
            </div>
            <div>
              <ul>
                <li>Sizin tələblərinizəs ən uyğun olan tarifi seçin</li>
                <li>Sizin tələblərinizəs ən uyğun olan tarifi seçin</li>
                <li>Sizin tələblərinizəs ən uyğun olan tarifi seçin</li>
                <li>Sizin tələblərinizəs ən uyğun olan tarifi seçin</li>
              </ul>
              <ButtonUI text="Ödəniş et" width={useResponsivenenessAdjuster(800)?'100%':undefined}  />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prices;
