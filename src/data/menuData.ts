// Auto-generated comprehensive menu dataset for Mehran Restaurant
export interface MenuItemData {
  id: string;
  name: string;
  category: string;
  categoryName: string;
  subCategoryId: string;
  subCategoryName: string;
  groupTitle: string;
  diet: 'veg' | 'nonveg';
  special: boolean;
  price: string;
  portion: string;
  description: string;
  ingredients: string;
  image: string;
  portions?: Array<{ label: string; price: string | number }> | null;
  variations?: Array<{ name: string; prices: Array<{ label: string; price: string | number }> }> | null;
}

export interface CategoryData {
  id: string;
  name: string;
}

export const categories: CategoryData[] = [
  {
    "id": "all",
    "name": "All Categories"
  },
  {
    "id": "mandi",
    "name": "Mandi Delicacies"
  },
  {
    "id": "bbq",
    "name": "Charcoal & BBQ Grills"
  },
  {
    "id": "biriyani",
    "name": "Royal Dum Biriyanis"
  },
  {
    "id": "gravies",
    "name": "Indian Gravies & Curries"
  },
  {
    "id": "appetizers",
    "name": "Starters & Kababs"
  },
  {
    "id": "soups",
    "name": "Soups, Haleem & Hummus"
  },
  {
    "id": "rice-noodles",
    "name": "Fried Rice & Noodles"
  },
  {
    "id": "breads",
    "name": "Tandoor Breads & Naan"
  },
  {
    "id": "combos",
    "name": "Combos & Meal Boxes"
  }
];

export const menuItems: MenuItemData[] = [
  {
    "id": "manchow-soup",
    "name": "Manchow Soup",
    "category": "soups",
    "categoryName": "Soups, Haleem & Hummus",
    "subCategoryId": "chinese-soups",
    "subCategoryName": "Chinese Soups",
    "groupTitle": "Minced Delights",
    "diet": "nonveg",
    "special": false,
    "price": "From \u20b9110",
    "portion": "Veg \u2022 Chicken \u2022 Mutton",
    "description": "Classic spiced Indo-Chinese broth topped with crispy fried noodles.",
    "ingredients": "Chinese Soups, Minced Delights, Manchow Soup, Classic spiced Indo-Chinese broth topped with crispy fried noodles., traditional spices, herbs",
    "image": "/images/food/chinese-soup.png",
    "portions": null,
    "variations": [
      {
        "name": "Veg",
        "prices": [
          {
            "label": "Portion",
            "price": 110
          }
        ]
      },
      {
        "name": "Chicken",
        "prices": [
          {
            "label": "Portion",
            "price": 140
          }
        ]
      },
      {
        "name": "Mutton",
        "prices": [
          {
            "label": "Portion",
            "price": 180
          }
        ]
      }
    ]
  },
  {
    "id": "hot-sour-soup",
    "name": "Hot & Sour Soup",
    "category": "soups",
    "categoryName": "Soups, Haleem & Hummus",
    "subCategoryId": "chinese-soups",
    "subCategoryName": "Chinese Soups",
    "groupTitle": "Minced Delights",
    "diet": "nonveg",
    "special": false,
    "price": "From \u20b9110",
    "portion": "Veg \u2022 Chicken \u2022 Mutton",
    "description": "Zesty, spicy, and tangy broth loaded with finely chopped vegetables and seasonings.",
    "ingredients": "Chinese Soups, Minced Delights, Hot & Sour Soup, Zesty, spicy, and tangy broth loaded with finely chopped vegetables and seasonings., traditional spices, herbs",
    "image": "/images/food/chinese-soup.png",
    "portions": null,
    "variations": [
      {
        "name": "Veg",
        "prices": [
          {
            "label": "Portion",
            "price": 110
          }
        ]
      },
      {
        "name": "Chicken",
        "prices": [
          {
            "label": "Portion",
            "price": 140
          }
        ]
      },
      {
        "name": "Mutton",
        "prices": [
          {
            "label": "Portion",
            "price": 180
          }
        ]
      }
    ]
  },
  {
    "id": "clear-soup",
    "name": "Clear Soup",
    "category": "soups",
    "categoryName": "Soups, Haleem & Hummus",
    "subCategoryId": "chinese-soups",
    "subCategoryName": "Chinese Soups",
    "groupTitle": "Minced Delights",
    "diet": "nonveg",
    "special": false,
    "price": "From \u20b9110",
    "portion": "Veg \u2022 Chicken \u2022 Mutton",
    "description": "Light, wholesome, and gently simmered delicate broth infused with fresh herbs.",
    "ingredients": "Chinese Soups, Minced Delights, Clear Soup, Light, wholesome, and gently simmered delicate broth infused with fresh herbs., traditional spices, herbs",
    "image": "/images/food/chinese-soup.png",
    "portions": null,
    "variations": [
      {
        "name": "Veg",
        "prices": [
          {
            "label": "Portion",
            "price": 110
          }
        ]
      },
      {
        "name": "Chicken",
        "prices": [
          {
            "label": "Portion",
            "price": 140
          }
        ]
      },
      {
        "name": "Mutton",
        "prices": [
          {
            "label": "Portion",
            "price": 180
          }
        ]
      }
    ]
  },
  {
    "id": "sweet-corn-soup",
    "name": "Sweet Corn Soup",
    "category": "soups",
    "categoryName": "Soups, Haleem & Hummus",
    "subCategoryId": "chinese-soups",
    "subCategoryName": "Chinese Soups",
    "groupTitle": "Minced Delights",
    "diet": "nonveg",
    "special": false,
    "price": "From \u20b9120",
    "portion": "Veg \u2022 Chicken \u2022 Mutton",
    "description": "Velvety sweet corn simmered into a soothing, creamy traditional broth.",
    "ingredients": "Chinese Soups, Minced Delights, Sweet Corn Soup, Velvety sweet corn simmered into a soothing, creamy traditional broth., traditional spices, herbs",
    "image": "/images/food/chinese-soup.png",
    "portions": null,
    "variations": [
      {
        "name": "Veg",
        "prices": [
          {
            "label": "Portion",
            "price": 120
          }
        ]
      },
      {
        "name": "Chicken",
        "prices": [
          {
            "label": "Portion",
            "price": 150
          }
        ]
      },
      {
        "name": "Mutton",
        "prices": [
          {
            "label": "Portion",
            "price": 190
          }
        ]
      }
    ]
  },
  {
    "id": "noodle-soup",
    "name": "Noodle Soup",
    "category": "soups",
    "categoryName": "Soups, Haleem & Hummus",
    "subCategoryId": "chinese-soups",
    "subCategoryName": "Chinese Soups",
    "groupTitle": "Minced Delights",
    "diet": "nonveg",
    "special": false,
    "price": "From \u20b9130",
    "portion": "Veg \u2022 Chicken \u2022 Mutton",
    "description": "Steaming aromatic soup packed with tender noodles, vegetables, and savory spices.",
    "ingredients": "Chinese Soups, Minced Delights, Noodle Soup, Steaming aromatic soup packed with tender noodles, vegetables, and savory spices., traditional spices, herbs",
    "image": "/images/food/chinese-soup.png",
    "portions": null,
    "variations": [
      {
        "name": "Veg",
        "prices": [
          {
            "label": "Portion",
            "price": 130
          }
        ]
      },
      {
        "name": "Chicken",
        "prices": [
          {
            "label": "Portion",
            "price": 160
          }
        ]
      },
      {
        "name": "Mutton",
        "prices": [
          {
            "label": "Portion",
            "price": 210
          }
        ]
      }
    ]
  },
  {
    "id": "lemon-coriander-soup",
    "name": "Lemon Coriander Soup",
    "category": "soups",
    "categoryName": "Soups, Haleem & Hummus",
    "subCategoryId": "chinese-soups",
    "subCategoryName": "Chinese Soups",
    "groupTitle": "Minced Delights",
    "diet": "nonveg",
    "special": false,
    "price": "From \u20b9120",
    "portion": "Veg \u2022 Chicken \u2022 Mutton",
    "description": "Refreshing and fragrant broth with freshly squeezed lemon juice and aromatic cilantro.",
    "ingredients": "Chinese Soups, Minced Delights, Lemon Coriander Soup, Refreshing and fragrant broth with freshly squeezed lemon juice and aromatic cilantro., traditional spices, herbs",
    "image": "/images/food/chinese-soup.png",
    "portions": null,
    "variations": [
      {
        "name": "Veg",
        "prices": [
          {
            "label": "Portion",
            "price": 120
          }
        ]
      },
      {
        "name": "Chicken",
        "prices": [
          {
            "label": "Portion",
            "price": 150
          }
        ]
      },
      {
        "name": "Mutton",
        "prices": [
          {
            "label": "Portion",
            "price": 190
          }
        ]
      }
    ]
  },
  {
    "id": "mutton-paya",
    "name": "Mutton Paya",
    "category": "soups",
    "categoryName": "Soups, Haleem & Hummus",
    "subCategoryId": "afghani-soups",
    "subCategoryName": "Afghani Soups",
    "groupTitle": "Minced Delights",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b9220",
    "portion": "1 Portion",
    "description": "Slow-cooked mutton trotters in a rich, aromatic broth - hearty, warming and deeply flavorful.",
    "ingredients": "Afghani Soups, Minced Delights, Mutton Paya, Slow-cooked mutton trotters in a rich, aromatic broth - hearty, warming and deeply flavorful., traditional spices, herbs",
    "image": "/images/food/afghani-paya.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "chicken-shorba",
    "name": "Chicken Shorba",
    "category": "soups",
    "categoryName": "Soups, Haleem & Hummus",
    "subCategoryId": "afghani-soups",
    "subCategoryName": "Afghani Soups",
    "groupTitle": "Minced Delights",
    "diet": "nonveg",
    "special": false,
    "price": "\u20b9140",
    "portion": "1 Portion",
    "description": "Light, spiced chicken broth - comforting, fragrant and soothing.",
    "ingredients": "Afghani Soups, Minced Delights, Chicken Shorba, Light, spiced chicken broth - comforting, fragrant and soothing., traditional spices, herbs",
    "image": "/images/food/afghani-paya.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "mutton-shorba",
    "name": "Mutton Shorba",
    "category": "soups",
    "categoryName": "Soups, Haleem & Hummus",
    "subCategoryId": "afghani-soups",
    "subCategoryName": "Afghani Soups",
    "groupTitle": "Minced Delights",
    "diet": "nonveg",
    "special": false,
    "price": "\u20b9200",
    "portion": "1 Portion",
    "description": "Tender mutton simmered into a mildly spiced, aromatic broth - warm and satisfying.",
    "ingredients": "Afghani Soups, Minced Delights, Mutton Shorba, Tender mutton simmered into a mildly spiced, aromatic broth - warm and satisfying., traditional spices, herbs",
    "image": "/images/food/afghani-paya.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "mutton-haleem",
    "name": "Mutton Haleem",
    "category": "soups",
    "categoryName": "Soups, Haleem & Hummus",
    "subCategoryId": "afghani-haleem",
    "subCategoryName": "Afghani Haleem",
    "groupTitle": "Minced Delights",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b9200 \u2013 \u20b9720",
    "portion": "Quarter / Half / Full",
    "description": "Slow-cooked mutton and lentil porridge - rich, creamy, and melt-in-the-mouth delicious.",
    "ingredients": "Afghani Haleem, Minced Delights, Mutton Haleem, Slow-cooked mutton and lentil porridge - rich, creamy, and melt-in-the-mouth delicious., traditional spices, herbs",
    "image": "/images/food/afghani-haleem.png",
    "portions": [
      {
        "label": "Quarter",
        "price": 200
      },
      {
        "label": "Half",
        "price": 380
      },
      {
        "label": "Full",
        "price": 720
      }
    ],
    "variations": null
  },
  {
    "id": "chicken-haleem",
    "name": "Chicken Haleem",
    "category": "soups",
    "categoryName": "Soups, Haleem & Hummus",
    "subCategoryId": "afghani-haleem",
    "subCategoryName": "Afghani Haleem",
    "groupTitle": "Minced Delights",
    "diet": "nonveg",
    "special": false,
    "price": "\u20b9170 \u2013 \u20b9580",
    "portion": "Quarter / Half / Full",
    "description": "Tender chicken blended with grains and spices - smooth, hearty and deeply satisfying.",
    "ingredients": "Afghani Haleem, Minced Delights, Chicken Haleem, Tender chicken blended with grains and spices - smooth, hearty and deeply satisfying., traditional spices, herbs",
    "image": "/images/food/afghani-haleem.png",
    "portions": [
      {
        "label": "Quarter",
        "price": 170
      },
      {
        "label": "Half",
        "price": 300
      },
      {
        "label": "Full",
        "price": 580
      }
    ],
    "variations": null
  },
  {
    "id": "hummus-classic",
    "name": "Hummus",
    "category": "soups",
    "categoryName": "Soups, Haleem & Hummus",
    "subCategoryId": "hummus",
    "subCategoryName": "Hummus",
    "groupTitle": "Minced Delights",
    "diet": "veg",
    "special": false,
    "price": "\u20b9220",
    "portion": "1 Portion",
    "description": "Creamy chickpea dip topped with rich black olive oil - smooth, nutty and flavorful.",
    "ingredients": "Hummus, Minced Delights, Hummus, Creamy chickpea dip topped with rich black olive oil - smooth, nutty and flavorful., traditional spices, herbs",
    "image": "/images/food/hummus-platter.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "hummus-falafil",
    "name": "Hummus Falafil",
    "category": "soups",
    "categoryName": "Soups, Haleem & Hummus",
    "subCategoryId": "hummus",
    "subCategoryName": "Hummus",
    "groupTitle": "Minced Delights",
    "diet": "veg",
    "special": true,
    "price": "\u20b9300",
    "portion": "1 Portion",
    "description": "Classic hummus served with warm khubus (bread) and crispy falafel - a hearty, satisfying Middle Eastern platter.",
    "ingredients": "Hummus, Minced Delights, Hummus Falafil, Classic hummus served with warm khubus (bread) and crispy falafel - a hearty, satisfying Middle Eastern platter., traditional spices, herbs",
    "image": "/images/food/hummus-platter.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "mini-green-salad",
    "name": "Mini Green Salad",
    "category": "soups",
    "categoryName": "Soups, Haleem & Hummus",
    "subCategoryId": "salads",
    "subCategoryName": "Salads",
    "groupTitle": "Minced Delights",
    "diet": "veg",
    "special": false,
    "price": "\u20b950",
    "portion": "1 Portion",
    "description": "Fresh mixed greens tossed simply - crisp, light, and refreshing.",
    "ingredients": "Salads, Minced Delights, Mini Green Salad, Fresh mixed greens tossed simply - crisp, light, and refreshing., traditional spices, herbs",
    "image": "/images/food/fresh-salad.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "garlic-channa-fry",
    "name": "Garlic Channa Fry",
    "category": "soups",
    "categoryName": "Soups, Haleem & Hummus",
    "subCategoryId": "salads",
    "subCategoryName": "Salads",
    "groupTitle": "Minced Delights",
    "diet": "veg",
    "special": false,
    "price": "\u20b9120",
    "portion": "1 Portion",
    "description": "Flavorful chickpeas stir-fried with roasted garlic, fresh herbs, and a blend of rich Indian spices.",
    "ingredients": "Salads, Minced Delights, Garlic Channa Fry, Flavorful chickpeas stir-fried with roasted garlic, fresh herbs, and a blend of rich Indian spices., traditional spices, herbs",
    "image": "/images/food/fresh-salad.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "green-salad",
    "name": "Green Salad",
    "category": "soups",
    "categoryName": "Soups, Haleem & Hummus",
    "subCategoryId": "salads",
    "subCategoryName": "Salads",
    "groupTitle": "Minced Delights",
    "diet": "veg",
    "special": false,
    "price": "\u20b980",
    "portion": "1 Portion",
    "description": "A classic mix of lettuce, cucumber, and fresh veggies - crisp and healthy.",
    "ingredients": "Salads, Minced Delights, Green Salad, A classic mix of lettuce, cucumber, and fresh veggies - crisp and healthy., traditional spices, herbs",
    "image": "/images/food/fresh-salad.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "masala-papad",
    "name": "Masala Papad",
    "category": "soups",
    "categoryName": "Soups, Haleem & Hummus",
    "subCategoryId": "salads",
    "subCategoryName": "Salads",
    "groupTitle": "Minced Delights",
    "diet": "veg",
    "special": false,
    "price": "\u20b9100",
    "portion": "1 Portion",
    "description": "Crispy papad topped with spicy chopped veggies - crunchy, zesty starter.",
    "ingredients": "Salads, Minced Delights, Masala Papad, Crispy papad topped with spicy chopped veggies - crunchy, zesty starter., traditional spices, herbs",
    "image": "/images/food/fresh-salad.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "fattoush-salad",
    "name": "Fattoush Salad",
    "category": "soups",
    "categoryName": "Soups, Haleem & Hummus",
    "subCategoryId": "salads",
    "subCategoryName": "Salads",
    "groupTitle": "Minced Delights",
    "diet": "veg",
    "special": true,
    "price": "\u20b9180",
    "portion": "1 Portion",
    "description": "Arabic-style salad with toasted bread, veggies & zesty dressing - fresh & flavorful.",
    "ingredients": "Salads, Minced Delights, Fattoush Salad, Arabic-style salad with toasted bread, veggies & zesty dressing - fresh & flavorful., traditional spices, herbs",
    "image": "/images/food/fresh-salad.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "american-cucumber-salad",
    "name": "American Cucumber Salad",
    "category": "soups",
    "categoryName": "Soups, Haleem & Hummus",
    "subCategoryId": "salads",
    "subCategoryName": "Salads",
    "groupTitle": "Minced Delights",
    "diet": "veg",
    "special": false,
    "price": "\u20b9120",
    "portion": "1 Portion",
    "description": "Crisp cucumber slices tossed in a light, creamy dressing - cool and refreshing.",
    "ingredients": "Salads, Minced Delights, American Cucumber Salad, Crisp cucumber slices tossed in a light, creamy dressing - cool and refreshing., traditional spices, herbs",
    "image": "/images/food/fresh-salad.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "mehran-special-salad",
    "name": "Mehran Special Salad",
    "category": "soups",
    "categoryName": "Soups, Haleem & Hummus",
    "subCategoryId": "salads",
    "subCategoryName": "Salads",
    "groupTitle": "Minced Delights",
    "diet": "veg",
    "special": true,
    "price": "\u20b9200",
    "portion": "1 Portion",
    "description": "A sweet-tangy mix of apple, pineapple and mango - juicy and tropical.",
    "ingredients": "Salads, Minced Delights, Mehran Special Salad, A sweet-tangy mix of apple, pineapple and mango - juicy and tropical., traditional spices, herbs",
    "image": "/images/food/fresh-salad.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "green-chicken-salad",
    "name": "Green Chicken Salad",
    "category": "soups",
    "categoryName": "Soups, Haleem & Hummus",
    "subCategoryId": "salads",
    "subCategoryName": "Salads",
    "groupTitle": "Minced Delights",
    "diet": "nonveg",
    "special": false,
    "price": "\u20b9200",
    "portion": "1 Portion",
    "description": "Tender chicken tossed with fresh greens and herbs protein-packed and wholesome.",
    "ingredients": "Salads, Minced Delights, Green Chicken Salad, Tender chicken tossed with fresh greens and herbs protein-packed and wholesome., traditional spices, herbs",
    "image": "/images/food/fresh-salad.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "chicken-kheema",
    "name": "Chicken Kheema - Naan / Bun",
    "category": "soups",
    "categoryName": "Soups, Haleem & Hummus",
    "subCategoryId": "kheema",
    "subCategoryName": "Kheema",
    "groupTitle": "Minced Delights",
    "diet": "nonveg",
    "special": false,
    "price": "\u20b9200",
    "portion": "1 Portion",
    "description": "Finely minced chicken cooked with aromatic spices hearty, flavorful, and perfect with roti or rice.",
    "ingredients": "Kheema, Minced Delights, Chicken Kheema - Naan / Bun, Finely minced chicken cooked with aromatic spices hearty, flavorful, and perfect with roti or rice., traditional spices, herbs",
    "image": "/images/food/kheema-delight.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "mutton-kheema",
    "name": "Mutton Kheema - Naan / Bun",
    "category": "soups",
    "categoryName": "Soups, Haleem & Hummus",
    "subCategoryId": "kheema",
    "subCategoryName": "Kheema",
    "groupTitle": "Minced Delights",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b9380",
    "portion": "1 Portion",
    "description": "Finely minced mutton cooked with aromatic spices - hearty, flavorful, and perfect with roti or rice.",
    "ingredients": "Kheema, Minced Delights, Mutton Kheema - Naan / Bun, Finely minced mutton cooked with aromatic spices - hearty, flavorful, and perfect with roti or rice., traditional spices, herbs",
    "image": "/images/food/kheema-delight.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "liver-kebda-masala-fry",
    "name": "Liver Kebda Masala Fry",
    "category": "soups",
    "categoryName": "Soups, Haleem & Hummus",
    "subCategoryId": "mutton-liver-kebda",
    "subCategoryName": "Mutton Liver Kebda",
    "groupTitle": "Minced Delights",
    "diet": "nonveg",
    "special": false,
    "price": "\u20b9280",
    "portion": "1 Portion",
    "description": "Tender mutton liver sauteed with tomatoes and spices - tangy, soft, and full of rich flavor.",
    "ingredients": "Mutton Liver Kebda, Minced Delights, Liver Kebda Masala Fry, Tender mutton liver sauteed with tomatoes and spices - tangy, soft, and full of rich flavor., traditional spices, herbs",
    "image": "/images/food/mutton-liver-kebda.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "liver-kebda-bbq",
    "name": "Liver Kebda BBQ",
    "category": "soups",
    "categoryName": "Soups, Haleem & Hummus",
    "subCategoryId": "mutton-liver-kebda",
    "subCategoryName": "Mutton Liver Kebda",
    "groupTitle": "Minced Delights",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b9300",
    "portion": "1 Portion",
    "description": "Mutton liver marinated in smoky barbecue spices and grilled for a bold, charred taste.",
    "ingredients": "Mutton Liver Kebda, Minced Delights, Liver Kebda BBQ, Mutton liver marinated in smoky barbecue spices and grilled for a bold, charred taste., traditional spices, herbs",
    "image": "/images/food/mutton-liver-kebda.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "liver-kali-mirchi-dry-fry",
    "name": "Liver Kali Mirchi Dry Fry",
    "category": "soups",
    "categoryName": "Soups, Haleem & Hummus",
    "subCategoryId": "mutton-liver-kebda",
    "subCategoryName": "Mutton Liver Kebda",
    "groupTitle": "Minced Delights",
    "diet": "nonveg",
    "special": false,
    "price": "\u20b9320",
    "portion": "1 Portion",
    "description": "Spiced mutton liver stir-fried until dry - robust, aromatic, and perfectly textured.",
    "ingredients": "Mutton Liver Kebda, Minced Delights, Liver Kali Mirchi Dry Fry, Spiced mutton liver stir-fried until dry - robust, aromatic, and perfectly textured., traditional spices, herbs",
    "image": "/images/food/mutton-liver-kebda.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "crunchy-chicken-sathay",
    "name": "Crunchy Chicken Sathay",
    "category": "bbq",
    "categoryName": "Charcoal & BBQ Grills",
    "subCategoryId": "sathay",
    "subCategoryName": "Sathay",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": false,
    "price": "\u20b9220 \u2013 \u20b9400",
    "portion": "Half / Full",
    "description": "Juicy chicken skewers coated in a crisp, golden crust - crunchy outside, tender inside.",
    "ingredients": "Sathay, Special Gourmet, Crunchy Chicken Sathay, Juicy chicken skewers coated in a crisp, golden crust - crunchy outside, tender inside., traditional spices, herbs",
    "image": "/images/food/chicken-satay.png",
    "portions": [
      {
        "label": "Half",
        "price": 220
      },
      {
        "label": "Full",
        "price": 400
      }
    ],
    "variations": null
  },
  {
    "id": "pepper-chicken-sathay",
    "name": "Pepper Chicken Sathay",
    "category": "bbq",
    "categoryName": "Charcoal & BBQ Grills",
    "subCategoryId": "sathay",
    "subCategoryName": "Sathay",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": false,
    "price": "\u20b9230 \u2013 \u20b9420",
    "portion": "Half / Full",
    "description": "Skewered chicken marinated in bold pepper spices and grilled for a smoky, spicy kick.",
    "ingredients": "Sathay, Special Gourmet, Pepper Chicken Sathay, Skewered chicken marinated in bold pepper spices and grilled for a smoky, spicy kick., traditional spices, herbs",
    "image": "/images/food/chicken-satay.png",
    "portions": [
      {
        "label": "Half",
        "price": 230
      },
      {
        "label": "Full",
        "price": 420
      }
    ],
    "variations": null
  },
  {
    "id": "manchurian-sathay",
    "name": "Manchurian Sathay",
    "category": "bbq",
    "categoryName": "Charcoal & BBQ Grills",
    "subCategoryId": "sathay",
    "subCategoryName": "Sathay",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": false,
    "price": "\u20b9230 \u2013 \u20b9420",
    "portion": "Half / Full",
    "description": "Chicken skewers tossed in a tangy Manchurian sauce saucy, spicy, and full of Indo-Chinese flavor.",
    "ingredients": "Sathay, Special Gourmet, Manchurian Sathay, Chicken skewers tossed in a tangy Manchurian sauce saucy, spicy, and full of Indo-Chinese flavor., traditional spices, herbs",
    "image": "/images/food/chicken-satay.png",
    "portions": [
      {
        "label": "Half",
        "price": 230
      },
      {
        "label": "Full",
        "price": 420
      }
    ],
    "variations": null
  },
  {
    "id": "egg-shakshuka-classic",
    "name": "Egg Shakshuka",
    "category": "appetizers",
    "categoryName": "Starters & Kababs",
    "subCategoryId": "egg-shakshuka",
    "subCategoryName": "Egg Shakshuka",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": false,
    "price": "\u20b9140",
    "portion": "1 Portion",
    "description": "Eggs gently poached in a rich, spiced tomato-based sauce with herbs - warm, comforting, and full of Middle Eastern flavor.",
    "ingredients": "Egg Shakshuka, Special Gourmet, Egg Shakshuka, Eggs gently poached in a rich, spiced tomato-based sauce with herbs - warm, comforting, and full of Middle Eastern flavor., traditional spices, herbs",
    "image": "/images/food/egg-shakshuka.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "cheese-egg-shakshuka",
    "name": "Cheese Egg Shakshuka",
    "category": "appetizers",
    "categoryName": "Starters & Kababs",
    "subCategoryId": "egg-shakshuka",
    "subCategoryName": "Egg Shakshuka",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b9180",
    "portion": "1 Portion",
    "description": "Classic shakshuka topped with melted cheese, adding a creamy, indulgent twist to the rich, spiced tomato sauce.",
    "ingredients": "Egg Shakshuka, Special Gourmet, Cheese Egg Shakshuka, Classic shakshuka topped with melted cheese, adding a creamy, indulgent twist to the rich, spiced tomato sauce., traditional spices, herbs",
    "image": "/images/food/egg-shakshuka.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "chicken-shish-tawook",
    "name": "Chicken Shish Tawook",
    "category": "bbq",
    "categoryName": "Charcoal & BBQ Grills",
    "subCategoryId": "the-royal-skewer",
    "subCategoryName": "The Royal Skewer",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b9230 \u2013 \u20b9420",
    "portion": "Half (5 PC) / Full (10 PC)",
    "description": "Tender chicken cubes marinated in aromatic Middle Eastern spices, skewered and charcoal-grilled to juicy perfection.",
    "ingredients": "The Royal Skewer, Special Gourmet, Chicken Shish Tawook, Tender chicken cubes marinated in aromatic Middle Eastern spices, skewered and charcoal-grilled to juicy perfection., traditional spices, herbs",
    "image": "/images/food/royal-skewers.png",
    "portions": [
      {
        "label": "Half (5 PC)",
        "price": 230
      },
      {
        "label": "Full (10 PC)",
        "price": 420
      }
    ],
    "variations": null
  },
  {
    "id": "cheesy-malai-tikka",
    "name": "Cheesy Malai Tikka",
    "category": "bbq",
    "categoryName": "Charcoal & BBQ Grills",
    "subCategoryId": "the-royal-skewer",
    "subCategoryName": "The Royal Skewer",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": false,
    "price": "\u20b9230 \u2013 \u20b9450",
    "portion": "Half (5 PC) / Full (10 PC)",
    "description": "Boneless chicken marinated in a rich, creamy malai blend and topped with melted cheese-soft, mild, and indulgent.",
    "ingredients": "The Royal Skewer, Special Gourmet, Cheesy Malai Tikka, Boneless chicken marinated in a rich, creamy malai blend and topped with melted cheese-soft, mild, and indulgent., traditional spices, herbs",
    "image": "/images/food/royal-skewers.png",
    "portions": [
      {
        "label": "Half (5 PC)",
        "price": 230
      },
      {
        "label": "Full (10 PC)",
        "price": 450
      }
    ],
    "variations": null
  },
  {
    "id": "mutton-laham-burg",
    "name": "Mutton Laham Burg",
    "category": "bbq",
    "categoryName": "Charcoal & BBQ Grills",
    "subCategoryId": "the-royal-skewer",
    "subCategoryName": "The Royal Skewer",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b9440 \u2013 \u20b9800",
    "portion": "Half (5 PC) / Full (10 PC)",
    "description": "Premium mutton fillet marinated in delicate spices and grilled for a tender, smoky, & succulent bite.",
    "ingredients": "The Royal Skewer, Special Gourmet, Mutton Laham Burg, Premium mutton fillet marinated in delicate spices and grilled for a tender, smoky, & succulent bite., traditional spices, herbs",
    "image": "/images/food/royal-skewers.png",
    "portions": [
      {
        "label": "Half (5 PC)",
        "price": 440
      },
      {
        "label": "Full (10 PC)",
        "price": 800
      }
    ],
    "variations": null
  },
  {
    "id": "mutton-shish-tawook",
    "name": "Mutton Shish Tawook",
    "category": "bbq",
    "categoryName": "Charcoal & BBQ Grills",
    "subCategoryId": "the-royal-skewer",
    "subCategoryName": "The Royal Skewer",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": false,
    "price": "\u20b9440 \u2013 \u20b9800",
    "portion": "Half (5 PC) / Full (10 PC)",
    "description": "Juicy mutton pieces marinated in special house spices, skewered and flame-grilled for deep, robust flavor.",
    "ingredients": "The Royal Skewer, Special Gourmet, Mutton Shish Tawook, Juicy mutton pieces marinated in special house spices, skewered and flame-grilled for deep, robust flavor., traditional spices, herbs",
    "image": "/images/food/royal-skewers.png",
    "portions": [
      {
        "label": "Half (5 PC)",
        "price": 440
      },
      {
        "label": "Full (10 PC)",
        "price": 800
      }
    ],
    "variations": null
  },
  {
    "id": "chicken-mumtaz-kabab",
    "name": "Chicken Mumtaz Kabab",
    "category": "bbq",
    "categoryName": "Charcoal & BBQ Grills",
    "subCategoryId": "the-royal-skewer",
    "subCategoryName": "The Royal Skewer",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": false,
    "price": "\u20b9180 \u2013 \u20b9350",
    "portion": "Half (5 PC) / Full (10 PC)",
    "description": "Boneless chicken marinated in rich royal spices, grilled to tender, flavorful perfection.",
    "ingredients": "The Royal Skewer, Special Gourmet, Chicken Mumtaz Kabab, Boneless chicken marinated in rich royal spices, grilled to tender, flavorful perfection., traditional spices, herbs",
    "image": "/images/food/royal-skewers.png",
    "portions": [
      {
        "label": "Half (5 PC)",
        "price": 180
      },
      {
        "label": "Full (10 PC)",
        "price": 350
      }
    ],
    "variations": null
  },
  {
    "id": "seekh-kabab-classic",
    "name": "Seekh Kabab",
    "category": "bbq",
    "categoryName": "Charcoal & BBQ Grills",
    "subCategoryId": "seekh-kabab",
    "subCategoryName": "Seekh Kabab",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": false,
    "price": "From \u20b9160",
    "portion": "Chicken \u2022 Mutton",
    "description": "Juicy minced chicken & mutton blended with aromatic herbs and skewered to perfection - smoky tender, and full of flavor.",
    "ingredients": "Seekh Kabab, Special Gourmet, Seekh Kabab, Juicy minced chicken & mutton blended with aromatic herbs and skewered to perfection - smoky tender, and full of flavor., traditional spices, herbs",
    "image": "/images/food/seekh-kabab.png",
    "portions": null,
    "variations": [
      {
        "name": "Chicken",
        "prices": [
          {
            "label": "Half (4 PC)",
            "price": 160
          },
          {
            "label": "Full (8 PC)",
            "price": 300
          }
        ]
      },
      {
        "name": "Mutton",
        "prices": [
          {
            "label": "Half (4 PC)",
            "price": 320
          },
          {
            "label": "Full (8 PC)",
            "price": 600
          }
        ]
      }
    ]
  },
  {
    "id": "reshmi-seekh-kabab",
    "name": "Reshmi Seekh Kabab",
    "category": "bbq",
    "categoryName": "Charcoal & BBQ Grills",
    "subCategoryId": "seekh-kabab",
    "subCategoryName": "Seekh Kabab",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": false,
    "price": "From \u20b9170",
    "portion": "Chicken \u2022 Mutton",
    "description": "Soft, creamy chicken & mutton seekh marinated in rich cream and mild spices silky-smooth with a delicate, melt-in-your-mouth texture.",
    "ingredients": "Seekh Kabab, Special Gourmet, Reshmi Seekh Kabab, Soft, creamy chicken & mutton seekh marinated in rich cream and mild spices silky-smooth with a delicate, melt-in-your-mouth texture., traditional spices, herbs",
    "image": "/images/food/seekh-kabab.png",
    "portions": null,
    "variations": [
      {
        "name": "Chicken",
        "prices": [
          {
            "label": "Half (4 PC)",
            "price": 170
          },
          {
            "label": "Full (8 PC)",
            "price": 320
          }
        ]
      },
      {
        "name": "Mutton",
        "prices": [
          {
            "label": "Half (4 PC)",
            "price": 330
          },
          {
            "label": "Full (8 PC)",
            "price": 640
          }
        ]
      }
    ]
  },
  {
    "id": "malai-seekh-kabab",
    "name": "Malai Seekh Kabab",
    "category": "bbq",
    "categoryName": "Charcoal & BBQ Grills",
    "subCategoryId": "seekh-kabab",
    "subCategoryName": "Seekh Kabab",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": false,
    "price": "From \u20b9180",
    "portion": "Chicken \u2022 Mutton",
    "description": "Succulent chicken & mutton seekh infused with fresh cream, butter, and gentle spices - rich, tender and luxuriously creamy.",
    "ingredients": "Seekh Kabab, Special Gourmet, Malai Seekh Kabab, Succulent chicken & mutton seekh infused with fresh cream, butter, and gentle spices - rich, tender and luxuriously creamy., traditional spices, herbs",
    "image": "/images/food/seekh-kabab.png",
    "portions": null,
    "variations": [
      {
        "name": "Chicken",
        "prices": [
          {
            "label": "Half (4 PC)",
            "price": 180
          },
          {
            "label": "Full (8 PC)",
            "price": 350
          }
        ]
      },
      {
        "name": "Mutton",
        "prices": [
          {
            "label": "Half (4 PC)",
            "price": 340
          },
          {
            "label": "Full (8 PC)",
            "price": 660
          }
        ]
      }
    ]
  },
  {
    "id": "seekh-chilly-masala-kabab",
    "name": "Seekh Chilly Masala Kabab",
    "category": "bbq",
    "categoryName": "Charcoal & BBQ Grills",
    "subCategoryId": "seekh-kabab",
    "subCategoryName": "Seekh Kabab",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": false,
    "price": "From \u20b9180",
    "portion": "Chicken \u2022 Mutton",
    "description": "Fiery chicken & mutton seekh rubbed with bold masala and green chilies a spicy, bold kick for heat lovers.",
    "ingredients": "Seekh Kabab, Special Gourmet, Seekh Chilly Masala Kabab, Fiery chicken & mutton seekh rubbed with bold masala and green chilies a spicy, bold kick for heat lovers., traditional spices, herbs",
    "image": "/images/food/seekh-kabab.png",
    "portions": null,
    "variations": [
      {
        "name": "Chicken",
        "prices": [
          {
            "label": "Half (4 PC)",
            "price": 180
          },
          {
            "label": "Full (8 PC)",
            "price": 350
          }
        ]
      },
      {
        "name": "Mutton",
        "prices": [
          {
            "label": "Half (4 PC)",
            "price": 340
          },
          {
            "label": "Full (8 PC)",
            "price": 660
          }
        ]
      }
    ]
  },
  {
    "id": "adana-kabab",
    "name": "Adana Kabab",
    "category": "bbq",
    "categoryName": "Charcoal & BBQ Grills",
    "subCategoryId": "seekh-kabab",
    "subCategoryName": "Seekh Kabab",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": false,
    "price": "From \u20b9180",
    "portion": "Chicken \u2022 Mutton",
    "description": "Fiery chicken & mutton seekh rubbed with bold masala and green chilies a spicy, bold kick for heat lovers.",
    "ingredients": "Seekh Kabab, Special Gourmet, Adana Kabab, Fiery chicken & mutton seekh rubbed with bold masala and green chilies a spicy, bold kick for heat lovers., traditional spices, herbs",
    "image": "/images/food/seekh-kabab.png",
    "portions": null,
    "variations": [
      {
        "name": "Chicken",
        "prices": [
          {
            "label": "Half (4 PC)",
            "price": 180
          },
          {
            "label": "Full (8 PC)",
            "price": 350
          }
        ]
      },
      {
        "name": "Mutton",
        "prices": [
          {
            "label": "Half (4 PC)",
            "price": 340
          },
          {
            "label": "Full (8 PC)",
            "price": 660
          }
        ]
      }
    ]
  },
  {
    "id": "stuff-seekh-kabab",
    "name": "Stuff Seekh Kabab",
    "category": "bbq",
    "categoryName": "Charcoal & BBQ Grills",
    "subCategoryId": "seekh-kabab",
    "subCategoryName": "Seekh Kabab",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": true,
    "price": "From \u20b9200",
    "portion": "Chicken \u2022 Mutton",
    "description": "Juicy chicken & mutton seekh filled with a flavorful surprise - smoky, tender, and irresistibly delicious.",
    "ingredients": "Seekh Kabab, Special Gourmet, Stuff Seekh Kabab, Juicy chicken & mutton seekh filled with a flavorful surprise - smoky, tender, and irresistibly delicious., traditional spices, herbs",
    "image": "/images/food/seekh-kabab.png",
    "portions": null,
    "variations": [
      {
        "name": "Chicken",
        "prices": [
          {
            "label": "Half (4 PC)",
            "price": 200
          },
          {
            "label": "Full (8 PC)",
            "price": 380
          }
        ]
      },
      {
        "name": "Mutton",
        "prices": [
          {
            "label": "Half (4 PC)",
            "price": 360
          },
          {
            "label": "Full (8 PC)",
            "price": 700
          }
        ]
      }
    ]
  },
  {
    "id": "cheesy-seekh-kabab",
    "name": "Cheesy Seekh Kabab",
    "category": "bbq",
    "categoryName": "Charcoal & BBQ Grills",
    "subCategoryId": "seekh-kabab",
    "subCategoryName": "Seekh Kabab",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": false,
    "price": "From \u20b9200",
    "portion": "Chicken \u2022 Mutton",
    "description": "Juicy minced meat seekh stuffed or topped with melted cheese - smoky, tender, and irresistibly cheesy.",
    "ingredients": "Seekh Kabab, Special Gourmet, Cheesy Seekh Kabab, Juicy minced meat seekh stuffed or topped with melted cheese - smoky, tender, and irresistibly cheesy., traditional spices, herbs",
    "image": "/images/food/seekh-kabab.png",
    "portions": null,
    "variations": [
      {
        "name": "Chicken",
        "prices": [
          {
            "label": "Half (4 PC)",
            "price": 200
          },
          {
            "label": "Full (8 PC)",
            "price": 380
          }
        ]
      },
      {
        "name": "Mutton",
        "prices": [
          {
            "label": "Half (4 PC)",
            "price": 360
          },
          {
            "label": "Full (8 PC)",
            "price": 700
          }
        ]
      }
    ]
  },
  {
    "id": "chapli-kabab-item",
    "name": "Chapli Kabab",
    "category": "bbq",
    "categoryName": "Charcoal & BBQ Grills",
    "subCategoryId": "chapli-kabab",
    "subCategoryName": "Chapli Kabab",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": true,
    "price": "From \u20b9170",
    "portion": "Chicken \u2022 Mutton",
    "description": "Tender minced chicken & mutton patties, spiced and pan-fried - crispy outside, juicy and aromatic inside.",
    "ingredients": "Chapli Kabab, Special Gourmet, Chapli Kabab, Tender minced chicken & mutton patties, spiced and pan-fried - crispy outside, juicy and aromatic inside., traditional spices, herbs",
    "image": "/images/food/chapli-kabab.png",
    "portions": null,
    "variations": [
      {
        "name": "Chicken",
        "prices": [
          {
            "label": "Half (2 PC)",
            "price": 170
          },
          {
            "label": "Full (4 PC)",
            "price": 320
          }
        ]
      },
      {
        "name": "Mutton",
        "prices": [
          {
            "label": "Half (2 PC)",
            "price": 360
          },
          {
            "label": "Full (4 PC)",
            "price": 670
          }
        ]
      }
    ]
  },
  {
    "id": "kofta-curry",
    "name": "Kofta Curry",
    "category": "appetizers",
    "categoryName": "Starters & Kababs",
    "subCategoryId": "kofta",
    "subCategoryName": "Kofta",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": false,
    "price": "From \u20b9200",
    "portion": "Chicken \u2022 Mutton",
    "description": "Spiced chicken meatballs simmered in a rich, aromatic gravy - soft, juicy, and bursting with flavor.",
    "ingredients": "Kofta, Special Gourmet, Kofta Curry, Spiced chicken meatballs simmered in a rich, aromatic gravy - soft, juicy, and bursting with flavor., traditional spices, herbs",
    "image": "/images/food/kofta-curry.png",
    "portions": null,
    "variations": [
      {
        "name": "Chicken",
        "prices": [
          {
            "label": "Half (4 PC)",
            "price": 200
          },
          {
            "label": "Full (8 PC)",
            "price": 380
          }
        ]
      },
      {
        "name": "Mutton",
        "prices": [
          {
            "label": "Half (4 PC)",
            "price": 350
          },
          {
            "label": "Full (8 PC)",
            "price": 680
          }
        ]
      }
    ]
  },
  {
    "id": "chilly-kofta",
    "name": "Chilly Kofta",
    "category": "appetizers",
    "categoryName": "Starters & Kababs",
    "subCategoryId": "kofta",
    "subCategoryName": "Kofta",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": false,
    "price": "From \u20b9180",
    "portion": "Chicken \u2022 Mutton",
    "description": "Juicy chicken meatballs tossed in a spicy, tangy chilli sauce - bold, fiery, and full of zing.",
    "ingredients": "Kofta, Special Gourmet, Chilly Kofta, Juicy chicken meatballs tossed in a spicy, tangy chilli sauce - bold, fiery, and full of zing., traditional spices, herbs",
    "image": "/images/food/kofta-curry.png",
    "portions": null,
    "variations": [
      {
        "name": "Chicken",
        "prices": [
          {
            "label": "Half (4 PC)",
            "price": 180
          },
          {
            "label": "Full (8 PC)",
            "price": 350
          }
        ]
      },
      {
        "name": "Mutton",
        "prices": [
          {
            "label": "Half (4 PC)",
            "price": 320
          },
          {
            "label": "Full (8 PC)",
            "price": 600
          }
        ]
      }
    ]
  },
  {
    "id": "chicken-malai-kofta",
    "name": "Chicken Malai Kofta",
    "category": "appetizers",
    "categoryName": "Starters & Kababs",
    "subCategoryId": "kofta",
    "subCategoryName": "Kofta",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": false,
    "price": "From \u20b9190",
    "portion": "Chicken \u2022 Mutton",
    "description": "Tender chicken meatballs simmered in a rich, creamy malai gravy - smooth, mild, and indulgently flavorful.",
    "ingredients": "Kofta, Special Gourmet, Chicken Malai Kofta, Tender chicken meatballs simmered in a rich, creamy malai gravy - smooth, mild, and indulgently flavorful., traditional spices, herbs",
    "image": "/images/food/kofta-curry.png",
    "portions": null,
    "variations": [
      {
        "name": "Chicken",
        "prices": [
          {
            "label": "Half (4 PC)",
            "price": 190
          },
          {
            "label": "Full (8 PC)",
            "price": 360
          }
        ]
      },
      {
        "name": "Mutton",
        "prices": [
          {
            "label": "Half (4 PC)",
            "price": 340
          },
          {
            "label": "Full (8 PC)",
            "price": 650
          }
        ]
      }
    ]
  },
  {
    "id": "cheesy-kofta",
    "name": "Cheesy Kofta",
    "category": "appetizers",
    "categoryName": "Starters & Kababs",
    "subCategoryId": "kofta",
    "subCategoryName": "Kofta",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": true,
    "price": "From \u20b9220",
    "portion": "Chicken \u2022 Mutton",
    "description": "Tender chicken meatballs simmered in a rich, creamy malai gravy - smooth, mild, and indulgently flavorful.",
    "ingredients": "Kofta, Special Gourmet, Cheesy Kofta, Tender chicken meatballs simmered in a rich, creamy malai gravy - smooth, mild, and indulgently flavorful., traditional spices, herbs",
    "image": "/images/food/kofta-curry.png",
    "portions": null,
    "variations": [
      {
        "name": "Chicken",
        "prices": [
          {
            "label": "Half (4 PC)",
            "price": 220
          },
          {
            "label": "Full (8 PC)",
            "price": 400
          }
        ]
      },
      {
        "name": "Mutton",
        "prices": [
          {
            "label": "Half (4 PC)",
            "price": 350
          },
          {
            "label": "Full (8 PC)",
            "price": 670
          }
        ]
      }
    ]
  },
  {
    "id": "murg-tikka-kabab",
    "name": "Murg Tikka Kabab",
    "category": "bbq",
    "categoryName": "Charcoal & BBQ Grills",
    "subCategoryId": "bbq-boneless-chicken",
    "subCategoryName": "BBQ Boneless Chicken",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": false,
    "price": "\u20b9180 \u2013 \u20b9340",
    "portion": "Half (5 PC) / Full (10 PC)",
    "description": "Boneless chicken chunks marinated in classic spices, tandoor-grilled till juicy and smoky.",
    "ingredients": "BBQ Boneless Chicken, Special Gourmet, Murg Tikka Kabab, Boneless chicken chunks marinated in classic spices, tandoor-grilled till juicy and smoky., traditional spices, herbs",
    "image": "/images/food/bbq-boneless-chicken.png",
    "portions": [
      {
        "label": "Half (5 PC)",
        "price": 180
      },
      {
        "label": "Full (10 PC)",
        "price": 340
      }
    ],
    "variations": null
  },
  {
    "id": "chicken-hariyali-tikka-kabab",
    "name": "Chicken Hariyali Tikka Kabab",
    "category": "bbq",
    "categoryName": "Charcoal & BBQ Grills",
    "subCategoryId": "bbq-boneless-chicken",
    "subCategoryName": "BBQ Boneless Chicken",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": false,
    "price": "\u20b9180 \u2013 \u20b9340",
    "portion": "Half (5 PC) / Full (10 PC)",
    "description": "Boneless chicken chunks marinated in classic spices, tandoor-grilled till juicy and smoky.",
    "ingredients": "BBQ Boneless Chicken, Special Gourmet, Chicken Hariyali Tikka Kabab, Boneless chicken chunks marinated in classic spices, tandoor-grilled till juicy and smoky., traditional spices, herbs",
    "image": "/images/food/bbq-boneless-chicken.png",
    "portions": [
      {
        "label": "Half (5 PC)",
        "price": 180
      },
      {
        "label": "Full (10 PC)",
        "price": 340
      }
    ],
    "variations": null
  },
  {
    "id": "chicken-malai-tikka-kabab",
    "name": "Chicken Malai Tikka Kabab",
    "category": "bbq",
    "categoryName": "Charcoal & BBQ Grills",
    "subCategoryId": "bbq-boneless-chicken",
    "subCategoryName": "BBQ Boneless Chicken",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": false,
    "price": "\u20b9190 \u2013 \u20b9350",
    "portion": "Half (5 PC) / Full (10 PC)",
    "description": "Creamy, tender chicken pieces marinated in rich malai and mild spices - grilled to silky, melt-in-the-mouth perfection.",
    "ingredients": "BBQ Boneless Chicken, Special Gourmet, Chicken Malai Tikka Kabab, Creamy, tender chicken pieces marinated in rich malai and mild spices - grilled to silky, melt-in-the-mouth perfection., traditional spices, herbs",
    "image": "/images/food/bbq-boneless-chicken.png",
    "portions": [
      {
        "label": "Half (5 PC)",
        "price": 190
      },
      {
        "label": "Full (10 PC)",
        "price": 350
      }
    ],
    "variations": null
  },
  {
    "id": "chicken-lassoni-tikka-kabab",
    "name": "Chicken Lassoni Tikka Kabab",
    "category": "bbq",
    "categoryName": "Charcoal & BBQ Grills",
    "subCategoryId": "bbq-boneless-chicken",
    "subCategoryName": "BBQ Boneless Chicken",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": false,
    "price": "\u20b9190 \u2013 \u20b9350",
    "portion": "Half (5 PC) / Full (10 PC)",
    "description": "Succulent chicken marinated in a rich, garlicky blend - grilled to juicy perfection with a bold, aromatic kick.",
    "ingredients": "BBQ Boneless Chicken, Special Gourmet, Chicken Lassoni Tikka Kabab, Succulent chicken marinated in a rich, garlicky blend - grilled to juicy perfection with a bold, aromatic kick., traditional spices, herbs",
    "image": "/images/food/bbq-boneless-chicken.png",
    "portions": [
      {
        "label": "Half (5 PC)",
        "price": 190
      },
      {
        "label": "Full (10 PC)",
        "price": 350
      }
    ],
    "variations": null
  },
  {
    "id": "joojeh-kabab",
    "name": "Joojeh Kabab",
    "category": "bbq",
    "categoryName": "Charcoal & BBQ Grills",
    "subCategoryId": "bbq-boneless-chicken",
    "subCategoryName": "BBQ Boneless Chicken",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b9190 \u2013 \u20b9350",
    "portion": "Half (5 PC) / Full (10 PC)",
    "description": "A flavorful chicken marinade with saffron, turmeric, Greek yogurt, and lemon creates juicy, tender chicken loaded with flavor.",
    "ingredients": "BBQ Boneless Chicken, Special Gourmet, Joojeh Kabab, A flavorful chicken marinade with saffron, turmeric, Greek yogurt, and lemon creates juicy, tender chicken loaded with flavor., traditional spices, herbs",
    "image": "/images/food/bbq-boneless-chicken.png",
    "portions": [
      {
        "label": "Half (5 PC)",
        "price": 190
      },
      {
        "label": "Full (10 PC)",
        "price": 350
      }
    ],
    "variations": null
  },
  {
    "id": "stuffed-chees-chicken-tikka-kabab",
    "name": "Stuffed Chees Chicken Tikka Kabab",
    "category": "bbq",
    "categoryName": "Charcoal & BBQ Grills",
    "subCategoryId": "bbq-boneless-chicken",
    "subCategoryName": "BBQ Boneless Chicken",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b9250 \u2013 \u20b9450",
    "portion": "Half (5 PC) / Full (10 PC)",
    "description": "Creamy, rich Cheese marinated in mild malai spices - soft, silky, and melt-in-your-mouth.",
    "ingredients": "BBQ Boneless Chicken, Special Gourmet, Stuffed Chees Chicken Tikka Kabab, Creamy, rich Cheese marinated in mild malai spices - soft, silky, and melt-in-your-mouth., traditional spices, herbs",
    "image": "/images/food/bbq-boneless-chicken.png",
    "portions": [
      {
        "label": "Half (5 PC)",
        "price": 250
      },
      {
        "label": "Full (10 PC)",
        "price": 450
      }
    ],
    "variations": null
  },
  {
    "id": "paneer-tikka-kabab",
    "name": "Paneer Tikka Kabab",
    "category": "appetizers",
    "categoryName": "Starters & Kababs",
    "subCategoryId": "paneer-tikka",
    "subCategoryName": "Paneer Tikka",
    "groupTitle": "Special Gourmet",
    "diet": "veg",
    "special": false,
    "price": "\u20b9180 \u2013 \u20b9350",
    "portion": "Half (5 PC) / Full (10 PC)",
    "description": "Fresh paneer marinated in fragrant green herbs, grilled to smoky perfection.",
    "ingredients": "Paneer Tikka, Special Gourmet, Paneer Tikka Kabab, Fresh paneer marinated in fragrant green herbs, grilled to smoky perfection., traditional spices, herbs",
    "image": "/images/food/paneer-tikka.png",
    "portions": [
      {
        "label": "Half (5 PC)",
        "price": 180
      },
      {
        "label": "Full (10 PC)",
        "price": 350
      }
    ],
    "variations": null
  },
  {
    "id": "paneer-hariyali-tikka-kabab",
    "name": "Paneer Hariyali Tikka Kabab",
    "category": "appetizers",
    "categoryName": "Starters & Kababs",
    "subCategoryId": "paneer-tikka",
    "subCategoryName": "Paneer Tikka",
    "groupTitle": "Special Gourmet",
    "diet": "veg",
    "special": false,
    "price": "\u20b9180 \u2013 \u20b9350",
    "portion": "Half (5 PC) / Full (10 PC)",
    "description": "Fresh paneer infused with vibrant green herbs and spices, marinated in fragrant seasonings and grilled to smoky perfection-herby, flavorful, and delicious.",
    "ingredients": "Paneer Tikka, Special Gourmet, Paneer Hariyali Tikka Kabab, Fresh paneer infused with vibrant green herbs and spices, marinated in fragrant seasonings and grilled to smoky perfection-herby, flavorful, and delicious., traditional spices, herbs",
    "image": "/images/food/paneer-tikka.png",
    "portions": [
      {
        "label": "Half (5 PC)",
        "price": 180
      },
      {
        "label": "Full (10 PC)",
        "price": 350
      }
    ],
    "variations": null
  },
  {
    "id": "paneer-joojeh-tikka-kabab",
    "name": "Paneer Joojeh Tikka Kabab",
    "category": "appetizers",
    "categoryName": "Starters & Kababs",
    "subCategoryId": "paneer-tikka",
    "subCategoryName": "Paneer Tikka",
    "groupTitle": "Special Gourmet",
    "diet": "veg",
    "special": false,
    "price": "\u20b9180 \u2013 \u20b9350",
    "portion": "Half (5 PC) / Full (10 PC)",
    "description": "Mildly spiced, juicy paneer inspired by Persian-style jojeh flavors - tender and delicate.",
    "ingredients": "Paneer Tikka, Special Gourmet, Paneer Joojeh Tikka Kabab, Mildly spiced, juicy paneer inspired by Persian-style jojeh flavors - tender and delicate., traditional spices, herbs",
    "image": "/images/food/paneer-tikka.png",
    "portions": [
      {
        "label": "Half (5 PC)",
        "price": 180
      },
      {
        "label": "Full (10 PC)",
        "price": 350
      }
    ],
    "variations": null
  },
  {
    "id": "paneer-lassoni-tikka-kabab",
    "name": "Paneer Lassoni Tikka Kabab",
    "category": "appetizers",
    "categoryName": "Starters & Kababs",
    "subCategoryId": "paneer-tikka",
    "subCategoryName": "Paneer Tikka",
    "groupTitle": "Special Gourmet",
    "diet": "veg",
    "special": false,
    "price": "\u20b9180 \u2013 \u20b9350",
    "portion": "Half (5 PC) / Full (10 PC)",
    "description": "Soft paneer cubes marinated in a bold garlic (lassoni) blend - smoky and aromatic.",
    "ingredients": "Paneer Tikka, Special Gourmet, Paneer Lassoni Tikka Kabab, Soft paneer cubes marinated in a bold garlic (lassoni) blend - smoky and aromatic., traditional spices, herbs",
    "image": "/images/food/paneer-tikka.png",
    "portions": [
      {
        "label": "Half (5 PC)",
        "price": 180
      },
      {
        "label": "Full (10 PC)",
        "price": 350
      }
    ],
    "variations": null
  },
  {
    "id": "paneer-malai-tikka-kabab",
    "name": "Paneer Malai Tikka Kabab",
    "category": "appetizers",
    "categoryName": "Starters & Kababs",
    "subCategoryId": "paneer-tikka",
    "subCategoryName": "Paneer Tikka",
    "groupTitle": "Special Gourmet",
    "diet": "veg",
    "special": false,
    "price": "\u20b9180 \u2013 \u20b9350",
    "portion": "Half (5 PC) / Full (10 PC)",
    "description": "Creamy, rich paneer marinated in mild malai spices - soft, silky, and melt-in-your-mouth.",
    "ingredients": "Paneer Tikka, Special Gourmet, Paneer Malai Tikka Kabab, Creamy, rich paneer marinated in mild malai spices - soft, silky, and melt-in-your-mouth., traditional spices, herbs",
    "image": "/images/food/paneer-tikka.png",
    "portions": [
      {
        "label": "Half (5 PC)",
        "price": 180
      },
      {
        "label": "Full (10 PC)",
        "price": 350
      }
    ],
    "variations": null
  },
  {
    "id": "fairy-tawa-wings",
    "name": "Fairy Tawa Wings",
    "category": "appetizers",
    "categoryName": "Starters & Kababs",
    "subCategoryId": "wings-and-lollypop-gourmet",
    "subCategoryName": "Wings and Lollypop Gourmet",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": false,
    "price": "From \u20b9150",
    "portion": "Wings \u2022 Lollypop",
    "description": "Chicken wings marinated in a special mild-spicy blend, seared on the tawa for a juicy, tender, and flavorful bite.",
    "ingredients": "Wings and Lollypop Gourmet, Special Gourmet, Fairy Tawa Wings, Chicken wings marinated in a special mild-spicy blend, seared on the tawa for a juicy, tender, and flavorful bite., traditional spices, herbs",
    "image": "/images/food/wings-and-lollypop.png",
    "portions": null,
    "variations": [
      {
        "name": "Wings",
        "prices": [
          {
            "label": "Half (5 PC)",
            "price": 150
          },
          {
            "label": "Full (10 PC)",
            "price": 280
          }
        ]
      },
      {
        "name": "Lollypop",
        "prices": [
          {
            "label": "Half (5 PC)",
            "price": 170
          },
          {
            "label": "Full (10 PC)",
            "price": 320
          }
        ]
      }
    ]
  },
  {
    "id": "tikka-bbq-wings",
    "name": "Tikka BBQ",
    "category": "appetizers",
    "categoryName": "Starters & Kababs",
    "subCategoryId": "wings-and-lollypop-gourmet",
    "subCategoryName": "Wings and Lollypop Gourmet",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": false,
    "price": "From \u20b9160",
    "portion": "Wings \u2022 Lollypop",
    "description": "Juicy chicken wings marinated in smoky BBQ sauce and grilled till tender, sticky, and deliciously charred.",
    "ingredients": "Wings and Lollypop Gourmet, Special Gourmet, Tikka BBQ, Juicy chicken wings marinated in smoky BBQ sauce and grilled till tender, sticky, and deliciously charred., traditional spices, herbs",
    "image": "/images/food/wings-and-lollypop.png",
    "portions": null,
    "variations": [
      {
        "name": "Wings",
        "prices": [
          {
            "label": "Half (5 PC)",
            "price": 160
          },
          {
            "label": "Full (10 PC)",
            "price": 300
          }
        ]
      },
      {
        "name": "Lollypop",
        "prices": [
          {
            "label": "Half (5 PC)",
            "price": 170
          },
          {
            "label": "Full (10 PC)",
            "price": 320
          }
        ]
      }
    ]
  },
  {
    "id": "peri-peri-bbq-wings",
    "name": "Peri-Peri BBQ",
    "category": "appetizers",
    "categoryName": "Starters & Kababs",
    "subCategoryId": "wings-and-lollypop-gourmet",
    "subCategoryName": "Wings and Lollypop Gourmet",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": false,
    "price": "From \u20b9170",
    "portion": "Wings \u2022 Lollypop",
    "description": "Chicken legs marinated in fiery peri-peri spices, seared on the tawa for a spicy, smoky, and juicy finish.",
    "ingredients": "Wings and Lollypop Gourmet, Special Gourmet, Peri-Peri BBQ, Chicken legs marinated in fiery peri-peri spices, seared on the tawa for a spicy, smoky, and juicy finish., traditional spices, herbs",
    "image": "/images/food/wings-and-lollypop.png",
    "portions": null,
    "variations": [
      {
        "name": "Wings",
        "prices": [
          {
            "label": "Half (5 PC)",
            "price": 170
          },
          {
            "label": "Full (10 PC)",
            "price": 320
          }
        ]
      },
      {
        "name": "Lollypop",
        "prices": [
          {
            "label": "Half (5 PC)",
            "price": 180
          },
          {
            "label": "Full (10 PC)",
            "price": 340
          }
        ]
      }
    ]
  },
  {
    "id": "pepper-bbq-wings",
    "name": "Pepper BBQ",
    "category": "appetizers",
    "categoryName": "Starters & Kababs",
    "subCategoryId": "wings-and-lollypop-gourmet",
    "subCategoryName": "Wings and Lollypop Gourmet",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": false,
    "price": "From \u20b9170",
    "portion": "Wings \u2022 Lollypop",
    "description": "Juicy marinated in bold pepper spices and grilled for a smoky, spicy kick.",
    "ingredients": "Wings and Lollypop Gourmet, Special Gourmet, Pepper BBQ, Juicy marinated in bold pepper spices and grilled for a smoky, spicy kick., traditional spices, herbs",
    "image": "/images/food/wings-and-lollypop.png",
    "portions": null,
    "variations": [
      {
        "name": "Wings",
        "prices": [
          {
            "label": "Half (5 PC)",
            "price": 170
          },
          {
            "label": "Full (10 PC)",
            "price": 320
          }
        ]
      },
      {
        "name": "Lollypop",
        "prices": [
          {
            "label": "Half (5 PC)",
            "price": 180
          },
          {
            "label": "Full (10 PC)",
            "price": 340
          }
        ]
      }
    ]
  },
  {
    "id": "hot-sour-bbq-wings",
    "name": "Hot & Sour BBQ",
    "category": "appetizers",
    "categoryName": "Starters & Kababs",
    "subCategoryId": "wings-and-lollypop-gourmet",
    "subCategoryName": "Wings and Lollypop Gourmet",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": false,
    "price": "From \u20b9180",
    "portion": "Wings \u2022 Lollypop",
    "description": "Chicken tossed in a fiery hot and tangy marinade, then char-grilled for an irresistible zing.",
    "ingredients": "Wings and Lollypop Gourmet, Special Gourmet, Hot & Sour BBQ, Chicken tossed in a fiery hot and tangy marinade, then char-grilled for an irresistible zing., traditional spices, herbs",
    "image": "/images/food/wings-and-lollypop.png",
    "portions": null,
    "variations": [
      {
        "name": "Wings",
        "prices": [
          {
            "label": "Half (5 PC)",
            "price": 180
          },
          {
            "label": "Full (10 PC)",
            "price": 340
          }
        ]
      },
      {
        "name": "Lollypop",
        "prices": [
          {
            "label": "Half (5 PC)",
            "price": 190
          },
          {
            "label": "Full (10 PC)",
            "price": 360
          }
        ]
      }
    ]
  },
  {
    "id": "cheesy-bbq-wings",
    "name": "Cheesy BBQ",
    "category": "appetizers",
    "categoryName": "Starters & Kababs",
    "subCategoryId": "wings-and-lollypop-gourmet",
    "subCategoryName": "Wings and Lollypop Gourmet",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": false,
    "price": "From \u20b9200",
    "portion": "Wings \u2022 Lollypop",
    "description": "Grilled smothered in a rich, gooey cheese sauce - smoky, creamy, and indulgent.",
    "ingredients": "Wings and Lollypop Gourmet, Special Gourmet, Cheesy BBQ, Grilled smothered in a rich, gooey cheese sauce - smoky, creamy, and indulgent., traditional spices, herbs",
    "image": "/images/food/wings-and-lollypop.png",
    "portions": null,
    "variations": [
      {
        "name": "Wings",
        "prices": [
          {
            "label": "Half (5 PC)",
            "price": 200
          },
          {
            "label": "Full (10 PC)",
            "price": 380
          }
        ]
      },
      {
        "name": "Lollypop",
        "prices": [
          {
            "label": "Half (5 PC)",
            "price": 220
          },
          {
            "label": "Full (10 PC)",
            "price": 420
          }
        ]
      }
    ]
  },
  {
    "id": "chilly-masala-wings",
    "name": "Chilly Masala",
    "category": "appetizers",
    "categoryName": "Starters & Kababs",
    "subCategoryId": "wings-and-lollypop-gourmet",
    "subCategoryName": "Wings and Lollypop Gourmet",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": false,
    "price": "From \u20b9180",
    "portion": "Wings \u2022 Lollypop",
    "description": "Spicy coated in a zesty chill masala marinade and grilled till perfectly charred and juicy.",
    "ingredients": "Wings and Lollypop Gourmet, Special Gourmet, Chilly Masala, Spicy coated in a zesty chill masala marinade and grilled till perfectly charred and juicy., traditional spices, herbs",
    "image": "/images/food/wings-and-lollypop.png",
    "portions": null,
    "variations": [
      {
        "name": "Wings",
        "prices": [
          {
            "label": "Half (5 PC)",
            "price": 180
          },
          {
            "label": "Full (10 PC)",
            "price": 340
          }
        ]
      },
      {
        "name": "Lollypop",
        "prices": [
          {
            "label": "Half (5 PC)",
            "price": 190
          },
          {
            "label": "Full (10 PC)",
            "price": 360
          }
        ]
      }
    ]
  },
  {
    "id": "jucy-lucy-bbq-wings",
    "name": "Jucy Lucy BBQ",
    "category": "appetizers",
    "categoryName": "Starters & Kababs",
    "subCategoryId": "wings-and-lollypop-gourmet",
    "subCategoryName": "Wings and Lollypop Gourmet",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": false,
    "price": "From \u20b9180",
    "portion": "Wings \u2022 Lollypop",
    "description": "Extra-juicy Arabic-style grilled chicken, marinated in a rich, masala spice blend for maximum tenderness.",
    "ingredients": "Wings and Lollypop Gourmet, Special Gourmet, Jucy Lucy BBQ, Extra-juicy Arabic-style grilled chicken, marinated in a rich, masala spice blend for maximum tenderness., traditional spices, herbs",
    "image": "/images/food/wings-and-lollypop.png",
    "portions": null,
    "variations": [
      {
        "name": "Wings",
        "prices": [
          {
            "label": "Half (5 PC)",
            "price": 180
          },
          {
            "label": "Full (10 PC)",
            "price": 340
          }
        ]
      },
      {
        "name": "Lollypop",
        "prices": [
          {
            "label": "Half (5 PC)",
            "price": 190
          },
          {
            "label": "Full (10 PC)",
            "price": 360
          }
        ]
      }
    ]
  },
  {
    "id": "schezwan-chicken-lollypop",
    "name": "Schezwan Chicken Lollypop",
    "category": "appetizers",
    "categoryName": "Starters & Kababs",
    "subCategoryId": "wings-and-lollypop-gourmet",
    "subCategoryName": "Wings and Lollypop Gourmet",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": false,
    "price": "From \u20b9--/--",
    "portion": "Wings \u2022 Lollypop",
    "description": "Crispy fried chicken lollipops tossed in spicy Schezwan sauce - bold, fiery, and flavorful.",
    "ingredients": "Wings and Lollypop Gourmet, Special Gourmet, Schezwan Chicken Lollypop, Crispy fried chicken lollipops tossed in spicy Schezwan sauce - bold, fiery, and flavorful., traditional spices, herbs",
    "image": "/images/food/wings-and-lollypop.png",
    "portions": null,
    "variations": [
      {
        "name": "Wings",
        "prices": [
          {
            "label": "Half/Full",
            "price": "--/--"
          }
        ]
      },
      {
        "name": "Lollypop",
        "prices": [
          {
            "label": "Half (5 PC)",
            "price": 180
          },
          {
            "label": "Full (10 PC)",
            "price": 340
          }
        ]
      }
    ]
  },
  {
    "id": "chinese-chicken-lollypop",
    "name": "Chinese Chicken Lollypop",
    "category": "appetizers",
    "categoryName": "Starters & Kababs",
    "subCategoryId": "wings-and-lollypop-gourmet",
    "subCategoryName": "Wings and Lollypop Gourmet",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": false,
    "price": "From \u20b9--/--",
    "portion": "Wings \u2022 Lollypop",
    "description": "Golden-fried chicken lollipops coated in a classic Chinese-style sauce crispy, savory, and satisfying.",
    "ingredients": "Wings and Lollypop Gourmet, Special Gourmet, Chinese Chicken Lollypop, Golden-fried chicken lollipops coated in a classic Chinese-style sauce crispy, savory, and satisfying., traditional spices, herbs",
    "image": "/images/food/wings-and-lollypop.png",
    "portions": null,
    "variations": [
      {
        "name": "Wings",
        "prices": [
          {
            "label": "Half/Full",
            "price": "--/--"
          }
        ]
      },
      {
        "name": "Lollypop",
        "prices": [
          {
            "label": "Half (5 PC)",
            "price": 160
          },
          {
            "label": "Full (10 PC)",
            "price": 300
          }
        ]
      }
    ]
  },
  {
    "id": "classic-shawaya",
    "name": "Classic Shawaya",
    "category": "bbq",
    "categoryName": "Charcoal & BBQ Grills",
    "subCategoryId": "shawaya-royale",
    "subCategoryName": "Shawaya Royale",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b9140 \u2013 \u20b9500",
    "portion": "Quarter / Half / Three Quarter / Full",
    "description": "Traditional rotisserie chicken marinated in aromatic spices and slow-roasted till juicy and smoky.",
    "ingredients": "Shawaya Royale, Special Gourmet, Classic Shawaya, Traditional rotisserie chicken marinated in aromatic spices and slow-roasted till juicy and smoky., traditional spices, herbs",
    "image": "/images/food/shawaya-royale.png",
    "portions": [
      {
        "label": "Quarter",
        "price": 140
      },
      {
        "label": "Half",
        "price": 260
      },
      {
        "label": "Three Quarter",
        "price": 380
      },
      {
        "label": "Full",
        "price": 500
      }
    ],
    "variations": null
  },
  {
    "id": "masala-shawaya",
    "name": "Masala Shawaya",
    "category": "bbq",
    "categoryName": "Charcoal & BBQ Grills",
    "subCategoryId": "shawaya-royale",
    "subCategoryName": "Shawaya Royale",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b9160 \u2013 \u20b9550",
    "portion": "Quarter / Half / Three Quarter / Full",
    "description": "Shawaya chicken coated in bold Indian masala spices, slow-roasted for a rich, spicy flavor.",
    "ingredients": "Shawaya Royale, Special Gourmet, Masala Shawaya, Shawaya chicken coated in bold Indian masala spices, slow-roasted for a rich, spicy flavor., traditional spices, herbs",
    "image": "/images/food/shawaya-royale.png",
    "portions": [
      {
        "label": "Quarter",
        "price": 160
      },
      {
        "label": "Half",
        "price": 300
      },
      {
        "label": "Three Quarter",
        "price": 440
      },
      {
        "label": "Full",
        "price": 550
      }
    ],
    "variations": null
  },
  {
    "id": "alfaham-chicken",
    "name": "Alfaham",
    "category": "bbq",
    "categoryName": "Charcoal & BBQ Grills",
    "subCategoryId": "bbq-starters",
    "subCategoryName": "BBQ Starters",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b9140 \u2013 \u20b9480",
    "portion": "Quarter / Half / Full",
    "description": "Whole or half chicken marinated in Arabic spices and charcoal-grilled for a juicy, smoky flavor.",
    "ingredients": "BBQ Starters, Special Gourmet, Alfaham, Whole or half chicken marinated in Arabic spices and charcoal-grilled for a juicy, smoky flavor., traditional spices, herbs",
    "image": "/images/food/alfaham-starters.png",
    "portions": [
      {
        "label": "Quarter",
        "price": 140
      },
      {
        "label": "Half",
        "price": 250
      },
      {
        "label": "Full",
        "price": 480
      }
    ],
    "variations": null
  },
  {
    "id": "juicy-lucy-alfaham",
    "name": "Juicy Lucy Alfaham",
    "category": "bbq",
    "categoryName": "Charcoal & BBQ Grills",
    "subCategoryId": "bbq-starters",
    "subCategoryName": "BBQ Starters",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b9170 \u2013 \u20b9600",
    "portion": "Quarter / Half / Full",
    "description": "Extra-juicy Arabic-style grilled chicken, marinated in a rich, masala spice blend for maximum tenderness.",
    "ingredients": "BBQ Starters, Special Gourmet, Juicy Lucy Alfaham, Extra-juicy Arabic-style grilled chicken, marinated in a rich, masala spice blend for maximum tenderness., traditional spices, herbs",
    "image": "/images/food/alfaham-starters.png",
    "portions": [
      {
        "label": "Quarter",
        "price": 170
      },
      {
        "label": "Half",
        "price": 320
      },
      {
        "label": "Full",
        "price": 600
      }
    ],
    "variations": null
  },
  {
    "id": "chilly-cheese-alfaham",
    "name": "Chilly Cheese Alfaham",
    "category": "bbq",
    "categoryName": "Charcoal & BBQ Grills",
    "subCategoryId": "bbq-starters",
    "subCategoryName": "BBQ Starters",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b9170 \u2013 \u20b9600",
    "portion": "Quarter / Half / Full",
    "description": "Grilled chicken coated in a spicy chili marinade and finished with a cheesy topping-fiery and indulgent.",
    "ingredients": "BBQ Starters, Special Gourmet, Chilly Cheese Alfaham, Grilled chicken coated in a spicy chili marinade and finished with a cheesy topping-fiery and indulgent., traditional spices, herbs",
    "image": "/images/food/alfaham-starters.png",
    "portions": [
      {
        "label": "Quarter",
        "price": 170
      },
      {
        "label": "Half",
        "price": 320
      },
      {
        "label": "Full",
        "price": 600
      }
    ],
    "variations": null
  },
  {
    "id": "butter-chicken-alfaham",
    "name": "Butter Chicken Alfaham",
    "category": "bbq",
    "categoryName": "Charcoal & BBQ Grills",
    "subCategoryId": "bbq-starters",
    "subCategoryName": "BBQ Starters",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b9180 \u2013 \u20b9630",
    "portion": "Quarter / Half / Full",
    "description": "Charcoal-grilled chicken finished with a creamy, buttery sauce - a fusion of smoky and rich flavors.",
    "ingredients": "BBQ Starters, Special Gourmet, Butter Chicken Alfaham, Charcoal-grilled chicken finished with a creamy, buttery sauce - a fusion of smoky and rich flavors., traditional spices, herbs",
    "image": "/images/food/alfaham-starters.png",
    "portions": [
      {
        "label": "Quarter",
        "price": 180
      },
      {
        "label": "Half",
        "price": 340
      },
      {
        "label": "Full",
        "price": 630
      }
    ],
    "variations": null
  },
  {
    "id": "pepper-chicken-alfaham",
    "name": "Pepper Chicken Alfaham",
    "category": "bbq",
    "categoryName": "Charcoal & BBQ Grills",
    "subCategoryId": "bbq-starters",
    "subCategoryName": "BBQ Starters",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b9150 \u2013 \u20b9530",
    "portion": "Quarter / Half / Full",
    "description": "Arabic-style grilled chicken marinated in bold pepper spices for a spicy, peppery kick.",
    "ingredients": "BBQ Starters, Special Gourmet, Pepper Chicken Alfaham, Arabic-style grilled chicken marinated in bold pepper spices for a spicy, peppery kick., traditional spices, herbs",
    "image": "/images/food/alfaham-starters.png",
    "portions": [
      {
        "label": "Quarter",
        "price": 150
      },
      {
        "label": "Half",
        "price": 280
      },
      {
        "label": "Full",
        "price": 530
      }
    ],
    "variations": null
  },
  {
    "id": "peri-peri-alfaham",
    "name": "Peri-Peri Alfaham",
    "category": "bbq",
    "categoryName": "Charcoal & BBQ Grills",
    "subCategoryId": "bbq-starters",
    "subCategoryName": "BBQ Starters",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b9150 \u2013 \u20b9530",
    "portion": "Quarter / Half / Full",
    "description": "Grilled chicken infused with fiery peri-peri marinade - tangy, spicy, and irresistibly smoky.",
    "ingredients": "BBQ Starters, Special Gourmet, Peri-Peri Alfaham, Grilled chicken infused with fiery peri-peri marinade - tangy, spicy, and irresistibly smoky., traditional spices, herbs",
    "image": "/images/food/alfaham-starters.png",
    "portions": [
      {
        "label": "Quarter",
        "price": 150
      },
      {
        "label": "Half",
        "price": 280
      },
      {
        "label": "Full",
        "price": 530
      }
    ],
    "variations": null
  },
  {
    "id": "mangalore-tikka-kabab",
    "name": "Mangalore Tikka Kabab",
    "category": "bbq",
    "categoryName": "Charcoal & BBQ Grills",
    "subCategoryId": "bbq-starters",
    "subCategoryName": "BBQ Starters",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b9140 \u2013 \u20b9560",
    "portion": "Quarter / Half / Full",
    "description": "Juicy chicken on the bone, marinated in spicy coastal Mangalorean masala - bold, smoky and full of authentic flavor.",
    "ingredients": "BBQ Starters, Special Gourmet, Mangalore Tikka Kabab, Juicy chicken on the bone, marinated in spicy coastal Mangalorean masala - bold, smoky and full of authentic flavor., traditional spices, herbs",
    "image": "/images/food/alfaham-starters.png",
    "portions": [
      {
        "label": "Quarter",
        "price": 140
      },
      {
        "label": "Half",
        "price": 280
      },
      {
        "label": "Full",
        "price": 560
      }
    ],
    "variations": null
  },
  {
    "id": "afgani-chicken-chopan-chops",
    "name": "Afgani Chicken Chopan Chops",
    "category": "bbq",
    "categoryName": "Charcoal & BBQ Grills",
    "subCategoryId": "bbq-starters",
    "subCategoryName": "BBQ Starters",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": false,
    "price": "\u20b9160 \u2013 \u20b9580",
    "portion": "Quarter / Half / Full",
    "description": "Juicy chicken Leg marinated, Afghani-style spices, then charcoal-grilled for a smoky aroma and melt-in-the-mouth texture.",
    "ingredients": "BBQ Starters, Special Gourmet, Afgani Chicken Chopan Chops, Juicy chicken Leg marinated, Afghani-style spices, then charcoal-grilled for a smoky aroma and melt-in-the-mouth texture., traditional spices, herbs",
    "image": "/images/food/alfaham-starters.png",
    "portions": [
      {
        "label": "Quarter",
        "price": 160
      },
      {
        "label": "Half",
        "price": 300
      },
      {
        "label": "Full",
        "price": 580
      }
    ],
    "variations": null
  },
  {
    "id": "afghani-tandoori-chicken",
    "name": "Afghani Tandoori Chicken",
    "category": "bbq",
    "categoryName": "Charcoal & BBQ Grills",
    "subCategoryId": "bbq-starters",
    "subCategoryName": "BBQ Starters",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": false,
    "price": "\u20b9160 \u2013 \u20b9550",
    "portion": "Quarter / Half / Full",
    "description": "Tender chicken marinated in creamy Afghani-style spices, then charcoal-grilled for a smoky aroma and melt-in-the-mouth texture.",
    "ingredients": "BBQ Starters, Special Gourmet, Afghani Tandoori Chicken, Tender chicken marinated in creamy Afghani-style spices, then charcoal-grilled for a smoky aroma and melt-in-the-mouth texture., traditional spices, herbs",
    "image": "/images/food/alfaham-starters.png",
    "portions": [
      {
        "label": "Quarter",
        "price": 160
      },
      {
        "label": "Half",
        "price": 280
      },
      {
        "label": "Full",
        "price": 550
      }
    ],
    "variations": null
  },
  {
    "id": "raan-zafrani",
    "name": "Zafrani Mutton Raan",
    "category": "bbq",
    "categoryName": "Charcoal & BBQ Grills",
    "subCategoryId": "mutton-raan",
    "subCategoryName": "Mutton Raan",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b91350",
    "portion": "1 Portion",
    "description": "Whole leg of mutton marinated in aromatic saffron spices, slow-cooked and roasted for a royal, fragrant flavor.",
    "ingredients": "Mutton Raan, Special Gourmet, Zafrani Mutton Raan, Whole leg of mutton marinated in aromatic saffron spices, slow-cooked and roasted for a royal, fragrant flavor., traditional spices, herbs",
    "image": "/images/food/mutton-raan.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "raan-ustaadi-namkeen",
    "name": "Ustaadi Namkeen Mutton Raan",
    "category": "bbq",
    "categoryName": "Charcoal & BBQ Grills",
    "subCategoryId": "mutton-raan",
    "subCategoryName": "Mutton Raan",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b91300",
    "portion": "1 Portion",
    "description": "Mutton leg marinated in traditional salty (namkeen) spices, then slow roasted for a rustic, robust taste.",
    "ingredients": "Mutton Raan, Special Gourmet, Ustaadi Namkeen Mutton Raan, Mutton leg marinated in traditional salty (namkeen) spices, then slow roasted for a rustic, robust taste., traditional spices, herbs",
    "image": "/images/food/mutton-raan.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "raan-chilly-masala-fry",
    "name": "Chilly Masala Fry Mutton Raan",
    "category": "bbq",
    "categoryName": "Charcoal & BBQ Grills",
    "subCategoryId": "mutton-raan",
    "subCategoryName": "Mutton Raan",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b91400",
    "portion": "1 Portion",
    "description": "Tender mutton leg spiced with fiery chilli masala, pan-fried for a bold, spicy kick and crispy edges.",
    "ingredients": "Mutton Raan, Special Gourmet, Chilly Masala Fry Mutton Raan, Tender mutton leg spiced with fiery chilli masala, pan-fried for a bold, spicy kick and crispy edges., traditional spices, herbs",
    "image": "/images/food/mutton-raan.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "raan-creamy",
    "name": "Creamy Mutton Raan",
    "category": "bbq",
    "categoryName": "Charcoal & BBQ Grills",
    "subCategoryId": "mutton-raan",
    "subCategoryName": "Mutton Raan",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b91400",
    "portion": "1 Portion",
    "description": "Whole mutton leg marinated in rich, creamy spices, slow-cooked for a soft, melt-in-the mouth texture.",
    "ingredients": "Mutton Raan, Special Gourmet, Creamy Mutton Raan, Whole mutton leg marinated in rich, creamy spices, slow-cooked for a soft, melt-in-the mouth texture., traditional spices, herbs",
    "image": "/images/food/mutton-raan.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "raan-bbq",
    "name": "BBQ Mutton Raan",
    "category": "bbq",
    "categoryName": "Charcoal & BBQ Grills",
    "subCategoryId": "mutton-raan",
    "subCategoryName": "Mutton Raan",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b91350",
    "portion": "1 Portion",
    "description": "Marinated in special smoky BBQ spices and charcoal-grilled for a juicy, smoky and caramelized finish.",
    "ingredients": "Mutton Raan, Special Gourmet, BBQ Mutton Raan, Marinated in special smoky BBQ spices and charcoal-grilled for a juicy, smoky and caramelized finish., traditional spices, herbs",
    "image": "/images/food/mutton-raan.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "pusthi-kabab",
    "name": "Pusthi Kabab",
    "category": "bbq",
    "categoryName": "Charcoal & BBQ Grills",
    "subCategoryId": "mutton-chops-starters",
    "subCategoryName": "Mutton Chops Starters",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b9380 \u2013 \u20b9720",
    "portion": "Half / Full",
    "description": "Tender, juicy mutton pieces marinated in aromatic spices and herbs, then grilled to perfection for a rich, smoky flavour.",
    "ingredients": "Mutton Chops Starters, Special Gourmet, Pusthi Kabab, Tender, juicy mutton pieces marinated in aromatic spices and herbs, then grilled to perfection for a rich, smoky flavour., traditional spices, herbs",
    "image": "/images/food/mutton-chops.png",
    "portions": [
      {
        "label": "Half",
        "price": 380
      },
      {
        "label": "Full",
        "price": 720
      }
    ],
    "variations": null
  },
  {
    "id": "tikka-chops",
    "name": "Tikka Chops",
    "category": "bbq",
    "categoryName": "Charcoal & BBQ Grills",
    "subCategoryId": "mutton-chops-starters",
    "subCategoryName": "Mutton Chops Starters",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": false,
    "price": "\u20b9380 \u2013 \u20b9720",
    "portion": "Half / Full",
    "description": "Tender, juicy mutton chops marinated in a rich blend of aromatic spices, yogurt, and herbs, then grilled to perfection for a smoky, flavorful and irresistibly succulent bite.",
    "ingredients": "Mutton Chops Starters, Special Gourmet, Tikka Chops, Tender, juicy mutton chops marinated in a rich blend of aromatic spices, yogurt, and herbs, then grilled to perfection for a smoky, flavorful and irresistibly succulent bite., traditional spices, herbs",
    "image": "/images/food/mutton-chops.png",
    "portions": [
      {
        "label": "Half",
        "price": 380
      },
      {
        "label": "Full",
        "price": 720
      }
    ],
    "variations": null
  },
  {
    "id": "namkeen-chops",
    "name": "Namkeen Chops",
    "category": "bbq",
    "categoryName": "Charcoal & BBQ Grills",
    "subCategoryId": "mutton-chops-starters",
    "subCategoryName": "Mutton Chops Starters",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": false,
    "price": "\u20b9370 \u2013 \u20b9700",
    "portion": "Half / Full",
    "description": "Tender mutton chops marinated with a flavorful blend of aromatic spices and herbs, then cooked to juicy perfection.",
    "ingredients": "Mutton Chops Starters, Special Gourmet, Namkeen Chops, Tender mutton chops marinated with a flavorful blend of aromatic spices and herbs, then cooked to juicy perfection., traditional spices, herbs",
    "image": "/images/food/mutton-chops.png",
    "portions": [
      {
        "label": "Half",
        "price": 370
      },
      {
        "label": "Full",
        "price": 700
      }
    ],
    "variations": null
  },
  {
    "id": "chilly-masala-chops",
    "name": "Chilly Masala Chops",
    "category": "bbq",
    "categoryName": "Charcoal & BBQ Grills",
    "subCategoryId": "mutton-chops-starters",
    "subCategoryName": "Mutton Chops Starters",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": false,
    "price": "\u20b9400 \u2013 \u20b9750",
    "portion": "Half / Full",
    "description": "Tender mutton chops cooked with a bold blend of chillies, aromatic spices, and masala, delivering a deliciously spicy, juicy, and flavour-packed bite.",
    "ingredients": "Mutton Chops Starters, Special Gourmet, Chilly Masala Chops, Tender mutton chops cooked with a bold blend of chillies, aromatic spices, and masala, delivering a deliciously spicy, juicy, and flavour-packed bite., traditional spices, herbs",
    "image": "/images/food/mutton-chops.png",
    "portions": [
      {
        "label": "Half",
        "price": 400
      },
      {
        "label": "Full",
        "price": 750
      }
    ],
    "variations": null
  },
  {
    "id": "creamy-chops",
    "name": "Creamy Chops",
    "category": "bbq",
    "categoryName": "Charcoal & BBQ Grills",
    "subCategoryId": "mutton-chops-starters",
    "subCategoryName": "Mutton Chops Starters",
    "groupTitle": "Special Gourmet",
    "diet": "nonveg",
    "special": false,
    "price": "\u20b9400 \u2013 \u20b9750",
    "portion": "Half / Full",
    "description": "Tender, juicy mutton chops marinated in a rich, creamy blend of aromatic spices and herbs, then cooked to perfection. Smooth, mildly spiced, and irresistibly flavourful with every bite.",
    "ingredients": "Mutton Chops Starters, Special Gourmet, Creamy Chops, Tender, juicy mutton chops marinated in a rich, creamy blend of aromatic spices and herbs, then cooked to perfection. Smooth, mildly spiced, and irresistibly flavourful with every bite., traditional spices, herbs",
    "image": "/images/food/mutton-chops.png",
    "portions": [
      {
        "label": "Half",
        "price": 400
      },
      {
        "label": "Full",
        "price": 750
      }
    ],
    "variations": null
  },
  {
    "id": "starter-manchurian",
    "name": "Manchurian Starter",
    "category": "appetizers",
    "categoryName": "Starters & Kababs",
    "subCategoryId": "chinese-and-indian-starters",
    "subCategoryName": "Chinese and Indian Starters",
    "groupTitle": "Indian and Chinese Delights",
    "diet": "nonveg",
    "special": false,
    "price": "From \u20b9100",
    "portion": "Veg (Gobi) \u2022 Veg (Mushroom) \u2022 Veg (Paneer)",
    "description": "Classic sweet, savory, and spicy Indo-Chinese wok preparation.",
    "ingredients": "Chinese and Indian Starters, Indian and Chinese Delights, Manchurian Starter, Classic sweet, savory, and spicy Indo-Chinese wok preparation., traditional spices, herbs",
    "image": "/images/food/chicken-starters.png",
    "portions": null,
    "variations": [
      {
        "name": "Veg (Gobi)",
        "prices": [
          {
            "label": "Portion",
            "price": 100
          }
        ]
      },
      {
        "name": "Veg (Mushroom)",
        "prices": [
          {
            "label": "Portion",
            "price": 200
          }
        ]
      },
      {
        "name": "Veg (Paneer)",
        "prices": [
          {
            "label": "Portion",
            "price": 200
          }
        ]
      },
      {
        "name": "Egg",
        "prices": [
          {
            "label": "Portion",
            "price": 140
          }
        ]
      },
      {
        "name": "Chicken (Bone)",
        "prices": [
          {
            "label": "Half",
            "price": 120
          },
          {
            "label": "Full",
            "price": 220
          }
        ]
      },
      {
        "name": "Chicken (Boneless)",
        "prices": [
          {
            "label": "Portion",
            "price": 250
          }
        ]
      },
      {
        "name": "Mutton",
        "prices": [
          {
            "label": "Portion",
            "price": 480
          }
        ]
      }
    ]
  },
  {
    "id": "starter-chilly",
    "name": "Chilly Starter",
    "category": "appetizers",
    "categoryName": "Starters & Kababs",
    "subCategoryId": "chinese-and-indian-starters",
    "subCategoryName": "Chinese and Indian Starters",
    "groupTitle": "Indian and Chinese Delights",
    "diet": "nonveg",
    "special": false,
    "price": "From \u20b9120",
    "portion": "Veg (Gobi) \u2022 Veg (Mushroom) \u2022 Veg (Paneer)",
    "description": "Tossed with green chilies, bell peppers, onions, and spicy soy garlic glaze.",
    "ingredients": "Chinese and Indian Starters, Indian and Chinese Delights, Chilly Starter, Tossed with green chilies, bell peppers, onions, and spicy soy garlic glaze., traditional spices, herbs",
    "image": "/images/food/chicken-starters.png",
    "portions": null,
    "variations": [
      {
        "name": "Veg (Gobi)",
        "prices": [
          {
            "label": "Portion",
            "price": 120
          }
        ]
      },
      {
        "name": "Veg (Mushroom)",
        "prices": [
          {
            "label": "Portion",
            "price": 200
          }
        ]
      },
      {
        "name": "Veg (Paneer)",
        "prices": [
          {
            "label": "Portion",
            "price": 200
          }
        ]
      },
      {
        "name": "Egg",
        "prices": [
          {
            "label": "Portion",
            "price": 150
          }
        ]
      },
      {
        "name": "Chicken (Bone)",
        "prices": [
          {
            "label": "Half",
            "price": 130
          },
          {
            "label": "Full",
            "price": 240
          }
        ]
      },
      {
        "name": "Chicken (Boneless)",
        "prices": [
          {
            "label": "Portion",
            "price": 260
          }
        ]
      },
      {
        "name": "Mutton",
        "prices": [
          {
            "label": "Portion",
            "price": 480
          }
        ]
      }
    ]
  },
  {
    "id": "starter-pepper",
    "name": "Pepper Starter",
    "category": "appetizers",
    "categoryName": "Starters & Kababs",
    "subCategoryId": "chinese-and-indian-starters",
    "subCategoryName": "Chinese and Indian Starters",
    "groupTitle": "Indian and Chinese Delights",
    "diet": "nonveg",
    "special": false,
    "price": "From \u20b9120",
    "portion": "Veg (Gobi) \u2022 Veg (Mushroom) \u2022 Veg (Paneer)",
    "description": "Crushed black peppercorns, curry leaves, and South Indian spices saut\u00e9ed dry.",
    "ingredients": "Chinese and Indian Starters, Indian and Chinese Delights, Pepper Starter, Crushed black peppercorns, curry leaves, and South Indian spices saut\u00e9ed dry., traditional spices, herbs",
    "image": "/images/food/chicken-starters.png",
    "portions": null,
    "variations": [
      {
        "name": "Veg (Gobi)",
        "prices": [
          {
            "label": "Portion",
            "price": 120
          }
        ]
      },
      {
        "name": "Veg (Mushroom)",
        "prices": [
          {
            "label": "Portion",
            "price": 220
          }
        ]
      },
      {
        "name": "Veg (Paneer)",
        "prices": [
          {
            "label": "Portion",
            "price": 220
          }
        ]
      },
      {
        "name": "Egg",
        "prices": [
          {
            "label": "Portion",
            "price": 150
          }
        ]
      },
      {
        "name": "Chicken (Bone)",
        "prices": [
          {
            "label": "Half",
            "price": 140
          },
          {
            "label": "Full",
            "price": 260
          }
        ]
      },
      {
        "name": "Chicken (Boneless)",
        "prices": [
          {
            "label": "Portion",
            "price": 280
          }
        ]
      },
      {
        "name": "Mutton (Indian Dry)",
        "prices": [
          {
            "label": "Portion",
            "price": 500
          }
        ]
      }
    ]
  },
  {
    "id": "starter-lemon",
    "name": "Lemon Starter",
    "category": "appetizers",
    "categoryName": "Starters & Kababs",
    "subCategoryId": "chinese-and-indian-starters",
    "subCategoryName": "Chinese and Indian Starters",
    "groupTitle": "Indian and Chinese Delights",
    "diet": "nonveg",
    "special": false,
    "price": "From \u20b9120",
    "portion": "Veg (Gobi) \u2022 Veg (Mushroom) \u2022 Veg (Paneer)",
    "description": "Zesty citrus marinade with herbs and mild aromatic seasonings.",
    "ingredients": "Chinese and Indian Starters, Indian and Chinese Delights, Lemon Starter, Zesty citrus marinade with herbs and mild aromatic seasonings., traditional spices, herbs",
    "image": "/images/food/chicken-starters.png",
    "portions": null,
    "variations": [
      {
        "name": "Veg (Gobi)",
        "prices": [
          {
            "label": "Portion",
            "price": 120
          }
        ]
      },
      {
        "name": "Veg (Mushroom)",
        "prices": [
          {
            "label": "Portion",
            "price": 220
          }
        ]
      },
      {
        "name": "Veg (Paneer)",
        "prices": [
          {
            "label": "Portion",
            "price": 220
          }
        ]
      },
      {
        "name": "Egg",
        "prices": [
          {
            "label": "Portion",
            "price": 150
          }
        ]
      },
      {
        "name": "Chicken (Bone)",
        "prices": [
          {
            "label": "Half",
            "price": 130
          },
          {
            "label": "Full",
            "price": 250
          }
        ]
      },
      {
        "name": "Chicken (Boneless)",
        "prices": [
          {
            "label": "Portion",
            "price": 280
          }
        ]
      }
    ]
  },
  {
    "id": "starter-garlic",
    "name": "Garlic Starter",
    "category": "appetizers",
    "categoryName": "Starters & Kababs",
    "subCategoryId": "chinese-and-indian-starters",
    "subCategoryName": "Chinese and Indian Starters",
    "groupTitle": "Indian and Chinese Delights",
    "diet": "nonveg",
    "special": false,
    "price": "From \u20b9130",
    "portion": "Veg (Gobi) \u2022 Veg (Mushroom) \u2022 Veg (Paneer)",
    "description": "Rich golden roasted garlic sauce tossed with fresh herbs in the wok.",
    "ingredients": "Chinese and Indian Starters, Indian and Chinese Delights, Garlic Starter, Rich golden roasted garlic sauce tossed with fresh herbs in the wok., traditional spices, herbs",
    "image": "/images/food/chicken-starters.png",
    "portions": null,
    "variations": [
      {
        "name": "Veg (Gobi)",
        "prices": [
          {
            "label": "Portion",
            "price": 130
          }
        ]
      },
      {
        "name": "Veg (Mushroom)",
        "prices": [
          {
            "label": "Portion",
            "price": 240
          }
        ]
      },
      {
        "name": "Veg (Paneer)",
        "prices": [
          {
            "label": "Portion",
            "price": 240
          }
        ]
      },
      {
        "name": "Egg",
        "prices": [
          {
            "label": "Portion",
            "price": 160
          }
        ]
      },
      {
        "name": "Chicken (Bone)",
        "prices": [
          {
            "label": "Half",
            "price": 150
          },
          {
            "label": "Full",
            "price": 280
          }
        ]
      },
      {
        "name": "Chicken (Boneless)",
        "prices": [
          {
            "label": "Portion",
            "price": 280
          }
        ]
      }
    ]
  },
  {
    "id": "starter-65",
    "name": "65 Starter",
    "category": "appetizers",
    "categoryName": "Starters & Kababs",
    "subCategoryId": "chinese-and-indian-starters",
    "subCategoryName": "Chinese and Indian Starters",
    "groupTitle": "Indian and Chinese Delights",
    "diet": "nonveg",
    "special": false,
    "price": "From \u20b9130",
    "portion": "Veg (Gobi) \u2022 Veg (Mushroom) \u2022 Veg (Paneer)",
    "description": "Spicy, crispy deep-fried delicacy tossed with curry leaves and fiery red chili seasonings.",
    "ingredients": "Chinese and Indian Starters, Indian and Chinese Delights, 65 Starter, Spicy, crispy deep-fried delicacy tossed with curry leaves and fiery red chili seasonings., traditional spices, herbs",
    "image": "/images/food/chicken-starters.png",
    "portions": null,
    "variations": [
      {
        "name": "Veg (Gobi)",
        "prices": [
          {
            "label": "Portion",
            "price": 130
          }
        ]
      },
      {
        "name": "Veg (Mushroom)",
        "prices": [
          {
            "label": "Portion",
            "price": 240
          }
        ]
      },
      {
        "name": "Veg (Paneer)",
        "prices": [
          {
            "label": "Portion",
            "price": 240
          }
        ]
      },
      {
        "name": "Egg",
        "prices": [
          {
            "label": "Portion",
            "price": 160
          }
        ]
      },
      {
        "name": "Chicken (Boneless)",
        "prices": [
          {
            "label": "Portion",
            "price": 280
          }
        ]
      },
      {
        "name": "Mutton 65 (Boneless)",
        "prices": [
          {
            "label": "Portion",
            "price": 550
          }
        ]
      }
    ]
  },
  {
    "id": "starter-sukka",
    "name": "Sukka Delicacy",
    "category": "appetizers",
    "categoryName": "Starters & Kababs",
    "subCategoryId": "chinese-and-indian-starters",
    "subCategoryName": "Chinese and Indian Starters",
    "groupTitle": "Indian and Chinese Delights",
    "diet": "nonveg",
    "special": false,
    "price": "From \u20b9200",
    "portion": "Chicken (Bone) \u2022 Mutton",
    "description": "Authentic Mangalorean roasted coconut and dry spice specialty.",
    "ingredients": "Chinese and Indian Starters, Indian and Chinese Delights, Sukka Delicacy, Authentic Mangalorean roasted coconut and dry spice specialty., traditional spices, herbs",
    "image": "/images/food/chicken-starters.png",
    "portions": null,
    "variations": [
      {
        "name": "Chicken (Bone)",
        "prices": [
          {
            "label": "Portion",
            "price": 200
          }
        ]
      },
      {
        "name": "Mutton",
        "prices": [
          {
            "label": "Portion",
            "price": 450
          }
        ]
      }
    ]
  },
  {
    "id": "ghee-roast-chicken",
    "name": "Ghee Roast Chicken (Boneless)",
    "category": "appetizers",
    "categoryName": "Starters & Kababs",
    "subCategoryId": "chinese-and-indian-starters",
    "subCategoryName": "Chinese and Indian Starters",
    "groupTitle": "Indian and Chinese Delights",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b9300",
    "portion": "1 Portion",
    "description": "Classic Kundapur/Mangalorean clarified butter roasted chicken in fiery red paste.",
    "ingredients": "Chinese and Indian Starters, Indian and Chinese Delights, Ghee Roast Chicken (Boneless), Classic Kundapur/Mangalorean clarified butter roasted chicken in fiery red paste., traditional spices, herbs",
    "image": "/images/food/chicken-starters.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "indian-chilly-chicken-dry",
    "name": "Indian Chilly Chicken Dry (Boneless)",
    "category": "appetizers",
    "categoryName": "Starters & Kababs",
    "subCategoryId": "chinese-and-indian-starters",
    "subCategoryName": "Chinese and Indian Starters",
    "groupTitle": "Indian and Chinese Delights",
    "diet": "nonveg",
    "special": false,
    "price": "\u20b9300",
    "portion": "1 Portion",
    "description": "Desi style dry chicken preparation tossed with fresh slit chillies.",
    "ingredients": "Chinese and Indian Starters, Indian and Chinese Delights, Indian Chilly Chicken Dry (Boneless), Desi style dry chicken preparation tossed with fresh slit chillies., traditional spices, herbs",
    "image": "/images/food/chicken-starters.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "indian-chicken-pepper-dry",
    "name": "Indian Chicken Pepper Dry",
    "category": "appetizers",
    "categoryName": "Starters & Kababs",
    "subCategoryId": "chinese-and-indian-starters",
    "subCategoryName": "Chinese and Indian Starters",
    "groupTitle": "Indian and Chinese Delights",
    "diet": "nonveg",
    "special": false,
    "price": "From \u20b9250",
    "portion": "Chicken (Bone) \u2022 Chicken (Boneless)",
    "description": "Dry chicken fry laced with freshly crushed Tellicherry peppercorns.",
    "ingredients": "Chinese and Indian Starters, Indian and Chinese Delights, Indian Chicken Pepper Dry, Dry chicken fry laced with freshly crushed Tellicherry peppercorns., traditional spices, herbs",
    "image": "/images/food/chicken-starters.png",
    "portions": null,
    "variations": [
      {
        "name": "Chicken (Bone)",
        "prices": [
          {
            "label": "Portion",
            "price": 250
          }
        ]
      },
      {
        "name": "Chicken (Boneless)",
        "prices": [
          {
            "label": "Portion",
            "price": 340
          }
        ]
      }
    ]
  },
  {
    "id": "chinese-crispy-chicken",
    "name": "Chinese Crispy Chicken",
    "category": "appetizers",
    "categoryName": "Starters & Kababs",
    "subCategoryId": "chinese-and-indian-starters",
    "subCategoryName": "Chinese and Indian Starters",
    "groupTitle": "Indian and Chinese Delights",
    "diet": "nonveg",
    "special": false,
    "price": "\u20b9350",
    "portion": "1 Portion",
    "description": "Shredded crispy chicken strips tossed in sweet & spicy Indo-Chinese sauce.",
    "ingredients": "Chinese and Indian Starters, Indian and Chinese Delights, Chinese Crispy Chicken, Shredded crispy chicken strips tossed in sweet & spicy Indo-Chinese sauce., traditional spices, herbs",
    "image": "/images/food/chicken-starters.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "dragon-chicken",
    "name": "Dragon Chicken",
    "category": "appetizers",
    "categoryName": "Starters & Kababs",
    "subCategoryId": "chinese-and-indian-starters",
    "subCategoryName": "Chinese and Indian Starters",
    "groupTitle": "Indian and Chinese Delights",
    "diet": "nonveg",
    "special": false,
    "price": "\u20b9350",
    "portion": "1 Portion",
    "description": "Crispy chicken strips tossed with cashew nuts, dried red chillies and tangy glaze.",
    "ingredients": "Chinese and Indian Starters, Indian and Chinese Delights, Dragon Chicken, Crispy chicken strips tossed with cashew nuts, dried red chillies and tangy glaze., traditional spices, herbs",
    "image": "/images/food/chicken-starters.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "drums-of-heaven",
    "name": "Drums of Heaven (Leg)",
    "category": "appetizers",
    "categoryName": "Starters & Kababs",
    "subCategoryId": "chinese-and-indian-starters",
    "subCategoryName": "Chinese and Indian Starters",
    "groupTitle": "Indian and Chinese Delights",
    "diet": "nonveg",
    "special": false,
    "price": "\u20b9160 \u2013 \u20b9300",
    "portion": "Bone Half / Bone Full",
    "description": "Chicken lollipops tossed in a sweet-spicy savory sauce with spring onions.",
    "ingredients": "Chinese and Indian Starters, Indian and Chinese Delights, Drums of Heaven (Leg), Chicken lollipops tossed in a sweet-spicy savory sauce with spring onions., traditional spices, herbs",
    "image": "/images/food/chicken-starters.png",
    "portions": [
      {
        "label": "Bone Half",
        "price": 160
      },
      {
        "label": "Bone Full",
        "price": 300
      }
    ],
    "variations": null
  },
  {
    "id": "egg-omlet",
    "name": "Omlet",
    "category": "appetizers",
    "categoryName": "Starters & Kababs",
    "subCategoryId": "chinese-and-indian-starters",
    "subCategoryName": "Chinese and Indian Starters",
    "groupTitle": "Indian and Chinese Delights",
    "diet": "nonveg",
    "special": false,
    "price": "\u20b980",
    "portion": "1 Portion",
    "description": "Fluffy beaten eggs cooked with onions, green chillies, and fresh herbs.",
    "ingredients": "Chinese and Indian Starters, Indian and Chinese Delights, Omlet, Fluffy beaten eggs cooked with onions, green chillies, and fresh herbs., traditional spices, herbs",
    "image": "/images/food/chicken-starters.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "boiled-egg",
    "name": "Boiled Egg",
    "category": "appetizers",
    "categoryName": "Starters & Kababs",
    "subCategoryId": "chinese-and-indian-starters",
    "subCategoryName": "Chinese and Indian Starters",
    "groupTitle": "Indian and Chinese Delights",
    "diet": "nonveg",
    "special": false,
    "price": "\u20b940",
    "portion": "1 Portion",
    "description": "Freshly boiled eggs served with salt and pepper.",
    "ingredients": "Chinese and Indian Starters, Indian and Chinese Delights, Boiled Egg, Freshly boiled eggs served with salt and pepper., traditional spices, herbs",
    "image": "/images/food/chicken-starters.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "bullseye",
    "name": "Bullseye",
    "category": "appetizers",
    "categoryName": "Starters & Kababs",
    "subCategoryId": "chinese-and-indian-starters",
    "subCategoryName": "Chinese and Indian Starters",
    "groupTitle": "Indian and Chinese Delights",
    "diet": "nonveg",
    "special": false,
    "price": "\u20b960",
    "portion": "1 Portion",
    "description": "Sunny side up fried egg with seasoned runny yolk.",
    "ingredients": "Chinese and Indian Starters, Indian and Chinese Delights, Bullseye, Sunny side up fried egg with seasoned runny yolk., traditional spices, herbs",
    "image": "/images/food/chicken-starters.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "egg-burji",
    "name": "Egg Burji",
    "category": "appetizers",
    "categoryName": "Starters & Kababs",
    "subCategoryId": "chinese-and-indian-starters",
    "subCategoryName": "Chinese and Indian Starters",
    "groupTitle": "Indian and Chinese Delights",
    "diet": "nonveg",
    "special": false,
    "price": "\u20b9100",
    "portion": "1 Portion",
    "description": "Spiced scrambled eggs tossed with saut\u00e9ed onions, tomatoes and green chillies.",
    "ingredients": "Chinese and Indian Starters, Indian and Chinese Delights, Egg Burji, Spiced scrambled eggs tossed with saut\u00e9ed onions, tomatoes and green chillies., traditional spices, herbs",
    "image": "/images/food/chicken-starters.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "gravy-masala",
    "name": "Masala Gravy",
    "category": "gravies",
    "categoryName": "Indian Gravies & Curries",
    "subCategoryId": "indian-gravy",
    "subCategoryName": "Indian Gravy",
    "groupTitle": "Indian and Chinese Delights",
    "diet": "nonveg",
    "special": false,
    "price": "From \u20b9120",
    "portion": "Veg \u2022 Egg \u2022 Chicken",
    "description": "Traditional onion-tomato gravy slow-cooked with whole spices.",
    "ingredients": "Indian Gravy, Indian and Chinese Delights, Masala Gravy, Traditional onion-tomato gravy slow-cooked with whole spices., traditional spices, herbs",
    "image": "/images/food/chicken-gravy.png",
    "portions": null,
    "variations": [
      {
        "name": "Veg",
        "prices": [
          {
            "label": "Vegetable",
            "price": 120
          },
          {
            "label": "Mushroom",
            "price": 200
          },
          {
            "label": "Paneer",
            "price": 200
          }
        ]
      },
      {
        "name": "Egg",
        "prices": [
          {
            "label": "Portion",
            "price": 100
          }
        ]
      },
      {
        "name": "Chicken",
        "prices": [
          {
            "label": "Half",
            "price": 140
          },
          {
            "label": "Full",
            "price": 260
          }
        ]
      },
      {
        "name": "Mutton",
        "prices": [
          {
            "label": "Half",
            "price": 250
          },
          {
            "label": "Full",
            "price": 450
          }
        ]
      }
    ]
  },
  {
    "id": "gravy-kurma",
    "name": "Kurma Gravy",
    "category": "gravies",
    "categoryName": "Indian Gravies & Curries",
    "subCategoryId": "indian-gravy",
    "subCategoryName": "Indian Gravy",
    "groupTitle": "Indian and Chinese Delights",
    "diet": "nonveg",
    "special": false,
    "price": "From \u20b9130",
    "portion": "Veg \u2022 Egg \u2022 Chicken",
    "description": "Nutty, creamy gravy enriched with coconut, poppy seeds, and cashew paste.",
    "ingredients": "Indian Gravy, Indian and Chinese Delights, Kurma Gravy, Nutty, creamy gravy enriched with coconut, poppy seeds, and cashew paste., traditional spices, herbs",
    "image": "/images/food/chicken-gravy.png",
    "portions": null,
    "variations": [
      {
        "name": "Veg",
        "prices": [
          {
            "label": "Vegetable",
            "price": 130
          },
          {
            "label": "Mushroom",
            "price": 220
          },
          {
            "label": "Paneer",
            "price": 220
          }
        ]
      },
      {
        "name": "Egg",
        "prices": [
          {
            "label": "Portion",
            "price": 130
          }
        ]
      },
      {
        "name": "Chicken",
        "prices": [
          {
            "label": "Half",
            "price": 150
          },
          {
            "label": "Full",
            "price": 270
          }
        ]
      },
      {
        "name": "Mutton",
        "prices": [
          {
            "label": "Half",
            "price": 250
          },
          {
            "label": "Full",
            "price": 450
          }
        ]
      }
    ]
  },
  {
    "id": "gravy-butter-masala",
    "name": "Butter Masala Gravy",
    "category": "gravies",
    "categoryName": "Indian Gravies & Curries",
    "subCategoryId": "indian-gravy",
    "subCategoryName": "Indian Gravy",
    "groupTitle": "Indian and Chinese Delights",
    "diet": "nonveg",
    "special": true,
    "price": "From \u20b9130",
    "portion": "Veg \u2022 Egg \u2022 Chicken (Boneless)",
    "description": "Silky, sweet-tangy tomato and butter gravy finished with fresh cream and fenugreek.",
    "ingredients": "Indian Gravy, Indian and Chinese Delights, Butter Masala Gravy, Silky, sweet-tangy tomato and butter gravy finished with fresh cream and fenugreek., traditional spices, herbs",
    "image": "/images/food/chicken-gravy.png",
    "portions": null,
    "variations": [
      {
        "name": "Veg",
        "prices": [
          {
            "label": "Vegetable",
            "price": 130
          },
          {
            "label": "Mushroom",
            "price": 220
          },
          {
            "label": "Paneer",
            "price": 220
          }
        ]
      },
      {
        "name": "Egg",
        "prices": [
          {
            "label": "Portion",
            "price": 150
          }
        ]
      },
      {
        "name": "Chicken (Boneless)",
        "prices": [
          {
            "label": "Half",
            "price": 180
          },
          {
            "label": "Full",
            "price": 320
          }
        ]
      }
    ]
  },
  {
    "id": "gravy-pepper-masala",
    "name": "Pepper Masala Gravy",
    "category": "gravies",
    "categoryName": "Indian Gravies & Curries",
    "subCategoryId": "indian-gravy",
    "subCategoryName": "Indian Gravy",
    "groupTitle": "Indian and Chinese Delights",
    "diet": "nonveg",
    "special": false,
    "price": "From \u20b9130",
    "portion": "Veg \u2022 Egg \u2022 Chicken",
    "description": "Spicy, dark gravy infused with freshly cracked Tellicherry black pepper.",
    "ingredients": "Indian Gravy, Indian and Chinese Delights, Pepper Masala Gravy, Spicy, dark gravy infused with freshly cracked Tellicherry black pepper., traditional spices, herbs",
    "image": "/images/food/chicken-gravy.png",
    "portions": null,
    "variations": [
      {
        "name": "Veg",
        "prices": [
          {
            "label": "Vegetable",
            "price": 130
          },
          {
            "label": "Mushroom",
            "price": 220
          },
          {
            "label": "Paneer",
            "price": 220
          }
        ]
      },
      {
        "name": "Egg",
        "prices": [
          {
            "label": "Portion",
            "price": 140
          }
        ]
      },
      {
        "name": "Chicken",
        "prices": [
          {
            "label": "Half",
            "price": 160
          },
          {
            "label": "Full",
            "price": 300
          }
        ]
      },
      {
        "name": "Mutton",
        "prices": [
          {
            "label": "Half",
            "price": 250
          },
          {
            "label": "Full",
            "price": 450
          }
        ]
      }
    ]
  },
  {
    "id": "gravy-kolapuri",
    "name": "Kolapuri Gravy",
    "category": "gravies",
    "categoryName": "Indian Gravies & Curries",
    "subCategoryId": "indian-gravy",
    "subCategoryName": "Indian Gravy",
    "groupTitle": "Indian and Chinese Delights",
    "diet": "nonveg",
    "special": false,
    "price": "From \u20b9130",
    "portion": "Veg \u2022 Egg \u2022 Chicken",
    "description": "Fiery red gravy spiced with roasted Kolhapuri masalas and dry coconut.",
    "ingredients": "Indian Gravy, Indian and Chinese Delights, Kolapuri Gravy, Fiery red gravy spiced with roasted Kolhapuri masalas and dry coconut., traditional spices, herbs",
    "image": "/images/food/chicken-gravy.png",
    "portions": null,
    "variations": [
      {
        "name": "Veg",
        "prices": [
          {
            "label": "Vegetable",
            "price": 130
          },
          {
            "label": "Mushroom",
            "price": 220
          },
          {
            "label": "Paneer",
            "price": 220
          }
        ]
      },
      {
        "name": "Egg",
        "prices": [
          {
            "label": "Portion",
            "price": 140
          }
        ]
      },
      {
        "name": "Chicken",
        "prices": [
          {
            "label": "Half",
            "price": 160
          },
          {
            "label": "Full",
            "price": 300
          }
        ]
      },
      {
        "name": "Mutton",
        "prices": [
          {
            "label": "Half",
            "price": 250
          },
          {
            "label": "Full",
            "price": 450
          }
        ]
      }
    ]
  },
  {
    "id": "gravy-hyderabad-masala",
    "name": "Hyderbad Masala Gravy",
    "category": "gravies",
    "categoryName": "Indian Gravies & Curries",
    "subCategoryId": "indian-gravy",
    "subCategoryName": "Indian Gravy",
    "groupTitle": "Indian and Chinese Delights",
    "diet": "nonveg",
    "special": false,
    "price": "From \u20b9130",
    "portion": "Veg \u2022 Egg \u2022 Chicken",
    "description": "Rich Nizami gravy prepared with browned onions, yogurt, and aromatic spices.",
    "ingredients": "Indian Gravy, Indian and Chinese Delights, Hyderbad Masala Gravy, Rich Nizami gravy prepared with browned onions, yogurt, and aromatic spices., traditional spices, herbs",
    "image": "/images/food/chicken-gravy.png",
    "portions": null,
    "variations": [
      {
        "name": "Veg",
        "prices": [
          {
            "label": "Vegetable",
            "price": 130
          },
          {
            "label": "Mushroom",
            "price": 220
          },
          {
            "label": "Paneer",
            "price": 220
          }
        ]
      },
      {
        "name": "Egg",
        "prices": [
          {
            "label": "Portion",
            "price": 140
          }
        ]
      },
      {
        "name": "Chicken",
        "prices": [
          {
            "label": "Half",
            "price": 150
          },
          {
            "label": "Full",
            "price": 280
          }
        ]
      },
      {
        "name": "Mutton",
        "prices": [
          {
            "label": "Half",
            "price": 250
          },
          {
            "label": "Full",
            "price": 450
          }
        ]
      }
    ]
  },
  {
    "id": "gravy-kadai-masala",
    "name": "Kadai Masala Gravy",
    "category": "gravies",
    "categoryName": "Indian Gravies & Curries",
    "subCategoryId": "indian-gravy",
    "subCategoryName": "Indian Gravy",
    "groupTitle": "Indian and Chinese Delights",
    "diet": "nonveg",
    "special": false,
    "price": "From \u20b9130",
    "portion": "Veg \u2022 Egg \u2022 Chicken",
    "description": "Thick gravy infused with roasted coriander seeds, capsicum, and crushed spices.",
    "ingredients": "Indian Gravy, Indian and Chinese Delights, Kadai Masala Gravy, Thick gravy infused with roasted coriander seeds, capsicum, and crushed spices., traditional spices, herbs",
    "image": "/images/food/chicken-gravy.png",
    "portions": null,
    "variations": [
      {
        "name": "Veg",
        "prices": [
          {
            "label": "Vegetable",
            "price": 130
          },
          {
            "label": "Mushroom",
            "price": 220
          },
          {
            "label": "Paneer",
            "price": 220
          }
        ]
      },
      {
        "name": "Egg",
        "prices": [
          {
            "label": "Portion",
            "price": 140
          }
        ]
      },
      {
        "name": "Chicken",
        "prices": [
          {
            "label": "Half",
            "price": 150
          },
          {
            "label": "Full",
            "price": 280
          }
        ]
      },
      {
        "name": "Mutton",
        "prices": [
          {
            "label": "Half",
            "price": 250
          },
          {
            "label": "Full",
            "price": 450
          }
        ]
      }
    ]
  },
  {
    "id": "gravy-stew",
    "name": "Stew",
    "category": "gravies",
    "categoryName": "Indian Gravies & Curries",
    "subCategoryId": "indian-gravy",
    "subCategoryName": "Indian Gravy",
    "groupTitle": "Indian and Chinese Delights",
    "diet": "nonveg",
    "special": false,
    "price": "From \u20b9150",
    "portion": "Veg \u2022 Egg \u2022 Chicken (Boneless)",
    "description": "Fragrant and comforting mild coconut milk broth with aromatic spices.",
    "ingredients": "Indian Gravy, Indian and Chinese Delights, Stew, Fragrant and comforting mild coconut milk broth with aromatic spices., traditional spices, herbs",
    "image": "/images/food/chicken-gravy.png",
    "portions": null,
    "variations": [
      {
        "name": "Veg",
        "prices": [
          {
            "label": "Vegetable",
            "price": 150
          },
          {
            "label": "Mushroom",
            "price": 220
          },
          {
            "label": "Paneer",
            "price": 220
          }
        ]
      },
      {
        "name": "Egg",
        "prices": [
          {
            "label": "Portion",
            "price": 150
          }
        ]
      },
      {
        "name": "Chicken (Boneless)",
        "prices": [
          {
            "label": "Half",
            "price": 180
          },
          {
            "label": "Full",
            "price": 320
          }
        ]
      }
    ]
  },
  {
    "id": "gravy-mughlai",
    "name": "Mughlai Gravy",
    "category": "gravies",
    "categoryName": "Indian Gravies & Curries",
    "subCategoryId": "indian-gravy",
    "subCategoryName": "Indian Gravy",
    "groupTitle": "Indian and Chinese Delights",
    "diet": "nonveg",
    "special": true,
    "price": "From \u20b9180",
    "portion": "Chicken (Boneless) \u2022 Mutton",
    "description": "Royal Mughlai curry simmered in egg yolk and almond-cashew paste.",
    "ingredients": "Indian Gravy, Indian and Chinese Delights, Mughlai Gravy, Royal Mughlai curry simmered in egg yolk and almond-cashew paste., traditional spices, herbs",
    "image": "/images/food/chicken-gravy.png",
    "portions": null,
    "variations": [
      {
        "name": "Chicken (Boneless)",
        "prices": [
          {
            "label": "Half",
            "price": 180
          },
          {
            "label": "Full",
            "price": 320
          }
        ]
      },
      {
        "name": "Mutton",
        "prices": [
          {
            "label": "Half",
            "price": 260
          },
          {
            "label": "Full",
            "price": 480
          }
        ]
      }
    ]
  },
  {
    "id": "dal-tadka",
    "name": "Dal Tadka",
    "category": "gravies",
    "categoryName": "Indian Gravies & Curries",
    "subCategoryId": "indian-gravy",
    "subCategoryName": "Indian Gravy",
    "groupTitle": "Indian and Chinese Delights",
    "diet": "veg",
    "special": false,
    "price": "\u20b9120",
    "portion": "1 Portion",
    "description": "Yellow lentils tempered with ghee, cumin, garlic, and red chilies.",
    "ingredients": "Indian Gravy, Indian and Chinese Delights, Dal Tadka, Yellow lentils tempered with ghee, cumin, garlic, and red chilies., traditional spices, herbs",
    "image": "/images/food/chicken-gravy.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "dal-fry",
    "name": "Dal Fry",
    "category": "gravies",
    "categoryName": "Indian Gravies & Curries",
    "subCategoryId": "indian-gravy",
    "subCategoryName": "Indian Gravy",
    "groupTitle": "Indian and Chinese Delights",
    "diet": "veg",
    "special": false,
    "price": "\u20b9100",
    "portion": "1 Portion",
    "description": "Delicious lentils saut\u00e9ed with onions, tomatoes, and aromatic seasonings.",
    "ingredients": "Indian Gravy, Indian and Chinese Delights, Dal Fry, Delicious lentils saut\u00e9ed with onions, tomatoes, and aromatic seasonings., traditional spices, herbs",
    "image": "/images/food/chicken-gravy.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "fried-rice-noodles-classic",
    "name": "Fried Rice / Noodles",
    "category": "rice-noodles",
    "categoryName": "Fried Rice & Noodles",
    "subCategoryId": "fried-rice-and-noodles",
    "subCategoryName": "Fried Rice and Noodles",
    "groupTitle": "Indian and Chinese Delights",
    "diet": "nonveg",
    "special": false,
    "price": "From \u20b9110",
    "portion": "Veg \u2022 Egg \u2022 Chicken",
    "description": "Classic wok-tossed long grain rice or noodles with crisp veggies and soy seasoning.",
    "ingredients": "Fried Rice and Noodles, Indian and Chinese Delights, Fried Rice / Noodles, Classic wok-tossed long grain rice or noodles with crisp veggies and soy seasoning., traditional spices, herbs",
    "image": "/images/food/veg-noodles.png",
    "portions": null,
    "variations": [
      {
        "name": "Veg",
        "prices": [
          {
            "label": "Vegetable",
            "price": 110
          },
          {
            "label": "Mushroom",
            "price": 150
          },
          {
            "label": "Paneer",
            "price": 150
          }
        ]
      },
      {
        "name": "Egg",
        "prices": [
          {
            "label": "Portion",
            "price": 130
          }
        ]
      },
      {
        "name": "Chicken",
        "prices": [
          {
            "label": "Portion",
            "price": 140
          }
        ]
      },
      {
        "name": "Mutton",
        "prices": [
          {
            "label": "Portion",
            "price": 200
          }
        ]
      }
    ]
  },
  {
    "id": "schezwan-fried-rice-noodles",
    "name": "Schezwan Fried Rice / Noodles",
    "category": "rice-noodles",
    "categoryName": "Fried Rice & Noodles",
    "subCategoryId": "fried-rice-and-noodles",
    "subCategoryName": "Fried Rice and Noodles",
    "groupTitle": "Indian and Chinese Delights",
    "diet": "nonveg",
    "special": false,
    "price": "From \u20b9130",
    "portion": "Veg \u2022 Egg \u2022 Chicken",
    "description": "Spicy wok preparation tossed in pungent, authentic Schezwan sauce.",
    "ingredients": "Fried Rice and Noodles, Indian and Chinese Delights, Schezwan Fried Rice / Noodles, Spicy wok preparation tossed in pungent, authentic Schezwan sauce., traditional spices, herbs",
    "image": "/images/food/veg-noodles.png",
    "portions": null,
    "variations": [
      {
        "name": "Veg",
        "prices": [
          {
            "label": "Vegetable",
            "price": 130
          },
          {
            "label": "Mushroom",
            "price": 170
          },
          {
            "label": "Paneer",
            "price": 170
          }
        ]
      },
      {
        "name": "Egg",
        "prices": [
          {
            "label": "Portion",
            "price": 150
          }
        ]
      },
      {
        "name": "Chicken",
        "prices": [
          {
            "label": "Portion",
            "price": 160
          }
        ]
      },
      {
        "name": "Mutton",
        "prices": [
          {
            "label": "Portion",
            "price": 240
          }
        ]
      }
    ]
  },
  {
    "id": "triple-fried-rice-noodles",
    "name": "Triple Fried Rice / Noodles (Chicken)",
    "category": "rice-noodles",
    "categoryName": "Fried Rice & Noodles",
    "subCategoryId": "fried-rice-and-noodles",
    "subCategoryName": "Fried Rice and Noodles",
    "groupTitle": "Indian and Chinese Delights",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b9220",
    "portion": "1 Portion",
    "description": "Loaded combination of fried rice, noodles, and crispy chicken chunks tossed in rich gravy.",
    "ingredients": "Fried Rice and Noodles, Indian and Chinese Delights, Triple Fried Rice / Noodles (Chicken), Loaded combination of fried rice, noodles, and crispy chicken chunks tossed in rich gravy., traditional spices, herbs",
    "image": "/images/food/veg-noodles.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "manchurian-fried-rice-noodles",
    "name": "Manchurian Fried Rice / Noodles",
    "category": "rice-noodles",
    "categoryName": "Fried Rice & Noodles",
    "subCategoryId": "fried-rice-and-noodles",
    "subCategoryName": "Fried Rice and Noodles",
    "groupTitle": "Indian and Chinese Delights",
    "diet": "nonveg",
    "special": false,
    "price": "From \u20b9160",
    "portion": "Veg \u2022 Egg \u2022 Chicken",
    "description": "Wok-tossed rice or noodles accompanied with savory Manchurian balls and sauce.",
    "ingredients": "Fried Rice and Noodles, Indian and Chinese Delights, Manchurian Fried Rice / Noodles, Wok-tossed rice or noodles accompanied with savory Manchurian balls and sauce., traditional spices, herbs",
    "image": "/images/food/veg-noodles.png",
    "portions": null,
    "variations": [
      {
        "name": "Veg",
        "prices": [
          {
            "label": "Vegetable",
            "price": 160
          },
          {
            "label": "Mushroom",
            "price": 220
          },
          {
            "label": "Paneer",
            "price": 220
          }
        ]
      },
      {
        "name": "Egg",
        "prices": [
          {
            "label": "Portion",
            "price": 180
          }
        ]
      },
      {
        "name": "Chicken",
        "prices": [
          {
            "label": "Portion",
            "price": 220
          }
        ]
      },
      {
        "name": "Mutton",
        "prices": [
          {
            "label": "Portion",
            "price": 380
          }
        ]
      }
    ]
  },
  {
    "id": "lemon-fried-rice-noodles",
    "name": "Lemon Fried Rice / Noodles",
    "category": "rice-noodles",
    "categoryName": "Fried Rice & Noodles",
    "subCategoryId": "fried-rice-and-noodles",
    "subCategoryName": "Fried Rice and Noodles",
    "groupTitle": "Indian and Chinese Delights",
    "diet": "nonveg",
    "special": false,
    "price": "From \u20b9230",
    "portion": "Veg \u2022 Egg \u2022 Chicken",
    "description": "Citrus-infused fragrant wok preparation with fresh cilantro and seasoning.",
    "ingredients": "Fried Rice and Noodles, Indian and Chinese Delights, Lemon Fried Rice / Noodles, Citrus-infused fragrant wok preparation with fresh cilantro and seasoning., traditional spices, herbs",
    "image": "/images/food/veg-noodles.png",
    "portions": null,
    "variations": [
      {
        "name": "Veg",
        "prices": [
          {
            "label": "Mushroom",
            "price": 230
          },
          {
            "label": "Paneer",
            "price": 220
          }
        ]
      },
      {
        "name": "Egg",
        "prices": [
          {
            "label": "Portion",
            "price": 200
          }
        ]
      },
      {
        "name": "Chicken",
        "prices": [
          {
            "label": "Portion",
            "price": 250
          }
        ]
      },
      {
        "name": "Mutton",
        "prices": [
          {
            "label": "Portion",
            "price": 400
          }
        ]
      }
    ]
  },
  {
    "id": "plain-kulcha",
    "name": "Plain Kulcha",
    "category": "breads",
    "categoryName": "Tandoor Breads & Naan",
    "subCategoryId": "indian-breads",
    "subCategoryName": "Indian Breads",
    "groupTitle": "Indian and Chinese Delights",
    "diet": "veg",
    "special": false,
    "price": "\u20b940",
    "portion": "1 Portion",
    "description": "Soft, fluffy tandoor-baked stuffed bread.",
    "ingredients": "Indian Breads, Indian and Chinese Delights, Plain Kulcha, Soft, fluffy tandoor-baked stuffed bread., traditional spices, herbs",
    "image": "/images/food/naan.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "butter-kulcha",
    "name": "Butter Kulcha",
    "category": "breads",
    "categoryName": "Tandoor Breads & Naan",
    "subCategoryId": "indian-breads",
    "subCategoryName": "Indian Breads",
    "groupTitle": "Indian and Chinese Delights",
    "diet": "veg",
    "special": false,
    "price": "\u20b945",
    "portion": "1 Portion",
    "description": "Soft kulcha brushed generously with melted butter.",
    "ingredients": "Indian Breads, Indian and Chinese Delights, Butter Kulcha, Soft kulcha brushed generously with melted butter., traditional spices, herbs",
    "image": "/images/food/naan.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "paneer-kulcha",
    "name": "Paneer Kulcha",
    "category": "breads",
    "categoryName": "Tandoor Breads & Naan",
    "subCategoryId": "indian-breads",
    "subCategoryName": "Indian Breads",
    "groupTitle": "Indian and Chinese Delights",
    "diet": "veg",
    "special": false,
    "price": "\u20b970",
    "portion": "1 Portion",
    "description": "Tandoor bread stuffed with seasoned spiced cottage cheese.",
    "ingredients": "Indian Breads, Indian and Chinese Delights, Paneer Kulcha, Tandoor bread stuffed with seasoned spiced cottage cheese., traditional spices, herbs",
    "image": "/images/food/naan.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "chicken-kulcha",
    "name": "Chicken Kulcha",
    "category": "breads",
    "categoryName": "Tandoor Breads & Naan",
    "subCategoryId": "indian-breads",
    "subCategoryName": "Indian Breads",
    "groupTitle": "Indian and Chinese Delights",
    "diet": "nonveg",
    "special": false,
    "price": "\u20b9100",
    "portion": "1 Portion",
    "description": "Fluffy tandoor bread stuffed with flavorful minced chicken.",
    "ingredients": "Indian Breads, Indian and Chinese Delights, Chicken Kulcha, Fluffy tandoor bread stuffed with flavorful minced chicken., traditional spices, herbs",
    "image": "/images/food/naan.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "plain-naan",
    "name": "Plain Naan",
    "category": "breads",
    "categoryName": "Tandoor Breads & Naan",
    "subCategoryId": "indian-breads",
    "subCategoryName": "Indian Breads",
    "groupTitle": "Indian and Chinese Delights",
    "diet": "veg",
    "special": false,
    "price": "\u20b940",
    "portion": "1 Portion",
    "description": "Classic, leavened Indian flatbread from the tandoor - pillowy and slightly charred.",
    "ingredients": "Indian Breads, Indian and Chinese Delights, Plain Naan, Classic, leavened Indian flatbread from the tandoor - pillowy and slightly charred., traditional spices, herbs",
    "image": "/images/food/naan.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "butter-naan",
    "name": "Butter Naan",
    "category": "breads",
    "categoryName": "Tandoor Breads & Naan",
    "subCategoryId": "indian-breads",
    "subCategoryName": "Indian Breads",
    "groupTitle": "Indian and Chinese Delights",
    "diet": "veg",
    "special": false,
    "price": "\u20b945",
    "portion": "1 Portion",
    "description": "Tandoori flatbread glazed with pure melted butter.",
    "ingredients": "Indian Breads, Indian and Chinese Delights, Butter Naan, Tandoori flatbread glazed with pure melted butter., traditional spices, herbs",
    "image": "/images/food/naan.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "garlic-naan",
    "name": "Garlic Naan",
    "category": "breads",
    "categoryName": "Tandoor Breads & Naan",
    "subCategoryId": "indian-breads",
    "subCategoryName": "Indian Breads",
    "groupTitle": "Indian and Chinese Delights",
    "diet": "veg",
    "special": true,
    "price": "\u20b960",
    "portion": "1 Portion",
    "description": "Topped with minced garlic and chopped fresh cilantro.",
    "ingredients": "Indian Breads, Indian and Chinese Delights, Garlic Naan, Topped with minced garlic and chopped fresh cilantro., traditional spices, herbs",
    "image": "/images/food/naan.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "paneer-naan",
    "name": "Paneer Naan",
    "category": "breads",
    "categoryName": "Tandoor Breads & Naan",
    "subCategoryId": "indian-breads",
    "subCategoryName": "Indian Breads",
    "groupTitle": "Indian and Chinese Delights",
    "diet": "veg",
    "special": false,
    "price": "\u20b970",
    "portion": "1 Portion",
    "description": "Stuffed with grated paneer and subtle spices.",
    "ingredients": "Indian Breads, Indian and Chinese Delights, Paneer Naan, Stuffed with grated paneer and subtle spices., traditional spices, herbs",
    "image": "/images/food/naan.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "cheese-naan",
    "name": "Cheese Naan",
    "category": "breads",
    "categoryName": "Tandoor Breads & Naan",
    "subCategoryId": "indian-breads",
    "subCategoryName": "Indian Breads",
    "groupTitle": "Indian and Chinese Delights",
    "diet": "veg",
    "special": false,
    "price": "\u20b980",
    "portion": "1 Portion",
    "description": "Indulgent flatbread oozing with melted cheese.",
    "ingredients": "Indian Breads, Indian and Chinese Delights, Cheese Naan, Indulgent flatbread oozing with melted cheese., traditional spices, herbs",
    "image": "/images/food/naan.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "cheese-garlic-naan",
    "name": "Cheese Garlic Naan",
    "category": "breads",
    "categoryName": "Tandoor Breads & Naan",
    "subCategoryId": "indian-breads",
    "subCategoryName": "Indian Breads",
    "groupTitle": "Indian and Chinese Delights",
    "diet": "veg",
    "special": false,
    "price": "\u20b9100",
    "portion": "1 Portion",
    "description": "The ultimate pairing of roasted garlic and golden melted cheese.",
    "ingredients": "Indian Breads, Indian and Chinese Delights, Cheese Garlic Naan, The ultimate pairing of roasted garlic and golden melted cheese., traditional spices, herbs",
    "image": "/images/food/naan.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "dil-pasand",
    "name": "Dil Pasand Naan",
    "category": "breads",
    "categoryName": "Tandoor Breads & Naan",
    "subCategoryId": "indian-breads",
    "subCategoryName": "Indian Breads",
    "groupTitle": "Indian and Chinese Delights",
    "diet": "veg",
    "special": false,
    "price": "\u20b9100",
    "portion": "1 Portion",
    "description": "Royal sweet-stuffed tandoor bread with nuts and desiccated coconut.",
    "ingredients": "Indian Breads, Indian and Chinese Delights, Dil Pasand Naan, Royal sweet-stuffed tandoor bread with nuts and desiccated coconut., traditional spices, herbs",
    "image": "/images/food/naan.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "tandoori-roti",
    "name": "Tandoori Roti",
    "category": "breads",
    "categoryName": "Tandoor Breads & Naan",
    "subCategoryId": "indian-breads",
    "subCategoryName": "Indian Breads",
    "groupTitle": "Indian and Chinese Delights",
    "diet": "veg",
    "special": false,
    "price": "\u20b925",
    "portion": "1 Portion",
    "description": "Wholesome whole-wheat bread baked on the hot clay wall.",
    "ingredients": "Indian Breads, Indian and Chinese Delights, Tandoori Roti, Wholesome whole-wheat bread baked on the hot clay wall., traditional spices, herbs",
    "image": "/images/food/naan.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "butter-tandoori-roti",
    "name": "Butter Tandoori Roti",
    "category": "breads",
    "categoryName": "Tandoor Breads & Naan",
    "subCategoryId": "indian-breads",
    "subCategoryName": "Indian Breads",
    "groupTitle": "Indian and Chinese Delights",
    "diet": "veg",
    "special": false,
    "price": "\u20b930",
    "portion": "1 Portion",
    "description": "Crisp whole wheat tandoori roti with melted butter.",
    "ingredients": "Indian Breads, Indian and Chinese Delights, Butter Tandoori Roti, Crisp whole wheat tandoori roti with melted butter., traditional spices, herbs",
    "image": "/images/food/naan.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "lacha-parota",
    "name": "Lacha Parota",
    "category": "breads",
    "categoryName": "Tandoor Breads & Naan",
    "subCategoryId": "indian-breads",
    "subCategoryName": "Indian Breads",
    "groupTitle": "Indian and Chinese Delights",
    "diet": "veg",
    "special": false,
    "price": "\u20b940",
    "portion": "1 Portion",
    "description": "Flaky, multi-layered golden paratha cooked on the griddle.",
    "ingredients": "Indian Breads, Indian and Chinese Delights, Lacha Parota, Flaky, multi-layered golden paratha cooked on the griddle., traditional spices, herbs",
    "image": "/images/food/naan.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "lacha-naan",
    "name": "Lacha Naan",
    "category": "breads",
    "categoryName": "Tandoor Breads & Naan",
    "subCategoryId": "indian-breads",
    "subCategoryName": "Indian Breads",
    "groupTitle": "Indian and Chinese Delights",
    "diet": "veg",
    "special": false,
    "price": "\u20b950",
    "portion": "1 Portion",
    "description": "Flaky layered tandoor-baked naan with rich texture.",
    "ingredients": "Indian Breads, Indian and Chinese Delights, Lacha Naan, Flaky layered tandoor-baked naan with rich texture., traditional spices, herbs",
    "image": "/images/food/naan.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "parotta",
    "name": "Parotta",
    "category": "breads",
    "categoryName": "Tandoor Breads & Naan",
    "subCategoryId": "indian-breads",
    "subCategoryName": "Indian Breads",
    "groupTitle": "Indian and Chinese Delights",
    "diet": "veg",
    "special": false,
    "price": "\u20b920",
    "portion": "1 Portion",
    "description": "Soft and flaky layered flatbread.",
    "ingredients": "Indian Breads, Indian and Chinese Delights, Parotta, Soft and flaky layered flatbread., traditional spices, herbs",
    "image": "/images/food/naan.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "rumali",
    "name": "Rumali Roti",
    "category": "breads",
    "categoryName": "Tandoor Breads & Naan",
    "subCategoryId": "indian-breads",
    "subCategoryName": "Indian Breads",
    "groupTitle": "Indian and Chinese Delights",
    "diet": "veg",
    "special": false,
    "price": "\u20b925",
    "portion": "1 Portion",
    "description": "Ultra-thin, handkerchief-soft bread.",
    "ingredients": "Indian Breads, Indian and Chinese Delights, Rumali Roti, Ultra-thin, handkerchief-soft bread., traditional spices, herbs",
    "image": "/images/food/naan.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "kuboos",
    "name": "Kuboos",
    "category": "breads",
    "categoryName": "Tandoor Breads & Naan",
    "subCategoryId": "indian-breads",
    "subCategoryName": "Indian Breads",
    "groupTitle": "Indian and Chinese Delights",
    "diet": "veg",
    "special": false,
    "price": "\u20b910",
    "portion": "1 Portion",
    "description": "Authentic Arabian pita pocket bread.",
    "ingredients": "Indian Breads, Indian and Chinese Delights, Kuboos, Authentic Arabian pita pocket bread., traditional spices, herbs",
    "image": "/images/food/naan.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "fresh-bun",
    "name": "Bun",
    "category": "breads",
    "categoryName": "Tandoor Breads & Naan",
    "subCategoryId": "indian-breads",
    "subCategoryName": "Indian Breads",
    "groupTitle": "Indian and Chinese Delights",
    "diet": "veg",
    "special": false,
    "price": "\u20b925",
    "portion": "1 Portion",
    "description": "Soft and fresh bakery bun.",
    "ingredients": "Indian Breads, Indian and Chinese Delights, Bun, Soft and fresh bakery bun., traditional spices, herbs",
    "image": "/images/food/naan.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "dish-chicken-kabuli-zafrani-mandi",
    "name": "Chicken Kabuli Zafrani Mandi",
    "category": "mandi",
    "categoryName": "Mandi Delicacies",
    "subCategoryId": "chicken-kabuli-zafrani-mandi",
    "subCategoryName": "Chicken Kabuli Zafrani Mandi",
    "groupTitle": "Mandi Delicacies",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b9250 \u2013 \u20b9900",
    "portion": "Quarter / Half / Three Quarter / Full",
    "description": "Tender chicken cooked in zafrani (saffron-infused) spices, served over rich Kabuli rice with nuts and raisins a royal twist on classic Mandi",
    "ingredients": "Chicken Kabuli Zafrani Mandi, Mandi Delicacies, Chicken Kabuli Zafrani Mandi, Tender chicken cooked in zafrani (saffron-infused) spices, served over rich Kabuli rice with nuts and raisins a royal twist on classic Mandi, traditional spices, herbs",
    "image": "/images/food/mandi-chicken-kabuli-zafrani.png",
    "portions": [
      {
        "label": "Quarter",
        "price": 250
      },
      {
        "label": "Half",
        "price": 470
      },
      {
        "label": "Three Quarter",
        "price": 690
      },
      {
        "label": "Full",
        "price": 900
      }
    ],
    "variations": null
  },
  {
    "id": "dish-alfaham-kabuli-mandi",
    "name": "Alfaham Kabuli Mandi",
    "category": "mandi",
    "categoryName": "Mandi Delicacies",
    "subCategoryId": "alfaham-kabuli-mandi",
    "subCategoryName": "Alfaham Kabuli Mandi",
    "groupTitle": "Mandi Delicacies",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b9250 \u2013 \u20b9900",
    "portion": "Quarter / Half / Three Quarter / Full",
    "description": "Smoky charcoal grilled Al Faham chicken placed over fragrant Kabuli rice bold, smoky and layered with traditional flavors.",
    "ingredients": "Alfaham Kabuli Mandi, Mandi Delicacies, Alfaham Kabuli Mandi, Smoky charcoal grilled Al Faham chicken placed over fragrant Kabuli rice bold, smoky and layered with traditional flavors., traditional spices, herbs",
    "image": "/images/food/mandi-alfaham-kabuli.png",
    "portions": [
      {
        "label": "Quarter",
        "price": 250
      },
      {
        "label": "Half",
        "price": 470
      },
      {
        "label": "Three Quarter",
        "price": 690
      },
      {
        "label": "Full",
        "price": 900
      }
    ],
    "variations": null
  },
  {
    "id": "dish-juicy-lucy-alfaham-mandi",
    "name": "Juicy Lucy Alfaham Mandi",
    "category": "mandi",
    "categoryName": "Mandi Delicacies",
    "subCategoryId": "juicy-lucy-alfaham-mandi",
    "subCategoryName": "Juicy Lucy Alfaham Mandi",
    "groupTitle": "Mandi Delicacies",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b9280 \u2013 \u20b91050",
    "portion": "Quarter / Half / Three Quarter / Full",
    "description": "Juicy alfaham chicken paired with aromatic mandi rice, infused with traditional spices.",
    "ingredients": "Juicy Lucy Alfaham Mandi, Mandi Delicacies, Juicy Lucy Alfaham Mandi, Juicy alfaham chicken paired with aromatic mandi rice, infused with traditional spices., traditional spices, herbs",
    "image": "/images/food/mandi-juicy-lucy-alfaham.png",
    "portions": [
      {
        "label": "Quarter",
        "price": 280
      },
      {
        "label": "Half",
        "price": 540
      },
      {
        "label": "Three Quarter",
        "price": 800
      },
      {
        "label": "Full",
        "price": 1050
      }
    ],
    "variations": null
  },
  {
    "id": "dish-chilly-cheese-alfaham-mandi",
    "name": "Chilly Cheese Alfaham Mandi",
    "category": "mandi",
    "categoryName": "Mandi Delicacies",
    "subCategoryId": "chilly-cheese-alfaham-mandi",
    "subCategoryName": "Chilly Cheese Alfaham Mandi",
    "groupTitle": "Mandi Delicacies",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b9280 \u2013 \u20b91050",
    "portion": "Quarter / Half / Three Quarter / Full",
    "description": "Grilled chicken coated in a spicy chili marinade and finished with a cheesy topping-fiery and indulgent.",
    "ingredients": "Chilly Cheese Alfaham Mandi, Mandi Delicacies, Chilly Cheese Alfaham Mandi, Grilled chicken coated in a spicy chili marinade and finished with a cheesy topping-fiery and indulgent., traditional spices, herbs",
    "image": "/images/food/mandi-chilly-cheese-alfaham.png",
    "portions": [
      {
        "label": "Quarter",
        "price": 280
      },
      {
        "label": "Half",
        "price": 540
      },
      {
        "label": "Three Quarter",
        "price": 800
      },
      {
        "label": "Full",
        "price": 1050
      }
    ],
    "variations": null
  },
  {
    "id": "dish-chicken-tikka-kabuli-mandi",
    "name": "Chicken Tikka Kabuli Mandi",
    "category": "mandi",
    "categoryName": "Mandi Delicacies",
    "subCategoryId": "chicken-tikka-kabuli-mandi",
    "subCategoryName": "Chicken Tikka Kabuli Mandi",
    "groupTitle": "Mandi Delicacies",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b9270 \u2013 \u20b9970",
    "portion": "Quarter / Half / Three Quarter / Full",
    "description": "Flame-grilled chicken tikka paired with nutty Kabuli rice a delicious fusion of tandoori and mandi goodness.",
    "ingredients": "Chicken Tikka Kabuli Mandi, Mandi Delicacies, Chicken Tikka Kabuli Mandi, Flame-grilled chicken tikka paired with nutty Kabuli rice a delicious fusion of tandoori and mandi goodness., traditional spices, herbs",
    "image": "/images/food/mandi-chicken-tikka-kabuli.png",
    "portions": [
      {
        "label": "Quarter",
        "price": 270
      },
      {
        "label": "Half",
        "price": 520
      },
      {
        "label": "Three Quarter",
        "price": 750
      },
      {
        "label": "Full",
        "price": 970
      }
    ],
    "variations": null
  },
  {
    "id": "dish-butter-chicken-alfaham-mandi",
    "name": "Butter Chicken Alfaham Mandi",
    "category": "mandi",
    "categoryName": "Mandi Delicacies",
    "subCategoryId": "butter-chicken-alfaham-mandi",
    "subCategoryName": "Butter Chicken Alfaham Mandi",
    "groupTitle": "Mandi Delicacies",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b9300 \u2013 \u20b91100",
    "portion": "Quarter / Half / Three Quarter / Full",
    "description": "Charcoal-grilled chicken finished with a creamy, buttery sauce - a fusion of smoky and rich flavors.",
    "ingredients": "Butter Chicken Alfaham Mandi, Mandi Delicacies, Butter Chicken Alfaham Mandi, Charcoal-grilled chicken finished with a creamy, buttery sauce - a fusion of smoky and rich flavors., traditional spices, herbs",
    "image": "/images/food/mandi-butter-chicken-alfaham.png",
    "portions": [
      {
        "label": "Quarter",
        "price": 300
      },
      {
        "label": "Half",
        "price": 570
      },
      {
        "label": "Three Quarter",
        "price": 850
      },
      {
        "label": "Full",
        "price": 1100
      }
    ],
    "variations": null
  },
  {
    "id": "dish-pepper-chicken-alfaham-mandi",
    "name": "Pepper Chicken Alfaham Mandi",
    "category": "mandi",
    "categoryName": "Mandi Delicacies",
    "subCategoryId": "pepper-chicken-alfaham-mandi",
    "subCategoryName": "Pepper Chicken Alfaham Mandi",
    "groupTitle": "Mandi Delicacies",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b9270 \u2013 \u20b9950",
    "portion": "Quarter / Half / Three Quarter / Full",
    "description": "Arabic-style grilled chicken marinated in bold pepper spices for a spicy, peppery kick.",
    "ingredients": "Pepper Chicken Alfaham Mandi, Mandi Delicacies, Pepper Chicken Alfaham Mandi, Arabic-style grilled chicken marinated in bold pepper spices for a spicy, peppery kick., traditional spices, herbs",
    "image": "/images/food/mandi-pepper-chicken-alfaham.png",
    "portions": [
      {
        "label": "Quarter",
        "price": 270
      },
      {
        "label": "Half",
        "price": 520
      },
      {
        "label": "Three Quarter",
        "price": 750
      },
      {
        "label": "Full",
        "price": 950
      }
    ],
    "variations": null
  },
  {
    "id": "dish-peri-peri-alfaham-mandi",
    "name": "Peri-Peri Alfaham Mandi",
    "category": "mandi",
    "categoryName": "Mandi Delicacies",
    "subCategoryId": "peri-peri-alfaham-mandi",
    "subCategoryName": "Peri-Peri Alfaham Mandi",
    "groupTitle": "Mandi Delicacies",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b9270 \u2013 \u20b9950",
    "portion": "Quarter / Half / Three Quarter / Full",
    "description": "Grilled chicken infused with fiery peri-peri marinade - tangy, spicy, and irresistibly smoky.",
    "ingredients": "Peri-Peri Alfaham Mandi, Mandi Delicacies, Peri-Peri Alfaham Mandi, Grilled chicken infused with fiery peri-peri marinade - tangy, spicy, and irresistibly smoky., traditional spices, herbs",
    "image": "/images/food/mandi-peri-peri-alfaham.png",
    "portions": [
      {
        "label": "Quarter",
        "price": 270
      },
      {
        "label": "Half",
        "price": 520
      },
      {
        "label": "Three Quarter",
        "price": 750
      },
      {
        "label": "Full",
        "price": 950
      }
    ],
    "variations": null
  },
  {
    "id": "dish-chicken-shawaya-mandi",
    "name": "Chicken Shawaya Mandi (Grill Chicken)",
    "category": "mandi",
    "categoryName": "Mandi Delicacies",
    "subCategoryId": "chicken-shawaya-mandi",
    "subCategoryName": "Chicken Shawaya Mandi",
    "groupTitle": "Mandi Delicacies",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b9270 \u2013 \u20b9950",
    "portion": "Quarter / Half / Three Quarter / Full",
    "description": "Juicy shawaya-style grilled chicken paired with fragrant mandi rice and traditional spices.",
    "ingredients": "Chicken Shawaya Mandi, Mandi Delicacies, Chicken Shawaya Mandi (Grill Chicken), Juicy shawaya-style grilled chicken paired with fragrant mandi rice and traditional spices., traditional spices, herbs",
    "image": "/images/food/mandi-chicken-shawaya.png",
    "portions": [
      {
        "label": "Quarter",
        "price": 270
      },
      {
        "label": "Half",
        "price": 520
      },
      {
        "label": "Three Quarter",
        "price": 750
      },
      {
        "label": "Full",
        "price": 950
      }
    ],
    "variations": null
  },
  {
    "id": "dish-masala-chicken-shawaya-mandi",
    "name": "Masala Chicken Shawaya Mandi",
    "category": "mandi",
    "categoryName": "Mandi Delicacies",
    "subCategoryId": "masala-chicken-shawaya-mandi",
    "subCategoryName": "Masala Chicken Shawaya Mandi",
    "groupTitle": "Mandi Delicacies",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b9280 \u2013 \u20b91050",
    "portion": "Quarter / Half / Three Quarter / Full",
    "description": "Tender, flame-grilled shawaya chicken infused with bold masala spices, served over aromatic mandi rice for a rich, flavorful experience.",
    "ingredients": "Masala Chicken Shawaya Mandi, Mandi Delicacies, Masala Chicken Shawaya Mandi, Tender, flame-grilled shawaya chicken infused with bold masala spices, served over aromatic mandi rice for a rich, flavorful experience., traditional spices, herbs",
    "image": "/images/food/mandi-masala-chicken-shawaya.png",
    "portions": [
      {
        "label": "Quarter",
        "price": 280
      },
      {
        "label": "Half",
        "price": 540
      },
      {
        "label": "Three Quarter",
        "price": 800
      },
      {
        "label": "Full",
        "price": 1050
      }
    ],
    "variations": null
  },
  {
    "id": "dish-mutton-kabuli-mandi",
    "name": "Mutton Kabuli Mandi",
    "category": "mandi",
    "categoryName": "Mandi Delicacies",
    "subCategoryId": "mutton-kabuli-mandi",
    "subCategoryName": "Mutton Kabuli Mandi",
    "groupTitle": "Mandi Delicacies",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b9450 \u2013 \u20b91650",
    "portion": "Quarter / Half / Three Quarter / Full",
    "description": "Juicy mutton slow-cooked in aromatic spices, served over saffron-infused Kabuli rice -rich, flavorful, and deeply satisfying.",
    "ingredients": "Mutton Kabuli Mandi, Mandi Delicacies, Mutton Kabuli Mandi, Juicy mutton slow-cooked in aromatic spices, served over saffron-infused Kabuli rice -rich, flavorful, and deeply satisfying., traditional spices, herbs",
    "image": "/images/food/mandi-mutton-kabuli.png",
    "portions": [
      {
        "label": "Quarter",
        "price": 450
      },
      {
        "label": "Half",
        "price": 850
      },
      {
        "label": "Three Quarter",
        "price": 1250
      },
      {
        "label": "Full",
        "price": 1650
      }
    ],
    "variations": null
  },
  {
    "id": "dish-mutton-zafrani-mandi",
    "name": "Mutton Zafrani Mandi",
    "category": "mandi",
    "categoryName": "Mandi Delicacies",
    "subCategoryId": "mutton-zafrani-mandi",
    "subCategoryName": "Mutton Zafrani Mandi",
    "groupTitle": "Mandi Delicacies",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b9480 \u2013 \u20b91700",
    "portion": "Quarter / Half / Three Quarter / Full",
    "description": "Premium mutton slow-cooked with luxurious zafrani spices an indulgent blend of tenderness and aroma served over fragrant rice..",
    "ingredients": "Mutton Zafrani Mandi, Mandi Delicacies, Mutton Zafrani Mandi, Premium mutton slow-cooked with luxurious zafrani spices an indulgent blend of tenderness and aroma served over fragrant rice.., traditional spices, herbs",
    "image": "/images/food/mandi-mutton-zafrani.png",
    "portions": [
      {
        "label": "Quarter",
        "price": 480
      },
      {
        "label": "Half",
        "price": 900
      },
      {
        "label": "Three Quarter",
        "price": 1300
      },
      {
        "label": "Full",
        "price": 1700
      }
    ],
    "variations": null
  },
  {
    "id": "dish-mutton-pushti-kabab-mandi",
    "name": "Mutton Pushti Kabab Mandi",
    "category": "mandi",
    "categoryName": "Mandi Delicacies",
    "subCategoryId": "mutton-pushti-kabab-mandi",
    "subCategoryName": "Mutton Pushti Kabab Mandi",
    "groupTitle": "Mandi Delicacies",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b9500 \u2013 \u20b91800",
    "portion": "Quarter / Half / Three Quarter / Full",
    "description": "Rich, juicy mutton pusti kababs laid on fragrant mandi rice a bold, meaty dish with irresistible aroma and spice.",
    "ingredients": "Mutton Pushti Kabab Mandi, Mandi Delicacies, Mutton Pushti Kabab Mandi, Rich, juicy mutton pusti kababs laid on fragrant mandi rice a bold, meaty dish with irresistible aroma and spice., traditional spices, herbs",
    "image": "/images/food/mandi-mutton-pushti-kabab.png",
    "portions": [
      {
        "label": "Quarter",
        "price": 500
      },
      {
        "label": "Half",
        "price": 950
      },
      {
        "label": "Three Quarter",
        "price": 1350
      },
      {
        "label": "Full",
        "price": 1800
      }
    ],
    "variations": null
  },
  {
    "id": "dish-mutton-maicha-mandi",
    "name": "Mutton Maicha Mandi",
    "category": "mandi",
    "categoryName": "Mandi Delicacies",
    "subCategoryId": "mutton-maicha-mandi",
    "subCategoryName": "Mutton Maicha Mandi",
    "groupTitle": "Mandi Delicacies",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b9500 \u2013 \u20b91800",
    "portion": "Quarter / Half / Three Quarter / Full",
    "description": "Slow-cooked nalli mutton, rich in flavor, paired with fragrant mandi rice and traditional spices.",
    "ingredients": "Mutton Maicha Mandi, Mandi Delicacies, Mutton Maicha Mandi, Slow-cooked nalli mutton, rich in flavor, paired with fragrant mandi rice and traditional spices., traditional spices, herbs",
    "image": "/images/food/mandi-mutton-maicha.png",
    "portions": [
      {
        "label": "Quarter",
        "price": 500
      },
      {
        "label": "Half",
        "price": 950
      },
      {
        "label": "Three Quarter",
        "price": 1350
      },
      {
        "label": "Full",
        "price": 1800
      }
    ],
    "variations": null
  },
  {
    "id": "dish-mutton-seekh-kabab-mandi",
    "name": "Mutton Seekh Kabab Mandi",
    "category": "mandi",
    "categoryName": "Mandi Delicacies",
    "subCategoryId": "mutton-seekh-kabab-mandi",
    "subCategoryName": "Mutton Seekh Kabab Mandi",
    "groupTitle": "Mandi Delicacies",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b9500 \u2013 \u20b91800",
    "portion": "Quarter / Half / Three Quarter / Full",
    "description": "Flavorful mutton seekh kababs grilled to perfection and served on a bed of mandi rice smoky, spiced, and satisfying.",
    "ingredients": "Mutton Seekh Kabab Mandi, Mandi Delicacies, Mutton Seekh Kabab Mandi, Flavorful mutton seekh kababs grilled to perfection and served on a bed of mandi rice smoky, spiced, and satisfying., traditional spices, herbs",
    "image": "/images/food/mandi-seekh-kabab.png",
    "portions": [
      {
        "label": "Quarter",
        "price": 500
      },
      {
        "label": "Half",
        "price": 950
      },
      {
        "label": "Three Quarter",
        "price": 1350
      },
      {
        "label": "Full",
        "price": 1800
      }
    ],
    "variations": null
  },
  {
    "id": "dish-chicken-seekh-kabab-mandi",
    "name": "Chicken Seekh Kabab Mandi",
    "category": "mandi",
    "categoryName": "Mandi Delicacies",
    "subCategoryId": "chicken-seekh-kabab-mandi",
    "subCategoryName": "Chicken Seekh Kabab Mandi",
    "groupTitle": "Mandi Delicacies",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b9280 \u2013 \u20b91050",
    "portion": "Quarter / Half / Three Quarter / Full",
    "description": "Flavorful chicken seekh kababs grilled to perfection and served on a bed of mandi rice smoky, spiced, and satisfying.",
    "ingredients": "Chicken Seekh Kabab Mandi, Mandi Delicacies, Chicken Seekh Kabab Mandi, Flavorful chicken seekh kababs grilled to perfection and served on a bed of mandi rice smoky, spiced, and satisfying., traditional spices, herbs",
    "image": "/images/food/mandi-seekh-kabab.png",
    "portions": [
      {
        "label": "Quarter",
        "price": 280
      },
      {
        "label": "Half",
        "price": 540
      },
      {
        "label": "Three Quarter",
        "price": 800
      },
      {
        "label": "Full",
        "price": 1050
      }
    ],
    "variations": null
  },
  {
    "id": "dish-mutton-raan-mandi",
    "name": "Mutton Raan Mandi",
    "category": "mandi",
    "categoryName": "Mandi Delicacies",
    "subCategoryId": "mutton-raan-mandi",
    "subCategoryName": "Mutton Raan Mandi",
    "groupTitle": "Mandi Delicacies",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b91800 \u2013 \u20b91850",
    "portion": "Ustaadi / Barbecue / Zafrani",
    "description": "A whole mutton leg, marinated and cooked to perfection, served over mandi rice a grand and flavorful centerpiece.",
    "ingredients": "Mutton Raan Mandi, Mandi Delicacies, Mutton Raan Mandi, A whole mutton leg, marinated and cooked to perfection, served over mandi rice a grand and flavorful centerpiece., traditional spices, herbs",
    "image": "/images/food/mandi-mutton-raan-ribs.png",
    "portions": [
      {
        "label": "Ustaadi",
        "price": 1800
      },
      {
        "label": "Barbecue",
        "price": 1850
      },
      {
        "label": "Zafrani",
        "price": 1850
      }
    ],
    "variations": null
  },
  {
    "id": "dish-mutton-ribs-mandi",
    "name": "Mutton Ribs Mandi",
    "category": "mandi",
    "categoryName": "Mandi Delicacies",
    "subCategoryId": "mutton-ribs-mandi",
    "subCategoryName": "Mutton Ribs Mandi",
    "groupTitle": "Mandi Delicacies",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b91800 \u2013 \u20b91850",
    "portion": "Ustaadi / Barbecue / Zafrani",
    "description": "Tender mutton ribs, spice-rubbed and steamed till soft, resting over classic mandi rice melt-in-the-mouth richness.",
    "ingredients": "Mutton Ribs Mandi, Mandi Delicacies, Mutton Ribs Mandi, Tender mutton ribs, spice-rubbed and steamed till soft, resting over classic mandi rice melt-in-the-mouth richness., traditional spices, herbs",
    "image": "/images/food/mandi-mutton-raan-ribs.png",
    "portions": [
      {
        "label": "Ustaadi",
        "price": 1800
      },
      {
        "label": "Barbecue",
        "price": 1850
      },
      {
        "label": "Zafrani",
        "price": 1850
      }
    ],
    "variations": null
  },
  {
    "id": "seafood-mandi-anjal",
    "name": "Sea Food Mandi - Anjal",
    "category": "mandi",
    "categoryName": "Mandi Delicacies",
    "subCategoryId": "sea-food-mandi",
    "subCategoryName": "Sea Food Mandi",
    "groupTitle": "Mandi Delicacies",
    "diet": "nonveg",
    "special": true,
    "price": "ASP",
    "portion": "1 Portion",
    "description": "Prime Kingfish (Anjal) marinated in exotic coastal spices and served over authentic mandi rice.",
    "ingredients": "Sea Food Mandi, Mandi Delicacies, Sea Food Mandi - Anjal, Prime Kingfish (Anjal) marinated in exotic coastal spices and served over authentic mandi rice., traditional spices, herbs",
    "image": "/images/food/mandi-alfaham-kabuli.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "seafood-mandi-basha",
    "name": "Sea Food Mandi - Basha",
    "category": "mandi",
    "categoryName": "Mandi Delicacies",
    "subCategoryId": "sea-food-mandi",
    "subCategoryName": "Sea Food Mandi",
    "groupTitle": "Mandi Delicacies",
    "diet": "nonveg",
    "special": true,
    "price": "ASP",
    "portion": "1 Portion",
    "description": "Delicious Basha fish prepared with traditional Middle Eastern herbs and paired with fragrant rice.",
    "ingredients": "Sea Food Mandi, Mandi Delicacies, Sea Food Mandi - Basha, Delicious Basha fish prepared with traditional Middle Eastern herbs and paired with fragrant rice., traditional spices, herbs",
    "image": "/images/food/mandi-alfaham-kabuli.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "dish-mandi-platter",
    "name": "Mandi Platter",
    "category": "mandi",
    "categoryName": "Mandi Delicacies",
    "subCategoryId": "mandi-platter",
    "subCategoryName": "Mandi Platter",
    "groupTitle": "Mandi Delicacies",
    "diet": "nonveg",
    "special": true,
    "price": "ASP",
    "portion": "1 Portion",
    "description": "A grand feast featuring assorted mutton specialties ideal for sharing and celebrating authentic Arabian flavors.",
    "ingredients": "Mandi Platter, Mandi Delicacies, Mandi Platter, A grand feast featuring assorted mutton specialties ideal for sharing and celebrating authentic Arabian flavors., traditional spices, herbs",
    "image": "/images/food/mandi-mutton-raan-ribs.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "kabuli-mandi-rice",
    "name": "Kabuli Mandi Rice",
    "category": "mandi",
    "categoryName": "Mandi Delicacies",
    "subCategoryId": "additional-mandi-items",
    "subCategoryName": "Additional Mandi Items",
    "groupTitle": "Mandi Delicacies",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b9130 \u2013 \u20b9420",
    "portion": "Quarter / Half / Full",
    "description": "Traditional Kabuli-style rice with dry fruits and spices - aromatic, mildly sweet, and ideal for pairing or solo enjoyment.",
    "ingredients": "Additional Mandi Items, Mandi Delicacies, Kabuli Mandi Rice, Traditional Kabuli-style rice with dry fruits and spices - aromatic, mildly sweet, and ideal for pairing or solo enjoyment., traditional spices, herbs",
    "image": "/images/food/mandi-chicken-kabuli-zafrani.png",
    "portions": [
      {
        "label": "Quarter",
        "price": 130
      },
      {
        "label": "Half",
        "price": 240
      },
      {
        "label": "Full",
        "price": 420
      }
    ],
    "variations": null
  },
  {
    "id": "chicken-mandi-piece",
    "name": "Chicken Mandi Piece",
    "category": "mandi",
    "categoryName": "Mandi Delicacies",
    "subCategoryId": "additional-mandi-items",
    "subCategoryName": "Additional Mandi Items",
    "groupTitle": "Mandi Delicacies",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b9140 \u2013 \u20b9500",
    "portion": "Quarter / Half / Full",
    "description": "A portion of chicken marinated in Arabic spices and slow-cooked great as a side or extra protein with your mandi rice.",
    "ingredients": "Additional Mandi Items, Mandi Delicacies, Chicken Mandi Piece, A portion of chicken marinated in Arabic spices and slow-cooked great as a side or extra protein with your mandi rice., traditional spices, herbs",
    "image": "/images/food/mandi-chicken-kabuli-zafrani.png",
    "portions": [
      {
        "label": "Quarter",
        "price": 140
      },
      {
        "label": "Half",
        "price": 260
      },
      {
        "label": "Full",
        "price": 500
      }
    ],
    "variations": null
  },
  {
    "id": "mutton-mandi-piece",
    "name": "Mutton Mandi Piece",
    "category": "mandi",
    "categoryName": "Mandi Delicacies",
    "subCategoryId": "additional-mandi-items",
    "subCategoryName": "Additional Mandi Items",
    "groupTitle": "Mandi Delicacies",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b9320 \u2013 \u20b91200",
    "portion": "Quarter / Half / Full",
    "description": "Tender mutton piece infused with mandi spices perfect for those wanting a little extra meat.",
    "ingredients": "Additional Mandi Items, Mandi Delicacies, Mutton Mandi Piece, Tender mutton piece infused with mandi spices perfect for those wanting a little extra meat., traditional spices, herbs",
    "image": "/images/food/mandi-chicken-kabuli-zafrani.png",
    "portions": [
      {
        "label": "Quarter",
        "price": 320
      },
      {
        "label": "Half",
        "price": 620
      },
      {
        "label": "Full",
        "price": 1200
      }
    ],
    "variations": null
  },
  {
    "id": "bullet-chicken-biriyani",
    "name": "Bullet Chicken Biriyani",
    "category": "biriyani",
    "categoryName": "Royal Dum Biriyanis",
    "subCategoryId": "biriyani-delicacies",
    "subCategoryName": "Biriyani Delicacies",
    "groupTitle": "Biriyani and Combos",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b9100 \u2013 \u20b9170",
    "portion": "Half / Full",
    "description": "Spicy, fiery Chicken biriyani packed with bold flavors and a signature bullet masala punch - a must-try for heat lovers!",
    "ingredients": "Biriyani Delicacies, Biriyani and Combos, Bullet Chicken Biriyani, Spicy, fiery Chicken biriyani packed with bold flavors and a signature bullet masala punch - a must-try for heat lovers!, traditional spices, herbs",
    "image": "/images/food/biriyani-delicacies.png",
    "portions": [
      {
        "label": "Half",
        "price": 100
      },
      {
        "label": "Full",
        "price": 170
      }
    ],
    "variations": null
  },
  {
    "id": "shaadi-ki-biriyani",
    "name": "Shaadi Ki Biriyani",
    "category": "biriyani",
    "categoryName": "Royal Dum Biriyanis",
    "subCategoryId": "biriyani-delicacies",
    "subCategoryName": "Biriyani Delicacies",
    "groupTitle": "Biriyani and Combos",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b9120 \u2013 \u20b9220",
    "portion": "Half / Full",
    "description": "Aromatic basmati rice layered with tender chicken, slow-cooked with traditional spices for that rich, satisfying biriyani experience.",
    "ingredients": "Biriyani Delicacies, Biriyani and Combos, Shaadi Ki Biriyani, Aromatic basmati rice layered with tender chicken, slow-cooked with traditional spices for that rich, satisfying biriyani experience., traditional spices, herbs",
    "image": "/images/food/biriyani-delicacies.png",
    "portions": [
      {
        "label": "Half",
        "price": 120
      },
      {
        "label": "Full",
        "price": 220
      }
    ],
    "variations": null
  },
  {
    "id": "chicken-tikka-biriyani",
    "name": "Chicken Tikka Biriyani",
    "category": "biriyani",
    "categoryName": "Royal Dum Biriyanis",
    "subCategoryId": "biriyani-delicacies",
    "subCategoryName": "Biriyani Delicacies",
    "groupTitle": "Biriyani and Combos",
    "diet": "nonveg",
    "special": false,
    "price": "\u20b9130 \u2013 \u20b9240",
    "portion": "Half / Full",
    "description": "Juicy, char-grilled chicken tikka pieces nestled in fragrant biriyani rice - smoky, spicy and deeply flavorful.",
    "ingredients": "Biriyani Delicacies, Biriyani and Combos, Chicken Tikka Biriyani, Juicy, char-grilled chicken tikka pieces nestled in fragrant biriyani rice - smoky, spicy and deeply flavorful., traditional spices, herbs",
    "image": "/images/food/biriyani-delicacies.png",
    "portions": [
      {
        "label": "Half",
        "price": 130
      },
      {
        "label": "Full",
        "price": 240
      }
    ],
    "variations": null
  },
  {
    "id": "mutton-biriyani",
    "name": "Mutton Biriyani",
    "category": "biriyani",
    "categoryName": "Royal Dum Biriyanis",
    "subCategoryId": "biriyani-delicacies",
    "subCategoryName": "Biriyani Delicacies",
    "groupTitle": "Biriyani and Combos",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b9200 \u2013 \u20b9350",
    "portion": "Half / Full",
    "description": "Premium cuts of mutton simmered in aromatic spices, layered with long-grain rice - a royal biriyani feast in every bite.",
    "ingredients": "Biriyani Delicacies, Biriyani and Combos, Mutton Biriyani, Premium cuts of mutton simmered in aromatic spices, layered with long-grain rice - a royal biriyani feast in every bite., traditional spices, herbs",
    "image": "/images/food/biriyani-delicacies.png",
    "portions": [
      {
        "label": "Half",
        "price": 200
      },
      {
        "label": "Full",
        "price": 350
      }
    ],
    "variations": null
  },
  {
    "id": "bullet-biriyani-rice",
    "name": "Bullet Biriyani Rice",
    "category": "biriyani",
    "categoryName": "Royal Dum Biriyanis",
    "subCategoryId": "biriyani-delicacies",
    "subCategoryName": "Biriyani Delicacies",
    "groupTitle": "Biriyani and Combos",
    "diet": "nonveg",
    "special": false,
    "price": "\u20b960 \u2013 \u20b9100",
    "portion": "Half / Full",
    "description": "Spicy, flavorful rice cooked with the famous bullet masala blend - perfect as a fiery side or standalone treat.",
    "ingredients": "Biriyani Delicacies, Biriyani and Combos, Bullet Biriyani Rice, Spicy, flavorful rice cooked with the famous bullet masala blend - perfect as a fiery side or standalone treat., traditional spices, herbs",
    "image": "/images/food/biriyani-delicacies.png",
    "portions": [
      {
        "label": "Half",
        "price": 60
      },
      {
        "label": "Full",
        "price": 100
      }
    ],
    "variations": null
  },
  {
    "id": "basmati-biriyani-rice",
    "name": "Basmati Biriyani Rice",
    "category": "biriyani",
    "categoryName": "Royal Dum Biriyanis",
    "subCategoryId": "biriyani-delicacies",
    "subCategoryName": "Biriyani Delicacies",
    "groupTitle": "Biriyani and Combos",
    "diet": "nonveg",
    "special": false,
    "price": "\u20b970 \u2013 \u20b9120",
    "portion": "Half / Full",
    "description": "Light, fluffy basmati rice infused with classic biriyani spices - ideal for pairing with your favorite grills or curries.",
    "ingredients": "Biriyani Delicacies, Biriyani and Combos, Basmati Biriyani Rice, Light, fluffy basmati rice infused with classic biriyani spices - ideal for pairing with your favorite grills or curries., traditional spices, herbs",
    "image": "/images/food/biriyani-delicacies.png",
    "portions": [
      {
        "label": "Half",
        "price": 70
      },
      {
        "label": "Full",
        "price": 120
      }
    ],
    "variations": null
  },
  {
    "id": "combo-1",
    "name": "COMBO 1",
    "category": "combos",
    "categoryName": "Combos & Meal Boxes",
    "subCategoryId": "indo-chinese-combos",
    "subCategoryName": "Indo Chinese Combos",
    "groupTitle": "Biriyani and Combos",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b9100",
    "portion": "1 Portion",
    "description": "Ghee Rice + Baby Kabab (60 gm) + Daal + Soft Drinks",
    "ingredients": "Indo Chinese Combos, Biriyani and Combos, COMBO 1, Ghee Rice + Baby Kabab (60 gm) + Daal + Soft Drinks, traditional spices, herbs",
    "image": "/images/food/manchurian-noodles.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "combo-2",
    "name": "COMBO 2",
    "category": "combos",
    "categoryName": "Combos & Meal Boxes",
    "subCategoryId": "indo-chinese-combos",
    "subCategoryName": "Indo Chinese Combos",
    "groupTitle": "Biriyani and Combos",
    "diet": "nonveg",
    "special": false,
    "price": "\u20b9120",
    "portion": "1 Portion",
    "description": "Ghee Rice + Baby Kabab (60 gm) + Chicken Curry + Daal & Soft Drinks",
    "ingredients": "Indo Chinese Combos, Biriyani and Combos, COMBO 2, Ghee Rice + Baby Kabab (60 gm) + Chicken Curry + Daal & Soft Drinks, traditional spices, herbs",
    "image": "/images/food/manchurian-noodles.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "combo-3",
    "name": "COMBO 3",
    "category": "combos",
    "categoryName": "Combos & Meal Boxes",
    "subCategoryId": "indo-chinese-combos",
    "subCategoryName": "Indo Chinese Combos",
    "groupTitle": "Biriyani and Combos",
    "diet": "nonveg",
    "special": false,
    "price": "\u20b9130",
    "portion": "1 Portion",
    "description": "Bullet Biriyani Rice + Baby Kabab (60 gm) + Raita + Soft Drinks",
    "ingredients": "Indo Chinese Combos, Biriyani and Combos, COMBO 3, Bullet Biriyani Rice + Baby Kabab (60 gm) + Raita + Soft Drinks, traditional spices, herbs",
    "image": "/images/food/manchurian-noodles.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "combo-4",
    "name": "COMBO 4",
    "category": "combos",
    "categoryName": "Combos & Meal Boxes",
    "subCategoryId": "indo-chinese-combos",
    "subCategoryName": "Indo Chinese Combos",
    "groupTitle": "Biriyani and Combos",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b9180",
    "portion": "1 Portion",
    "description": "Rumali + Ghee Rice + Baby Kabab (100 gm) + Chicken Curry & Soft Drinks",
    "ingredients": "Indo Chinese Combos, Biriyani and Combos, COMBO 4, Rumali + Ghee Rice + Baby Kabab (100 gm) + Chicken Curry & Soft Drinks, traditional spices, herbs",
    "image": "/images/food/manchurian-noodles.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "combo-5",
    "name": "COMBO 5",
    "category": "combos",
    "categoryName": "Combos & Meal Boxes",
    "subCategoryId": "indo-chinese-combos",
    "subCategoryName": "Indo Chinese Combos",
    "groupTitle": "Biriyani and Combos",
    "diet": "nonveg",
    "special": false,
    "price": "\u20b9160",
    "portion": "1 Portion",
    "description": "Bullet Biriyani + Baby Kabab (100 gm) + Soft Drinks + Raita",
    "ingredients": "Indo Chinese Combos, Biriyani and Combos, COMBO 5, Bullet Biriyani + Baby Kabab (100 gm) + Soft Drinks + Raita, traditional spices, herbs",
    "image": "/images/food/manchurian-noodles.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "combo-6",
    "name": "COMBO 6",
    "category": "combos",
    "categoryName": "Combos & Meal Boxes",
    "subCategoryId": "indo-chinese-combos",
    "subCategoryName": "Indo Chinese Combos",
    "groupTitle": "Biriyani and Combos",
    "diet": "nonveg",
    "special": false,
    "price": "\u20b9170",
    "portion": "1 Portion",
    "description": "Basmati Biriyani + 1 PC Tikka + Raita + Soft Drinks",
    "ingredients": "Indo Chinese Combos, Biriyani and Combos, COMBO 6, Basmati Biriyani + 1 PC Tikka + Raita + Soft Drinks, traditional spices, herbs",
    "image": "/images/food/manchurian-noodles.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "combo-7",
    "name": "COMBO 7",
    "category": "combos",
    "categoryName": "Combos & Meal Boxes",
    "subCategoryId": "indo-chinese-combos",
    "subCategoryName": "Indo Chinese Combos",
    "groupTitle": "Biriyani and Combos",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b9130",
    "portion": "1 Portion",
    "description": "Mandi Rice + 1 PC Alfam + Soft Drinks + Tomato Chutney",
    "ingredients": "Indo Chinese Combos, Biriyani and Combos, COMBO 7, Mandi Rice + 1 PC Alfam + Soft Drinks + Tomato Chutney, traditional spices, herbs",
    "image": "/images/food/manchurian-noodles.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "combo-8",
    "name": "COMBO 8",
    "category": "combos",
    "categoryName": "Combos & Meal Boxes",
    "subCategoryId": "indo-chinese-combos",
    "subCategoryName": "Indo Chinese Combos",
    "groupTitle": "Biriyani and Combos",
    "diet": "nonveg",
    "special": true,
    "price": "\u20b9180",
    "portion": "1 Portion",
    "description": "Mandi Rice + 1 PC Alfam + Baby Kabab (100 gm) + Soft Drinks + Tomato Chutney",
    "ingredients": "Indo Chinese Combos, Biriyani and Combos, COMBO 8, Mandi Rice + 1 PC Alfam + Baby Kabab (100 gm) + Soft Drinks + Tomato Chutney, traditional spices, herbs",
    "image": "/images/food/manchurian-noodles.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "box-1",
    "name": "BOX 1 - Veg Fried Rice Box",
    "category": "combos",
    "categoryName": "Combos & Meal Boxes",
    "subCategoryId": "indo-chinese-combos",
    "subCategoryName": "Indo Chinese Combos",
    "groupTitle": "Biriyani and Combos",
    "diet": "veg",
    "special": false,
    "price": "\u20b9150",
    "portion": "1 Portion",
    "description": "Veg Fried Rice + Gobi Manchurian + Soft Drinks + Ketchup",
    "ingredients": "Indo Chinese Combos, Biriyani and Combos, BOX 1 - Veg Fried Rice Box, Veg Fried Rice + Gobi Manchurian + Soft Drinks + Ketchup, traditional spices, herbs",
    "image": "/images/food/manchurian-noodles.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "box-2",
    "name": "BOX 2 - Paneer Fried Rice Box",
    "category": "combos",
    "categoryName": "Combos & Meal Boxes",
    "subCategoryId": "indo-chinese-combos",
    "subCategoryName": "Indo Chinese Combos",
    "groupTitle": "Biriyani and Combos",
    "diet": "veg",
    "special": false,
    "price": "\u20b9200",
    "portion": "1 Portion",
    "description": "Paneer Fried Rice + Paneer Manchurian + Soft Drinks + Ketchup",
    "ingredients": "Indo Chinese Combos, Biriyani and Combos, BOX 2 - Paneer Fried Rice Box, Paneer Fried Rice + Paneer Manchurian + Soft Drinks + Ketchup, traditional spices, herbs",
    "image": "/images/food/manchurian-noodles.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "box-3",
    "name": "BOX 3 - Mushroom Fried Rice Box",
    "category": "combos",
    "categoryName": "Combos & Meal Boxes",
    "subCategoryId": "indo-chinese-combos",
    "subCategoryName": "Indo Chinese Combos",
    "groupTitle": "Biriyani and Combos",
    "diet": "veg",
    "special": false,
    "price": "\u20b9200",
    "portion": "1 Portion",
    "description": "Mushroom Fried Rice + Mushroom Manchurian + Soft Drinks + Ketchup",
    "ingredients": "Indo Chinese Combos, Biriyani and Combos, BOX 3 - Mushroom Fried Rice Box, Mushroom Fried Rice + Mushroom Manchurian + Soft Drinks + Ketchup, traditional spices, herbs",
    "image": "/images/food/manchurian-noodles.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "box-4",
    "name": "BOX 4 - Chicken Fried Rice Box",
    "category": "combos",
    "categoryName": "Combos & Meal Boxes",
    "subCategoryId": "indo-chinese-combos",
    "subCategoryName": "Indo Chinese Combos",
    "groupTitle": "Biriyani and Combos",
    "diet": "nonveg",
    "special": false,
    "price": "\u20b9180",
    "portion": "1 Portion",
    "description": "Chicken Fried Rice + Chicken Manchurian + Soft Drinks + Ketchup",
    "ingredients": "Indo Chinese Combos, Biriyani and Combos, BOX 4 - Chicken Fried Rice Box, Chicken Fried Rice + Chicken Manchurian + Soft Drinks + Ketchup, traditional spices, herbs",
    "image": "/images/food/manchurian-noodles.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "box-5",
    "name": "BOX 5 - Veg Noodles Box",
    "category": "combos",
    "categoryName": "Combos & Meal Boxes",
    "subCategoryId": "indo-chinese-combos",
    "subCategoryName": "Indo Chinese Combos",
    "groupTitle": "Biriyani and Combos",
    "diet": "veg",
    "special": false,
    "price": "\u20b9150",
    "portion": "1 Portion",
    "description": "Veg Noodles + Gobi Chilly + Soft Drinks + Ketchup",
    "ingredients": "Indo Chinese Combos, Biriyani and Combos, BOX 5 - Veg Noodles Box, Veg Noodles + Gobi Chilly + Soft Drinks + Ketchup, traditional spices, herbs",
    "image": "/images/food/manchurian-noodles.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "box-6",
    "name": "BOX 6 - Paneer Noodles Box",
    "category": "combos",
    "categoryName": "Combos & Meal Boxes",
    "subCategoryId": "indo-chinese-combos",
    "subCategoryName": "Indo Chinese Combos",
    "groupTitle": "Biriyani and Combos",
    "diet": "veg",
    "special": false,
    "price": "\u20b9200",
    "portion": "1 Portion",
    "description": "Paneer Noodles + Paneer Chilly + Soft Drinks + Ketchup",
    "ingredients": "Indo Chinese Combos, Biriyani and Combos, BOX 6 - Paneer Noodles Box, Paneer Noodles + Paneer Chilly + Soft Drinks + Ketchup, traditional spices, herbs",
    "image": "/images/food/manchurian-noodles.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "box-7",
    "name": "BOX 7 - Mushroom Noodles Box",
    "category": "combos",
    "categoryName": "Combos & Meal Boxes",
    "subCategoryId": "indo-chinese-combos",
    "subCategoryName": "Indo Chinese Combos",
    "groupTitle": "Biriyani and Combos",
    "diet": "veg",
    "special": false,
    "price": "\u20b9200",
    "portion": "1 Portion",
    "description": "Mushroom Noodles + Mushroom Chilly + Soft Drinks + Ketchup",
    "ingredients": "Indo Chinese Combos, Biriyani and Combos, BOX 7 - Mushroom Noodles Box, Mushroom Noodles + Mushroom Chilly + Soft Drinks + Ketchup, traditional spices, herbs",
    "image": "/images/food/manchurian-noodles.png",
    "portions": null,
    "variations": null
  },
  {
    "id": "box-8",
    "name": "BOX 8 - Chicken Noodles Box",
    "category": "combos",
    "categoryName": "Combos & Meal Boxes",
    "subCategoryId": "indo-chinese-combos",
    "subCategoryName": "Indo Chinese Combos",
    "groupTitle": "Biriyani and Combos",
    "diet": "nonveg",
    "special": false,
    "price": "\u20b9180",
    "portion": "1 Portion",
    "description": "Chicken Noodles + Chicken Chilly + Soft Drinks + Ketchup",
    "ingredients": "Indo Chinese Combos, Biriyani and Combos, BOX 8 - Chicken Noodles Box, Chicken Noodles + Chicken Chilly + Soft Drinks + Ketchup, traditional spices, herbs",
    "image": "/images/food/manchurian-noodles.png",
    "portions": null,
    "variations": null
  }
];
