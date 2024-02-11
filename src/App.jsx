import "./App.css";
import Card from "./Card";

function App() {
  const cardData = [
    {
      name: "Nike",
      price: 20000,
      des: "Nike World",
      imageUrl: "https://image.cnbcfm.com/api/v1/image/105680013-1547583426762nike1.jpg?v=1547583682"
    },
    {
      name: "Adidas",
      price: 10000,
      des: "Adidas World",
      imageUrl: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/71a00703e8c14c76aa8471445a9eaf40_9366/Ultrabounce_Running_Shoes_Blue_HP5783_HM1.jpg"
    },
    {
      name: "Puma",
      price: 30000,
      des: "Puma World",
      imageUrl: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/374765/08/sv01/fnd/PNA/fmt/png/Rebound-Joy-Men's-Sneakers"
    },
    {
      name: "Bata",
      price: 1500,
      des: "Bata World",
      imageUrl: "https://www.batabd.com/cdn/shop/products/3_1a1d91f9-baa5-4393-a6bc-abe73f0f3c6a_1024x1024.jpg?v=1640146564"
    },
    {
      name: "Lotto",
      price: 2000,
      des: "Lotto World",
      imageUrl: "https://static-01.daraz.com.bd/p/4d0e08f688bb51fb184cbf7aa9e49fcb.jpg"
    },
    {
      name: "Apex",
      price: 8000,
      des: "Apex World",
      imageUrl: "https://storage.apex4u.com/1667eaa1-db5c-479f-bfe6-85a35524331e.JPG"
    },
    {
      name: "ApexPro",
      price: 9000,
      des: "Apex World",
      imageUrl: "https://storage.apex4u.com/94512A62_1.jpeg"
    }
  ];

  console.log(cardData);

  return (
    <>
      <div className="flex flex-wrap gap-9">
        {cardData.map((juta, i) => (
          <Card cardInfo={juta} key={i} />
        ))}
        {/* <Card cardTitle="Nike" />
        <Card cardTitle="Adidas" />
        <Card cardTitle="Puma" />
        <Card cardTitle="Apex" /> */}
      </div>
    </>
  );
}

export default App;
