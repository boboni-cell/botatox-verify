import type { Translations } from "./zh";

const ko: Translations = {
  nav: {
    home: "홈",
    products: "제품",
    verification: "정품인증",
    about: "회사소개",
    news: "뉴스",
    contact: "연락처",
  },

  home: {
    hero: {
      brand: "BOTATOX",
      subtitle: "프리미엄 메디컬 에스테틱",
      cta: "인증 방법 보기",
      videoPlaceholder: "브랜드 비디오",
    },
    trust: {
      title: "BOTATOX를 선택하는 이유",
      authentic: {
        title: "정품 보증",
        desc: "HiddenTag 위조방지 기술을 적용하여 모든 제품의 정품 여부를 추적하고 확인할 수 있습니다.",
      },
      rnd: {
        title: "전문 연구개발",
        desc: "최고 수준의 메디컬 에스테틱 연구팀이 국제 품질 기준에 따라 엄격하게 개발합니다.",
      },
      global: {
        title: "글로벌 인증",
        desc: "다수의 국제 공인 인증을 획득했으며, 전 세계 여러 국가 및 지역에서 판매되고 있습니다.",
      },
    },
    codeVerification: {
      badge: "출시 예정",
      title: "위조방지코드 직접 인증",
      subtitle: "제품의 위조방지 코드를 입력하거나 위조방지 라벨 이미지를 업로드하여 신속하게 정품 여부를 확인하세요",
      codeLabel: "위조방지코드",
      codePlaceholder: "위조방지코드를 입력하세요",
      or: "또는",
      uploadLabel: "위조방지 라벨 이미지 업로드",
      uploadHint: "촬영 또는 앨범에서 선택",
      uploadButton: "위조방지 라벨 이미지 업로드",
      verifyButton: "지금 인증하기",
      toast: "기능 개발 중입니다. 곧 출시됩니다",
    },
    guide: {
      title: "정품 인증",
      description: "BOTATOX 제품은 HiddenTag 위조방지 기술을 사용합니다. 공식 경로를 통해 인증해 주세요.",
      button: "인증 방법 보기",
    },
    steps: {
      title: "인증 절차",
      step1: {
        label: "STEP 1",
        title: "위조방지코드 찾기",
        desc: "BOTATOX 제품 포장에서 고유한 위조방지 인증 코드가 인쇄된 위조방지 라벨을 찾으세요.",
        placeholder: "이미지: 위조방지 라벨 위치",
      },
      step2: {
        label: "STEP 2",
        title: "코드 입력 또는 스캔",
        desc: "위 입력란에 위조방지코드를 직접 입력하거나, 위조방지 라벨 사진을 촬영하여 업로드하면 시스템이 자동으로 인식합니다.",
        placeholder: "이미지: 입력/스캔 작업",
      },
      step3: {
        label: "STEP 3",
        title: "시스템 인증",
        desc: "시스템이 데이터베이스에서 귀하의 위조방지코드를 조회합니다. 인증 과정은 몇 초밖에 걸리지 않습니다.",
        placeholder: "이미지: 시스템 인증 중",
      },
      step4: {
        label: "STEP 4",
        title: "인증 결과 확인",
        desc: "인증이 완료되면 제품의 상세 정보가 표시되어 정품임을 확인합니다. 경고 정보가 나타나면 해당 제품은 위조품일 수 있으니 공식 고객센터로 문의하세요.",
        genuineTitle: "정품 인증 완료",
        genuineDesc: "정품입니다. 안심하고 사용하세요",
        fakeTitle: "WARNING",
        fakeDesc: "위조품으로 의심됩니다. 고객센터로 문의하세요",
      },
    },
  },

  verify: {
    title: "BOTATOX 정품인증 서비스 이용 안내",
    subtitle: "HiddenTag APP으로 제품의 라벨을 스캔하면 BOTATOX 제품의 정품 여부를 확인할 수 있습니다",
    step1: {
      label: "STEP 1",
      title: "HiddenTag APP 다운로드",
      desc: "앱스토어에서 HiddenTag APP을 다운로드한 후 정품인증 버튼을 클릭하세요.",
      placeholder: "이미지: APP 다운로드",
    },
    step2: {
      label: "STEP 2",
      title: "라벨 확인",
      desc: "육안으로 라벨을 확인하세요. 정품 라벨은 HiddenTag로 정상 스캔되지만, 위조 라벨은 HiddenTag APP에서 인식되지 않습니다.",
      genuineLabel: "정품 라벨",
      genuineHint: "HiddenTag 인식 가능",
      fakeLabel: "위조 라벨",
      fakeHint: "QR코드로 합성된 가짜 라벨",
    },
    step3: {
      label: "STEP 3",
      title: "HiddenTag 라벨 스캔",
      desc: "제품에 부착된 HiddenTag 라벨을 스캔하세요. 반사광이 없는 환경에서 스캔하면 더 빠르게 인증할 수 있습니다.",
      placeholder: "이미지: 스캔",
    },
    step4: {
      label: "STEP 4",
      title: "인증 결과 확인",
      desc: "BOTATOX 제품 인증 후 관련 이미지를 확인하세요. 아래와 같은 경고 화면이 나타나면 반드시 구매처에 문의하세요.",
      genuineTitle: "정품 인증 완료",
      genuineDesc: "정품입니다. 안심하고 사용하세요",
      fakeTitle: "WARNING",
      fakeDesc: "위조품 가능성, 구매처에 문의하세요",
    },
    cta: "HiddenTag 공식 인증 플랫폼으로 이동",
  },

  contact: {
    title: "문의하기",
    subtitle: "문의 사항이 있으시면 아래 방법으로 HYUNDAIBIO에 연락해 주세요",
    form: {
      title: "메시지 보내기",
      name: "이름",
      namePlaceholder: "이름을 입력하세요",
      email: "이메일",
      emailPlaceholder: "you@company.com",
      phone: "전화번호",
      phonePlaceholder: "+82 10 0000 0000",
      company: "회사",
      companyPlaceholder: "회사명",
      country: "국가",
      countryPlaceholder: "예: 대한민국",
      inquiryType: "문의 유형",
      inquiryPlaceholder: "주제를 선택하세요",
      inquiryOptions: ["제품 문의", "유통 파트너십", "인증 문제", "기타"],
      message: "메시지",
      messagePlaceholder: "문의 내용을 자세히 작성해 주세요...",
      privacy: "개인정보 처리방침에 동의합니다",
      privacyTitle: "개인정보 처리방침",
      privacyContent: "당사는 귀하의 이름과 이메일 주소를 문의에 응답하기 위한 목적으로만 수집합니다. 귀하의 정보는 1년간 안전하게 보관됩니다. 언제든지 개인정보 삭제를 요청하실 수 있습니다.",
      submit: "메시지 보내기",
      success: "감사합니다! 메시지가 전송되었습니다. 24시간 이내에 답변드리겠습니다.",
      close: "닫기",
    },
  },

  about: {
    title: "HYUNDAIBIO 소개",
    nav: { ceo: "CEO 인사말", intro: "회사 개요", network: "글로벌 네트워크" },
    overview: {
      title: "회사 개요",
      desc: "HYUNDAIBIO는 대한민국 서울에 본사를 둔 바이오테크놀로지 기업으로, 프리미엄 메디컬 에스테틱 제품의 연구개발 및 글로벌 유통을 전문으로 합니다. 플래그십 브랜드 BOTATOX를 비롯하여 필러, 스킨부스터, 바이오스티뮬레이터 등 종합적인 제품 포트폴리오를 통해 전 세계 의료 전문가 및 에스테틱 클리닉에 서비스를 제공하고 있습니다.",
      imagePlaceholder: "회사 이미지",
    },
    mission: {
      title: "우리의 미션",
      innovation: { title: "혁신 연구개발", desc: "최첨단 바이오테크놀로지를 기반으로 안전하고 효과적인 메디컬 에스테틱 제품을 만들기 위해 연구개발에 지속적으로 투자합니다." },
      quality: { title: "품질 보증", desc: "국제 품질 기준을 엄격히 준수하며, 모든 제품은 철저한 품질 관리 프로세스를 거칩니다." },
      global: { title: "글로벌 서비스", desc: "전 세계 여러 국가 및 지역에 제품을 공급하며, 세계 각지의 메디컬 에스테틱 전문가에게 신뢰할 수 있는 솔루션을 제공합니다." },
    },
    certifications: { title: "인증 자격", placeholder: "인증서" },
    contactTitle: "연락처",
    ceo: {
      title: "CEO 인사말",
      name: "Zhang Yongnan",
      role: "Chief Executive Officer, Hyundai Bio Co., Ltd.",
      message: "존경하는 파트너 및 관계자 여러분,\n\nHyundai Bio에 오신 것을 환영합니다. 창립 이래 저희는 첨단 바이오 과학과 뷰티 혁신을 결합하여 삶의 질을 높이고 자신감을 불어넣는 제품 개발에 전념해 왔습니다.\n\n피부과 전문의, 생화학자, 처방 전문가로 구성된 팀이 하나의 목표를 공유합니다: 최고의 글로벌 기준에 부합하는 안전하고 효과적인 뷰티 솔루션을 만드는 것입니다.\n\n글로벌 네트워크를 확장하면서도 성실, 혁신, 영향력이라는 핵심 가치를 굳건히 지켜나가겠습니다.\n\n전 세계 파트너분들과 함께 성장하기를 기대합니다.\n\nZhang Yongnan\nHyundai Bio Co., Ltd.",
      photoPlaceholder: "CEO Photo",
    },
    intro: {
      subtitle: "Global Bio & Cosmetic Leading Group",
      title: "Hyundai Bio Co., Ltd.",
      heroDesc: "꿈을 실현하고 세상을 변화시키는 기업. 우리는 외적인 아름다움뿐만 아니라 내면의 아름다움과 성장에 집중하여 국내외 바이오 및 화장품 산업 트렌드를 선도하겠습니다.",
      missionTitle: "Mission",
      missionDesc: "경쟁력 있는 가격과 지속적인 고품질 의료 미용 제품을 통해 글로벌 의료 시장에 대한 접근성을 높이고 전 세계 파트너의 경쟁력을 강화합니다.",
      values: {
        title: "핵심 가치",
        quality: { label: "01", title: "품질", desc: "경쟁력 있는 가격에서도 타협하지 않는 안전성과 안정성." },
        reliability: { label: "02", title: "신뢰성", desc: "모든 단계에서 유지되는 지속적인 공급과 변함없는 품질." },
        scalability: { label: "03", title: "확장성", desc: "국경과 시장을 초월하는 글로벌 비즈니스 구조." },
      },
      vision: {
        title: "인간을 존중하고 자연을 사랑하는 기업",
        desc: "글로벌 의료 미용 시장에서 가장 신뢰받고 접근하기 쉬운 선택지가 되어 선도적인 글로벌 의료 유통 플랫폼 브랜드로 성장합니다.",
      },
    },
    network: {
      title: "글로벌 네트워크",
      desc: "Hyundai Bio의 제품과 파트너십은 전 세계에 걸쳐 있습니다. 신뢰할 수 있는 유통업체, 클리닉 및 소매업체와 협력하여 바이오 코스메틱 솔루션을 전 세계 소비자에게 제공합니다.",
      asia: "베트남",
      americas: "미국",
      europe: "독일",
      stats: { countries: "3+ 국가", regions: "3 지역", founded: "2024년 설립" },
      cta: "귀하의 지역에서 Hyundai Bio 파트너가 되고 싶으신가요?",
      ctaButton: "파트너 되기",
    },
  },

  news: {
    title: "뉴스",
    items: [
      { title: "HYUNDAIBIO, 2024 국제 메디컬 에스테틱 전시회 참가", date: "2024.12", summary: "HYUNDAIBIO가 플래그십 브랜드 BOTATOX와 함께 국제 메디컬 에스테틱 전시회에서 최신 제품과 기술을 선보였습니다." },
      { title: "BOTATOX 신제품 출시 행사 성공적 개최", date: "2025.03", summary: "BOTATOX 신제품 출시 행사가 서울에서 성공적으로 개최되었습니다." },
      { title: "HYUNDAIBIO 글로벌 파트너 30곳 돌파", date: "2025.06", summary: "HYUNDAIBIO의 글로벌 파트너 네트워크가 지속적으로 확장되어 30곳을 돌파했습니다." },
    ],
    videos: { title: "활동 영상", placeholder: "활동 영상" },
  },

  faq: {
    title: "자주 묻는 질문",
    items: [
      {
        q: "BOTATOX 제품의 정품 여부를 어떻게 확인하나요?",
        a: "HiddenTag APP을 다운로드하여 제품의 위조방지 라벨을 스캔하면 됩니다. 자세한 단계는 정품인증 페이지를 참고해 주세요.",
      },
      {
        q: "위조방지 라벨은 제품 어디에 있나요?",
        a: "위조방지 라벨은 제품 포장 박스 외부에 위치해 있습니다. HiddenTag 로고가 있는 라벨을 찾아주세요.",
      },
      {
        q: "위조방지 라벨 스캔에 실패하면 어떻게 하나요?",
        a: "충분한 조명과 반사광이 없는 환경에서 스캔해 주세요. 문제가 지속되면 문의하기 페이지를 통해 고객센터로 연락해 주세요.",
      },
      {
        q: "어떤 국가에 판매하고 있나요?",
        a: "HYUNDAIBIO의 유통 네트워크는 아시아, 유럽, 중동, 남미 등 다수의 국가와 지역을 포괄합니다. 자세한 시장 정보는 문의해 주세요.",
      },
      {
        q: "대리점이 되려면 어떻게 하나요?",
        a: "문의하기 페이지를 통해 협력 의향을 제출해 주시면, 영업팀이 빠른 시일 내에 연락드리겠습니다.",
      },
    ],
  },

  products: {
    title: "BOTATOX 제품 시리즈",
    subtitle: "탁월한 품질로 메디컬 에스테틱의 새로운 기준을 정의합니다",
    items: [
      { name: "BOTATOX 100U", desc: "고순도 보툴리눔 톡신, 미간 주름, 눈가 주름 등 얼굴 주름 개선에 적합합니다." },
      { name: "BOTATOX 200U", desc: "고농축 포뮬러, 깊은 주름 치료 및 넓은 부위 근육 이완에 적합합니다." },
      { name: "BOTATOX 50U", desc: "정밀 용량, 국소적 미세 치료에 적합하며 자연스러운 효과를 제공합니다." },
      { name: "BOTATOX 슬리밍", desc: "얼굴 윤곽 성형을 위해 특별히 개발되었으며, 교근을 정밀하게 타겟하여 세련된 V라인을 만듭니다." },
    ],
    learnMore: "자세히 보기",
  },

  whatsapp: {
    tooltip: "상담하기",
  },
  wechat: {
    tooltip: "WeChat 상담",
    title: "WeChat 문의",
    wechatId: "WeChat ID: Royalfill",
    qrPlaceholder: "WeChat QR 코드",
    copyButton: "WeChat ID 복사",
    copied: "복사 완료",
  },

  productDetail: {
    brandStory: {
      title: "BOTATOX 소개",
      content: "Botatox는 한국 제네톡스(주)의약품 제약사에서 개발한 독자적 기술을 가지고 있는 보톡스 전문 의약품 업체입니다. 제네톡스는 건강한 젊음을 추구한다는 꿈을 키우며, 2018년 6월 창립하였습니다.\n\n투명하고 깨끗한 경영을 통해 고객으로부터 신뢰받고 사랑받는 회사로 키워 나가겠습니다.\n\n2019년 연구전담부서 및 고위험 병원체 취급시설을 설치하고, 제품개발에 힘써왔으며 현재는 강원도 우천면 우천산업단지 내 약 3천평 규모의 GMP 공장을 보유하고 있습니다.\n\n사업분야로는 미용관련 의약품으로 시작하여, 고기능성 화장품 및 전문의약품, 의료기기까지 다양한 분야로 그 영역을 확장하고 있습니다.\n\n제네톡스는 우수한 기술력을 가진 연구인력을 바탕으로 효율적인 시스템 공정을 통해 시장의 경쟁력 있는 제품을 선보일 예정입니다.\n\n전문성을 가진 연구 인력들의 끊임없는 노력과, 투명하고 깨끗한 경영을 통해 고객으로부터 신뢰와 사랑받는 기업으로 키워 나갈 것을 약속드립니다.",
      timeline: ["2018 설립", "2019 연구센터", "GMP 공장"],
    },
    facility: {
      title: "생산 시설",
      mapPlaceholder: "지도",
      address: "강원도 횡성군 우천면 우천산업단지로 38-53",
      tel: "033-344-3700",
      mail: "업데이트 예정",
    },
    back: "← 제품 목록으로 돌아가기",
    description: "제품 소개",
    gallery: "제품 갤러리",
    galleryPlaceholder: "제품 이미지",
    beforeAfter: "시술 효과",
    beforeAfterPlaceholder: "비교",
    videos: "제품 영상",
    unboxingVideo: "언박싱 영상",
    demoVideo: "제품 데모",
    contactCta: "문의하기",
    flagship: "플래그십 제품",
    notFound: "제품을 찾을 수 없습니다",
    notFoundDesc: "제품 목록으로 돌아가서 다른 제품을 찾아보세요.",
    categoryLabel: "분류",
  },

  footer: {
    copyright: "© 2025 HYUNDAIBIO. All rights reserved.",
    faq: "FAQ",
    contact: "문의하기",
  },

  lang: {
    zh: "中文",
    en: "EN",
  },
};

export default ko;
