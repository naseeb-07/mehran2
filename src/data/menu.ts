import { MenuSectionGroup } from "@/types";

export const menuGroups: MenuSectionGroup[] = [
  {
    "id": "group-a",
    "groupCode": "A",
    "title": "Minced Delights",
    "subtitle": "Soothing artisanal soups, royal Haleem, silky hummus dips, and savory minced specialties",
    "categories": [
      {
        "id": "chinese-soups",
        "name": "Chinese Soups",
        "description": "Hearty, warming broths with aromatic herbs and fresh ingredients",
        "image": "/images/food/chinese-soup.png",
        "headerNote": "Available in Veg, Chicken, and Mutton variations",
        "items": [
          {
            "id": "manchow-soup",
            "name": "Manchow Soup",
            "description": "Classic spiced Indo-Chinese broth topped with crispy fried noodles.",
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
            "description": "Zesty, spicy, and tangy broth loaded with finely chopped vegetables and seasonings.",
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
            "description": "Light, wholesome, and gently simmered delicate broth infused with fresh herbs.",
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
            "description": "Velvety sweet corn simmered into a soothing, creamy traditional broth.",
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
            "description": "Steaming aromatic soup packed with tender noodles, vegetables, and savory spices.",
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
            "description": "Refreshing and fragrant broth with freshly squeezed lemon juice and aromatic cilantro.",
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
          }
        ]
      },
      {
        "id": "afghani-soups",
        "name": "Afghani Soups",
        "description": "Authentic slow-simmered shorbas and traditional trotters broth",
        "image": "/images/food/afghani-paya.png",
        "items": [
          {
            "id": "mutton-paya",
            "name": "Mutton Paya",
            "description": "Slow-cooked mutton trotters in a rich, aromatic broth - hearty, warming and deeply flavorful.",
            "price": 220,
            "badge": "House Specialty"
          },
          {
            "id": "chicken-shorba",
            "name": "Chicken Shorba",
            "description": "Light, spiced chicken broth - comforting, fragrant and soothing.",
            "price": 140
          },
          {
            "id": "mutton-shorba",
            "name": "Mutton Shorba",
            "description": "Tender mutton simmered into a mildly spiced, aromatic broth - warm and satisfying.",
            "price": 200
          }
        ]
      },
      {
        "id": "afghani-haleem",
        "name": "Afghani Haleem",
        "description": "Slow-cooked royal meat and lentil porridge, pure comfort and rich texture",
        "image": "/images/food/afghani-haleem.png",
        "items": [
          {
            "id": "mutton-haleem",
            "name": "Mutton Haleem",
            "description": "Slow-cooked mutton and lentil porridge - rich, creamy, and melt-in-the-mouth delicious.",
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
            "badge": "Signature"
          },
          {
            "id": "chicken-haleem",
            "name": "Chicken Haleem",
            "description": "Tender chicken blended with grains and spices - smooth, hearty and deeply satisfying.",
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
            ]
          }
        ]
      },
      {
        "id": "hummus",
        "name": "Hummus",
        "description": "Traditional Middle Eastern chickpea dip and authentic falafel platters",
        "image": "/images/food/hummus-platter.png",
        "items": [
          {
            "id": "hummus-classic",
            "name": "Hummus",
            "description": "Creamy chickpea dip topped with rich black olive oil - smooth, nutty and flavorful.",
            "price": 220,
            "isVeg": true
          },
          {
            "id": "hummus-falafil",
            "name": "Hummus Falafil",
            "description": "Classic hummus served with warm khubus (bread) and crispy falafel - a hearty, satisfying Middle Eastern platter.",
            "price": 300,
            "isVeg": true,
            "badge": "Platter Special"
          }
        ]
      },
      {
        "id": "salads",
        "name": "Salads",
        "description": "Garden-fresh salads, Middle Eastern Fattoush, and crunchy accompaniments",
        "image": "/images/food/fresh-salad.png",
        "items": [
          {
            "id": "mini-green-salad",
            "name": "Mini Green Salad",
            "description": "Fresh mixed greens tossed simply - crisp, light, and refreshing.",
            "price": 50,
            "isVeg": true
          },
          {
            "id": "garlic-channa-fry",
            "name": "Garlic Channa Fry",
            "description": "Flavorful chickpeas stir-fried with roasted garlic, fresh herbs, and a blend of rich Indian spices.",
            "price": 120,
            "isVeg": true
          },
          {
            "id": "green-salad",
            "name": "Green Salad",
            "description": "A classic mix of lettuce, cucumber, and fresh veggies - crisp and healthy.",
            "price": 80,
            "isVeg": true
          },
          {
            "id": "masala-papad",
            "name": "Masala Papad",
            "description": "Crispy papad topped with spicy chopped veggies - crunchy, zesty starter.",
            "price": 100,
            "isVeg": true
          },
          {
            "id": "fattoush-salad",
            "name": "Fattoush Salad",
            "description": "Arabic-style salad with toasted bread, veggies & zesty dressing - fresh & flavorful.",
            "price": 180,
            "isVeg": true,
            "badge": "Arabian Classic"
          },
          {
            "id": "american-cucumber-salad",
            "name": "American Cucumber Salad",
            "description": "Crisp cucumber slices tossed in a light, creamy dressing - cool and refreshing.",
            "price": 120,
            "isVeg": true
          },
          {
            "id": "mehran-special-salad",
            "name": "Mehran Special Salad",
            "description": "A sweet-tangy mix of apple, pineapple and mango - juicy and tropical.",
            "price": 200,
            "isVeg": true,
            "badge": "Special"
          },
          {
            "id": "green-chicken-salad",
            "name": "Green Chicken Salad",
            "description": "Tender chicken tossed with fresh greens and herbs protein-packed and wholesome.",
            "price": 200
          }
        ]
      },
      {
        "id": "kheema",
        "name": "Kheema",
        "description": "Finely minced meats slow-simmered with royal spices, served with fresh Naan or Bun",
        "image": "/images/food/kheema-delight.png",
        "items": [
          {
            "id": "chicken-kheema",
            "name": "Chicken Kheema - Naan / Bun",
            "description": "Finely minced chicken cooked with aromatic spices hearty, flavorful, and perfect with roti or rice.",
            "price": 200
          },
          {
            "id": "mutton-kheema",
            "name": "Mutton Kheema - Naan / Bun",
            "description": "Finely minced mutton cooked with aromatic spices - hearty, flavorful, and perfect with roti or rice.",
            "price": 380,
            "badge": "Rich & Savory"
          }
        ]
      },
      {
        "id": "mutton-liver-kebda",
        "name": "Mutton Liver Kebda",
        "description": "Traditional Middle Eastern saut\u00e9ed & grilled mutton liver specialties",
        "image": "/images/food/mutton-liver-kebda.png",
        "items": [
          {
            "id": "liver-kebda-masala-fry",
            "name": "Liver Kebda Masala Fry",
            "description": "Tender mutton liver sauteed with tomatoes and spices - tangy, soft, and full of rich flavor.",
            "price": 280
          },
          {
            "id": "liver-kebda-bbq",
            "name": "Liver Kebda BBQ",
            "description": "Mutton liver marinated in smoky barbecue spices and grilled for a bold, charred taste.",
            "price": 300,
            "badge": "Charcoal Grilled"
          },
          {
            "id": "liver-kali-mirchi-dry-fry",
            "name": "Liver Kali Mirchi Dry Fry",
            "description": "Spiced mutton liver stir-fried until dry - robust, aromatic, and perfectly textured.",
            "price": 320,
            "isSpicy": true
          }
        ]
      }
    ]
  },
  {
    "id": "group-b",
    "groupCode": "B",
    "title": "Special Gourmet",
    "subtitle": "Charcoal grilled skewers, succulent kababs, tandoori gems, rotisserie Shawaya, and royal Mutton Raan",
    "categories": [
      {
        "id": "sathay",
        "name": "Sathay",
        "description": "Juicy skewered delicacies with distinctive crusts and gourmet glazes",
        "image": "/images/food/chicken-satay.png",
        "items": [
          {
            "id": "crunchy-chicken-sathay",
            "name": "Crunchy Chicken Sathay",
            "description": "Juicy chicken skewers coated in a crisp, golden crust - crunchy outside, tender inside.",
            "portions": [
              {
                "label": "Half",
                "price": 220
              },
              {
                "label": "Full",
                "price": 400
              }
            ]
          },
          {
            "id": "pepper-chicken-sathay",
            "name": "Pepper Chicken Sathay",
            "description": "Skewered chicken marinated in bold pepper spices and grilled for a smoky, spicy kick.",
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
            "isSpicy": true
          },
          {
            "id": "manchurian-sathay",
            "name": "Manchurian Sathay",
            "description": "Chicken skewers tossed in a tangy Manchurian sauce saucy, spicy, and full of Indo-Chinese flavor.",
            "portions": [
              {
                "label": "Half",
                "price": 230
              },
              {
                "label": "Full",
                "price": 420
              }
            ]
          }
        ]
      },
      {
        "id": "egg-shakshuka",
        "name": "Egg Shakshuka",
        "description": "Warm, comforting Middle Eastern poached egg skillets in spiced tomato sauce",
        "image": "/images/food/egg-shakshuka.png",
        "items": [
          {
            "id": "egg-shakshuka-classic",
            "name": "Egg Shakshuka",
            "description": "Eggs gently poached in a rich, spiced tomato-based sauce with herbs - warm, comforting, and full of Middle Eastern flavor.",
            "price": 140
          },
          {
            "id": "cheese-egg-shakshuka",
            "name": "Cheese Egg Shakshuka",
            "description": "Classic shakshuka topped with melted cheese, adding a creamy, indulgent twist to the rich, spiced tomato sauce.",
            "price": 180,
            "badge": "Chef Choice"
          }
        ]
      },
      {
        "id": "the-royal-skewer",
        "name": "The Royal Skewer",
        "description": "Imperial skewered meats flame-grilled to juicy perfection",
        "image": "/images/food/royal-skewers.png",
        "items": [
          {
            "id": "chicken-shish-tawook",
            "name": "Chicken Shish Tawook",
            "description": "Tender chicken cubes marinated in aromatic Middle Eastern spices, skewered and charcoal-grilled to juicy perfection.",
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
            "badge": "Arabian Classic"
          },
          {
            "id": "cheesy-malai-tikka",
            "name": "Cheesy Malai Tikka",
            "description": "Boneless chicken marinated in a rich, creamy malai blend and topped with melted cheese-soft, mild, and indulgent.",
            "portions": [
              {
                "label": "Half (5 PC)",
                "price": 230
              },
              {
                "label": "Full (10 PC)",
                "price": 450
              }
            ]
          },
          {
            "id": "mutton-laham-burg",
            "name": "Mutton Laham Burg",
            "description": "Premium mutton fillet marinated in delicate spices and grilled for a tender, smoky, & succulent bite.",
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
            "badge": "Royal Special"
          },
          {
            "id": "mutton-shish-tawook",
            "name": "Mutton Shish Tawook",
            "description": "Juicy mutton pieces marinated in special house spices, skewered and flame-grilled for deep, robust flavor.",
            "portions": [
              {
                "label": "Half (5 PC)",
                "price": 440
              },
              {
                "label": "Full (10 PC)",
                "price": 800
              }
            ]
          },
          {
            "id": "chicken-mumtaz-kabab",
            "name": "Chicken Mumtaz Kabab",
            "description": "Boneless chicken marinated in rich royal spices, grilled to tender, flavorful perfection.",
            "portions": [
              {
                "label": "Half (5 PC)",
                "price": 180
              },
              {
                "label": "Full (10 PC)",
                "price": 350
              }
            ]
          }
        ]
      },
      {
        "id": "seekh-kabab",
        "name": "Seekh Kabab",
        "description": "Charcoal-skewered minced meats blended with aromatic herbs and house marinades",
        "image": "/images/food/seekh-kabab.png",
        "headerNote": "Available in Chicken and Mutton with Half (4 PC) and Full (8 PC) portions",
        "items": [
          {
            "id": "seekh-kabab-classic",
            "name": "Seekh Kabab",
            "description": "Juicy minced chicken & mutton blended with aromatic herbs and skewered to perfection - smoky tender, and full of flavor.",
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
            "description": "Soft, creamy chicken & mutton seekh marinated in rich cream and mild spices silky-smooth with a delicate, melt-in-your-mouth texture.",
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
            "description": "Succulent chicken & mutton seekh infused with fresh cream, butter, and gentle spices - rich, tender and luxuriously creamy.",
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
            "description": "Fiery chicken & mutton seekh rubbed with bold masala and green chilies a spicy, bold kick for heat lovers.",
            "isSpicy": true,
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
            "description": "Fiery chicken & mutton seekh rubbed with bold masala and green chilies a spicy, bold kick for heat lovers.",
            "isSpicy": true,
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
            "description": "Juicy chicken & mutton seekh filled with a flavorful surprise - smoky, tender, and irresistibly delicious.",
            "badge": "Chef Recommended",
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
            "description": "Juicy minced meat seekh stuffed or topped with melted cheese - smoky, tender, and irresistibly cheesy.",
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
          }
        ]
      },
      {
        "id": "chapli-kabab",
        "name": "Chapli Kabab",
        "description": "Authentic Peshawari pan-fried spiced patties with crispy edges and tender center",
        "image": "/images/food/chapli-kabab.png",
        "items": [
          {
            "id": "chapli-kabab-item",
            "name": "Chapli Kabab",
            "description": "Tender minced chicken & mutton patties, spiced and pan-fried - crispy outside, juicy and aromatic inside.",
            "badge": "Peshawari Special",
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
          }
        ]
      },
      {
        "id": "kofta",
        "name": "Kofta",
        "description": "Spiced hand-rolled meatballs tossed in savory sauces and rich aromatic gravies",
        "image": "/images/food/kofta-curry.png",
        "items": [
          {
            "id": "kofta-curry",
            "name": "Kofta Curry",
            "description": "Spiced chicken meatballs simmered in a rich, aromatic gravy - soft, juicy, and bursting with flavor.",
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
            "description": "Juicy chicken meatballs tossed in a spicy, tangy chilli sauce - bold, fiery, and full of zing.",
            "isSpicy": true,
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
            "description": "Tender chicken meatballs simmered in a rich, creamy malai gravy - smooth, mild, and indulgently flavorful.",
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
            "description": "Tender chicken meatballs simmered in a rich, creamy malai gravy - smooth, mild, and indulgently flavorful.",
            "badge": "Rich & Indulgent",
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
          }
        ]
      },
      {
        "id": "bbq-boneless-chicken",
        "name": "BBQ Boneless Chicken",
        "description": "Tender boneless chicken cuts marinated in yogurt and spices, grilled in the tandoor",
        "image": "/images/food/bbq-boneless-chicken.png",
        "items": [
          {
            "id": "murg-tikka-kabab",
            "name": "Murg Tikka Kabab",
            "description": "Boneless chicken chunks marinated in classic spices, tandoor-grilled till juicy and smoky.",
            "portions": [
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
            "id": "chicken-hariyali-tikka-kabab",
            "name": "Chicken Hariyali Tikka Kabab",
            "description": "Boneless chicken chunks marinated in classic spices, tandoor-grilled till juicy and smoky.",
            "portions": [
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
            "id": "chicken-malai-tikka-kabab",
            "name": "Chicken Malai Tikka Kabab",
            "description": "Creamy, tender chicken pieces marinated in rich malai and mild spices - grilled to silky, melt-in-the-mouth perfection.",
            "portions": [
              {
                "label": "Half (5 PC)",
                "price": 190
              },
              {
                "label": "Full (10 PC)",
                "price": 350
              }
            ]
          },
          {
            "id": "chicken-lassoni-tikka-kabab",
            "name": "Chicken Lassoni Tikka Kabab",
            "description": "Succulent chicken marinated in a rich, garlicky blend - grilled to juicy perfection with a bold, aromatic kick.",
            "portions": [
              {
                "label": "Half (5 PC)",
                "price": 190
              },
              {
                "label": "Full (10 PC)",
                "price": 350
              }
            ]
          },
          {
            "id": "joojeh-kabab",
            "name": "Joojeh Kabab",
            "description": "A flavorful chicken marinade with saffron, turmeric, Greek yogurt, and lemon creates juicy, tender chicken loaded with flavor.",
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
            "badge": "Persian Classic"
          },
          {
            "id": "stuffed-chees-chicken-tikka-kabab",
            "name": "Stuffed Chees Chicken Tikka Kabab",
            "description": "Creamy, rich Cheese marinated in mild malai spices - soft, silky, and melt-in-your-mouth.",
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
            "badge": "Signature Gourmet"
          }
        ]
      },
      {
        "id": "paneer-tikka",
        "name": "Paneer Tikka",
        "description": "Cottage cheese skewers infused with royal marinades and charred in the clay oven",
        "image": "/images/food/paneer-tikka.png",
        "items": [
          {
            "id": "paneer-tikka-kabab",
            "name": "Paneer Tikka Kabab",
            "description": "Fresh paneer marinated in fragrant green herbs, grilled to smoky perfection.",
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
            "isVeg": true
          },
          {
            "id": "paneer-hariyali-tikka-kabab",
            "name": "Paneer Hariyali Tikka Kabab",
            "description": "Fresh paneer infused with vibrant green herbs and spices, marinated in fragrant seasonings and grilled to smoky perfection-herby, flavorful, and delicious.",
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
            "isVeg": true
          },
          {
            "id": "paneer-joojeh-tikka-kabab",
            "name": "Paneer Joojeh Tikka Kabab",
            "description": "Mildly spiced, juicy paneer inspired by Persian-style jojeh flavors - tender and delicate.",
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
            "isVeg": true
          },
          {
            "id": "paneer-lassoni-tikka-kabab",
            "name": "Paneer Lassoni Tikka Kabab",
            "description": "Soft paneer cubes marinated in a bold garlic (lassoni) blend - smoky and aromatic.",
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
            "isVeg": true
          },
          {
            "id": "paneer-malai-tikka-kabab",
            "name": "Paneer Malai Tikka Kabab",
            "description": "Creamy, rich paneer marinated in mild malai spices - soft, silky, and melt-in-your-mouth.",
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
            "isVeg": true
          }
        ]
      },
      {
        "id": "wings-and-lollypop-gourmet",
        "name": "Wings and Lollypop Gourmet",
        "description": "Crispy seared wings and lollipop chicken coated with bold glazes and fiery sauces",
        "image": "/images/food/wings-and-lollypop.png",
        "headerNote": "Available in Wings & Lollypop Half (5 PC) and Full (10 PC)",
        "items": [
          {
            "id": "fairy-tawa-wings",
            "name": "Fairy Tawa Wings",
            "description": "Chicken wings marinated in a special mild-spicy blend, seared on the tawa for a juicy, tender, and flavorful bite.",
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
            "description": "Juicy chicken wings marinated in smoky BBQ sauce and grilled till tender, sticky, and deliciously charred.",
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
            "description": "Chicken legs marinated in fiery peri-peri spices, seared on the tawa for a spicy, smoky, and juicy finish.",
            "isSpicy": true,
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
            "description": "Juicy marinated in bold pepper spices and grilled for a smoky, spicy kick.",
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
            "description": "Chicken tossed in a fiery hot and tangy marinade, then char-grilled for an irresistible zing.",
            "isSpicy": true,
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
            "description": "Grilled smothered in a rich, gooey cheese sauce - smoky, creamy, and indulgent.",
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
            "description": "Spicy coated in a zesty chill masala marinade and grilled till perfectly charred and juicy.",
            "isSpicy": true,
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
            "description": "Extra-juicy Arabic-style grilled chicken, marinated in a rich, masala spice blend for maximum tenderness.",
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
            "description": "Crispy fried chicken lollipops tossed in spicy Schezwan sauce - bold, fiery, and flavorful.",
            "isSpicy": true,
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
            "description": "Golden-fried chicken lollipops coated in a classic Chinese-style sauce crispy, savory, and satisfying.",
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
          }
        ]
      },
      {
        "id": "shawaya-royale",
        "name": "Shawaya Royale",
        "description": "Slow-roasted rotisserie whole chicken steeped in authentic aromatic seasonings",
        "image": "/images/food/shawaya-royale.png",
        "items": [
          {
            "id": "classic-shawaya",
            "name": "Classic Shawaya",
            "description": "Traditional rotisserie chicken marinated in aromatic spices and slow-roasted till juicy and smoky.",
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
            "badge": "Rotisserie Classic"
          },
          {
            "id": "masala-shawaya",
            "name": "Masala Shawaya",
            "description": "Shawaya chicken coated in bold Indian masala spices, slow-roasted for a rich, spicy flavor.",
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
            "isSpicy": true
          }
        ]
      },
      {
        "id": "bbq-starters",
        "name": "BBQ Starters",
        "description": "Charcoal-grilled Alfaham specialties and rich coastal spice marinades",
        "image": "/images/food/alfaham-starters.png",
        "headerNote": "Alfaham & Tikka Available Per Piece - \u20b970 each (Selected: 5 extra Pieces) | Mayo & Dip: Extra \u20b920",
        "items": [
          {
            "id": "alfaham-chicken",
            "name": "Alfaham",
            "description": "Whole or half chicken marinated in Arabic spices and charcoal-grilled for a juicy, smoky flavor.",
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
            "badge": "Signature Alfaham"
          },
          {
            "id": "juicy-lucy-alfaham",
            "name": "Juicy Lucy Alfaham",
            "description": "Extra-juicy Arabic-style grilled chicken, marinated in a rich, masala spice blend for maximum tenderness.",
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
            ]
          },
          {
            "id": "chilly-cheese-alfaham",
            "name": "Chilly Cheese Alfaham",
            "description": "Grilled chicken coated in a spicy chili marinade and finished with a cheesy topping-fiery and indulgent.",
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
            "isSpicy": true
          },
          {
            "id": "butter-chicken-alfaham",
            "name": "Butter Chicken Alfaham",
            "description": "Charcoal-grilled chicken finished with a creamy, buttery sauce - a fusion of smoky and rich flavors.",
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
            ]
          },
          {
            "id": "pepper-chicken-alfaham",
            "name": "Pepper Chicken Alfaham",
            "description": "Arabic-style grilled chicken marinated in bold pepper spices for a spicy, peppery kick.",
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
            "isSpicy": true
          },
          {
            "id": "peri-peri-alfaham",
            "name": "Peri-Peri Alfaham",
            "description": "Grilled chicken infused with fiery peri-peri marinade - tangy, spicy, and irresistibly smoky.",
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
            "isSpicy": true
          },
          {
            "id": "mangalore-tikka-kabab",
            "name": "Mangalore Tikka Kabab",
            "description": "Juicy chicken on the bone, marinated in spicy coastal Mangalorean masala - bold, smoky and full of authentic flavor.",
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
            "badge": "Coastal Special"
          },
          {
            "id": "afgani-chicken-chopan-chops",
            "name": "Afgani Chicken Chopan Chops",
            "description": "Juicy chicken Leg marinated, Afghani-style spices, then charcoal-grilled for a smoky aroma and melt-in-the-mouth texture.",
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
            ]
          },
          {
            "id": "afghani-tandoori-chicken",
            "name": "Afghani Tandoori Chicken",
            "description": "Tender chicken marinated in creamy Afghani-style spices, then charcoal-grilled for a smoky aroma and melt-in-the-mouth texture.",
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
            ]
          }
        ]
      },
      {
        "id": "mutton-raan",
        "name": "Mutton Raan",
        "description": "The House of Royal Raan: whole leg of mutton slow-cooked to tender, juicy royal magnificence",
        "image": "/images/food/mutton-raan.png",
        "items": [
          {
            "id": "raan-zafrani",
            "name": "Zafrani Mutton Raan",
            "description": "Whole leg of mutton marinated in aromatic saffron spices, slow-cooked and roasted for a royal, fragrant flavor.",
            "price": 1350,
            "badge": "Royal Centerpiece"
          },
          {
            "id": "raan-ustaadi-namkeen",
            "name": "Ustaadi Namkeen Mutton Raan",
            "description": "Mutton leg marinated in traditional salty (namkeen) spices, then slow roasted for a rustic, robust taste.",
            "price": 1300
          },
          {
            "id": "raan-chilly-masala-fry",
            "name": "Chilly Masala Fry Mutton Raan",
            "description": "Tender mutton leg spiced with fiery chilli masala, pan-fried for a bold, spicy kick and crispy edges.",
            "price": 1400,
            "isSpicy": true
          },
          {
            "id": "raan-creamy",
            "name": "Creamy Mutton Raan",
            "description": "Whole mutton leg marinated in rich, creamy spices, slow-cooked for a soft, melt-in-the mouth texture.",
            "price": 1400
          },
          {
            "id": "raan-bbq",
            "name": "BBQ Mutton Raan",
            "description": "Marinated in special smoky BBQ spices and charcoal-grilled for a juicy, smoky and caramelized finish.",
            "price": 1350
          }
        ]
      },
      {
        "id": "mutton-chops-starters",
        "name": "Mutton Chops Starters",
        "description": "Prime mutton rib chops marinated in aromatic house spices and flame charred",
        "image": "/images/food/mutton-chops.png",
        "items": [
          {
            "id": "pusthi-kabab",
            "name": "Pusthi Kabab",
            "description": "Tender, juicy mutton pieces marinated in aromatic spices and herbs, then grilled to perfection for a rich, smoky flavour.",
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
            "badge": "Chef Special"
          },
          {
            "id": "tikka-chops",
            "name": "Tikka Chops",
            "description": "Tender, juicy mutton chops marinated in a rich blend of aromatic spices, yogurt, and herbs, then grilled to perfection for a smoky, flavorful and irresistibly succulent bite.",
            "portions": [
              {
                "label": "Half",
                "price": 380
              },
              {
                "label": "Full",
                "price": 720
              }
            ]
          },
          {
            "id": "namkeen-chops",
            "name": "Namkeen Chops",
            "description": "Tender mutton chops marinated with a flavorful blend of aromatic spices and herbs, then cooked to juicy perfection.",
            "portions": [
              {
                "label": "Half",
                "price": 370
              },
              {
                "label": "Full",
                "price": 700
              }
            ]
          },
          {
            "id": "chilly-masala-chops",
            "name": "Chilly Masala Chops",
            "description": "Tender mutton chops cooked with a bold blend of chillies, aromatic spices, and masala, delivering a deliciously spicy, juicy, and flavour-packed bite.",
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
            "isSpicy": true
          },
          {
            "id": "creamy-chops",
            "name": "Creamy Chops",
            "description": "Tender, juicy mutton chops marinated in a rich, creamy blend of aromatic spices and herbs, then cooked to perfection. Smooth, mildly spiced, and irresistibly flavourful with every bite.",
            "portions": [
              {
                "label": "Half",
                "price": 400
              },
              {
                "label": "Full",
                "price": 750
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "group-c",
    "groupCode": "C",
    "title": "Indian and Chinese Delights",
    "subtitle": "Classic wok-tossed appetizers, slow-simmered regional gravies, fragrant rice & noodles, and hot tandoor breads",
    "categories": [
      {
        "id": "chinese-and-indian-starters",
        "name": "Chinese and Indian Starters",
        "description": "Sizzling wok appetizers and coastal dry roasts across vegetarian, egg, chicken, and mutton",
        "image": "/images/food/chicken-starters.png",
        "items": [
          {
            "id": "starter-manchurian",
            "name": "Manchurian Starter",
            "description": "Classic sweet, savory, and spicy Indo-Chinese wok preparation.",
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
            "description": "Tossed with green chilies, bell peppers, onions, and spicy soy garlic glaze.",
            "isSpicy": true,
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
            "description": "Crushed black peppercorns, curry leaves, and South Indian spices saut\u00e9ed dry.",
            "isSpicy": true,
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
            "description": "Zesty citrus marinade with herbs and mild aromatic seasonings.",
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
            "description": "Rich golden roasted garlic sauce tossed with fresh herbs in the wok.",
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
            "description": "Spicy, crispy deep-fried delicacy tossed with curry leaves and fiery red chili seasonings.",
            "isSpicy": true,
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
            "description": "Authentic Mangalorean roasted coconut and dry spice specialty.",
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
            "description": "Classic Kundapur/Mangalorean clarified butter roasted chicken in fiery red paste.",
            "price": 300,
            "badge": "Coastal Favorite",
            "isSpicy": true
          },
          {
            "id": "indian-chilly-chicken-dry",
            "name": "Indian Chilly Chicken Dry (Boneless)",
            "description": "Desi style dry chicken preparation tossed with fresh slit chillies.",
            "price": 300
          },
          {
            "id": "indian-chicken-pepper-dry",
            "name": "Indian Chicken Pepper Dry",
            "description": "Dry chicken fry laced with freshly crushed Tellicherry peppercorns.",
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
            "description": "Shredded crispy chicken strips tossed in sweet & spicy Indo-Chinese sauce.",
            "price": 350
          },
          {
            "id": "dragon-chicken",
            "name": "Dragon Chicken",
            "description": "Crispy chicken strips tossed with cashew nuts, dried red chillies and tangy glaze.",
            "price": 350,
            "isSpicy": true
          },
          {
            "id": "drums-of-heaven",
            "name": "Drums of Heaven (Leg)",
            "description": "Chicken lollipops tossed in a sweet-spicy savory sauce with spring onions.",
            "portions": [
              {
                "label": "Bone Half",
                "price": 160
              },
              {
                "label": "Bone Full",
                "price": 300
              }
            ]
          },
          {
            "id": "egg-omlet",
            "name": "Omlet",
            "description": "Fluffy beaten eggs cooked with onions, green chillies, and fresh herbs.",
            "price": 80
          },
          {
            "id": "boiled-egg",
            "name": "Boiled Egg",
            "description": "Freshly boiled eggs served with salt and pepper.",
            "price": 40
          },
          {
            "id": "bullseye",
            "name": "Bullseye",
            "description": "Sunny side up fried egg with seasoned runny yolk.",
            "price": 60
          },
          {
            "id": "egg-burji",
            "name": "Egg Burji",
            "description": "Spiced scrambled eggs tossed with saut\u00e9ed onions, tomatoes and green chillies.",
            "price": 100
          }
        ]
      },
      {
        "id": "indian-gravy",
        "name": "Indian Gravy",
        "description": "Traditional, richly spiced curry preparations showcasing authentic Indian flavors and slow cooked perfection",
        "image": "/images/food/chicken-gravy.png",
        "items": [
          {
            "id": "gravy-masala",
            "name": "Masala Gravy",
            "description": "Traditional onion-tomato gravy slow-cooked with whole spices.",
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
            "description": "Nutty, creamy gravy enriched with coconut, poppy seeds, and cashew paste.",
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
            "description": "Silky, sweet-tangy tomato and butter gravy finished with fresh cream and fenugreek.",
            "badge": "Popular",
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
            "description": "Spicy, dark gravy infused with freshly cracked Tellicherry black pepper.",
            "isSpicy": true,
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
            "description": "Fiery red gravy spiced with roasted Kolhapuri masalas and dry coconut.",
            "isSpicy": true,
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
            "description": "Rich Nizami gravy prepared with browned onions, yogurt, and aromatic spices.",
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
            "description": "Thick gravy infused with roasted coriander seeds, capsicum, and crushed spices.",
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
            "description": "Fragrant and comforting mild coconut milk broth with aromatic spices.",
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
            "description": "Royal Mughlai curry simmered in egg yolk and almond-cashew paste.",
            "badge": "Royal Special",
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
            "description": "Yellow lentils tempered with ghee, cumin, garlic, and red chilies.",
            "price": 120,
            "isVeg": true
          },
          {
            "id": "dal-fry",
            "name": "Dal Fry",
            "description": "Delicious lentils saut\u00e9ed with onions, tomatoes, and aromatic seasonings.",
            "price": 100,
            "isVeg": true
          }
        ]
      },
      {
        "id": "fried-rice-and-noodles",
        "name": "Fried Rice and Noodles",
        "description": "Wok-tossed noodles and fragrant fried rice dishes inspired by Asian street food classics",
        "image": "/images/food/veg-noodles.png",
        "items": [
          {
            "id": "fried-rice-noodles-classic",
            "name": "Fried Rice / Noodles",
            "description": "Classic wok-tossed long grain rice or noodles with crisp veggies and soy seasoning.",
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
            "description": "Spicy wok preparation tossed in pungent, authentic Schezwan sauce.",
            "isSpicy": true,
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
            "description": "Loaded combination of fried rice, noodles, and crispy chicken chunks tossed in rich gravy.",
            "price": 220,
            "badge": "Signature Fusion"
          },
          {
            "id": "manchurian-fried-rice-noodles",
            "name": "Manchurian Fried Rice / Noodles",
            "description": "Wok-tossed rice or noodles accompanied with savory Manchurian balls and sauce.",
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
            "description": "Citrus-infused fragrant wok preparation with fresh cilantro and seasoning.",
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
          }
        ]
      },
      {
        "id": "indian-breads",
        "name": "Indian Breads",
        "description": "Fluffy tandoor-baked breads, flaky layered parathas, and traditional accompaniments",
        "image": "/images/food/naan.png",
        "items": [
          {
            "id": "plain-kulcha",
            "name": "Plain Kulcha",
            "description": "Soft, fluffy tandoor-baked stuffed bread.",
            "price": 40,
            "isVeg": true
          },
          {
            "id": "butter-kulcha",
            "name": "Butter Kulcha",
            "description": "Soft kulcha brushed generously with melted butter.",
            "price": 45,
            "isVeg": true
          },
          {
            "id": "paneer-kulcha",
            "name": "Paneer Kulcha",
            "description": "Tandoor bread stuffed with seasoned spiced cottage cheese.",
            "price": 70,
            "isVeg": true
          },
          {
            "id": "chicken-kulcha",
            "name": "Chicken Kulcha",
            "description": "Fluffy tandoor bread stuffed with flavorful minced chicken.",
            "price": 100
          },
          {
            "id": "plain-naan",
            "name": "Plain Naan",
            "description": "Classic, leavened Indian flatbread from the tandoor - pillowy and slightly charred.",
            "price": 40,
            "isVeg": true
          },
          {
            "id": "butter-naan",
            "name": "Butter Naan",
            "description": "Tandoori flatbread glazed with pure melted butter.",
            "price": 45,
            "isVeg": true
          },
          {
            "id": "garlic-naan",
            "name": "Garlic Naan",
            "description": "Topped with minced garlic and chopped fresh cilantro.",
            "price": 60,
            "isVeg": true,
            "badge": "Tandoor Favorite"
          },
          {
            "id": "paneer-naan",
            "name": "Paneer Naan",
            "description": "Stuffed with grated paneer and subtle spices.",
            "price": 70,
            "isVeg": true
          },
          {
            "id": "cheese-naan",
            "name": "Cheese Naan",
            "description": "Indulgent flatbread oozing with melted cheese.",
            "price": 80,
            "isVeg": true
          },
          {
            "id": "cheese-garlic-naan",
            "name": "Cheese Garlic Naan",
            "description": "The ultimate pairing of roasted garlic and golden melted cheese.",
            "price": 100,
            "isVeg": true
          },
          {
            "id": "dil-pasand",
            "name": "Dil Pasand Naan",
            "description": "Royal sweet-stuffed tandoor bread with nuts and desiccated coconut.",
            "price": 100,
            "isVeg": true
          },
          {
            "id": "tandoori-roti",
            "name": "Tandoori Roti",
            "description": "Wholesome whole-wheat bread baked on the hot clay wall.",
            "price": 25,
            "isVeg": true
          },
          {
            "id": "butter-tandoori-roti",
            "name": "Butter Tandoori Roti",
            "description": "Crisp whole wheat tandoori roti with melted butter.",
            "price": 30,
            "isVeg": true
          },
          {
            "id": "lacha-parota",
            "name": "Lacha Parota",
            "description": "Flaky, multi-layered golden paratha cooked on the griddle.",
            "price": 40,
            "isVeg": true
          },
          {
            "id": "lacha-naan",
            "name": "Lacha Naan",
            "description": "Flaky layered tandoor-baked naan with rich texture.",
            "price": 50,
            "isVeg": true
          },
          {
            "id": "parotta",
            "name": "Parotta",
            "description": "Soft and flaky layered flatbread.",
            "price": 20,
            "isVeg": true
          },
          {
            "id": "rumali",
            "name": "Rumali Roti",
            "description": "Ultra-thin, handkerchief-soft bread.",
            "price": 25,
            "isVeg": true
          },
          {
            "id": "kuboos",
            "name": "Kuboos",
            "description": "Authentic Arabian pita pocket bread.",
            "price": 10,
            "isVeg": true
          },
          {
            "id": "fresh-bun",
            "name": "Bun",
            "description": "Soft and fresh bakery bun.",
            "price": 25,
            "isVeg": true
          }
        ]
      }
    ]
  },
  {
    "id": "group-d",
    "groupCode": "D",
    "title": "Mandi Delicacies",
    "subtitle": "The Crown Jewel of Mehran: slow-cooked meats served over fragrant zafrani & kabuli rice in traditional royal platters",
    "categories": [
      {
        "id": "chicken-kabuli-zafrani-mandi",
        "name": "Chicken Kabuli Zafrani Mandi",
        "description": "Tender chicken cooked in zafrani (saffron-infused) spices, served over rich Kabuli rice with nuts and raisins a royal twist on classic Mandi",
        "image": "/images/food/mandi-chicken-kabuli-zafrani.png",
        "items": [
          {
            "id": "dish-chicken-kabuli-zafrani-mandi",
            "name": "Chicken Kabuli Zafrani Mandi",
            "description": "Tender chicken cooked in zafrani (saffron-infused) spices, served over rich Kabuli rice with nuts and raisins a royal twist on classic Mandi",
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
            "badge": "Signature Zafrani"
          }
        ]
      },
      {
        "id": "alfaham-kabuli-mandi",
        "name": "Alfaham Kabuli Mandi",
        "description": "Smoky charcoal grilled Al Faham chicken placed over fragrant Kabuli rice bold, smoky and layered with traditional flavors",
        "image": "/images/food/mandi-alfaham-kabuli.png",
        "items": [
          {
            "id": "dish-alfaham-kabuli-mandi",
            "name": "Alfaham Kabuli Mandi",
            "description": "Smoky charcoal grilled Al Faham chicken placed over fragrant Kabuli rice bold, smoky and layered with traditional flavors.",
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
            "badge": "Charcoal Favorite"
          }
        ]
      },
      {
        "id": "juicy-lucy-alfaham-mandi",
        "name": "Juicy Lucy Alfaham Mandi",
        "description": "Juicy alfaham chicken paired with aromatic mandi rice, infused with traditional spices",
        "image": "/images/food/mandi-juicy-lucy-alfaham.png",
        "items": [
          {
            "id": "dish-juicy-lucy-alfaham-mandi",
            "name": "Juicy Lucy Alfaham Mandi",
            "description": "Juicy alfaham chicken paired with aromatic mandi rice, infused with traditional spices.",
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
            "badge": "Extra Tender"
          }
        ]
      },
      {
        "id": "chilly-cheese-alfaham-mandi",
        "name": "Chilly Cheese Alfaham Mandi",
        "description": "Grilled chicken coated in a spicy chili marinade and finished with a cheesy topping-fiery and indulgent",
        "image": "/images/food/mandi-chilly-cheese-alfaham.png",
        "items": [
          {
            "id": "dish-chilly-cheese-alfaham-mandi",
            "name": "Chilly Cheese Alfaham Mandi",
            "description": "Grilled chicken coated in a spicy chili marinade and finished with a cheesy topping-fiery and indulgent.",
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
            "isSpicy": true
          }
        ]
      },
      {
        "id": "chicken-tikka-kabuli-mandi",
        "name": "Chicken Tikka Kabuli Mandi",
        "description": "Flame-grilled chicken tikka paired with nutty Kabuli rice a delicious fusion of tandoori and mandi goodness",
        "image": "/images/food/mandi-chicken-tikka-kabuli.png",
        "items": [
          {
            "id": "dish-chicken-tikka-kabuli-mandi",
            "name": "Chicken Tikka Kabuli Mandi",
            "description": "Flame-grilled chicken tikka paired with nutty Kabuli rice a delicious fusion of tandoori and mandi goodness.",
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
            ]
          }
        ]
      },
      {
        "id": "butter-chicken-alfaham-mandi",
        "name": "Butter Chicken Alfaham Mandi",
        "description": "Charcoal-grilled chicken finished with a creamy, buttery sauce - a fusion of smoky and rich flavors",
        "image": "/images/food/mandi-butter-chicken-alfaham.png",
        "items": [
          {
            "id": "dish-butter-chicken-alfaham-mandi",
            "name": "Butter Chicken Alfaham Mandi",
            "description": "Charcoal-grilled chicken finished with a creamy, buttery sauce - a fusion of smoky and rich flavors.",
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
            "badge": "Rich Butter Sauce"
          }
        ]
      },
      {
        "id": "pepper-chicken-alfaham-mandi",
        "name": "Pepper Chicken Alfaham Mandi",
        "description": "Arabic-style grilled chicken marinated in bold pepper spices for a spicy, peppery kick",
        "image": "/images/food/mandi-pepper-chicken-alfaham.png",
        "items": [
          {
            "id": "dish-pepper-chicken-alfaham-mandi",
            "name": "Pepper Chicken Alfaham Mandi",
            "description": "Arabic-style grilled chicken marinated in bold pepper spices for a spicy, peppery kick.",
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
            "isSpicy": true
          }
        ]
      },
      {
        "id": "peri-peri-alfaham-mandi",
        "name": "Peri-Peri Alfaham Mandi",
        "description": "Grilled chicken infused with fiery peri-peri marinade - tangy, spicy, and irresistibly smoky",
        "image": "/images/food/mandi-peri-peri-alfaham.png",
        "items": [
          {
            "id": "dish-peri-peri-alfaham-mandi",
            "name": "Peri-Peri Alfaham Mandi",
            "description": "Grilled chicken infused with fiery peri-peri marinade - tangy, spicy, and irresistibly smoky.",
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
            "isSpicy": true
          }
        ]
      },
      {
        "id": "chicken-shawaya-mandi",
        "name": "Chicken Shawaya Mandi",
        "description": "Juicy shawaya-style grilled chicken paired with fragrant mandi rice and traditional spices",
        "image": "/images/food/mandi-chicken-shawaya.png",
        "items": [
          {
            "id": "dish-chicken-shawaya-mandi",
            "name": "Chicken Shawaya Mandi (Grill Chicken)",
            "description": "Juicy shawaya-style grilled chicken paired with fragrant mandi rice and traditional spices.",
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
            "badge": "Rotisserie Feast"
          }
        ]
      },
      {
        "id": "masala-chicken-shawaya-mandi",
        "name": "Masala Chicken Shawaya Mandi",
        "description": "Tender, flame-grilled shawaya chicken infused with bold masala spices, served over aromatic mandi rice for a rich, flavorful experience",
        "image": "/images/food/mandi-masala-chicken-shawaya.png",
        "items": [
          {
            "id": "dish-masala-chicken-shawaya-mandi",
            "name": "Masala Chicken Shawaya Mandi",
            "description": "Tender, flame-grilled shawaya chicken infused with bold masala spices, served over aromatic mandi rice for a rich, flavorful experience.",
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
            "isSpicy": true
          }
        ]
      },
      {
        "id": "mutton-kabuli-mandi",
        "name": "Mutton Kabuli Mandi",
        "description": "Juicy mutton slow-cooked in aromatic spices, served over saffron-infused Kabuli rice -rich, flavorful, and deeply satisfying",
        "image": "/images/food/mandi-mutton-kabuli.png",
        "items": [
          {
            "id": "dish-mutton-kabuli-mandi",
            "name": "Mutton Kabuli Mandi",
            "description": "Juicy mutton slow-cooked in aromatic spices, served over saffron-infused Kabuli rice -rich, flavorful, and deeply satisfying.",
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
            "badge": "Signature Mutton"
          }
        ]
      },
      {
        "id": "mutton-zafrani-mandi",
        "name": "Mutton Zafrani Mandi",
        "description": "Premium mutton slow-cooked with luxurious zafrani spices an indulgent blend of tenderness and aroma served over fragrant rice",
        "image": "/images/food/mandi-mutton-zafrani.png",
        "items": [
          {
            "id": "dish-mutton-zafrani-mandi",
            "name": "Mutton Zafrani Mandi",
            "description": "Premium mutton slow-cooked with luxurious zafrani spices an indulgent blend of tenderness and aroma served over fragrant rice..",
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
            "badge": "Royal Zafrani"
          }
        ]
      },
      {
        "id": "mutton-pushti-kabab-mandi",
        "name": "Mutton Pushti Kabab Mandi",
        "description": "Rich, juicy mutton pusti kababs laid on fragrant mandi rice a bold, meaty dish with irresistible aroma and spice",
        "image": "/images/food/mandi-mutton-pushti-kabab.png",
        "items": [
          {
            "id": "dish-mutton-pushti-kabab-mandi",
            "name": "Mutton Pushti Kabab Mandi",
            "description": "Rich, juicy mutton pusti kababs laid on fragrant mandi rice a bold, meaty dish with irresistible aroma and spice.",
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
            "badge": "Imperial Specialty"
          }
        ]
      },
      {
        "id": "mutton-maicha-mandi",
        "name": "Mutton Maicha Mandi",
        "description": "Slow-cooked nalli mutton, rich in flavor, paired with fragrant mandi rice and traditional spices",
        "image": "/images/food/mandi-mutton-maicha.png",
        "items": [
          {
            "id": "dish-mutton-maicha-mandi",
            "name": "Mutton Maicha Mandi",
            "description": "Slow-cooked nalli mutton, rich in flavor, paired with fragrant mandi rice and traditional spices.",
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
            "badge": "Nalli Mutton Special"
          }
        ]
      },
      {
        "id": "mutton-seekh-kabab-mandi",
        "name": "Mutton Seekh Kabab Mandi",
        "description": "Flavorful mutton seekh kababs grilled to perfection and served on a bed of mandi rice smoky, spiced, and satisfying",
        "image": "/images/food/mandi-seekh-kabab.png",
        "items": [
          {
            "id": "dish-mutton-seekh-kabab-mandi",
            "name": "Mutton Seekh Kabab Mandi",
            "description": "Flavorful mutton seekh kababs grilled to perfection and served on a bed of mandi rice smoky, spiced, and satisfying.",
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
            ]
          }
        ]
      },
      {
        "id": "chicken-seekh-kabab-mandi",
        "name": "Chicken Seekh Kabab Mandi",
        "description": "Flavorful chicken seekh kababs grilled to perfection and served on a bed of mandi rice smoky, spiced, and satisfying",
        "image": "/images/food/mandi-seekh-kabab.png",
        "items": [
          {
            "id": "dish-chicken-seekh-kabab-mandi",
            "name": "Chicken Seekh Kabab Mandi",
            "description": "Flavorful chicken seekh kababs grilled to perfection and served on a bed of mandi rice smoky, spiced, and satisfying.",
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
            ]
          }
        ]
      },
      {
        "id": "mutton-raan-mandi",
        "name": "Mutton Raan Mandi",
        "description": "A whole mutton leg, marinated and cooked to perfection, served over mandi rice a grand and flavorful centerpiece",
        "image": "/images/food/mandi-mutton-raan-ribs.png",
        "items": [
          {
            "id": "dish-mutton-raan-mandi",
            "name": "Mutton Raan Mandi",
            "description": "A whole mutton leg, marinated and cooked to perfection, served over mandi rice a grand and flavorful centerpiece.",
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
            "badge": "Ultimate Grand Centerpiece"
          }
        ]
      },
      {
        "id": "mutton-ribs-mandi",
        "name": "Mutton Ribs Mandi",
        "description": "Tender mutton ribs, spice-rubbed and steamed till soft, resting over classic mandi rice melt-in-the-mouth richness",
        "image": "/images/food/mandi-mutton-raan-ribs.png",
        "items": [
          {
            "id": "dish-mutton-ribs-mandi",
            "name": "Mutton Ribs Mandi",
            "description": "Tender mutton ribs, spice-rubbed and steamed till soft, resting over classic mandi rice melt-in-the-mouth richness.",
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
            "badge": "Prime Ribs"
          }
        ]
      },
      {
        "id": "sea-food-mandi",
        "name": "Sea Food Mandi",
        "description": "Fresh catch of the day delicately seasoned with Arabian spices and cooked over aromatic mandi rice",
        "image": "/images/food/mandi-alfaham-kabuli.png",
        "items": [
          {
            "id": "seafood-mandi-anjal",
            "name": "Sea Food Mandi - Anjal",
            "description": "Prime Kingfish (Anjal) marinated in exotic coastal spices and served over authentic mandi rice.",
            "price": "ASP",
            "badge": "Catch of the Day (ASP)"
          },
          {
            "id": "seafood-mandi-basha",
            "name": "Sea Food Mandi - Basha",
            "description": "Delicious Basha fish prepared with traditional Middle Eastern herbs and paired with fragrant rice.",
            "price": "ASP",
            "badge": "Catch of the Day (ASP)"
          }
        ]
      },
      {
        "id": "mandi-platter",
        "name": "Mandi Platter",
        "description": "A grand feast featuring assorted mutton specialties ideal for sharing and celebrating authentic Arabian flavors",
        "image": "/images/food/mandi-mutton-raan-ribs.png",
        "items": [
          {
            "id": "dish-mandi-platter",
            "name": "Mandi Platter",
            "description": "A grand feast featuring assorted mutton specialties ideal for sharing and celebrating authentic Arabian flavors.",
            "price": "ASP",
            "badge": "Celebration Platter (ASP)"
          }
        ]
      },
      {
        "id": "additional-mandi-items",
        "name": "Additional Mandi Items",
        "description": "Extra fragrant rice portions and slow-cooked protein sides to complement your royal feast",
        "image": "/images/food/mandi-chicken-kabuli-zafrani.png",
        "items": [
          {
            "id": "kabuli-mandi-rice",
            "name": "Kabuli Mandi Rice",
            "description": "Traditional Kabuli-style rice with dry fruits and spices - aromatic, mildly sweet, and ideal for pairing or solo enjoyment.",
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
            ]
          },
          {
            "id": "chicken-mandi-piece",
            "name": "Chicken Mandi Piece",
            "description": "A portion of chicken marinated in Arabic spices and slow-cooked great as a side or extra protein with your mandi rice.",
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
            ]
          },
          {
            "id": "mutton-mandi-piece",
            "name": "Mutton Mandi Piece",
            "description": "Tender mutton piece infused with mandi spices perfect for those wanting a little extra meat.",
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
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "group-e",
    "groupCode": "E",
    "title": "Biriyani and Combos",
    "subtitle": "Signature Dum Biriyanis layered with long-grain basmati and value-packed Indo-Chinese combo meals",
    "categories": [
      {
        "id": "biriyani-delicacies",
        "name": "Biriyani Delicacies",
        "description": "Authentic fragrant dum biriyanis slow-cooked with royal spices and choice cuts of meat",
        "image": "/images/food/biriyani-delicacies.png",
        "items": [
          {
            "id": "bullet-chicken-biriyani",
            "name": "Bullet Chicken Biriyani",
            "description": "Spicy, fiery Chicken biriyani packed with bold flavors and a signature bullet masala punch - a must-try for heat lovers!",
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
            "isSpicy": true,
            "badge": "Heat Lovers Favorite"
          },
          {
            "id": "shaadi-ki-biriyani",
            "name": "Shaadi Ki Biriyani",
            "description": "Aromatic basmati rice layered with tender chicken, slow-cooked with traditional spices for that rich, satisfying biriyani experience.",
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
            "badge": "Wedding Style Dum"
          },
          {
            "id": "chicken-tikka-biriyani",
            "name": "Chicken Tikka Biriyani",
            "description": "Juicy, char-grilled chicken tikka pieces nestled in fragrant biriyani rice - smoky, spicy and deeply flavorful.",
            "portions": [
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
            "id": "mutton-biriyani",
            "name": "Mutton Biriyani",
            "description": "Premium cuts of mutton simmered in aromatic spices, layered with long-grain rice - a royal biriyani feast in every bite.",
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
            "badge": "Royal Mutton Dum"
          },
          {
            "id": "bullet-biriyani-rice",
            "name": "Bullet Biriyani Rice",
            "description": "Spicy, flavorful rice cooked with the famous bullet masala blend - perfect as a fiery side or standalone treat.",
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
            "isSpicy": true
          },
          {
            "id": "basmati-biriyani-rice",
            "name": "Basmati Biriyani Rice",
            "description": "Light, fluffy basmati rice infused with classic biriyani spices - ideal for pairing with your favorite grills or curries.",
            "portions": [
              {
                "label": "Half",
                "price": 70
              },
              {
                "label": "Full",
                "price": 120
              }
            ]
          }
        ]
      },
      {
        "id": "indo-chinese-combos",
        "name": "Indo Chinese Combos",
        "description": "Value-packed meals featuring combinations of ghee rice, biryani, mandi rice, and Indo-Chinese boxes",
        "image": "/images/food/manchurian-noodles.png",
        "headerNote": "Individual and Sharing Combo Meals & Box Specials",
        "items": [
          {
            "id": "combo-1",
            "name": "COMBO 1",
            "description": "Ghee Rice + Baby Kabab (60 gm) + Daal + Soft Drinks",
            "price": 100,
            "badge": "Value Combo"
          },
          {
            "id": "combo-2",
            "name": "COMBO 2",
            "description": "Ghee Rice + Baby Kabab (60 gm) + Chicken Curry + Daal & Soft Drinks",
            "price": 120
          },
          {
            "id": "combo-3",
            "name": "COMBO 3",
            "description": "Bullet Biriyani Rice + Baby Kabab (60 gm) + Raita + Soft Drinks",
            "price": 130
          },
          {
            "id": "combo-4",
            "name": "COMBO 4",
            "description": "Rumali + Ghee Rice + Baby Kabab (100 gm) + Chicken Curry & Soft Drinks",
            "price": 180,
            "badge": "Full Meal"
          },
          {
            "id": "combo-5",
            "name": "COMBO 5",
            "description": "Bullet Biriyani + Baby Kabab (100 gm) + Soft Drinks + Raita",
            "price": 160
          },
          {
            "id": "combo-6",
            "name": "COMBO 6",
            "description": "Basmati Biriyani + 1 PC Tikka + Raita + Soft Drinks",
            "price": 170
          },
          {
            "id": "combo-7",
            "name": "COMBO 7",
            "description": "Mandi Rice + 1 PC Alfam + Soft Drinks + Tomato Chutney",
            "price": 130,
            "badge": "Mandi Special Combo"
          },
          {
            "id": "combo-8",
            "name": "COMBO 8",
            "description": "Mandi Rice + 1 PC Alfam + Baby Kabab (100 gm) + Soft Drinks + Tomato Chutney",
            "price": 180,
            "badge": "Mandi Royal Combo"
          },
          {
            "id": "box-1",
            "name": "BOX 1 - Veg Fried Rice Box",
            "description": "Veg Fried Rice + Gobi Manchurian + Soft Drinks + Ketchup",
            "price": 150,
            "isVeg": true
          },
          {
            "id": "box-2",
            "name": "BOX 2 - Paneer Fried Rice Box",
            "description": "Paneer Fried Rice + Paneer Manchurian + Soft Drinks + Ketchup",
            "price": 200,
            "isVeg": true
          },
          {
            "id": "box-3",
            "name": "BOX 3 - Mushroom Fried Rice Box",
            "description": "Mushroom Fried Rice + Mushroom Manchurian + Soft Drinks + Ketchup",
            "price": 200,
            "isVeg": true
          },
          {
            "id": "box-4",
            "name": "BOX 4 - Chicken Fried Rice Box",
            "description": "Chicken Fried Rice + Chicken Manchurian + Soft Drinks + Ketchup",
            "price": 180
          },
          {
            "id": "box-5",
            "name": "BOX 5 - Veg Noodles Box",
            "description": "Veg Noodles + Gobi Chilly + Soft Drinks + Ketchup",
            "price": 150,
            "isVeg": true
          },
          {
            "id": "box-6",
            "name": "BOX 6 - Paneer Noodles Box",
            "description": "Paneer Noodles + Paneer Chilly + Soft Drinks + Ketchup",
            "price": 200,
            "isVeg": true
          },
          {
            "id": "box-7",
            "name": "BOX 7 - Mushroom Noodles Box",
            "description": "Mushroom Noodles + Mushroom Chilly + Soft Drinks + Ketchup",
            "price": 200,
            "isVeg": true
          },
          {
            "id": "box-8",
            "name": "BOX 8 - Chicken Noodles Box",
            "description": "Chicken Noodles + Chicken Chilly + Soft Drinks + Ketchup",
            "price": 180
          }
        ]
      }
    ]
  }
];

// Flat list of all categories for quick navigation
export const allCategories = menuGroups.flatMap((group) =>
  group.categories.map((cat) => ({
    id: cat.id,
    name: cat.name,
    groupId: group.id,
    groupTitle: group.title,
    groupCode: group.groupCode,
    itemCount: cat.items.length,
    image: cat.image,
  }))
);

// Flat list of all items for search
export const allMenuItems = menuGroups.flatMap((group) =>
  group.categories.flatMap((cat) =>
    cat.items.map((item) => ({
      ...item,
      categoryName: cat.name,
      categoryId: cat.id,
      groupId: group.id,
      groupTitle: group.title,
    }))
  )
);
