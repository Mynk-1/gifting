export const customizableProducts = {
  mugs: {
    id: "custom-mug-01",
    category: "mugs",
    productType: "Customizable Mug",
    name: "Personalized Photo Mug",
    description: "High-quality ceramic mug with your cherished photos",
    shortDescription: "Create lasting memories with our premium photo mugs",
    price: 24.99,
    maxUploads: 6,
    customizationOptions: {
      allowText: true,
      maxTextLength: 100,
      textPlaceholder: "Enter text to appear on your mug...",
      types: [
        {
          name: "Plain",
          id: "plain",
          previewImages: [
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/1_tstm8y.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/3_dpzekb.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/2_iinjrc.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/7_sc25gi.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/5_i8j4lf.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/4_ehqxwf.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/6_oouvzy.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739429980/8_yfpmm1.png"
          ]
        },
        {
          name: "Magic",
          id: "magic",
          previewImages: [
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739435220/m1_u7kkio.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739435220/m1_u7kkio.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739435218/m2_gynqlg.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739435217/m3_enp2dl.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739435217/m3_enp2dl.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739435220/m1_u7kkio.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739435220/m1_u7kkio.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739435220/m1_u7kkio.jpg",
          ],
          description: "Changes color when hot liquid is added"
        },
        {
          name: "Heart Handle",
          id: "color",
          previewImages: [
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739435565/h1_hxdz7s.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739435565/h1_hxdz7s.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739435567/h2_af6nxg.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739435569/h3_s5pgrj.webp",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739435565/h1_hxdz7s.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739435565/h1_hxdz7s.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739435567/h2_af6nxg.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739435567/h2_af6nxg.jpg",
          ]
        },
        {
          name: "Colour Handle",
          id: "heart",
          previewImages: [
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/heart/1.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/heart/2.jpg",
          ]
        }
      ]
    },
    productDetails: {
      material: "Premium Ceramic",
      printMethod: "Sublimation Printing",
      features: [
        "Dishwasher safe",
        "Microwave safe",
        "Fade-resistant printing",
        "High-quality ceramic"
      ]
    },
    shipping: {
      processingTime: "3-5 business days",
      freeShippingThreshold: 50,
      shippingNote: "Free shipping on orders over $50"
    },
    careInstructions: "Hand washing is recommended to preserve print quality. Microwave safe but avoid extended heating periods.",
    sections: [
      {
        title: "PRODUCT DETAILS",
        content: "Our premium ceramic mugs are dishwasher and microwave safe. Photos are printed using high-quality sublimation printing that won't fade or peel."
      },
      {
        title: "SHIPPING INFORMATION",
        content: "Please allow 3-5 business days for your custom mug to be printed and shipped."
      },
      {
        title: "CARE INSTRUCTIONS",
        content: "Hand washing is recommended to preserve print quality. Microwave safe but avoid extended heating periods."
      }
    ]
  },


  polaroid: {
    id: "custom-polaroid-01",
    category: "polaroid",
    productType: "Customizable Polaroid Prints",
    name: "Custom Polaroid-Style Photos",
    description: "Transform your digital memories into vintage-inspired Polaroid prints",
    shortDescription: "Classic Polaroid-style prints with your personal touch",
    price: 19.99,
    maxUploads: 12,
    customizationOptions: {
      allowText: true,
      maxTextLength: 50,
      textPlaceholder: "Add a caption to your memory...",
      types: [
        {
          name: "Classic White",
          id: "classic",
          previewImages: [
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739436963/p8_ahx1ih.webp",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739436963/p1_hdrdad.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739436964/p7_bo6xnq.webp",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739436961/p3_krino8.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739436961/p2_riycsj.webp",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739436963/p4_ynukcj.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739436962/p5_axhtsh.webp",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739436961/p3_krino8.jpg"
          ],
          sizes: [
            {
              name: "Standard",
              id: "standard",
              dimensions: "3.5\" × 4.25\"",
              price: 19.99
            },
            {
              name: "Large",
              id: "large",
              dimensions: "4.25\" × 5.5\"",
              price: 24.99
            },
            {
              name: "Mini",
              id: "mini",
              dimensions: "2.5\" × 3.25\"",
              price: 14.99
            }
          ]
        },
        {
          name: "Vintage",
          id: "vintage",
          previewImages: [
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739436963/p8_ahx1ih.webp",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739436963/p1_hdrdad.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739436964/p7_bo6xnq.webp",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739436961/p3_krino8.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739436961/p2_riycsj.webp",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739436963/p4_ynukcj.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739436962/p5_axhtsh.webp",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739436961/p3_krino8.jpg"
          ],
          description: "Aged effect with subtle color shifts",
          sizes: [
            {
              name: "Standard",
              id: "standard",
              dimensions: "3.5\" × 4.25\"",
              price: 21.99
            },
            {
              name: "Large",
              id: "large",
              dimensions: "4.25\" × 5.5\"",
              price: 26.99
            },
            {
              name: "Mini",
              id: "mini",
              dimensions: "2.5\" × 3.25\"",
              price: 16.99
            }
          ]
        },
        {
          name: "Color Frame",
          id: "color",
          previewImages: [
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739436963/p8_ahx1ih.webp",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739436963/p1_hdrdad.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739436964/p7_bo6xnq.webp",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739436961/p3_krino8.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739436961/p2_riycsj.webp",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739436963/p4_ynukcj.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739436962/p5_axhtsh.webp",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739436961/p3_krino8.jpg"
          ],
          colors: ["Pink", "Blue", "Yellow", "Mint"],
          sizes: [
            {
              name: "Standard",
              id: "standard",
              dimensions: "3.5\" × 4.25\"",
              price: 21.99
            },
            {
              name: "Large",
              id: "large",
              dimensions: "4.25\" × 5.5\"",
              price: 26.99
            },
            {
              name: "Mini",
              id: "mini",
              dimensions: "2.5\" × 3.25\"",
              price: 16.99
            }
          ]
        }
      ]
    },
    productDetails: {
      material: "Premium Photo Paper",
      printMethod: "High-Quality Digital Printing",
      features: [
        "True-to-life colors",
        "Fingerprint resistant coating",
        "Authentic Polaroid-style border",
        "Premium matte finish"
      ]
    },
    shipping: {
      processingTime: "2-3 business days",
      freeShippingThreshold: 35,
      shippingNote: "Free shipping on orders over $35"
    },
    careInstructions: "Store in a cool, dry place. Avoid direct sunlight and humidity to preserve print quality.",
    sections: [
      {
        title: "PRODUCT DETAILS",
        content: "Our Polaroid-style prints are created using premium photo paper and advanced digital printing technology for vibrant, long-lasting memories."
      },
      {
        title: "SHIPPING INFORMATION",
        content: "Please allow 2-3 business days for your custom prints to be produced and shipped."
      },
      {
        title: "CARE INSTRUCTIONS",
        content: "To ensure your prints last a lifetime, store them in a cool, dry place and avoid exposure to direct sunlight."
      }
    ]
  },
  wallet: {
    id: "custom-wallet-card-01",
    category: "walletCard",
    productType: "Customizable Wallet Card",
    name: "Personalized Metal Wallet Card",
    description: "Premium metal wallet card with your cherished photos and messages",
    shortDescription: "Turn memories into a beautiful keepsake you can carry everywhere",
    price: 19.99,
    maxUploads: 2,
    customizationOptions: {
      allowText: true,
      maxTextLength: 150,
      textPlaceholder: "Add a special message or date to your wallet card...",
      types: [
        {
          name: "Brushed Silver",
          id: "silver",
          previewImages: [
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739554937/w2_fn1wie.webp",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739554936/w3_ainpbf.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739554935/w4_esjlru.png",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739554935/w7_mtk2i8.webp",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739554935/w8_rsuy2b.webp",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739554935/w5_dcynmt.webp",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739554934/w6_d6zbmi.webp",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739554934/w1_dc2lh8.jpg",
          ]
        },
        {
          name: "Rose Gold",
          id: "rosegold",
          previewImages: [
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739554937/w2_fn1wie.webp",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739554936/w3_ainpbf.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739554935/w4_esjlru.png",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739554935/w7_mtk2i8.webp",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739554935/w8_rsuy2b.webp",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739554935/w5_dcynmt.webp",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739554934/w6_d6zbmi.webp",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739554934/w1_dc2lh8.jpg",
          ]
        },
        {
          name: "Matte Black",
          id: "black",
          previewImages: [
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739554937/w2_fn1wie.webp",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739554936/w3_ainpbf.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739554935/w4_esjlru.png",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739554935/w7_mtk2i8.webp",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739554935/w8_rsuy2b.webp",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739554935/w5_dcynmt.webp",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739554934/w6_d6zbmi.webp",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739554934/w1_dc2lh8.jpg",
          ]
        }
      ],
      sizes: [
        {
          name: "Standard",
          id: "standard",
          dimensions: "3.375\" × 2.125\"",
          price: 19.99
        },
        {
          name: "Mini",
          id: "mini",
          dimensions: "2.5\" × 1.5\"",
          price: 16.99
        }
      ]
    },
    productDetails: {
      material: "Premium Anodized Aluminum",
      printMethod: "UV Direct Printing",
      features: [
        "Water-resistant",
        "Scratch-resistant coating",
        "Wallet-friendly thickness",
        "Rounded corners for safety",
        "High-definition photo printing"
      ]
    },
    shipping: {
      processingTime: "2-3 business days",
      freeShippingThreshold: 35,
      shippingNote: "Free shipping on orders over $35"
    },
    careInstructions: "Clean with soft, dry cloth. Avoid exposure to harsh chemicals.",
    sections: [
      {
        title: "PRODUCT DETAILS",
        content: "Our metal wallet cards are crafted from premium anodized aluminum with UV-printed photos for exceptional durability and image quality. Each card features rounded corners and is designed to fit perfectly in your wallet."
      },
      {
        title: "SHIPPING INFORMATION",
        content: "Please allow 2-3 business days for your custom wallet card to be produced and shipped."
      },
      {
        title: "CARE INSTRUCTIONS",
        content: "To maintain the quality of your wallet card, clean with a soft, dry cloth and avoid exposure to harsh chemicals. The UV-printed surface is designed to be durable but should be handled with care to ensure longevity."
      }
    ]
  },
  tshirt: {
    id: "custom-tshirt-01",
    category: "tshirt",
    productType: "Customizable T-Shirt",
    name: "Custom Photo T-Shirt",
    description: "High-quality cotton t-shirt with your favorite photos and designs",
    shortDescription: "Create your own unique style with custom printed t-shirts",
    price: 29.99,
    maxUploads: 4,
    customizationOptions: {
      allowText: true,
      maxTextLength: 200,
      textPlaceholder: "Add your custom text or message...",
      types: [
        {
          name: "Classic Crew Neck",
          id: "crew",
          previewImages: [
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739555466/t5_kvvsra.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739555464/t1_qdfppl.webp",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739555464/t7_kwkzlo.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739555467/t6_jsu3ww.webp",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739555466/t3_q8d5oh.webp",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739555466/t2_uhlkbx.webp",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739555464/t4_dkprz5.webp",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739555464/t8_pvfo3m.webp",
          ],
          colors: [
            {
              name: "White",
              id: "white",
              hex: "#FFFFFF"
            },
            {
              name: "Black",
              id: "black",
              hex: "#000000"
            },
            {
              name: "Navy",
              id: "navy",
              hex: "#000080"
            },
            {
              name: "Grey",
              id: "grey",
              hex: "#808080"
            }
          ]
        },
        {
          name: "V-Neck",
          id: "vneck",
          previewImages: [
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739555466/t5_kvvsra.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739555464/t1_qdfppl.webp",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739555464/t7_kwkzlo.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739555467/t6_jsu3ww.webp",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739555466/t3_q8d5oh.webp",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739555466/t2_uhlkbx.webp",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739555464/t4_dkprz5.webp",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739555464/t8_pvfo3m.webp",
          ],
          colors: [
            {
              name: "White",
              id: "white",
              hex: "#FFFFFF"
            },
            {
              name: "Black",
              id: "black",
              hex: "#000000"
            },
            {
              name: "Navy",
              id: "navy",
              hex: "#000080"
            }
          ]
        },
        {
          name: "Long Sleeve",
          id: "longSleeve",
          previewImages: [
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739555466/t5_kvvsra.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739555464/t1_qdfppl.webp",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739555464/t7_kwkzlo.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739555467/t6_jsu3ww.webp",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739555466/t3_q8d5oh.webp",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739555466/t2_uhlkbx.webp",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739555464/t4_dkprz5.webp",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739555464/t8_pvfo3m.webp",
          ],
          colors: [
            {
              name: "White",
              id: "white",
              hex: "#FFFFFF"
            },
            {
              name: "Black",
              id: "black",
              hex: "#000000"
            }
          ],
          price: 34.99
        }
      ],
      sizes: [
        {
          name: "Small",
          id: "S",
          dimensions: "Chest 34\"-36\"",
          price: 29.99
        },
        {
          name: "Medium",
          id: "M",
          dimensions: "Chest 38\"-40\"",
          price: 29.99
        },
        {
          name: "Large",
          id: "L",
          dimensions: "Chest 42\"-44\"",
          price: 29.99
        },
        {
          name: "X-Large",
          id: "XL",
          dimensions: "Chest 46\"-48\"",
          price: 32.99
        },
        {
          name: "2X-Large",
          id: "2XL",
          dimensions: "Chest 50\"-52\"",
          price: 34.99
        }
      ],
      printLocations: [
        {
          name: "Front Center",
          id: "frontCenter",
          maxWidth: "12 inches",
          maxHeight: "16 inches"
        },
        {
          name: "Back Center",
          id: "backCenter",
          maxWidth: "12 inches",
          maxHeight: "16 inches"
        },
        {
          name: "Left Chest",
          id: "leftChest",
          maxWidth: "4 inches",
          maxHeight: "4 inches"
        },
        {
          name: "Right Chest",
          id: "rightChest",
          maxWidth: "4 inches",
          maxHeight: "4 inches"
        }
      ]
    },
    productDetails: {
      material: "100% Premium Cotton",
      printMethod: "DTG (Direct to Garment) Printing",
      features: [
        "Premium cotton fabric",
        "Breathable and comfortable",
        "Pre-shrunk material",
        "Reinforced double-stitching",
        "Tagless neck label",
        "High-quality DTG printing"
      ],
      weightInOz: 6.1,
      fabricWeight: "180 GSM"
    },
    shipping: {
      processingTime: "3-5 business days",
      freeShippingThreshold: 50,
      shippingNote: "Free shipping on orders over $50",
      bulkDiscounts: [
        {
          quantity: 5,
          discount: 10
        },
        {
          quantity: 10,
          discount: 15
        },
        {
          quantity: 20,
          discount: 20
        }
      ]
    },
    careInstructions: "Machine wash cold, inside-out. Tumble dry low. Do not iron directly on printed design.",
    sections: [
      {
        title: "PRODUCT DETAILS",
        content: "Our premium cotton t-shirts are printed using state-of-the-art DTG printing technology for vibrant, long-lasting designs. Each shirt features reinforced double-stitching and a comfortable tagless neck label."
      },
      {
        title: "PRINTING INFORMATION",
        content: "We use Direct to Garment (DTG) printing for exceptional detail and color vibrancy. Your design is printed directly into the fabric for maximum durability and a soft feel."
      },
      {
        title: "SHIPPING INFORMATION",
        content: "Please allow 3-5 business days for your custom t-shirt to be printed and shipped. Bulk orders may require additional processing time."
      },
      {
        title: "CARE INSTRUCTIONS",
        content: "To ensure your custom t-shirt stays looking great, machine wash cold with the garment turned inside-out. Tumble dry on low heat. Do not iron directly over the printed design."
      },
      {
        title: "SIZE GUIDE",
        content: "Please refer to our size chart to ensure the perfect fit. Measurements are provided in inches and refer to chest circumference. When in doubt, we recommend ordering one size up."
      }
    ]
  },
  acrylicFrames: {
    id: "custom-acrylic-frame-01",
    category: "acrylicFrames",
    productType: "Customizable Acrylic Frame",
    name: "Premium Acrylic Photo Frame",
    description: "Crystal clear acrylic frames that make your memories shine",
    shortDescription: "Modern, elegant acrylic frames for your cherished photos",
    price: 34.99,
    maxUploads: 1,
    images: [
      "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/acrylic/1.jpg",
      "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/acrylic/2.jpg",
      "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/acrylic/3.jpg",
      "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/acrylic/4.jpg"
    ],
    sizes: ["5×7", "8×10", "11×14", "16×20", "24×36"],
    isCustomizable: true,
    customizationOptions: {
      allowText: true,
      maxTextLength: 100,
      textPlaceholder: "Add a caption or date to your frame...",
      types: [
        {
          name: "Classic Clear",
          id: "clear",
          previewImages: [
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/acrylic/classic/1.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/acrylic/classic/2.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/acrylic/classic/3.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/acrylic/classic/4.jpg"
          ],
          sizes: [
            {
              name: "5×7",
              id: "5x7",
              dimensions: "5\" × 7\"",
              price: 34.99
            },
            {
              name: "8×10",
              id: "8x10",
              dimensions: "8\" × 10\"",
              price: 44.99
            },
            {
              name: "11×14",
              id: "11x14",
              dimensions: "11\" × 14\"",
              price: 54.99
            },
            {
              name: "16×20",
              id: "16x20",
              dimensions: "16\" × 20\"",
              price: 74.99
            },
            {
              name: "24×36",
              id: "24x36",
              dimensions: "24\" × 36\"",
              price: 129.99
            }
          ]
        },
        {
          name: "Frosted Edge",
          id: "frosted",
          previewImages: [
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/acrylic/frosted/1.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/acrylic/frosted/2.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/acrylic/frosted/3.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/acrylic/frosted/4.jpg"
          ],
          description: "Elegant frosted edges for a premium look",
          sizes: [
            {
              name: "5×7",
              id: "5x7",
              dimensions: "5\" × 7\"",
              price: 39.99
            },
            {
              name: "8×10",
              id: "8x10",
              dimensions: "8\" × 10\"",
              price: 49.99
            },
            {
              name: "11×14",
              id: "11x14",
              dimensions: "11\" × 14\"",
              price: 59.99
            },
            {
              name: "16×20",
              id: "16x20",
              dimensions: "16\" × 20\"",
              price: 79.99
            },
            {
              name: "24×36",
              id: "24x36",
              dimensions: "24\" × 36\"",
              price: 134.99
            }
          ]
        },
        {
          name: "LED Edge-Lit",
          id: "led",
          previewImages: [
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/acrylic/led/1.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/acrylic/led/2.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/acrylic/led/3.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/acrylic/led/4.jpg"
          ],
          description: "Built-in LED lighting for stunning display",
          sizes: [
            {
              name: "5×7",
              id: "5x7",
              dimensions: "5\" × 7\"",
              price: 49.99
            },
            {
              name: "8×10",
              id: "8x10",
              dimensions: "8\" × 10\"",
              price: 59.99
            },
            {
              name: "11×14",
              id: "11x14",
              dimensions: "11\" × 14\"",
              price: 69.99
            },
            {
              name: "16×20",
              id: "16x20",
              dimensions: "16\" × 20\"",
              price: 89.99
            },
            {
              name: "24×36",
              id: "24x36",
              dimensions: "24\" × 36\"",
              price: 149.99
            }
          ]
        }
      ]
    },
    productDetails: {
      material: "Premium Grade Acrylic",
      thickness: "1/4 inch (6mm)",
      printMethod: "UV Direct Printing",
      features: [
        "Crystal clear transparency",
        "UV resistant",
        "Polished edges",
        "Precision cut corners",
        "Wall-mounting hardware included",
        "Protective film coating"
      ]
    },
    shipping: {
      processingTime: "3-5 business days",
      freeShippingThreshold: 75,
      shippingNote: "Free shipping on orders over $75",
      bulkDiscounts: [
        {
          quantity: 3,
          discount: 10
        },
        {
          quantity: 5,
          discount: 15
        },
        {
          quantity: 10,
          discount: 20
        }
      ]
    },
    careInstructions: "Clean with soft microfiber cloth. Avoid harsh chemicals. Keep away from direct sunlight to maintain clarity.",
    sections: [
      {
        title: "PRODUCT DETAILS",
        content: "Our premium acrylic frames are crafted from high-grade, crystal-clear acrylic for stunning photo display. Each frame features polished edges, precision-cut corners, and comes complete with mounting hardware."
      },
      {
        title: "PRINTING INFORMATION",
        content: "We use state-of-the-art UV direct printing technology for vibrant, long-lasting images that won't fade or peel. Your photos are printed directly onto the acrylic for maximum clarity and durability."
      },
      {
        title: "MOUNTING OPTIONS",
        content: "Each frame comes with easy-to-use wall mounting hardware and detailed installation instructions. Frames can be mounted in either portrait or landscape orientation."
      },
      {
        title: "CARE INSTRUCTIONS",
        content: "To maintain the crystal-clear quality of your acrylic frame, clean with a soft microfiber cloth. Avoid harsh chemicals and keep away from direct sunlight to preserve the clarity and print quality."
      }
    ]
  },
  woodenFrames: {
    id: "custom-wooden-frame-01",
    category: "woodenFrames",
    productType: "Customizable Wooden Frame",
    name: "Premium Wooden Photo Frame",
    description: "Elegantly crafted wooden frames that bring warmth to your memories",
    shortDescription: "Classic wooden frames for timeless photo display",
    price: 39.99,
    maxUploads: 1,
    images: [
      "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/wooden/1.jpg",
      "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/wooden/2.jpg",
      "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/wooden/3.jpg",
      "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/wooden/4.jpg"
    ],
    sizes: ["5×7", "8×10", "11×14", "16×20", "24×36"],
    isCustomizable: true,
    customizationOptions: {
      allowText: true,
      maxTextLength: 100,
      textPlaceholder: "Add a caption or date to your frame...",
      types: [
        {
          name: "Classic Oak",
          id: "oak",
          previewImages: [
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/wooden/oak/1.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/wooden/oak/2.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/wooden/oak/3.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/wooden/oak/4.jpg"
          ],
          sizes: [
            {
              name: "5×7",
              id: "5x7",
              dimensions: "5\" × 7\"",
              price: 39.99
            },
            {
              name: "8×10",
              id: "8x10",
              dimensions: "8\" × 10\"",
              price: 49.99
            },
            {
              name: "11×14",
              id: "11x14",
              dimensions: "11\" × 14\"",
              price: 59.99
            },
            {
              name: "16×20",
              id: "16x20",
              dimensions: "16\" × 20\"",
              price: 79.99
            },
            {
              name: "24×36",
              id: "24x36",
              dimensions: "24\" × 36\"",
              price: 129.99
            }
          ]
        },
        {
          name: "Rustic Walnut",
          id: "walnut",
          previewImages: [
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/wooden/walnut/1.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/wooden/walnut/2.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/wooden/walnut/3.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/wooden/walnut/4.jpg"
          ],
          description: "Rich walnut finish with rustic charm",
          sizes: [
            {
              name: "5×7",
              id: "5x7",
              dimensions: "5\" × 7\"",
              price: 44.99
            },
            {
              name: "8×10",
              id: "8x10",
              dimensions: "8\" × 10\"",
              price: 54.99
            },
            {
              name: "11×14",
              id: "11x14",
              dimensions: "11\" × 14\"",
              price: 64.99
            },
            {
              name: "16×20",
              id: "16x20",
              dimensions: "16\" × 20\"",
              price: 84.99
            },
            {
              name: "24×36",
              id: "24x36",
              dimensions: "24\" × 36\"",
              price: 134.99
            }
          ]
        },
        {
          name: "White Farmhouse",
          id: "farmhouse",
          previewImages: [
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/wooden/farmhouse/1.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/wooden/farmhouse/2.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/wooden/farmhouse/3.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/wooden/farmhouse/4.jpg"
          ],
          description: "Distressed white finish for a rustic farmhouse look",
          sizes: [
            {
              name: "5×7",
              id: "5x7",
              dimensions: "5\" × 7\"",
              price: 41.99
            },
            {
              name: "8×10",
              id: "8x10",
              dimensions: "8\" × 10\"",
              price: 51.99
            },
            {
              name: "11×14",
              id: "11x14",
              dimensions: "11\" × 14\"",
              price: 61.99
            },
            {
              name: "16×20",
              id: "16x20",
              dimensions: "16\" × 20\"",
              price: 81.99
            },
            {
              name: "24×36",
              id: "24x36",
              dimensions: "24\" × 36\"",
              price: 131.99
            }
          ]
        }
      ]
    },
    productDetails: {
      material: "Solid Wood",
      finishType: "Natural wood stain and protective coating",
      features: [
        "Hand-finished wood frame",
        "Glass protection",
        "Acid-free matting",
        "Sturdy backing",
        "Wall-mounting hardware included",
        "Easel stand for desktop display"
      ]
    },
    shipping: {
      processingTime: "4-6 business days",
      freeShippingThreshold: 75,
      shippingNote: "Free shipping on orders over $75",
      bulkDiscounts: [
        {
          quantity: 3,
          discount: 10
        },
        {
          quantity: 5,
          discount: 15
        },
        {
          quantity: 10,
          discount: 20
        }
      ]
    },
    careInstructions: "Dust with soft cloth. Avoid direct sunlight and humid environments. Clean glass with standard glass cleaner.",
    sections: [
      {
        title: "PRODUCT DETAILS",
        content: "Our wooden frames are crafted from premium solid wood, featuring precision joinery and a durable finish. Each frame includes glass protection, acid-free matting, and complete mounting hardware."
      },
      {
        title: "FRAME STYLES",
        content: "Choose from Classic Oak for timeless elegance, Rustic Walnut for rich warmth, or White Farmhouse for a contemporary rustic look."
      },
      {
        title: "DISPLAY OPTIONS",
        content: "Frames come with both wall-mounting hardware and an easel stand for versatile display options. Can be mounted in portrait or landscape orientation."
      }
    ]
  },
  caricature : {
    id: "custom-caricature-01",
    category: "caricature",
    productType: "Custom Digital Caricature",
    name: "Personalized Digital Caricature",
    description: "Custom hand-drawn digital caricatures by professional artists",
    shortDescription: "Turn your photos into fun, personalized caricature art",
    price: 49.99,
    maxUploads: 4,
    images: [
      "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/caricature/1.jpg",
      "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/caricature/2.jpg",
      "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/caricature/3.jpg",
      "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/caricature/4.jpg"
    ],
    isCustomizable: true,
    customizationOptions: {
      allowText: true,
      maxTextLength: 200,
      textPlaceholder: "Add special instructions or background preferences...",
      types: [
        {
          name: "Basic Caricature",
          id: "basic",
          previewImages: [
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/caricature/basic/1.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/caricature/basic/2.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/caricature/basic/3.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/caricature/basic/4.jpg"
          ],
          price: 49.99,
          description: "Head and shoulders caricature with simple background"
        },
        {
          name: "Full Body",
          id: "fullBody",
          previewImages: [
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/caricature/fullbody/1.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/caricature/fullbody/2.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/caricature/fullbody/3.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/caricature/fullbody/4.jpg"
          ],
          price: 79.99,
          description: "Full body caricature with detailed background"
        },
        {
          name: "Couple/Group",
          id: "group",
          previewImages: [
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/caricature/group/1.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/caricature/group/2.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/caricature/group/3.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/caricature/group/4.jpg"
          ],
          price: 99.99,
          description: "Multiple person caricature (up to 4 people)",
          maxPeople: 4
        }
      ],
      styles: [
        {
          name: "Colorful Cartoon",
          id: "cartoon",
          price: 0 // included in base price
        },
        {
          name: "Watercolor Effect",
          id: "watercolor",
          price: 10 // additional cost
        },
        {
          name: "Pencil Sketch",
          id: "sketch",
          price: 5 // additional cost
        }
      ],
      deliveryFormats: [
        {
          name: "Digital Download",
          id: "digital",
          price: 0,
          formats: ["JPG", "PNG", "PDF"]
        },
        {
          name: "Printed Copy",
          id: "print",
          price: 15,
          sizes: ["8×10", "11×14", "16×20"]
        }
      ]
    },
    productDetails: {
      features: [
        "Hand-drawn by professional artists",
        "Multiple revisions included",
        "High-resolution digital file",
        "Quick turnaround time",
        "100% satisfaction guarantee"
      ]
    },
    shipping: {
      processingTime: "3-5 business days",
      freeShippingThreshold: 50,
      shippingNote: "Free shipping on printed copies over $50",
      rush: {
        available: true,
        price: 25,
        processingTime: "24-48 hours"
      }
    },
    sections: [
      {
        title: "HOW IT WORKS",
        content: "Upload your photos, choose your style, and our artists will create a unique caricature capturing your personality and features. Includes two rounds of revisions."
      },
      {
        title: "PHOTO REQUIREMENTS",
        content: "Please provide clear, well-lit photos showing facial features clearly. For best results, include photos from multiple angles."
      },
      {
        title: "DELIVERY OPTIONS",
        content: "Choose between instant digital download or professional printing on premium paper. Digital files are provided in multiple formats for versatile use."
      }
    ]
  },
  "caricature-classic": {
    "id": "custom-caricature-02",
    "category": "caricature",
    "productType": "Classic Digital Caricature",
    "name": "Classic Style Digital Caricature",
    "description": "Timeless hand-drawn digital caricatures with classic artistic style",
    "shortDescription": "Transform your photos into elegant caricature artwork",
    "price": 39.99,
    "maxUploads": 3,
    "images": [
      "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/caricature-classic/1.jpg",
      "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/caricature-classic/2.jpg",
      "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/caricature-classic/3.jpg"
    ],
    "isCustomizable": true,
    "customizationOptions": {
      "allowText": true,
      "maxTextLength": 150,
      "textPlaceholder": "Share your vision or any specific details you'd like included...",
      "types": [
        {
          "name": "Portrait",
          "id": "portrait",
          "previewImages": [
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/caricature-classic/portrait/1.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/caricature-classic/portrait/2.jpg"
          ],
          "price": 39.99,
          "description": "Classic head and shoulders portrait caricature"
        },
        {
          "name": "Half Body",
          "id": "halfBody",
          "previewImages": [
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/caricature-classic/halfbody/1.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/caricature-classic/halfbody/2.jpg"
          ],
          "price": 59.99,
          "description": "Half body caricature with elegant background"
        }
      ],
      "styles": [
        {
          "name": "Traditional",
          "id": "traditional",
          "price": 0
        },
        {
          "name": "Sepia Tone",
          "id": "sepia",
          "price": 8
        }
      ],
      "deliveryFormats": [
        {
          "name": "Digital Download",
          "id": "digital",
          "price": 0,
          "formats": ["JPG", "PNG"]
        },
        {
          "name": "Premium Print",
          "id": "print",
          "price": 12,
          "sizes": ["5×7", "8×10", "11×14"]
        }
      ]
    },
    "productDetails": {
      "features": [
        "Created by experienced portrait artists",
        "One revision included",
        "High-quality digital delivery",
        "5-7 day turnaround",
        "Satisfaction guaranteed"
      ]
    },
    "shipping": {
      "processingTime": "5-7 business days",
      "freeShippingThreshold": 45,
      "shippingNote": "Free shipping on orders over $45",
      "rush": {
        "available": true,
        "price": 20,
        "processingTime": "48-72 hours"
      }
    },
    "sections": [
      {
        "title": "HOW IT WORKS",
        "content": "Submit your favorite photo, select your preferred style, and our artists will create a classic caricature that highlights your best features. Includes one round of revisions."
      },
      {
        "title": "PHOTO GUIDELINES",
        "content": "Submit high-resolution photos with good lighting and clear facial features. Front-facing photos work best for this style."
      },
      {
        "title": "DELIVERY INFORMATION",
        "content": "Get your caricature as a high-quality digital download or choose professional printing services on select paper types."
      }
    ]
  },
  "caricature-modern": {
    "id": "custom-caricature-03",
    "category": "caricature",
    "productType": "Modern Digital Caricature",
    "name": "Contemporary Digital Caricature",
    "description": "Modern artistic interpretation with bold colors and unique style",
    "shortDescription": "Bold, contemporary caricature art with a modern twist",
    "price": 59.99,
    "maxUploads": 5,
    "images": [
      "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/caricature-modern/1.jpg",
      "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/caricature-modern/2.jpg",
      "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/caricature-modern/3.jpg",
      "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/caricature-modern/4.jpg"
    ],
    "isCustomizable": true,
    "customizationOptions": {
      "allowText": true,
      "maxTextLength": 250,
      "textPlaceholder": "Describe your vision, style preferences, or any special elements you'd like included...",
      "types": [
        {
          "name": "Pop Art Style",
          "id": "popArt",
          "previewImages": [
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/caricature-modern/popart/1.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/caricature-modern/popart/2.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/caricature-modern/popart/3.jpg"
          ],
          "price": 59.99,
          "description": "Bold, colorful pop art inspired caricature"
        },
        {
          "name": "Abstract Modern",
          "id": "abstract",
          "previewImages": [
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/caricature-modern/abstract/1.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/caricature-modern/abstract/2.jpg"
          ],
          "price": 89.99,
          "description": "Abstract interpretation with modern elements"
        },
        {
          "name": "Digital Fusion",
          "id": "fusion",
          "previewImages": [
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/caricature-modern/fusion/1.jpg",
            "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739428679/caricature-modern/fusion/2.jpg"
          ],
          "price": 109.99,
          "description": "Blend of digital art and traditional caricature"
        }
      ],
      "styles": [
        {
          "name": "Neon Glow",
          "id": "neon",
          "price": 15
        },
        {
          "name": "Minimalist",
          "id": "minimal",
          "price": 10
        },
        {
          "name": "Cyberpunk",
          "id": "cyber",
          "price": 20
        }
      ],
      "deliveryFormats": [
        {
          "name": "Digital Download",
          "id": "digital",
          "price": 0,
          "formats": ["JPG", "PNG", "PDF", "SVG"]
        },
        {
          "name": "Premium Print",
          "id": "print",
          "price": 25,
          "sizes": ["8×10", "11×14", "16×20", "24×36"]
        }
      ]
    },
    "productDetails": {
      "features": [
        "Created by digital art specialists",
        "Three rounds of revisions included",
        "Ultra high-resolution files",
        "Multiple file formats",
        "Customizable style options",
        "Money-back guarantee"
      ]
    },
    "shipping": {
      "processingTime": "4-6 business days",
      "freeShippingThreshold": 75,
      "shippingNote": "Free worldwide shipping on orders over $75",
      "rush": {
        "available": true,
        "price": 35,
        "processingTime": "24 hours"
      }
    },
    "sections": [
      {
        "title": "HOW IT WORKS",
        "content": "Choose your style, upload your photos, and our digital artists will create a modern masterpiece. Includes three rounds of revisions to ensure your complete satisfaction."
      },
      {
        "title": "PHOTO REQUIREMENTS",
        "content": "High-resolution photos are essential. Multiple angles and expressions are welcome to capture your personality fully."
      },
      {
        "title": "DELIVERY OPTIONS",
        "content": "Receive your artwork in multiple digital formats or as gallery-quality prints on premium paper with protective coating."
      }
    ]
  }
  

};

// Helper function to get product by category
export const getProductByCategory = (category) => {
  return customizableProducts[category];
};

// Helper function to validate if category exists
export const isValidCategory = (category) => {
  return category in customizableProducts;
};