// src/data/products.js
// Carefully verified: unique images, safe descriptions, no duplicates

const PRODUCTS = [
  {
    id: 1,
    name: "Red Rose Bouquet",
    price: 1299,
    category: "Roses",
    desc: "A breathtaking bouquet of fresh, deep red roses. Perfect for expressing love and passion. Each rose is hand-selected for its vibrant color and velvety texture. Ideal for anniversaries, Valentine's Day, or just to say 'I love you'.",
    img: "https://images.pexels.com/photos/34691226/pexels-photo-34691226.jpeg?_gl=1*3x91ti*_ga*MTk3ODU3MzE3My4xNzY5NDU3Nzcy*_ga_8JE65Q40S6*czE3Njk0NTc3NzIkbzEkZzEkdDE3Njk0NTc5OTckajI1JGwwJGgw"
  },
  {
    id: 2,
    name: "Pink Rose Bouquet",
    price: 1399,
    category: "Roses",
    desc: "A soft and charming pink rose bouquet that radiates grace and joy. These delicate blooms are artfully arranged to create a gentle, romantic aesthetic. Perfect for birthdays, gratitude, or adding a touch of sweetness to any room.",
    img: "https://images.pexels.com/photos/28774471/pexels-photo-28774471.jpeg?_gl=1*1bne12m*_ga*MTk3ODU3MzE3My4xNzY5NDU3Nzcy*_ga_8JE65Q40S6*czE3Njk0NTc3NzIkbzEkZzEkdDE3Njk0NTgwNzMkajI5JGwwJGgw"
  },
  {
    id: 3,
    name: "Yellow Flower Bouquet",
    price: 1099,
    category: "Spring",
    desc: "A bright and cheerful arrangement of sunny yellow flowers. These blooms are like a burst of sunshine, designed to lift spirits and bring warmth. Great for 'get well soon' wishes or celebrating a new beginning.",
    img: "https://images.pexels.com/photos/8150571/pexels-photo-8150571.jpeg?_gl=1*u8zt4t*_ga*MTk3ODU3MzE3My4xNzY5NDU3Nzcy*_ga_8JE65Q40S6*czE3Njk0NTgxMjAkajQ3JGwwJGgw"
  },
  {
    id: 4,
    name: "Mixed Flower Bouquet",
    price: 1099,
    category: "Spring",
    desc: "A colorful and diverse mix of our finest seasonal blooms. This bouquet offers a variety of textures and scents, carefully balanced for a harmonious look. Perfect for any celebration where you want to add a splash of color.",
    img: "https://images.pexels.com/photos/35172419/pexels-photo-35172419.jpeg?_gl=1*1uv3fop*_ga*MTk3ODU3MzE3My4xNzY5NDU3Nzcy*_ga_8JE65Q40S6*czE3Njk0NTgxNzgkajQ5JGwwJGgw"
  },
  {
    id: 5,
    name: "Lavender Flower Bouquet",
    price: 999,
    category: "Classic",
    desc: "Soothe the senses with the calming aroma and elegant purple hues of fresh lavender. Known for its relaxing properties, this bouquet is perfect for creating a peaceful atmosphere or as a thoughtful self-care gift.",
    img: "https://images.pexels.com/photos/32539846/pexels-photo-32539846.jpeg?_gl=1*eeav5a*_ga*MTk3ODU3MzE3My4xNzY5NDU3Nzcy*_ga_8JE65Q40S6*czE3Njk0NTgyNDMkajQ3JGwwJGgw"
  },
  {
    id: 6,
    name: "Wildflower Bouquet",
    price: 1199,
    category: "Classic",
    desc: "A rustic and charming arrangement inspired by natural meadows. This bouquet features a variety of unique wildflowers, bringing a touch of the outdoors inside. Ideal for those who love a more natural, bohemian style.",
    img: "https://images.pexels.com/photos/4466651/pexels-photo-4466651.jpeg?_gl=1*to39ru*_ga*MTk3ODU3MzE3My4xNzY5NDU3Nzcy*_ga_8JE65Q40S6*czE3Njk0NTgyOTYkajU5JGwwJGgw"
  },
  {
    id: 7,
    name: "White Flower Bouquet",
    price: 1599,
    category: "Classic",
    desc: "An elegant and sophisticated bouquet of pure white flowers. Symbolizing purity and peace, these blooms are perfect for weddings, formal events, or a minimalist home decor. Hand-tied for a premium finish.",
    img: "https://images.pexels.com/photos/540522/pexels-photo-540522.jpeg?_gl=1*oergyj*_ga*MTk3ODU3MzE3My4xNzY5NDU3Nzcy*_ga_8JE65Q40S6*czE3Njk0NTgzNTUkajYwJGwwJGgw"
  },
  {
    id: 8,
    name: "Tulips Flower Bouquet",
    price: 1299,
    category: "Spring",
    desc: "Graceful and elegant tulips in soft pastel tones. These spring favorites represent deep love and perfect happiness. Their sleek stems and beautiful cup-shaped blooms make them a modern favorite for any occasion.",
    img: "https://images.pexels.com/photos/7311450/pexels-photo-7311450.jpeg?_gl=1*12r0dru*_ga*MTk3ODU3MzE3My4xNzY5NDU3Nzcy*_ga_8JE65Q40S6*czE3Njk0NTg0NTUkajI2JGwwJGgw"
  },
  {
    id: 9,
    name: "Daisy Flowers Bouquet",
    price: 899,
    category: "Spring",
    desc: "Fresh and simple white daisies that represent innocence and purity. With their yellow centers and crisp white petals, these flowers are a timeless classic that brings a smile to anyone's face. Great for casual gifting.",
    img: "https://images.pexels.com/photos/28947598/pexels-photo-28947598.jpeg?_gl=1*1dp8xce*_ga*MTk3ODU3MzE3My4xNzY5NDU3Nzcy*_ga_8JE65Q40S6*czE3Njk0NTg1MTckajI4JGwwJGgw"
  },
  {
    id: 10,
    name: "White Lily Flowers Bouquet",
    price: 999,
    category: "Classic",
    desc: "Majestic white lilies that exude confidence and beauty. Their large, fragrant blooms are a symbol of rebirth and virtue. This bouquet makes a stunning statement piece for a hallway or dining table.",
    img: "https://images.pexels.com/photos/8066157/pexels-photo-8066157.jpeg?_gl=1*1t8zi5r*_ga*MTk3ODU3MzE3My4xNzY5NDU3Nzcy*_ga_8JE65Q40S6*czE3Njk0NTk4MDUkajQwJGwwJGgw"
  },
  {
    id: 11,
    name: "Pink Lily Flowers Bouquet",
    price: 1099,
    category: "Classic",
    desc: "Stunning pink lilies that symbolize wealth and prosperity. These vibrant blooms are full of life and color, perfect for celebrating big achievements or brightening up a workspace with their elegant fragrance.",
    img: "https://images.pexels.com/photos/7664381/pexels-photo-7664381.jpeg?_gl=1*vnf7rz*_ga*MTk3ODU3MzE3My4xNzY5NDU3Nzcy*_ga_8JE65Q40S6*czE3Njk0NTg4NTQkajU5JGwwJGgw"
  },
  {
    id: 12,
    name: "Orchid Flowers Bouquet",
    price: 1499,
    category: "Exotic",
    desc: "Exotic and alluring orchids that represent luxury and strength. These unique flowers are known for their long-lasting beauty and intricate patterns. A perfect gift for someone with a sophisticated taste.",
    img: "https://images.pexels.com/photos/3699859/pexels-photo-3699859.jpeg?_gl=1*1yrox0f*_ga*MTk3ODU3MzE3My4xNzY5NDU3Nzcy*_ga_8JE65Q40S6*czE3Njk0NTg5MzQkajUwJGwwJGgw"
  },
  {
    id: 13,
    name: "Jasmine Flowers Bouquet",
    price: 1299,
    category: "Classic",
    desc: "Fragrant white jasmine flowers that fill the air with a sweet, intoxicating scent. Historically associated with love and romance, these small but powerful blooms are perfect for a bedside table or a quiet nook.",
    img: "https://images.pexels.com/photos/34057188/pexels-photo-34057188.jpeg?_gl=1*1ap18er*_ga*MTk3ODU3MzE3My4xNzY5NDU3Nzcy*_ga_8JE65Q40S6*czE3Njk0NTkwNDkkajE2JGwwJGgw"
  },
  {
    id: 14,
    name: "Lotus Flowers Bouquet",
    price: 1199,
    category: "Exotic",
    desc: "Sacred and serene lotus flowers, symbolizing purity and enlightenment. Emerging from the water, these blooms represent resilience and beauty. A truly special gift for meditation spaces or peaceful homes.",
    img: "https://images.pexels.com/photos/18831298/pexels-photo-18831298.jpeg?_gl=1*1hl2l96*_ga*MTk3ODU3MzE3My4xNzY5NDU3Nzcy*_ga_8JE65Q40S6*czE3Njk0NTkxMDgkajI2JGwwJGgw"
  },
  {
    id: 15,
    name: "Sunflowers Bouquet",
    price: 1299,
    category: "Spring",
    desc: "Radiant sunflowers that face the sun and represent loyalty and longevity. These tall, proud blooms bring immediate joy and energy to any space. Perfect for graduations, summer parties, or just for a bright day.",
    img: "https://images.pexels.com/photos/32300948/pexels-photo-32300948.jpeg?_gl=1*1brv3si*_ga*MTk3ODU3MzE3My4xNzY5NDU3Nzcy*_ga_8JE65Q40S6*czE3Njk0NTkyMjYkajU5JGwwJGgw"
  },
  {
    id: 16,
    name: "Ixora Flowers Bouquet",
    price: 1099,
    category: "Exotic",
    desc: "Clusters of vibrant pink ixora flowers, also known as 'Jungle Flame'. These tropical blooms are full of passion and energy. A great way to add an exotic touch to your floral arrangements or as a unique gift.",
    img: "https://images.pexels.com/photos/32297955/pexels-photo-32297955.jpeg?_gl=1*1ab92r7*_ga*MTk3ODU3MzE3My4xNzY5NDU3Nzcy*_ga_8JE65Q40S6*czE3Njk0NTkzMTckajU5JGwwJGgw"
  },
  {
    id: 17,
    name: "Cornflowers Bouquet",
    price: 1499,
    category: "Spring",
    desc: "Intense blue cornflowers that offer a rare and natural splash of azure. Symbolizing hope and anticipation, these delicate blooms are a favorite for cottage gardens and rustic, charming bouquets.",
    img: "https://images.pexels.com/photos/33465268/pexels-photo-33465268.jpeg?_gl=1*8q5l71*_ga*MTk3ODU3MzE3My4xNzY5NDU3Nzcy*_ga_8JE65Q40S6*czE3Njk0NTkzNjgkajI5JGwwJGgw"
  },
  {
    id: 18,
    name: "Garbera Flowers Bouquet",
    price: 999,
    category: "Spring",
    desc: "Bright and bold gerbera daisies that represent cheerfulness. Available in a wide range of colors, these flowers are the quintessential celebration choice. Their large, friendly faces brighten up even the gloomiest days.",
    img: "https://images.pexels.com/photos/12188760/pexels-photo-12188760.jpeg?_gl=1*8ne5ft*_ga*MTk3ODU3MzE3My4xNzY5NDU3Nzcy*_ga_8JE65Q40S6*czE3Njk0NTk0OTEkajQ2JGwwJGgw"
  },
  {
    id: 19,
    name: "Peony Flowers Bouquet",
    price: 899,
    category: "Spring",
    desc: "Lush and romantic peonies, often called the 'King of Flowers'. These full-bodied blooms represent a happy marriage and good fortune. Their delicate, multi-layered petals make them a favorite for luxury floral designs.",
    img: "https://images.pexels.com/photos/30847884/pexels-photo-30847884.jpeg?_gl=1*ozg4dk*_ga*MTk3ODU3MzE3My4xNzY5NDU3Nzcy*_ga_8JE65Q40S6*czE3Njk0NTk1NTEkajUzJGwwJGgw"
  },
  {
    id: 20,
    name: "Coreopsis Flowers Bouquet",
    price: 1099,
    category: "Spring",
    desc: "Bright yellow coreopsis flowers, also known as 'Tickseed'. These hardy and cheerful blooms are a symbol of always cheerful. They add a lovely, airy feel to any arrangement with their daisy-like appearance.",
    img: "https://images.pexels.com/photos/8094019/pexels-photo-8094019.jpeg?_gl=1*1jwpykg*_ga*MTk3ODU3MzE3My4xNzY5NDU3Nzcy*_ga_8JE65Q40S6*czE3Njk0NTk2MjckajU0JGwwJGgw"
  },
  {
    id: 21,
    name: "Plumeria Flowers Bouquet",
    price: 1199,
    category: "Exotic",
    desc: "Fragrant and beautiful plumeria, also known as Frangipani. These tropical flowers represent grace and new life. Their sweet scent and iconic shape instantly transport you to a tropical paradise.",
    img: "https://images.pexels.com/photos/8339652/pexels-photo-8339652.jpeg?_gl=1*oq0gmq*_ga*MTk3ODU3MzE3My4xNzY5NDU3Nzcy*_ga_8JE65Q40S6*czE3Njk0NTk3NTEkajI1JGwwJGgw"
  }
];

export default PRODUCTS;
