const Brand = require(`../models/brandModel`);
const Category = require(`../models/categoryModel`);
const Product = require(`../models/productModel`);

const documents = async () => {
  const victor = await Brand.create({
    brandName: `Victor`,
    products: [],
  });
  const catWorld = await Brand.create({
    brandName: `Cat World`,
    products: [],
  });
  const adios = await Brand.create({
    brandName: `Adios`,
    products: [],
  });
  const chinaDuck = await Brand.create({
    brandName: `China Duck`,
    products: [],
  });
  const doge = await Brand.create({
    brandName: `Doge`,
    products: [],
  });

  const shoes = await Category.create({ category: `shoes`, products: [] });
  const toys = await Category.create({ category: `toys`, products: [] });
  const clothing = await Category.create({
    category: `clothing`,
    products: [],
  });

  const victor1 = await Product.create({
    productName: `Navy Seal 2`,
    image: `https://www.travelandleisure.com/thmb/piRNwZYbt4ii0FNwD1w9f_djx9c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TL-Mishansha-webbing-bathing-shoes-7-1f5d86999994434daad25ea4f7f9a47a.jpeg`,
    description: `Lets you walk on water`,
    price: 690,
    brand: victor.brandName,
    category: shoes.category,
  });
  const victor2 = await Product.create({
    productName: `Navy Seal 3`,
    image: `https://qd.vc/wp-content/uploads/2023/03/flippershoes01.jpg`,
    description: `Lets you walk under water`,
    price: 420,
    brand: victor.brandName,
    category: shoes.category,
  });
  const victor3 = await Product.create({
    productName: `Victory Shirt`,
    image: `https://i.ebayimg.com/images/g/YsUAAOSwpHth-Mjs/s-l400.jpg`,
    description: `Just a regular shirt`,
    price: 69,
    brand: victor.brandName,
    category: clothing.category,
  });
  const victor4 = await Product.create({
    productName: `Victory Tank`,
    image: `https://i.ebayimg.com/images/g/pqcAAOSwBltklhf3/s-l1200.jpg`,
    description: `Will keep almost everything nice and completely breathable`,
    price: 169,
    brand: victor.brandName,
    category: clothing.category,
  });
  const victor5 = await Product.create({
    productName: `Victory Sweats`,
    image: `https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/a6f8a9a2-4cb1-448f-bdcd-fb2953b4f8f1/dri-fit-spotlight-penn-state-mens-pants-vSZhVk.png`,
    description: `Loose and breathable. You won't even know it's there!`,
    price: 100,
    brand: victor.brandName,
    category: clothing.category,
  });
  const victor6 = await Product.create({
    productName: `Victory Sweats`,
    image: `https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/4c77e327-a7be-4de9-899b-1de0d98bbdea/sportswear-club-fleece-big-kids-girls-loose-pants-9xdF2W.png`,
    description: `Just take me back to the early 2000s already!`,
    price: 109,
    brand: victor.brandName,
    category: clothing.category,
  });
  shoes.products = [victor1.id, victor2.id];
  clothing.products = [victor3.id, victor4.id, victor5.id, victor6.id];
  victor.products = [
    victor1.id,
    victor2.id,
    victor3.id,
    victor4.id,
    victor5.id,
    victor6.id,
  ];
  await shoes.save();
  await clothing.save();
  await victor.save();

  const cat1 = await Product.create({
    productName: `Cat Wand`,
    image: `https://m.media-amazon.com/images/I/71AyBLZ6tvL.jpg`,
    description: `For endless hours of true fun with your child.`,
    price: 25,
    brand: catWorld.brandName,
    category: toys.category,
  });
  const cat2 = await Product.create({
    productName: `3-Pack Wands`,
    image: `https://i.etsystatic.com/14939123/r/il/b89231/4429072367/il_fullxfull.4429072367_fkmn.jpg`,
    description: `Something about the sparkles just gets the cat's attention. What could be better? Three of them!`,
    price: 30,
    brand: catWorld.brandName,
    category: toys.category,
  });
  const cat3 = await Product.create({
    productName: `12-Pack Mice`,
    image: `https://m.media-amazon.com/images/I/71q4vWkLCKL._AC_UF1000,1000_QL80_.jpg`,
    description: `One mouse? Two mouse? It's actually mice. Twelve of them to be exact.`,
    price: 10,
    brand: catWorld.brandName,
    category: toys.category,
  });
  const cat4 = await Product.create({
    productName: `Japanese School Girl Outfit`,
    image: `https://missymomo.com/cdn/shop/products/BellaCatDresse.jpg?v=1652051555`,
    description: `Can't be disappointed it wasn't for you when you see it on a car.`,
    price: 44,
    brand: catWorld.brandName,
    category: clothing.category,
  });
  const cat5 = await Product.create({
    productName: `Princess Kitty`,
    image: `https://m.media-amazon.com/images/I/71C4vdZGNtL._AC_UF1000,1000_QL80_.jpg`,
    description: `To make your car look like exactly how they're treated.`,
    price: 36,
    brand: catWorld.brandName,
    category: clothing.category,
  });
  const cat6 = await Product.create({
    productName: `Princess Kitty`,
    image: `https://m.media-amazon.com/images/I/81Vt-NMX65L._AC_UF1000,1000_QL80_.jpg`,
    description: `That's how they feel like all the time anyways, so why not look the part?`,
    price: 16,
    brand: catWorld.brandName,
    category: clothing.category,
  });
  toys.products = [cat1.id, cat2.id, cat3.id];
  clothing.products = [...clothing.products, cat4.id, cat5.id, cat6.id];
  catWorld.products = [cat1.id, cat2.id, cat3.id, cat4.id, cat5.id, cat6.id];
  await toys.save();
  await clothing.save();
  await catWorld.save();

  const adios1 = await Product.create({
    productName: `Ultra Zoom`,
    image: `https://static.wikia.nocookie.net/sonic/images/5/5d/SFSBRunnersArt.png/revision/latest?cb=20211121005427`,
    description: `Gotta run fast, like a hedgehog once said.`,
    price: 520,
    brand: adios.brandName,
    category: shoes.category,
  });
  const adios2 = await Product.create({
    productName: `Ultra Zoom r2000`,
    image: `https://cdn.sanity.io/images/c1chvb1i/production/c36c1be79fd9ab0a1b1017bab73e8ea53f72abbf-700x468.jpg?rect=38,0,624,468&w=700&h=525`,
    description: `Like its predecessor, but with lightning. Obviously faster.`,
    price: 2000,
    brand: adios.brandName,
    category: shoes.category,
  });
  const adios3 = await Product.create({
    productName: `Ultra Zoom 3.0`,
    image: `https://i.redd.it/how-do-shadows-shoes-work-v0-q3upp4bj47ic1.png?width=894&format=png&auto=webp&s=1ff4775072962e7cc959c547c55c65ebb6e50795`,
    description: `This one's got jets. Wear and tear was from testing, since every one needed to be tested cuz jets.`,
    price: 6969,
    brand: adios.brandName,
    category: shoes.category,
  });
  const adios4 = await Product.create({
    productName: `Adios Wave`,
    image: `https://i.etsystatic.com/21231709/r/il/cbe5db/3377346306/il_570xN.3377346306_a4cp.jpg`,
    description: `Sometimes you just can't be bothered to raise your hand yaknow?`,
    price: 240,
    brand: adios.brandName,
    category: clothing.category,
  });
  const adios5 = await Product.create({
    productName: `Adios Finger`,
    image: `https://hottertees.com/wp-content/uploads/2022/10/Funny-Parody-Adios-Shirt.webp`,
    description: `What do you do when you go to meet someone you hate? You wear this.`,
    price: 888,
    brand: adios.brandName,
    category: clothing.category,
  });
  const adios6 = await Product.create({
    productName: `Adios Beaches Hat`,
    image: `https://www.piperloucollection.com/cdn/shop/products/Trucker_Hat_-_Royal_Blue_0c15af54-0f31-472c-8404-699619ba54a3_1400x.jpg?v=1571370616`,
    description: `For the people who want eyes up here. Without raising your hand of course.`,
    price: 88,
    brand: adios.brandName,
    category: clothing.category,
  });
  shoes.products = [...shoes.products, adios1.id, adios2.id, adios3.id];
  clothing.products = [...clothing.products, adios4.id, adios5.id, adios6.id];
  adios.products = [
    adios1.id,
    adios2.id,
    adios3.id,
    adios4.id,
    adios5.id,
    adios6.id,
  ];
  await shoes.save();
  await clothing.save();
  await adios.save();

  const china1 = await Product.create({
    productName: `A Canadian Goose`,
    image: `https://assets.iflscience.com/assets/articleNo/66440/aImg/63796/goose-m.jpg`,
    description: `You pay for the goose, we make your jacket out of it!`,
    price: 969,
    brand: chinaDuck.brandName,
    category: clothing.category,
  });
  const china2 = await Product.create({
    productName: `Down Parka`,
    image: `https://dujour.com/wp-content/uploads/5/5a6b5670679e.jpg`,
    description: `Wear this to best the coldest of all weathers. Cars will stop when they see you in a blizzard!`,
    price: 1600,
    brand: chinaDuck.brandName,
    category: clothing.category,
  });
  const china3 = await Product.create({
    productName: `Duck Helmet`,
    image: `https://i.ebayimg.com/images/g/vUcAAOSwwI5hoRIj/s-l1200.webp`,
    description: `Will instantly make you popular with kids below age 10.`,
    price: 88,
    brand: chinaDuck.brandName,
    category: clothing.category,
  });
  const china4 = await Product.create({
    productName: `Roast Duck`,
    image: `https://www.thespruceeats.com/thmb/FvcELLAznewWQb6PMoeHsV688Mk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cantonese-roast-duck-694866-hero-01-78e1e92c2e4948a4b98ba23c0701d274.jpg`,
    description: `Movie prop. For display only!!! DO NOT ACTUALLY EAT!!`,
    price: 288,
    brand: chinaDuck.brandName,
    category: toys.category,
  });
  const china5 = await Product.create({
    productName: `Eunuch Rubber Duckies`,
    image: `https://i5.walmartimages.com/seo/Chinese-Rubber-Duckies-Party-Favors-12-Pieces_cbee3285-2c27-4537-bdf5-22b2b3b4ef94.06f40d334839990046a223a87cece95c.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF`,
    description: `A group of friends to keep you company during your baths. May whisper political thoughts in your ears.`,
    price: 8,
    brand: chinaDuck.brandName,
    category: toys.category,
  });
  const china6 = await Product.create({
    productName: `Duck Boots`,
    image: `https://i.etsystatic.com/5502566/r/il/372b3b/2742539571/il_fullxfull.2742539571_86c4.jpg`,
    description: `I really have no comment for this one :/`,
    price: 698,
    brand: chinaDuck.brandName,
    category: shoes.category,
  });
  clothing.products = [...clothing.products, china1.id, china2.id, china3.id];
  toys.products = [...toys.products, china4.id, china5.id];
  shoes.products = [...shoes.products, china6.id];
  chinaDuck.products = [
    china1.id,
    china2.id,
    china3.id,
    china4.id,
    china5.id,
    china6.id,
  ];
  await clothing.save();
  await toys.save();
  await shoes.save();
  await chinaDuck.save();

  const dog1 = await Product.create({
    productName: `Boner`,
    image: `https://target.scene7.com/is/image/Target/GUEST_c7f07978-3f6d-47f8-9f07-161fa101de27?wid=488&hei=488&fmt=pjpeg`,
    description: `Just a dog bone. What were YOU thinking?`,
    price: 18,
    brand: doge.brandName,
    category: toys.category,
  });
  const dog2 = await Product.create({
    productName: `Automatic Dog Ball`,
    image: `https://m.media-amazon.com/images/I/61-EGk+lh8L._AC_UF1000,1000_QL80_.jpg`,
    description: `It doesn't throw itself though, so it might be better for a cat.`,
    price: 36,
    brand: doge.brandName,
    category: toys.category,
  });
  const dog3 = await Product.create({
    productName: `Tennis Balls (12 Pack)`,
    image: `https://m.media-amazon.com/images/I/615y7fymvJL._AC_UF1000,1000_QL80_.jpg`,
    description: `Get this for tennis weekends. Comes in a pack of twelve because eleven will go towards your dog.`,
    price: 40,
    brand: doge.brandName,
    category: toys.category,
  });
  const dog4 = await Product.create({
    productName: `TreatBot3000`,
    image: `https://img.fruugo.com/product/4/49/622049494_max.jpg`,
    description: `Beep Boop Here'z A Treatz 4 G00d Boi.`,
    price: 93,
    brand: doge.brandName,
    category: toys.category,
  });
  const dog5 = await Product.create({
    productName: `Dog Shoes (L)`,
    image: `https://m.media-amazon.com/images/I/81KeU1U+oHL.jpg`,
    description: `Sometimes you just don't want to worry about wiping the paws.`,
    price: 27,
    brand: doge.brandName,
    category: shoes.category,
  });
  const dog6 = await Product.create({
    productName: `Dog Shoes (S)`,
    image: `https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/9356ea17f0bdfe4f459f646a2d33a010.jpg`,
    description: `For the doggos with Napoleon Complex.`,
    price: 22,
    brand: doge.brandName,
    category: shoes.category,
  });
  toys.products = [...toys.products, dog1, dog2, dog3, dog4];
  shoes.products = [...shoes.products, dog5, dog6];
  doge.products = [dog1, dog2, dog3, dog4, dog5, dog6];
  await toys.save();
  await shoes.save();
  await doge.save();
};

module.exports = documents;
