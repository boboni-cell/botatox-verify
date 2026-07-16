import type { Translations } from "./zh";

const ko: Translations = {
  nav: {
    home: "홈",
    products: "제품",
    verification: "정품인증",
    about: "회사소개",
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
  },

  about: {
    title: "HYUNDAIBIO 소개",
    overview: {
      title: "회사 개요",
      desc: "HYUNDAIBIO는 대한민국 서울에 본사를 둔 바이오테크놀로지 기업으로, 프리미엄 메디컬 에스테틱 제품의 연구개발 및 글로벌 유통을 전문으로 합니다. 플래그십 브랜드 BOTATOX를 비롯하여 필러, 스킨부스터, 바이오스티뮬레이터 등 종합적인 제품 포트폴리오를 통해 전 세계 의료 전문가 및 에스테틱 클리닉에 서비스를 제공하고 있습니다.",
      imagePlaceholder: "회사 이미지",
    },
    mission: {
      title: "우리의 미션",
      innovation: {
        title: "혁신 연구개발",
        desc: "최첨단 바이오테크놀로지를 기반으로 안전하고 효과적인 메디컬 에스테틱 제품을 만들기 위해 연구개발에 지속적으로 투자합니다.",
      },
      quality: {
        title: "품질 보증",
        desc: "국제 품질 기준을 엄격히 준수하며, 모든 제품은 철저한 품질 관리 프로세스를 거칩니다.",
      },
      global: {
        title: "글로벌 서비스",
        desc: "전 세계 여러 국가 및 지역에 제품을 공급하며, 세계 각지의 메디컬 에스테틱 전문가에게 신뢰할 수 있는 솔루션을 제공합니다.",
      },
    },
    certifications: {
      title: "인증 자격",
      placeholder: "인증서",
    },
    contactTitle: "연락처",
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
