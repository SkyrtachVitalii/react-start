import './App.scss';
import AsideMenu from './components/AsideMenu/AsideMenu';
import Product from './components/Product/Product';

function App() {
  let phones = [
    {
      imgSrc: "https://w7.pngwing.com/pngs/450/269/png-transparent-space-gray-iphone-x-showing-ios-and-iphone-4-iphone-8-plus-iphone-5-iphone-x-iphone-apple-gadget-electronics-mobile-phone-thumbnail.png",
      title: "iphone-x",
      price: "$500",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, ipsam blanditiis! Officia voluptate ducimus a doloribus atque voluptatem sed, corrupti quam minus, officiis blanditiis porro odio impedit repellendus! Dicta, eius!"
    },
    {
      imgSrc: "https://w7.pngwing.com/pngs/450/269/png-transparent-space-gray-iphone-x-showing-ios-and-iphone-4-iphone-8-plus-iphone-5-iphone-x-iphone-apple-gadget-electronics-mobile-phone-thumbnail.png",
      title: "iphone-x",
      price: "$500",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, ipsam blanditiis! Officia voluptate ducimus a doloribus atque voluptatem sed, corrupti quam minus, officiis blanditiis porro odio impedit repellendus! Dicta, eius!"
    },
    {
      imgSrc: "https://w7.pngwing.com/pngs/450/269/png-transparent-space-gray-iphone-x-showing-ios-and-iphone-4-iphone-8-plus-iphone-5-iphone-x-iphone-apple-gadget-electronics-mobile-phone-thumbnail.png",
      title: "iphone-x",
      price: "$500",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, ipsam blanditiis! Officia voluptate ducimus a doloribus atque voluptatem sed, corrupti quam minus, officiis blanditiis porro odio impedit repellendus! Dicta, eius!"
    },
    {
      imgSrc: "https://w7.pngwing.com/pngs/450/269/png-transparent-space-gray-iphone-x-showing-ios-and-iphone-4-iphone-8-plus-iphone-5-iphone-x-iphone-apple-gadget-electronics-mobile-phone-thumbnail.png",
      title: "iphone-x",
      price: "$500",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, ipsam blanditiis! Officia voluptate ducimus a doloribus atque voluptatem sed, corrupti quam minus, officiis blanditiis porro odio impedit repellendus! Dicta, eius!"
    },
    {
      imgSrc: "https://w7.pngwing.com/pngs/450/269/png-transparent-space-gray-iphone-x-showing-ios-and-iphone-4-iphone-8-plus-iphone-5-iphone-x-iphone-apple-gadget-electronics-mobile-phone-thumbnail.png",
      title: "iphone-x",
      price: "$500",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, ipsam blanditiis! Officia voluptate ducimus a doloribus atque voluptatem sed, corrupti quam minus, officiis blanditiis porro odio impedit repellendus! Dicta, eius!"
    },
    {
      imgSrc: "https://w7.pngwing.com/pngs/450/269/png-transparent-space-gray-iphone-x-showing-ios-and-iphone-4-iphone-8-plus-iphone-5-iphone-x-iphone-apple-gadget-electronics-mobile-phone-thumbnail.png",
      title: "iphone-x",
      price: "$500",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, ipsam blanditiis! Officia voluptate ducimus a doloribus atque voluptatem sed, corrupti quam minus, officiis blanditiis porro odio impedit repellendus! Dicta, eius!"
    }
  ]

  let phoneItems = phones.map((phone, index) =>{
    return <Product product={phone} key={index}/>
  })

  return (
    <div className="App">
      <AsideMenu />
      <div className="container">
        <div className="products-container">
          {phoneItems}
        </div>
      </div>
    </div>
  );
}

export default App;
