import "./App.css";
function App() {
  return (
    <>
      <nav className="navbar">
        <h1>🍎 eShop</h1>

        <input
          type="text"
          placeholder="Search For Products..."
        />

        <button><i className="fa-solid fa-cart-shopping"></i> Cart</button>
      </nav>

      <div className="container">
        <div className="product_card">
          <div className="product_images">
            <img
              src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mba13-midnight-select-202503_SW_COLOR?wid=400&hei=300&fmt=jpeg&qlt=90"
              alt="Macbook Air M5"
            />
          </div>
          <span>Available</span>
          <h2>Macbook Air M5</h2>
          <p>Experience The Premium</p>
          <h3>₹1,69,000</h3>
          <button className="addtocart">Add To Cart</button>
          <button className="buy">Buy Now</button>
        </div>

        <div className="product_card">
          <div className="product_images">
            <img
              src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mba13-skyblue-select-202503_SW_COLOR?wid=400&hei=300&fmt=jpeg&qlt=90"
              alt="Macbook Air M4"
            />
          </div>
          <span>Available</span>
          <h2>Macbook Air M4</h2>
          <p>Experience The Premium</p>
          <h3>₹1,49,000</h3>
          <button className="addtocart">Add To Cart</button>
          <button className="buy">Buy Now</button>
        </div>

        <div className="product_card">
          <div className="product_images">
            <img
              src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/macbook-air-size-unselect-202601-gallery-1?wid=400&hei=300&fmt=jpeg&qlt=90"
              alt="Macbook Air M3"
            />
          </div>
          <span>Available</span>
          <h2>Macbook Air M3</h2>
          <p>Experience The Premium</p>
          <h3>₹1,29,000</h3>
          <button className="addtocart">Add To Cart</button>
          <button className="buy">Buy Now</button>
        </div>

        <div className="product_card">
          <div className="product_images">
            <img
              src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-finish-select-black-202509_GEO_US?wid=400&hei=300&fmt=jpeg&qlt=90"
              alt="iPhone 17"
            />
          </div>
          <span>Available</span>
          <h2>Iphone 17</h2>
          <p>Experience The Premium</p>
          <h3>₹89,999</h3>
          <button className="addtocart">Add To Cart</button>
          <button className="buy">Buy Now</button>
        </div>

        <div className="product_card">
          <div className="product_images">
            <img
              src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-pro-finish-select-202509-6-3inch_GEO_US?wid=400&hei=300&fmt=jpeg&qlt=90"
              alt="iPhone 17 Pro"
            />
          </div>
          <span>Available</span>
          <h2>Iphone 17 Pro</h2>
          <p>Experience The Premium</p>
          <h3>₹1,29,999</h3>
          <button className="addtocart">Add To Cart</button>
          <button className="buy">Buy Now</button>
        </div>

        <div className="product_card">
          <div className="product_images">
            <img
              src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-pro-max-finish-select-202509?wid=400&hei=300&fmt=jpeg&qlt=90"
              alt="iPhone 17 Pro Max"
            />
          </div>
          <span className="not-available">Not Available</span>
          <h2>Iphone 17 Pro Max</h2>
          <p>Experience The Premium</p>
          <h3>₹1,59,999</h3>
          <button className="addtocart">Add To Cart</button>
          <button className="buy">Buy Now</button>
        </div>
      </div>
    </>
  );
}

export default App;