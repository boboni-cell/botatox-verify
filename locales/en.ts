import type { Translations } from "./zh";

const en: Translations = {
  nav: {
    home: "Home",
    products: "Products",
    verification: "Verification",
    about: "About",
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
    intro:
      "HYUNDAIBIO is a medical aesthetics biotechnology company headquartered in Seoul, South Korea, dedicated to developing high-quality medical aesthetic products. The BOTATOX brand, known for its exceptional quality and innovative technology, is now distributed across multiple countries and regions worldwide, earning broad market recognition and customer trust.",
    mission: {
      title: "Our Mission",
      innovation: { title: "Innovation", sub: "R&D", desc: "Continuous investment in R&D, advancing the frontiers of medical aesthetic technology" },
      quality: { title: "Quality", sub: "Assurance", desc: "Rigorous quality control processes, every product is traceable and verifiable" },
      global: { title: "Global Service", sub: "Worldwide", desc: "Serving customers globally with professional medical aesthetic solutions" },
    },
    contactTitle: "Contact Information",
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
    privacy: "Privacy Policy",
    contact: "Contact Us",
  },

  lang: {
    zh: "中文",
    en: "EN",
  },
};

export default en;
