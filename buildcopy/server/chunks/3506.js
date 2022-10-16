exports.id = 3506;
exports.ids = [3506,2431,5660];
exports.modules = {

/***/ 3634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ mobile_MobileFooterMenu)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(887);
// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__(7789);
// EXTERNAL MODULE: ./styles/MobileFooterMenu.module.scss
var MobileFooterMenu_module = __webpack_require__(9279);
var MobileFooterMenu_module_default = /*#__PURE__*/__webpack_require__.n(MobileFooterMenu_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/mobile/menu.js
const cloud = "https://beautyboothqa.sgp1.cdn.digitaloceanspaces.com/assets/mobile/";
const menus = [{
  hasItems: false,
  isParent: true,
  isCategory: false,
  slug: "new",
  url: "new",
  name: "New",
  image: "new.png",
  items: []
}, {
  hasItems: false,
  isParent: true,
  isCategory: false,
  slug: "brands",
  url: "brands",
  name: "BRANDS",
  image: "brand.png"
}, {
  hasItems: true,
  isParent: true,
  isCategory: true,
  slug: "skin-care",
  name: "Skin Care",
  url: "Skin-Care",
  image: "skin-care.png",
  items: [{
    hasItems: false,
    isParent: false,
    isCategory: true,
    name: "ampoule",
    url: "Skin-Care?sub=ampoule",
    slug: "ampoule",
    // image: "Serum.jpg",
    image: "skin-care/Ampoule.png",
    items: []
  }, {
    hasItems: false,
    isParent: false,
    isCategory: true,
    slug: "bundle-set",
    // image: "Bundle.jpg",
    image: "skin-care/Bundle.png",
    items: [],
    name: "Bundle Set",
    url: "Skin-Care?sub=Bundle-Set"
  }, {
    hasItems: true,
    isParent: false,
    isCategory: true,
    slug: "cleansers",
    // image: "Cleaner.jpg",
    image: "skin-care/Cleaner.png",
    items: [{
      hasItems: false,
      isParent: false,
      isCategory: true,
      slug: "cleansing-balms",
      url: "Skin-Care?sub=Cleansers&child=Cleansing-Balms",
      image: "cleansing_balm.jpg",
      items: [],
      name: "Cleansing Balms"
    }, {
      hasItems: false,
      isParent: false,
      isCategory: true,
      slug: "cleansing-gels",
      image: "Gel.jpg",
      items: [],
      name: "Cleansing Gels",
      url: "Skin-Care?sub=Cleansers&child=Cleansing-Gels"
    }, {
      hasItems: false,
      isParent: false,
      isCategory: true,
      slug: "cleansing-oils",
      image: "Oil.jpg",
      items: [],
      name: "Cleansing Oils",
      url: "Skin-Care?sub=Cleansers&child=Cleansing-Oils"
    }, {
      hasItems: false,
      isParent: false,
      isCategory: true,
      slug: "cleansing-waters",
      image: "Water.jpg",
      items: [],
      name: "Cleansing Waters",
      url: "Skin-Care?sub=Cleansers&child=Cleansing-Waters"
    }, {
      hasItems: false,
      isParent: false,
      isCategory: true,
      slug: "face-wipes",
      image: "face_wipes.jpg",
      items: [],
      name: "Face Wipes",
      url: "Skin-Care?sub=Cleansers&child=Face-Wipes"
    }, {
      hasItems: false,
      isParent: false,
      isCategory: true,
      slug: "facial-cleansing-bars",
      image: "soap_bars.jpg",
      items: [],
      name: "Facial Cleansing bars",
      url: "Skin-Care?sub=Cleansers&child=Facial-Cleansing-bars"
    }, {
      hasItems: false,
      isParent: false,
      isCategory: true,
      slug: "foaming-cleansers",
      image: "foam.jpg",
      items: [],
      name: "Foaming Cleansers",
      url: "Skin-Care?sub=Cleansers&child=Foaming-Cleansers"
    }, {
      hasItems: false,
      isParent: false,
      isCategory: true,
      slug: "make-up-removers",
      image: "make_up_removal.jpg",
      items: [],
      name: "Make Up Removers",
      url: "Skin-Care?sub=Cleansers&child=Make-Up-Removers"
    }],
    name: "Cleansers",
    url: "Skin-Care?sub=Cleansers"
  }, {
    hasItems: false,
    isParent: false,
    isCategory: true,
    slug: "cream",
    // image: "Cream.jpg",
    image: "skin-care/Cream.png",
    items: [],
    name: "Cream",
    url: "Skin-Care?sub=Cream"
  }, {
    hasItems: false,
    isParent: false,
    isCategory: true,
    slug: "essence",
    // image: "Essence.jpg",
    image: "skin-care/Essence.png",
    items: [],
    name: "Essence",
    url: "Skin-Care?sub=Essence"
  }, {
    hasItems: true,
    isParent: false,
    isCategory: true,
    slug: "eye",
    name: "Eye",
    url: "Skin-Care?sub=Eye",
    // image: "Eye.jpg",
    image: "skin-care/Eye.png",
    items: [{
      hasItems: false,
      isParent: false,
      isCategory: true,
      slug: "eye-cream",
      image: "eye_cream.jpg",
      items: [],
      name: "Eye Cream",
      url: "Skin-Care?sub=Eye&child=Eye-Cream"
    }, {
      hasItems: false,
      isParent: false,
      isCategory: true,
      slug: "eye-patch",
      image: "eye_patch.jpg",
      items: [],
      name: "Eye Patch",
      url: "Skin-Care?sub=Eye&child=Eye-Patch"
    }, {
      hasItems: false,
      isParent: false,
      isCategory: true,
      slug: "eye-serum",
      image: "eye_cream.jpg",
      items: [],
      name: "Eye Serum",
      url: "Skin-Care?sub=Eye&child=Eye-Serum"
    }],
    name: "Eye"
  }, {
    hasItems: false,
    isParent: false,
    isCategory: true,
    slug: "face-roller",
    // image: "Roller.jpg",
    image: "skin-care/Roller.png",
    items: [],
    name: "Face Roller",
    url: "Skin-Care?sub=Face-Roller"
  }, {
    hasItems: false,
    isParent: false,
    isCategory: true,
    slug: "kit",
    // image: "kIT.jpg",
    image: "skin-care/Kit.png",
    items: [],
    name: "Kit",
    url: "Skin-Care?sub=Kit"
  }, {
    hasItems: true,
    isParent: false,
    isCategory: true,
    slug: "lip-care",
    // image: "Lipsticks.jpg",
    image: "skin-care/Lipsticks.png",
    items: [{
      hasItems: false,
      isParent: false,
      isCategory: true,
      slug: "lip-balm",
      image: null,
      items: [],
      name: "Lip Balm",
      url: "Skin-Care?sub=Lip-Care&child=Lip-Balm"
    }, {
      hasItems: false,
      isParent: false,
      isCategory: true,
      slug: "lip-sleeping-mask",
      image: null,
      items: [],
      name: "Lip Sleeping Mask",
      url: "Skin-Care?sub=Lip-Care&child=Lip-Sleeping-Mask"
    }],
    name: "Lip Care",
    url: "Skin-Care?sub=Lip-Care"
  }, {
    hasItems: true,
    isParent: false,
    isCategory: true,
    slug: "masks-exfolators",
    // image: "Mask.jpg",
    image: "skin-care/Mask.png",
    items: [{
      hasItems: false,
      isParent: false,
      isCategory: true,
      slug: "exfoliators",
      image: "EXFOLATORS.jpg",
      items: [],
      name: "Exfoliators",
      url: "Skin-Care?sub=Masks-&-Exfolators&child=Exfoliators"
    }, {
      hasItems: false,
      isParent: false,
      isCategory: true,
      slug: "mask-sheet",
      image: "mask_sheet.jpg",
      items: [],
      name: "Mask Sheet",
      url: "Skin-Care?sub=Masks-%26-Exfolators&child=Mask-Sheet"
    }, {
      hasItems: false,
      isParent: false,
      isCategory: true,
      slug: "patchs",
      image: "Patchs.jpg",
      items: [],
      name: "Patchs",
      url: "Skin-Care?sub=Masks-%26-Exfolators&child=Patchs"
    }, {
      hasItems: false,
      isParent: false,
      isCategory: true,
      slug: "wash-off-mask",
      image: "mask_off.jpg",
      items: [],
      name: "Wash Off Mask",
      url: "Skin-Care?sub=Masks-%26-Exfolators&child=Wash-Off-Mask"
    }],
    name: "Masks & Exfolators",
    url: "Skin-Care?sub=Masks-%26-Exfolators"
  }, {
    hasItems: false,
    isParent: false,
    isCategory: true,
    slug: "scrub",
    // image: "Scrub.jpg",
    image: "skin-care/Scrub.png",
    items: [],
    name: "Scrub",
    url: "Skin-Care?sub=Scrub"
  }, {
    hasItems: false,
    isParent: false,
    isCategory: true,
    slug: "serum",
    // image: "Serum.jpg",
    image: "skin-care/Serum.png",
    items: [],
    name: "Serum",
    url: "Skin-Care?sub=Serum"
  }, {
    hasItems: false,
    isParent: false,
    isCategory: true,
    slug: "soothing-gel",
    // image: "Soothing_gel.jpg",
    image: "skin-care/Soothing_gel.png",
    items: [],
    name: "Soothing Gel",
    url: "Skin-Care?sub=Soothing-Gel"
  }, {
    hasItems: false,
    isParent: false,
    isCategory: true,
    slug: "sun-care",
    // image: "Sun_cream.jpg",
    image: "skin-care/Sun_cream.png",
    items: [],
    name: "Sun Care",
    url: "Skin-Care?sub=Sun-Care"
  }, {
    hasItems: false,
    isParent: false,
    isCategory: true,
    slug: "toner",
    // image: "Toner.png",
    image: "skin-care/Toner.png",
    items: [],
    name: "Toner",
    url: "Skin-Care?sub=Toner"
  }]
}, {
  hasItems: true,
  isParent: true,
  isCategory: true,
  slug: "body-care",
  name: "Body Care",
  url: "Body-Care",
  image: "body-care.png",
  items: [{
    hasItems: false,
    isParent: false,
    isCategory: true,
    slug: "bath",
    image: "body-care/bath.png",
    items: [],
    name: "Bath",
    url: "Body-Care?sub=Bath"
  }, {
    hasItems: false,
    isParent: false,
    isCategory: true,
    slug: "bb-body-cream",
    image: "body-care/bb-body-cream.png",
    items: [],
    name: "BB Body Cream",
    url: "Body-Care?sub=BB-Body-Cream"
  }, {
    hasItems: false,
    isParent: false,
    isCategory: true,
    slug: "body-sun-care",
    image: "body-care/body_sun.png",
    items: [],
    name: "Body Sun Care",
    url: "Body-Care?sub=Body-Sun-Care"
  }, {
    hasItems: false,
    isParent: false,
    isCategory: true,
    image: "body-care/Cream.png",
    items: [],
    name: "Lotion",
    url: "Body-Care?sub=Lotion",
    slug: "lotion"
  }, {
    hasItems: true,
    isParent: false,
    isCategory: true,
    slug: "hand-foot-care",
    image: "body-care/7.png",
    items: [{
      hasItems: false,
      isParent: false,
      isCategory: true,
      slug: "foot-mask",
      image: "foot.jpg",
      items: [],
      name: "Foot Mask",
      url: "Body-Care?sub=Hand-%26-Foot-Care&child=Foot-Mask"
    }, {
      hasItems: false,
      isParent: false,
      isCategory: true,
      slug: "hand-cream",
      image: "9.jpg",
      items: [],
      name: "Hand Cream",
      url: "Body-Care?sub=Hand-%26-Foot-Care&child=Hand-Cream"
    }, {
      hasItems: false,
      isParent: false,
      isCategory: true,
      slug: "hand-mask",
      image: "8.jpg",
      items: [],
      name: "Hand Mask",
      url: "Body-Care?sub=Hand-%26-Foot-Care&child=Hand-Mask"
    }, {
      hasItems: false,
      isParent: false,
      isCategory: true,
      slug: "hand-sanitizer",
      image: "10.jpg",
      items: [],
      name: "Hand Sanitizer",
      url: "Body-Care?sub=Hand-%26-Foot-Care&child=Hand-Sanitizer"
    }],
    name: "Hand & Foot Care",
    url: "Body-Care?sub=Hand-%26-Foot-Care"
  }, {
    hasItems: false,
    isParent: false,
    isCategory: true,
    slug: "intimate-care",
    image: "body-care/intimate_care.png",
    items: [],
    name: "Intimate Care",
    url: "Body-Care?sub=Intimate-Care"
  } // {
  //   hasItems: false,
  //   isParent: false,
  //   isCategory: true,
  //   slug: "supplement",
  //   image: "Essence.jpg",
  //   items: [],
  //   name: "Supplement",
  //   url: "Body-Care?sub=Supplement",
  // },
  ]
}, {
  hasItems: true,
  isParent: true,
  isCategory: true,
  slug: "hair-care",
  name: "Hair Care",
  url: "Hair-Care",
  image: "hair-care.png",
  items: [{
    hasItems: false,
    isParent: false,
    isCategory: true,
    slug: "conditioner",
    image: "hair-care/Conditioner.png",
    items: [],
    name: "Conditioner",
    url: "Hair-Care?sub=Conditioner"
  }, {
    hasItems: false,
    isParent: false,
    isCategory: true,
    slug: "hair-color",
    image: "hair-care/hair_color.png",
    items: [],
    name: "Hair Color",
    url: "Hair-Care?sub=Hair-Color"
  }, {
    hasItems: false,
    isParent: false,
    isCategory: true,
    slug: "hair-cream-masks",
    image: "hair-care/hair_cream.png",
    items: [],
    name: "Hair Cream & Masks",
    url: "Hair-Care?sub=Hair-Cream-%26-Masks"
  }, {
    hasItems: false,
    isParent: false,
    isCategory: true,
    slug: "hair-serum",
    image: "hair-care/hair_serum.png",
    items: [],
    name: "Hair Serum",
    url: "Hair-Care?sub=Hair-Serum"
  }, {
    hasItems: false,
    isParent: false,
    isCategory: true,
    slug: "shampoo",
    image: "hair-care/shampoo.png",
    items: [],
    name: "Shampoo",
    url: "Hair-Care?sub=Shampoo"
  }, {
    hasItems: false,
    isParent: false,
    isCategory: true,
    slug: "treatment",
    image: "hair-care/treatment.png",
    items: [],
    name: "Treatment",
    url: "Hair-Care?sub=Treatment"
  }]
}, {
  hasItems: true,
  isParent: true,
  isCategory: true,
  slug: "makeup",
  name: "Makeup",
  url: "Makeup",
  image: "make-up.png",
  items: [{
    hasItems: false,
    isParent: false,
    isCategory: true,
    slug: "base-makeup",
    image: "make-up/base make up.png",
    items: [],
    name: "Base Makeup",
    url: "Makeup?sub=Base-Makeup"
  }, {
    hasItems: false,
    isParent: false,
    isCategory: true,
    slug: "beauty-accessories",
    image: "make-up/accesso.png",
    items: [],
    name: "Beauty Accessories",
    url: "Makeup?sub=Beauty-Accessories"
  }, {
    hasItems: false,
    isParent: false,
    isCategory: true,
    image: "make-up/base make up.png",
    items: [],
    name: "Blusher",
    url: "Makeup?sub=Blusher",
    slug: "blusher"
  }, {
    hasItems: false,
    isParent: false,
    isCategory: true,
    slug: "cushion",
    image: "make-up/Cushion.png",
    items: [],
    name: "Cushion",
    url: "Makeup?sub=Cushion"
  }, {
    hasItems: true,
    isParent: false,
    isCategory: true,
    slug: "eye",
    image: "make-up/Eyes.png",
    items: [{
      hasItems: false,
      isParent: false,
      isCategory: true,
      slug: "eye-liner",
      image: "Eye liner.jpg",
      items: [],
      name: "Eye Liner",
      url: "Makeup?sub=Eye&child=Eye-Liner"
    }, {
      hasItems: false,
      isParent: false,
      isCategory: true,
      slug: "eye-shadow",
      image: "Eye shadow.jpg",
      items: [],
      name: "Eye Shadow",
      url: "Makeup?sub=Eye&child=Eye-Shadow"
    }, {
      hasItems: false,
      isParent: false,
      isCategory: true,
      slug: "eyebrow",
      image: "eye brow.jpg",
      items: [],
      name: "EyeBrow",
      url: "Makeup?sub=Eye&child=EyeBrow"
    }, {
      hasItems: false,
      isParent: false,
      isCategory: true,
      slug: "mascara",
      image: "mascara.jpg",
      items: [],
      name: "Mascara",
      url: "Makeup?sub=Eye&child=Mascara"
    }],
    name: "Eye",
    url: "Makeup?sub=Eye"
  }, {
    hasItems: false,
    isParent: false,
    isCategory: true,
    image: "make-up/highlighter.png",
    items: [],
    name: "Highlighter",
    url: "Makeup?sub=Highlighter",
    slug: "highlighter"
  }, {
    hasItems: true,
    isParent: false,
    isCategory: true,
    slug: "lip",
    image: "make-up/Lip.png",
    items: [{
      hasItems: false,
      isParent: false,
      isCategory: true,
      slug: "lip-tint",
      image: "Lip tint.jpg",
      items: [],
      name: "Lip Tint",
      url: "Makeup?sub=Lip&child=Lip-Tint"
    }, {
      hasItems: false,
      isParent: false,
      isCategory: true,
      slug: "lipstick",
      image: "lipstick.jpg",
      items: [],
      name: "lipstick",
      url: "Makeup?sub=Lip&child=lipstick"
    }],
    name: "Lip",
    url: "Makeup?sub=Lip"
  }]
}, {
  hasItems: false,
  isParent: true,
  isCategory: true,
  slug: "fragrance",
  name: "Fragrance",
  url: "Fragrance",
  image: "fragrance.png",
  items: []
}, {
  hasItems: true,
  isParent: true,
  isCategory: true,
  slug: "accessories",
  name: "Accessories",
  url: "Accessories",
  image: "accessories.png",
  items: [{
    hasItems: false,
    isParent: false,
    isCategory: true,
    name: "Beauty Tools",
    url: "Accessories?sub=Beauty-Tools",
    slug: "beauty-tools",
    items: []
  }, {
    hasItems: false,
    isParent: false,
    isCategory: true,
    name: "Women's Fashion Jewelry",
    url: "Accessories?sub=Women's-Fashion-Jewelry",
    slug: "womens-fashion-jewelry-accessories",
    items: []
  }, {
    hasItems: false,
    isParent: false,
    isCategory: true,
    name: "Candles",
    url: "Accessories?sub=Candles",
    slug: "candles",
    items: []
  }]
}, {
  hasItems: false,
  isParent: true,
  isCategory: false,
  slug: "campaigns",
  name: "Campaigns",
  url: "campaigns",
  image: "campaign.png",
  items: []
}, {
  hasItems: false,
  isParent: true,
  isCategory: false,
  slug: "best-selling",
  url: "best-selling",
  name: "Best Selling",
  image: "best-selling.png",
  items: []
}];
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./components/mobile/MobileFooterMenu.js













function MobileFooterMenu(props) {
  const router = (0,router_.useRouter)();
  const {
    isAuthenticated
  } = props.auth;
  const {
    t,
    FontAwesomeIcon
  } = props;
  (0,external_react_.useEffect)(() => {
    if (props.menu) {
      setCategoryMenu(props.menu); // setCategoryMenu(props.menu.filter((item) => item.isCategory));
    }
  }, [props.menu]);
  const {
    0: chat,
    1: setChat
  } = (0,external_react_.useState)(false);
  const {
    0: active,
    1: setActive
  } = (0,external_react_.useState)(false);
  const {
    0: categoryMenu,
    1: setCategoryMenu
  } = (0,external_react_.useState)(null);
  const {
    0: showScroll,
    1: setShowScroll
  } = (0,external_react_.useState)(false);
  const {
    0: openChild,
    1: setOpenChild
  } = (0,external_react_.useState)(-1);
  const {
    0: indexLevel,
    1: setIndexLevel
  } = (0,external_react_.useState)(-1);
  const {
    0: openPopup,
    1: setOpenPopup
  } = (0,external_react_.useState)(false);
  const {
    0: step,
    1: setStep
  } = (0,external_react_.useState)(0);
  const {
    0: stepValue,
    1: setStepValue
  } = (0,external_react_.useState)();
  const {
    0: step2Value,
    1: setStep2Value
  } = (0,external_react_.useState)(); // const checkScrollTop = () => {
  //   if (!showScroll && window.pageYOffset > 200) {
  //     setShowScroll(true);
  //   } else if (showScroll && window.pageYOffset <= 200) {
  //     setShowScroll(false);
  //   }
  // };

  (0,external_react_.useEffect)(() => {
    let mounted = true;

    const onTidioChatApiReady = () => {
      window.tidioChatApi.display(false);
      setChat(true);
    };

    const onChatClosed = () => {
      window.tidioChatApi.display(false);
    };

    if (window.tidioChatApi) {
      window.tidioChatApi.on("ready", onTidioChatApiReady);
      window.tidioChatApi.on("close", onChatClosed);
    } else {
      document.addEventListener("tidioChat-ready", onTidioChatApiReady);
    }

    return () => mounted = false;
  }, [chat]);
  (0,external_react_.useEffect)(() => {
    setTimeout(() => {
      const script = document.createElement("script");
      script.src = "https://code.tidio.co/78qfcpefcnzbgxw8p5mepwdusgyunte4.js";
      script.async = true;
      document.body.appendChild(script);
    }, 1500);
  }, []);

  const openChat = () => {
    window.tidioChatApi.display(true);
    window.tidioChatApi.open();
  };

  const activeHandler = () => {
    setActive(!active);
    setOpenChild(-1);
    setIndexLevel(-1);
  };

  (0,external_react_.useEffect)(() => {
    if (openChild === -1) {
      setIndexLevel(-1);
    }
  }, [openChild]);

  const menuActiveHandler = (index, level) => {
    if (`${index}-${level}` === openChild) {
      setOpenChild(-1);
    } else {
      setOpenChild(`${index}-${level}`);
    }

    setIndexLevel(`${index}-${level}`);
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }; // window.addEventListener("scroll", checkScrollTop);


  const CategoryMenuComponent = menu => {
    let level = parseInt(menu.level);
    return menu.menu.map((menu, index) => {
      let generatedURL = menu.isCategory ? `/category/${menu.slug}` : menu.isParent ? "/" + menu.slug.split(" ").join("-") : `${menu.slug.split(" ").join("-")}`;

      if (menu.hasItems) {
        menu.open = typeof menu.open !== "undefined" ? menu.open : "closed";

        if (indexLevel === `${index}-${level}`) {
          menu.open = "open";
        } else {
          menu.open = "closed";
        }

        return /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          onClick: () => {
            menuActiveHandler(index, level);
          },
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(next_link.default, {
            href: generatedURL,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              onClick: () => setActive(false),
              children: [menu.name, " ", menu.hasItems ? /*#__PURE__*/jsx_runtime_.jsx(FontAwesomeIcon, {
                icon: free_solid_svg_icons_.faChevronRight,
                className: "ml-4"
              }) : null, " "]
            }), " "]
          }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
            className: level > 0 ? "open" : menu.open,
            children: /*#__PURE__*/jsx_runtime_.jsx(CategoryMenuComponent, {
              menu: menu.items,
              level: parseInt(level + 1),
              open: menu.open
            })
          })]
        }, index);
      } else {
        return /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: generatedURL,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              onClick: () => setActive(false),
              children: [" ", menu.name, " ", menu.hasItems ? /*#__PURE__*/jsx_runtime_.jsx(FontAwesomeIcon, {
                icon: free_solid_svg_icons_.faChevronRight,
                className: "ml-4"
              }) : null, " "]
            })
          })
        }, index);
      }
    });
  };

  const itemHandler = item => {
    setStep(1);
    setStepValue(item);
  };

  const itemHandler2 = item => {
    setStep(2);
    setStep2Value(item);
  };

  const routeHandler = item => {
    setOpenPopup(false);

    if (item.isCategory) {
      router.push(`/category/${item.url}`);
    } else {
      router.push(`/${item.url}`);
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (MobileFooterMenu_module_default()).mobileFooterMenu,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (MobileFooterMenu_module_default()).mobile_footer_menu,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "mobile_scroll_top",
        onClick: scrollTop,
        style: {
          height: 40,
          display: showScroll ? "flex" : "none"
        },
        children: /*#__PURE__*/jsx_runtime_.jsx(FontAwesomeIcon, {
          className: "scrollTop",
          icon: free_solid_svg_icons_.faArrowUp
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (MobileFooterMenu_module_default()).mobile_footer_wrapper,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          className: (MobileFooterMenu_module_default()).mobile_footer,
          children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
            onClick: () => setActive(false),
            className: (MobileFooterMenu_module_default()).menu_item,
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                className: (MobileFooterMenu_module_default()).menu_item_wrap,
                children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/footericon/home.svg",
                  style: {
                    width: 25,
                    height: 25
                  },
                  alt: "",
                  srcSet: ""
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: t("h")
                })]
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: (MobileFooterMenu_module_default()).menu_item,
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: (MobileFooterMenu_module_default()).menu_item_wrap,
                onClick: () => {
                  setStep(0);
                  setOpenPopup(true);
                },
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/footericon/menu.svg",
                    style: {
                      width: 25,
                      height: 25
                    },
                    alt: "",
                    srcSet: ""
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: t("Category")
                  })]
                })
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            onClick: () => setActive(false),
            className: (MobileFooterMenu_module_default()).menu_item,
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/bag",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                className: `${(MobileFooterMenu_module_default()).menu_item_wrap}`,
                children: [/*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: `${(MobileFooterMenu_module_default()).svgWrap} ${(MobileFooterMenu_module_default()).bag_top}`,
                    children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                      src: "/footericon/bag.svg",
                      style: {
                        width: 30,
                        height: 30
                      },
                      alt: "",
                      srcSet: ""
                    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: `${(MobileFooterMenu_module_default()).bag_count} badge badge-primary`,
                      children: props.cartItems.length
                    })]
                  })
                }), " "]
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            onClick: () => setActive(false),
            className: (MobileFooterMenu_module_default()).menu_item,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (MobileFooterMenu_module_default()).menu_item_wrap,
              onClick: chat && openChat,
              children: [chat ? /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/footericon/chat.svg",
                style: {
                  width: 25,
                  height: 25
                },
                alt: "",
                srcSet: ""
              }) : /*#__PURE__*/jsx_runtime_.jsx(FontAwesomeIcon, {
                icon: free_solid_svg_icons_.faSpinner,
                pulse: !chat
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                children: t("chat")
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            onClick: () => setActive(false),
            className: (MobileFooterMenu_module_default()).menu_item,
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: isAuthenticated ? "/profile" : "/login",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: (MobileFooterMenu_module_default()).menu_item_wrap,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/footericon/user.svg",
                    style: {
                      width: 25,
                      height: 25
                    },
                    alt: "",
                    srcSet: ""
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: t("Profile")
                  })]
                })
              })
            })
          })]
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: openPopup ? `${(MobileFooterMenu_module_default()).category_popup} ${(MobileFooterMenu_module_default()).active}` : `${(MobileFooterMenu_module_default()).category_popup}`,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (MobileFooterMenu_module_default()).category_popup_inner,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (MobileFooterMenu_module_default()).popup_top,
          onClick: () => setOpenPopup(false),
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (MobileFooterMenu_module_default()).close,
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/footericon/close.svg",
              style: {
                width: 25,
                height: 25
              },
              alt: "",
              srcSet: ""
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (MobileFooterMenu_module_default()).inner_content,
          children: [step == 0 && /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (MobileFooterMenu_module_default()).popup_title,
            children: "CATEGORIES"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [step == 0 && /*#__PURE__*/jsx_runtime_.jsx("ul", {
              className: (MobileFooterMenu_module_default()).cat_list,
              children: menus.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: item.hasItems ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                  className: (MobileFooterMenu_module_default()).a,
                  onClick: () => {
                    itemHandler(item);
                  },
                  children: [item.name, /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: (MobileFooterMenu_module_default()).cat_img,
                    children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                      src: `/category/${item.image}`,
                      height: 40,
                      width: 40
                    })
                  })]
                }) : /*#__PURE__*/jsx_runtime_.jsx("span", {
                  onClick: () => routeHandler(item),
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                    className: (MobileFooterMenu_module_default()).a,
                    children: [item.name, /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: (MobileFooterMenu_module_default()).cat_img,
                      children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                        src: `/category/${item.image}`,
                        height: 40,
                        width: 40
                      })
                    })]
                  })
                })
              }, index))
            }), step == 1 && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
                className: (MobileFooterMenu_module_default()).back_button,
                onClick: () => {
                  setStep(0);
                },
                children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                  src: "/footericon/back.svg",
                  height: 8,
                  width: 12
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: stepValue.name
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
                className: (MobileFooterMenu_module_default()).sub_cat_list,
                children: stepValue.items && stepValue.items.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: item.hasItems ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                    className: (MobileFooterMenu_module_default()).a,
                    onClick: () => itemHandler2(item),
                    children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                      children: item.name
                    }), " ", /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                      src: "/footericon/arrow.svg",
                      width: 20,
                      height: 20
                    })]
                  }) : /*#__PURE__*/jsx_runtime_.jsx("span", {
                    onClick: () => routeHandler(item),
                    className: (MobileFooterMenu_module_default()).a,
                    children: item.name
                  })
                }, index))
              })]
            }), step == 2 && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
                className: (MobileFooterMenu_module_default()).back_button,
                onClick: () => {
                  setStep(1);
                },
                children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                  src: "/footericon/back.svg",
                  height: 8,
                  width: 12
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: step2Value.name
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
                className: (MobileFooterMenu_module_default()).sub_cat_list,
                children: step2Value.items.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: item.hasItems ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                    className: (MobileFooterMenu_module_default()).a,
                    onClick: () => itemHandler2(item),
                    children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                      children: item.name
                    }), " ", /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                      src: "/footericon/arrow.svg",
                      width: 20,
                      height: 20
                    })]
                  }) : /*#__PURE__*/jsx_runtime_.jsx("span", {
                    onClick: () => routeHandler(item),
                    className: (MobileFooterMenu_module_default()).a,
                    children: item.name
                  })
                }, index))
              })]
            })]
          })]
        })]
      })
    })]
  });
}

const mapStateToProps = state => ({
  cartItems: state.cart.cartItem,
  auth: state.auth
});

/* harmony default export */ const mobile_MobileFooterMenu = ((0,external_react_redux_.connect)(mapStateToProps)((0,external_react_i18next_.withTranslation)("common")(MobileFooterMenu)));

/***/ }),

/***/ 9279:
/***/ ((module) => {

// Exports
module.exports = {
	"mobile_footer_menu": "MobileFooterMenu_mobile_footer_menu__1jvkE",
	"mobile_scroll_top": "MobileFooterMenu_mobile_scroll_top__3pBPo",
	"mobile_footer": "MobileFooterMenu_mobile_footer__1dJj3",
	"menu_item_wrap": "MobileFooterMenu_menu_item_wrap__YNCAE",
	"svgWrap": "MobileFooterMenu_svgWrap__209R7",
	"bag_count": "MobileFooterMenu_bag_count__3ST_y",
	"bag_top": "MobileFooterMenu_bag_top__2LLIX",
	"category_slide_div": "MobileFooterMenu_category_slide_div__3uhxZ",
	"active": "MobileFooterMenu_active__2VxOG",
	"back": "MobileFooterMenu_back__xl5VF",
	"open": "MobileFooterMenu_open__2VxKJ",
	"category_popup": "MobileFooterMenu_category_popup__18ht1",
	"popup_top": "MobileFooterMenu_popup_top__2V1ih",
	"close": "MobileFooterMenu_close__3KdP1",
	"category_popup_inner": "MobileFooterMenu_category_popup_inner__7AMpe",
	"inner_content": "MobileFooterMenu_inner_content__hGx0m",
	"popup_title": "MobileFooterMenu_popup_title__123a6",
	"cat_list": "MobileFooterMenu_cat_list__3F55A",
	"a": "MobileFooterMenu_a__1563g",
	"sub_cat_list": "MobileFooterMenu_sub_cat_list__2u78a",
	"back_button": "MobileFooterMenu_back_button__2M715",
	"cat_img": "MobileFooterMenu_cat_img__gv9od"
};


/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;