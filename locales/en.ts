import type { Translations } from "./zh";

const en: Translations = {
  nav: {
    home: "Home",
    products: "Products",
    verification: "Verification",
    about: "About",
    news: "News",
    contact: "Contact",
  },

  home: {
    hero: {
      brand: "BOTATOX",
      subtitle: "Premium Medical Aesthetics",
      cta: "Learn About Verification",
      videoPlaceholder: "Brand Video",
    },
    trust: {
      title: "Why BOTATOX",
      authentic: {
        title: "Authentic Guarantee",
        desc: "Powered by HiddenTag anti-counterfeiting technology, every product is traceable and verifiable to ensure authenticity.",
      },
      rnd: {
        title: "Professional R&D",
        desc: "Developed by a top-tier medical aesthetics research team, rigorously following international quality standards.",
      },
      global: {
        title: "Global Certification",
        desc: "Certified by multiple international authorities, sold in countries and regions worldwide.",
      },
    },
    codeVerification: {
      badge: "Coming Soon",
      title: "Direct Anti-counterfeiting Verification",
      subtitle:
        "Enter the product verification code or upload a photo of the anti-counterfeiting label to quickly verify product authenticity",
      codeLabel: "Verification Code",
      codePlaceholder: "Enter verification code",
      or: "or",
      uploadLabel: "Upload Label Image",
      uploadHint: "Take a photo or choose from album",
      uploadButton: "Upload anti-counterfeiting label image",
      verifyButton: "Verify Now",
      toast: "Feature under development, stay tuned",
    },
    guide: {
      title: "Product Authenticity Verification",
      description:
        "BOTATOX products use HiddenTag anti-counterfeiting technology. Please verify through official channels.",
      button: "View Verification Method",
    },
    steps: {
      title: "Verification Process",
      step1: {
        label: "STEP 1",
        title: "Find the Verification Code",
        desc: "Locate the anti-counterfeiting label on the BOTATOX product packaging. The label contains a unique verification code.",
        placeholder: "Image: Anti-counterfeiting label location",
      },
      step2: {
        label: "STEP 2",
        title: "Enter or Scan the Code",
        desc: "Manually enter the verification code in the input field above, or take a photo of the anti-counterfeiting label for automatic recognition.",
        placeholder: "Image: Enter / Scan operation",
      },
      step3: {
        label: "STEP 3",
        title: "System Verification",
        desc: "The system will compare your verification code against the database. The verification process takes only a few seconds.",
        placeholder: "Image: System verification in progress",
      },
      step4: {
        label: "STEP 4",
        title: "View Verification Result",
        desc: "If verified, detailed product information will be displayed confirming authenticity. If a warning appears, the product may be counterfeit — please contact official customer service.",
        genuineTitle: "Genuine Verified",
        genuineDesc: "Authentic product, safe to use",
        fakeTitle: "WARNING",
        fakeDesc: "Possible counterfeit, please contact support",
      },
    },
  },

  verify: {
    title: "BOTATOX Authenticity Verification Guide",
    subtitle:
      "Scan the label on the product using the HiddenTag APP to verify the authenticity of BOTATOX products",
    step1: {
      label: "STEP 1",
      title: "Download HiddenTag APP",
      desc: "Download the HiddenTag APP from your app store, then tap the authenticity verification button.",
      placeholder: "Image: APP download",
    },
    step2: {
      label: "STEP 2",
      title: "Check the Label",
      desc: "Visually inspect the label. Genuine labels can be scanned and recognized by HiddenTag, while counterfeit labels cannot be recognized by the HiddenTag APP.",
      genuineLabel: "Genuine Label",
      genuineHint: "Recognizable by HiddenTag",
      fakeLabel: "Counterfeit Label",
      fakeHint: "Fake label made from QR code",
    },
    step3: {
      label: "STEP 3",
      title: "Scan HiddenTag Label",
      desc: "Scan the HiddenTag label attached to the product. Scanning without glare will result in faster authentication.",
      placeholder: "Image: Scanning",
    },
    step4: {
      label: "STEP 4",
      title: "View Verification Result",
      desc: "After authenticating your BOTATOX product, check the relevant images. If you see the warning screen below, please contact the place of purchase.",
      genuineTitle: "Genuine Verified",
      genuineDesc: "Authentic product, safe to use",
      fakeTitle: "WARNING",
      fakeDesc: "Possible counterfeit, please contact the seller",
    },
    cta: "Go to HiddenTag Official Verification Platform",
  },

  contact: {
    title: "Contact Us",
    subtitle:
      "If you have any questions, please contact HYUNDAIBIO through the following channels",
  },

  about: {
    title: "About HYUNDAIBIO",
    nav: {
      ceo: "CEO Message",
      intro: "Company Overview",
      network: "Global Network",
    },
    overview: {
      title: "Company Overview",
      desc: "HYUNDAIBIO is a biotechnology company headquartered in Seoul, South Korea, specializing in the research, development, and global distribution of premium medical aesthetic products. Our flagship brand BOTATOX, along with a comprehensive portfolio of dermal fillers, skin boosters, and biostimulators, serves medical professionals and aesthetic clinics worldwide.",
      imagePlaceholder: "Company Image",
    },
    mission: {
      title: "Our Mission",
      innovation: { title: "Innovation", desc: "Continuously investing in R&D to create safe and effective medical aesthetic products based on cutting-edge biotechnology." },
      quality: { title: "Quality Assurance", desc: "Strictly adhering to international quality standards with rigorous quality control for every product." },
      global: { title: "Global Reach", desc: "Our products are distributed worldwide, providing reliable solutions for medical aesthetic professionals across the globe." },
    },
    certifications: { title: "Certifications", placeholder: "Certificate" },
    contactTitle: "Contact Information",
    ceo: {
      title: "CEO Message",
      name: "Zhang Yongnan",
      role: "Chief Executive Officer, Hyundai Bio Co., Ltd.",
      message: "Dear Partners and Friends,\n\nWelcome to Hyundai Bio. Since our founding, we have been dedicated to bridging cutting-edge bio science with the art of cosmetic innovation — developing products that improve lives and inspire confidence.\n\nOur research-driven approach brings together dermatologists, biochemists, and formulation specialists who share a single purpose: to create safe, effective, and science-backed beauty solutions that meet the highest global standards.\n\nAs we continue to expand our global network, we remain firmly committed to our founding values — integrity, innovation, and impact. Every product that leaves our facilities carries a promise: the promise of quality that you can trust, and results you can see.\n\nWe look forward to growing alongside our partners worldwide and to making Hyundai Bio a name synonymous with excellence in bio cosmetics.\n\nWith gratitude and vision,\nZhang Yongnan",
      photoPlaceholder: "CEO Photo",
    },
    intro: {
      subtitle: "Global Bio & Cosmetic Leading Group",
      title: "Hyundai Bio Co., Ltd.",
      heroDesc: "A company that makes your dreams come true and changes the world. We will lead the bio and cosmetic industry trends at home and abroad by focusing not only on external beauty but also on internal beauty and growth.",
      missionTitle: "Mission",
      missionDesc: "We enhance access to global medical markets through competitively priced, consistently high-quality medical beauty products, strengthening the competitiveness of our partners worldwide.",
      values: {
        title: "Core Values",
        quality: { label: "01", title: "Quality", desc: "Uncompromising safety and stability, even at competitive prices." },
        reliability: { label: "02", title: "Reliability", desc: "Consistent supply and unwavering quality maintained at every stage." },
        scalability: { label: "03", title: "Scalability", desc: "A global business structure that transcends borders and markets." },
      },
      vision: {
        title: "A Company That Respects Humanity and Loves Nature",
        desc: "To become the most trusted and accessible choice in the global medical beauty market — growing into a leading global medical distribution platform brand.",
      },
    },
    network: {
      title: "Global Network",
      desc: "Hyundai Bio products and partnerships span across the globe. We work with trusted distributors, clinics, and retailers to bring our bio cosmetic solutions to consumers in every corner of the world.",
      asia: "Vietnam",
      americas: "USA",
      europe: "Germany",
      stats: { countries: "3+ Countries", regions: "3 Regions", founded: "Founded 2024" },
      cta: "Interested in becoming a Hyundai Bio partner in your region?",
      ctaButton: "Become a Partner",
    },
  },

  news: {
    title: "News",
    items: [
      { title: "HYUNDAIBIO at 2024 International Medical Aesthetics Exhibition", date: "2024.12", summary: "HYUNDAIBIO showcased its flagship brand BOTATOX at the International Medical Aesthetics Exhibition." },
      { title: "BOTATOX New Product Launch Successfully Held", date: "2025.03", summary: "The BOTATOX new product launch event was successfully held in Seoul." },
      { title: "HYUNDAIBIO Global Partners Exceed 30", date: "2025.06", summary: "HYUNDAIBIO's global partner network continues to expand, exceeding 30 partners." },
    ],
    videos: {
      title: "Activity Videos",
      placeholder: "Activity Video",
    },
  },

  faq: {
    title: "FAQ",
    items: [
      {
        q: "How to verify BOTATOX product authenticity?",
        a: "Please download the HiddenTag APP and scan the anti-counterfeiting label on the product. For detailed steps, please visit our Verification page.",
      },
      {
        q: "Where is the anti-counterfeiting label on the product?",
        a: "The anti-counterfeiting label is located on the outside of the product packaging. Please look for the label with the HiddenTag logo.",
      },
      {
        q: "What if scanning the label fails?",
        a: "Please make sure to scan in a well-lit environment without glare. If the issue persists, please contact us through our Contact page.",
      },
      {
        q: "Which countries do you sell to?",
        a: "HYUNDAIBIO's distribution network covers Asia, Europe, the Middle East, South America, and more. For specific market information, please contact us.",
      },
      {
        q: "How to become a distributor?",
        a: "Please submit your inquiry through our Contact page. Our business team will get back to you as soon as possible.",
      },
    ],
  },

  products: {
    title: "BOTATOX Products",
    subtitle: "Defining New Standards in Medical Aesthetics",
    items: [
      {
        name: "BOTATOX 100U",
        desc: "High-purity botulinum toxin for improving frown lines, crow's feet, and other facial wrinkles.",
      },
      {
        name: "BOTATOX 200U",
        desc: "High-concentration formula for deep wrinkle treatment and large-area muscle relaxation.",
      },
      {
        name: "BOTATOX 50U",
        desc: "Precise dosage for localized fine treatment with natural-looking results.",
      },
      {
        name: "BOTATOX Slimming",
        desc: "Specially developed for facial contouring, precisely targeting masseter muscles for a refined V-line face.",
      },
    ],
    learnMore: "Learn More",
  },

  whatsapp: {
    tooltip: "Chat with us",
  },
  wechat: {
    tooltip: "WeChat",
    title: "Add WeChat",
    wechatId: "WeChat ID: Royalfill",
    qrPlaceholder: "WeChat QR Code",
    copyButton: "Copy WeChat ID",
    copied: "Copied",
  },

  productDetail: {
    back: "← Back to Products",
    description: "Product Description",
    gallery: "Product Gallery",
    galleryPlaceholder: "Product Image",
    beforeAfter: "Before & After",
    beforeAfterPlaceholder: "Comparison",
    videos: "Product Videos",
    unboxingVideo: "Unboxing Video",
    demoVideo: "Product Demo",
    contactCta: "Contact Us for More Info",
    flagship: "Flagship Product",
    notFound: "Product Not Found",
    notFoundDesc: "Please return to the product list to browse other products.",
    categoryLabel: "Category",
  },

  footer: {
    copyright: "© 2025 HYUNDAIBIO. All rights reserved.",
    faq: "FAQ",
    contact: "Contact Us",
  },

  lang: {
    zh: "中文",
    en: "EN",
  },
};

export default en;
