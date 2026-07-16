export type Category = 1 | 2 | 3;
export type BrandType = "own" | "distribution";

export interface Product {
  id: string;
  nameEn: string;
  nameZh: string;
  nameKo: string;
  category: Category;
  brand: BrandType;
  isFlagship?: boolean;
  descEn: string;
  descZh: string;
}

export const categoryLabels: Record<Category, { en: string; zh: string }> = {
  1: { en: "Botulinum Toxin", zh: "肉毒素" },
  2: { en: "Dermal Fillers", zh: "填充剂" },
  3: { en: "Skin Care", zh: "皮肤管理" },
};

export const products: Product[] = [
  // ==================== 自有品牌 - 肉毒素 (1) ====================
  {
    id: "botatox-100u",
    nameEn: "BOTATOX 100U",
    nameZh: "新白",
    nameKo: "보타톡스 100U",
    category: 1,
    brand: "own",
    isFlagship: true,
    descEn:
      "Premium botulinum toxin type A for aesthetic use. High-purity formulation for treating glabellar lines, crow's feet, and forehead wrinkles with natural-looking results.",
    descZh:
      "高端A型肉毒杆菌素，用于医学美容。高纯度配方，有效改善眉间纹、鱼尾纹及额纹，效果自然。",
  },
  {
    id: "jtox-100u",
    nameEn: "JTOX 100U",
    nameZh: "新绿",
    nameKo: "JTOX 100U",
    category: 1,
    brand: "own",
    descEn:
      "Botulinum toxin type A for facial wrinkle improvement. Reliable quality with consistent results.",
    descZh:
      "A型肉毒杆菌素，用于面部皱纹改善。质量可靠，效果稳定。",
  },
  {
    id: "rollietox-100u",
    nameEn: "Rollietox 100U",
    nameZh: "新保",
    nameKo: "Rollietox 100U",
    category: 1,
    brand: "own",
    descEn:
      "Botulinum toxin type A for aesthetic treatments. Trusted formulation for professional use.",
    descZh:
      "A型肉毒杆菌素，用于医学美容治疗。专业信赖的配方。",
  },
  {
    id: "ktox-100u",
    nameEn: "KTOX 100U",
    nameZh: "韩肉",
    nameKo: "KTOX 100U",
    category: 1,
    brand: "own",
    descEn:
      "Korean botulinum toxin type A. High-quality formulation for various aesthetic indications.",
    descZh:
      "韩国A型肉毒杆菌素。高品质配方，适用于多种医学美容适应症。",
  },
  {
    id: "botaone-200u",
    nameEn: "BOTAONE 200U",
    nameZh: "白肉200U",
    nameKo: "BOTAONE 200U",
    category: 1,
    brand: "own",
    descEn:
      "Botulinum toxin type A 200U. Higher dosage formulation for deeper and larger area treatments.",
    descZh:
      "A型肉毒杆菌素200U。高剂量配方，适用于深层及大面积治疗。",
  },

  // ==================== 自有品牌 - 填充剂 (2) ====================
  {
    id: "royal-fill",
    nameEn: "Royal Fill",
    nameZh: "洛伊菲玻尿酸",
    nameKo: "Royal Fill",
    category: 2,
    brand: "own",
    descEn:
      "Premium hyaluronic acid dermal filler. Advanced cross-linking technology for long-lasting volume restoration and wrinkle correction.",
    descZh:
      "高端透明质酸皮肤填充剂。采用先进交联技术，持久恢复容积、矫正皱纹。",
  },
  {
    id: "royal-premium-collagen",
    nameEn: "ROYAL PREMIUM FAMILY (COLLAGEN)",
    nameZh: "洛伊双美玻尿酸",
    nameKo: "ROYAL PREMIUM FAMILY (COLLAGEN)",
    category: 2,
    brand: "own",
    descEn:
      "Collagen-enhanced dermal filler combining the benefits of collagen and HA for comprehensive skin rejuvenation.",
    descZh:
      "胶原蛋白增强型皮肤填充剂，结合胶原蛋白与透明质酸双重功效，全面焕活肌肤。",
  },
  {
    id: "royal-premium-234",
    nameEn: "ROYAL PREMIUM FAMILY 2/3/4",
    nameZh: "红洛伊玻尿酸",
    nameKo: "ROYAL PREMIUM FAMILY 2/3/4",
    category: 2,
    brand: "own",
    descEn:
      "Advanced HA filler series with varying cross-linking densities for customized facial volumizing and contouring treatments.",
    descZh:
      "进阶透明质酸填充剂系列，不同交联密度，满足个性化面部填充与塑形需求。",
  },
  {
    id: "cherry-lip",
    nameEn: "Cherry Lip",
    nameZh: "樱桃嘴",
    nameKo: "Cherry Lip",
    category: 2,
    brand: "own",
    descEn:
      "Specialized lip enhancement filler. Designed specifically for natural-looking lip volumizing and contour definition.",
    descZh:
      "专业唇部填充剂。专为自然唇部丰满与轮廓塑形而设计。",
  },

  // ==================== 自有品牌 - 皮肤管理 (3) ====================
  {
    id: "mythexosome",
    nameEn: "MYTHEXOSOME",
    nameZh: "美思科外泌体",
    nameKo: "MYTHEXOSOME",
    category: 3,
    brand: "own",
    descEn:
      "Advanced exosome-based skin rejuvenation treatment. Promotes cellular regeneration for improved skin texture and elasticity.",
    descZh:
      "先进外泌体皮肤焕活治疗。促进细胞再生，改善肤质与弹性。",
  },
  {
    id: "pcl-power-booster",
    nameEn: "PCL POWER BOOSTER",
    nameZh: "胶原蛋白刺激剂",
    nameKo: "PCL POWER BOOSTER",
    category: 3,
    brand: "own",
    descEn:
      "PCL-based collagen stimulator. Stimulates natural collagen production for long-lasting skin firming and lifting effects.",
    descZh:
      "PCL基底胶原蛋白刺激剂。激发天然胶原蛋白生成，持久紧致提升。",
  },

  // ==================== 代理品牌 - 肉毒素 (1) ====================
  {
    id: "nabota-100u",
    nameEn: "NABOTA 100U",
    nameZh: "NaBOTA100u",
    nameKo: "NABOTA 100U",
    category: 1,
    brand: "distribution",
    descEn:
      "Botulinum toxin type A 100U. Widely used in aesthetic clinics for wrinkle reduction and facial contouring.",
    descZh:
      "A型肉毒杆菌素100U。广泛用于医美诊所，减少皱纹、改善面部轮廓。",
  },
  {
    id: "nabota-200u",
    nameEn: "NABOTA 200U",
    nameZh: "NaBOTA200U",
    nameKo: "NABOTA 200U",
    category: 1,
    brand: "distribution",
    descEn:
      "Botulinum toxin type A 200U. Higher dosage for broader treatment areas and deeper muscle relaxation.",
    descZh:
      "A型肉毒杆菌素200U。高剂量用于更广泛治疗区域和深层肌肉放松。",
  },
  {
    id: "botulax-100u",
    nameEn: "BOTULAX 100U",
    nameZh: "老白100U",
    nameKo: "BOTULAX 100U",
    category: 1,
    brand: "distribution",
    descEn:
      "Botulinum toxin type A 100U. Established brand with proven efficacy for aesthetic treatments.",
    descZh:
      "A型肉毒杆菌素100U。成熟品牌，医学美容治疗效果经实践验证。",
  },
  {
    id: "botulax-200u",
    nameEn: "BOTULAX 200U",
    nameZh: "老白200U",
    nameKo: "BOTULAX 200U",
    category: 1,
    brand: "distribution",
    descEn:
      "Botulinum toxin type A 200U. Higher potency for advanced aesthetic procedures.",
    descZh:
      "A型肉毒杆菌素200U。高剂量用于进阶医学美容治疗。",
  },

  // ==================== 代理品牌 - 填充剂 (2) ====================
  {
    id: "urevs-4d-fill",
    nameEn: "UREVS 4D FILL",
    nameZh: "韩版瑞士4D提升针",
    nameKo: "UREVS 4D FILL",
    category: 2,
    brand: "distribution",
    descEn:
      "4D lifting filler for comprehensive facial rejuvenation. Multi-dimensional approach to volume restoration and skin tightening.",
    descZh:
      "4D提升填充剂，全面面部焕活。多维度容积恢复与紧肤。",
  },
  {
    id: "dermafillmd",
    nameEn: "DermafillMD",
    nameZh: "万提颈纹",
    nameKo: "DermafillMD",
    category: 2,
    brand: "distribution",
    descEn:
      "Specialized filler for neck wrinkle treatment. Designed to address horizontal neck lines effectively.",
    descZh:
      "专业颈部皱纹填充剂。专为有效改善颈部横纹而设计。",
  },
  {
    id: "regenovue",
    nameEn: "REGENOVUE",
    nameZh: "瑞诺沃",
    nameKo: "REGENOVUE",
    category: 2,
    brand: "distribution",
    descEn:
      "Advanced HA dermal filler with excellent viscoelastic properties for natural facial volumizing.",
    descZh:
      "先进透明质酸填充剂，具备卓越粘弹性，实现自然面部填充。",
  },
  {
    id: "elasty",
    nameEn: "ELASTY",
    nameZh: "玻尿酸填充剂",
    nameKo: "ELASTY",
    category: 2,
    brand: "distribution",
    descEn:
      "Hyaluronic acid dermal filler with high elasticity for dynamic facial areas requiring flexibility.",
    descZh:
      "高弹性透明质酸填充剂，适用于需要灵活性的动态面部区域。",
  },
  {
    id: "yvoire",
    nameEn: "YVOIRE",
    nameZh: "伊婉玻尿酸",
    nameKo: "YVOIRE",
    category: 2,
    brand: "distribution",
    descEn:
      "Well-established HA filler brand from LG Chem. Trusted by practitioners worldwide for safe and effective results.",
    descZh:
      "LG化学旗下成熟透明质酸填充剂品牌。全球医生信赖，安全有效。",
  },
  {
    id: "revolax",
    nameEn: "REVOLAX",
    nameZh: "Revolax玻尿酸",
    nameKo: "REVOLAX",
    category: 2,
    brand: "distribution",
    descEn:
      "High-density HA filler with excellent lifting capacity. Ideal for deep tissue volumizing and facial sculpting.",
    descZh:
      "高密度透明质酸填充剂，提升力强。适合深层组织填充与面部雕塑。",
  },
  {
    id: "neuramis",
    nameEn: "Neuramis",
    nameZh: "纽拉美斯玻尿酸",
    nameKo: "Neuramis",
    category: 2,
    brand: "distribution",
    descEn:
      "HA filler manufactured with advanced SHAPE technology for minimal swelling and long-lasting results.",
    descZh:
      "采用先进SHAPE技术制造的透明质酸填充剂，肿胀少、效果持久。",
  },
  {
    id: "volift",
    nameEn: "VOLIFT",
    nameZh: "纽拉美斯玻尿酸",
    nameKo: "VOLIFT",
    category: 2,
    brand: "distribution",
    descEn:
      "Premium HA filler designed for natural-looking volume restoration and wrinkle correction.",
    descZh:
      "高端透明质酸填充剂，专为自然容积恢复与皱纹矫正而设计。",
  },
  {
    id: "lexyal",
    nameEn: "LEXYAL",
    nameZh: "Lexyal（莱克雅）",
    nameKo: "LEXYAL",
    category: 2,
    brand: "distribution",
    descEn:
      "Innovative HA filler with excellent tissue integration for smooth and natural aesthetic outcomes.",
    descZh:
      "创新透明质酸填充剂，组织融合性优异，效果平滑自然。",
  },
  {
    id: "replengen",
    nameEn: "REPLENGEN",
    nameZh: "Replensy（瑞普兰希）",
    nameKo: "REPLENGEN",
    category: 2,
    brand: "distribution",
    descEn:
      "Next-generation dermal filler promoting tissue regeneration alongside immediate volumizing effects.",
    descZh:
      "新一代皮肤填充剂，在即刻填充同时促进组织再生。",
  },
  {
    id: "liporase",
    nameEn: "LIPORASE",
    nameZh: "紫溶解酶",
    nameKo: "LIPORASE",
    category: 2,
    brand: "distribution",
    descEn:
      "Hyaluronidase enzyme for dissolving HA fillers. Essential tool for filler correction and reversal procedures.",
    descZh:
      "透明质酸酶，用于溶解透明质酸填充剂。填充剂修正与逆转操作的必备工具。",
  },
  {
    id: "lipo-lab",
    nameEn: "LIPO LAB",
    nameZh: "lipo溶脂针",
    nameKo: "LIPO LAB",
    category: 2,
    brand: "distribution",
    descEn:
      "Lipolytic solution for localized fat reduction. Non-surgical approach to body contouring and fat dissolution.",
    descZh:
      "局部减脂溶脂液。非手术身体塑形与脂肪溶解方案。",
  },
  {
    id: "rejuvenex-hydro",
    nameEn: "REJUVENEX HYDRO",
    nameZh: "水光精华针",
    nameKo: "REJUVENEX HYDRO",
    category: 2,
    brand: "distribution",
    descEn:
      "Hydrating skin booster injection for deep moisturization and skin radiance enhancement.",
    descZh:
      "水光精华注射，深层补水保湿，提亮肤色光泽度。",
  },

  // ==================== 代理品牌 - 皮肤管理 (3) ====================
  {
    id: "mythrachae-exocream",
    nameEn: "MYTHRACHAEXOCREAM",
    nameZh: "美思科外泌体面霜",
    nameKo: "MYTHRACHAEXOCREAM",
    category: 3,
    brand: "distribution",
    descEn:
      "Exosome-infused topical cream for daily skin regeneration and anti-aging care.",
    descZh:
      "外泌体精华面霜，日常使用促进皮肤再生与抗衰老护理。",
  },
  {
    id: "absorbable-lifting-thread",
    nameEn: "Absorbable Lifting Thread",
    nameZh: "埋线提升",
    nameKo: "Absorbable Lifting Thread",
    category: 3,
    brand: "distribution",
    descEn:
      "PDO absorbable threads for non-surgical facial lifting. Stimulates collagen production for gradual skin tightening.",
    descZh:
      "PDO可吸收埋线，非手术面部提升。刺激胶原蛋白生成，逐步紧致肌肤。",
  },
  {
    id: "olla-forte",
    nameEn: "Olla Forte",
    nameZh: "奥拉Forte提拉",
    nameKo: "Olla Forte",
    category: 3,
    brand: "distribution",
    descEn:
      "Advanced skin lifting treatment device for non-invasive facial and body contouring.",
    descZh:
      "先进皮肤提升治疗设备，非侵入式面部及身体塑形。",
  },
  {
    id: "olla-refines",
    nameEn: "Olla Refines",
    nameZh: "奥拉微波紧肤/提拉疗程",
    nameKo: "Olla Refines",
    category: 3,
    brand: "distribution",
    descEn:
      "Microwave-based skin tightening and lifting treatment course for comprehensive rejuvenation.",
    descZh:
      "微波紧肤提拉疗程，全面焕活肌肤。",
  },
  {
    id: "rejuran",
    nameEn: "REJURAN",
    nameZh: "丽珠兰",
    nameKo: "REJURAN",
    category: 3,
    brand: "distribution",
    descEn:
      "Polynucleotide (PN) based skin healer. Promotes tissue regeneration for improved skin quality and elasticity.",
    descZh:
      "多核苷酸(PN)基底皮肤修复剂。促进组织再生，改善肤质与弹性。",
  },
  {
    id: "rejuran-s",
    nameEn: "REJURAN S",
    nameZh: "丽珠兰S",
    nameKo: "REJURAN S",
    category: 3,
    brand: "distribution",
    descEn:
      "Specialized PN formulation for scar and acne scar treatment with tissue remodeling properties.",
    descZh:
      "专业多核苷酸配方，针对疤痕及痘疤治疗，具有组织重塑功效。",
  },
  {
    id: "rejuran-skin-booster",
    nameEn: "REJURAN SKIN BOOSTER",
    nameZh: "丽珠兰肌肤焕活针",
    nameKo: "REJURAN SKIN BOOSTER",
    category: 3,
    brand: "distribution",
    descEn:
      "PN skin booster for overall skin rejuvenation. Improves hydration, elasticity, and skin barrier function.",
    descZh:
      "多核苷酸肌肤焕活针，全面改善水合度、弹性与皮肤屏障功能。",
  },
  {
    id: "hyaron-prefilled",
    nameEn: "HYARON PREFILLED INJECTION",
    nameZh: "HYARON透明质酸钠注射液",
    nameKo: "HYARON PREFILLED INJECTION",
    category: 3,
    brand: "distribution",
    descEn:
      "Prefilled sodium hyaluronate injection for convenient and precise skin hydration treatments.",
    descZh:
      "预填充透明质酸钠注射液，便捷精准的皮肤补水治疗。",
  },
  {
    id: "xsome-skinbooster",
    nameEn: "XSOME SKINBOOSTER",
    nameZh: "艾克索姆外泌体",
    nameKo: "XSOME SKINBOOSTER",
    category: 3,
    brand: "distribution",
    descEn:
      "Exosome-based skin booster for advanced cellular-level skin rejuvenation and repair.",
    descZh:
      "外泌体基底肌肤焕活剂，细胞级皮肤焕活与修复。",
  },
];

export const FILTER_OWN = products.filter((p) => p.brand === "own");
export const FILTER_DIST = products.filter((p) => p.brand === "distribution");

export function groupByCategory(list: Product[]): Map<Category, Product[]> {
  const map = new Map<Category, Product[]>();
  for (const p of list) {
    const arr = map.get(p.category) || [];
    arr.push(p);
    map.set(p.category, arr);
  }
  return map;
}
