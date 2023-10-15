import logo from "./logo.svg";
import "./App.css";
import f1 from "./f1.jpg";
import f2 from "./f2.jpg";

function App() {
  return (
    <div className="food__wrapper">
      <div className="food__wrapper-header">
        <div className="header-text">Cart</div>
        <div className="swipe-text">Swipe on item to delete</div>
      </div>

      <div className="food__wrapper-body">
        <div className="food_card">
          <div className="food_card-img-wrap">
            <img className="food_img" src={f2} alt="f1" />
          </div>

          <div className="food_card-content-wrap">
            <div className="food_card-content-text header-bold">
              Veggie Tomato Mix
            </div>
            <div className="food_card-content-footer">
              <div className="food_card-content-text red-bold">#1900</div>
              <div className="food_card-content-footer-btns">
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
            </div>
          </div>
        </div>

        <div className="food_card">
          <div className="food_card-img-wrap">
            <img className="food_img" src={f2} alt="f1" />
          </div>

          <div className="food_card-content-wrap">
            <div className="food_card-content-text header-bold">
              Veggie Tomato Mix
            </div>
            <div className="food_card-content-footer">
              <div className="food_card-content-text red-bold">#1900</div>
              <div className="food_card-content-footer-btns">
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
            </div>
          </div>
        </div>

        <div className="food_card">
          <div className="food_card-img-wrap">
            <img className="food_img" src={f2} alt="f1" />
          </div>

          <div className="food_card-content-wrap">
            <div className="food_card-content-text header-bold">
              Veggie Tomato Mix
            </div>
            <div className="food_card-content-footer">
              <div className="food_card-content-text red-bold">#1900</div>
              <div className="food_card-content-footer-btns">
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
