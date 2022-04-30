import ButtonUI from "../../components/UI/Button";
import styles from "./index.module.css";
type PricesProps = {};

const Prices: React.FC<PricesProps> = () => {
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
                <li>
                  <label htmlFor="time-0">
                    <div>
                      <input type="radio" name="time" id="time-0" />
                      <article> 1 saat</article>
                    </div>
                    <div>
                      <label htmlFor="">5 ₼</label>
                    </div>
                  </label>
                </li>

                <li>
                  <label htmlFor="time-1">
                    <div>
                      <input type="radio" name="time" id="time-1" />
                      <article> 1 saat</article>
                    </div>
                    <div>
                      <label htmlFor="">5 ₼</label>
                    </div>
                  </label>
                </li>
                <li>
                  <label htmlFor="time-2">
                    <div>
                      <input type="radio" name="time" id="time-2" />
                      <article> 1 saat</article>
                    </div>
                    <div>
                      <label htmlFor="">5 ₼</label>
                    </div>
                  </label>
                </li>
                <li>
                  <label htmlFor="time-3">
                    <div>
                      <input type="radio" name="time" id="time-3" />
                      <article> 1 saat</article>
                    </div>
                    <div>
                      <label htmlFor="">5 ₼</label>
                    </div>
                  </label>
                </li>
                
              </ul>
            </div>
            <div>
              <ul>
                <li>Sizin tələblərinizəs ən uyğun olan tarifi seçin</li>
                <li>Sizin tələblərinizəs ən uyğun olan tarifi seçin</li>
                <li>Sizin tələblərinizəs ən uyğun olan tarifi seçin</li>
                <li>Sizin tələblərinizəs ən uyğun olan tarifi seçin</li>
              </ul>
              <ButtonUI text="Ödəniş et" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prices;
