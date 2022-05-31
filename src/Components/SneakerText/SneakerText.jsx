import "./SneakerText.css";

export default function SneakerTexts() {
  return (
    <div className="TextComponent">
      <h6 className="TextComponent-headingComp">SNEAKER COMPANY</h6>
      <h2 className="TextComponent-heading">Fall Limited Edition Sneakers</h2>
      <p className="TextComponent-paraText">
        These low-profile sneakers are your perfect casual wear
        companion.Featuring a durable rubber outer sole,they'll withstand
        everything the weather can offer.
      </p>
      <div className="TextComponent-price">
        <h2 className="TextComponent-discountPrice">$125.00</h2>
        <span className="TextComponent-percentageOff">50%</span>
        <span className="TextComponent-originalPrice">$250.00</span>
      </div>
    </div>
  );
}
