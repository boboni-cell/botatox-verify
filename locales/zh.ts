const zh = {
  nav: {
    home: "首页",
    verification: "产品验证",
    about: "关于我们",
    contact: "联系方式",
  },

  home: {
    codeVerification: {
      badge: "即将上线",
      title: "防伪码直接验证",
      subtitle: "输入产品防伪码或上传防伪标签图片，快速验证产品真伪",
      codeLabel: "防伪码",
      codePlaceholder: "请输入防伪码",
      or: "或者",
      uploadLabel: "上传防伪标签图片",
      uploadHint: "支持拍照或从相册选择",
      uploadButton: "上传防伪标签图片",
      verifyButton: "立即验证",
      toast: "功能开发中，敬请期待",
    },
    guide: {
      title: "产品真伪验证",
      description: "BOTATOX 产品采用 HiddenTag 防伪技术，请通过官方渠道验证",
      button: "查看验证方法",
    },
    steps: {
      title: "验证流程",
      step1: {
        label: "STEP 1",
        title: "找到防伪码",
        desc: "在 BOTATOX 产品包装上找到防伪标签，标签上印有唯一的防伪验证码。",
        placeholder: "示意图：防伪标签位置",
      },
      step2: {
        label: "STEP 2",
        title: "输入或扫描防伪码",
        desc: "在上方输入框中手动输入防伪码，或拍照上传防伪标签图片，系统将自动识别。",
        placeholder: "示意图：输入/扫描操作",
      },
      step3: {
        label: "STEP 3",
        title: "系统验证",
        desc: "系统将在数据库中比对您的防伪码，验证过程仅需几秒钟。",
        placeholder: "示意图：系统验证中",
      },
      step4: {
        label: "STEP 4",
        title: "查看验证结果",
        desc: "验证通过将显示产品详细信息，确认为正品。如显示警告信息，该产品可能为仿冒品，请联系官方客服。",
        genuineTitle: "正品验证通过",
        genuineDesc: "产品为正品，请放心使用",
        fakeTitle: "WARNING",
        fakeDesc: "可能为仿冒品，请联系客服",
      },
    },
  },

  verify: {
    title: "BOTATOX 正品验证服务使用向导",
    subtitle: "通过 HiddenTag APP 扫描产品上的标签，即可验证 BOTATOX 产品真伪",
    step1: {
      label: "STEP 1",
      title: "下载 HiddenTag APP",
      desc: "在手机应用商店下载 HiddenTag APP 后，点击正品认证按钮。",
      placeholder: "APP下载示意图",
    },
    step2: {
      label: "STEP 2",
      title: "确认标签",
      desc: "请用肉眼确认标签。正品标签可以通过 HiddenTag 正常扫描识别，假的标签则无法被 HiddenTag APP 识别。",
      genuineLabel: "正品标签",
      genuineHint: "可被 HiddenTag 识别",
      fakeLabel: "假货标签",
      fakeHint: "由二维码合成的假标签",
    },
    step3: {
      label: "STEP 3",
      title: "扫描 HiddenTag 标签",
      desc: "请扫描附着在产品上的 HiddenTag 标签。在不反光的情况下扫描，能够更迅速的完成认证。",
      placeholder: "扫描示意图",
    },
    step4: {
      label: "STEP 4",
      title: "查看验证结果",
      desc: "请在认证 BOTATOX 产品后，确认相关图片。如出现下方警告画面，请一定要向购买处咨询。",
      genuineTitle: "正品验证通过",
      genuineDesc: "产品为正品，请放心使用",
      fakeTitle: "WARNING",
      fakeDesc: "可能为仿冒品，请向购买处咨询",
    },
    cta: "前往 HiddenTag 官方验证平台",
  },

  contact: {
    title: "联系我们",
    subtitle: "如有任何疑问，请通过以下方式联系 HYUNDAIBIO",
  },

  footer: {
    copyright: "© 2025 HYUNDAIBIO. All rights reserved.",
    privacy: "隐私政策",
    contact: "联系我们",
  },

  lang: {
    zh: "中文",
    en: "EN",
  },
};

export default zh;
export type Translations = typeof zh;
