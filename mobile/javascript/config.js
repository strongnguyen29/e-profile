var aliasConfig = {
    appName: ["", "", ""],
    totalPageCount: [],
    largePageWidth: [],
    largePageHeight: [],
    normalPath: [],
    largePath: [],
    thumbPath: [],

    ToolBarsSettings: [],
    TitleBar: [],
    appLogoIcon: ["appLogoIcon"],
    appLogoLinkURL: ["appLogoLinkURL"],
    bookTitle: [],
    bookDescription: [],
    ButtonsBar: [],
    ShareButton: [],
    ShareButtonVisible: ["socialShareButtonVisible"],
    ThumbnailsButton: [],
    ThumbnailsButtonVisible: ["enableThumbnail"],
    ZoomButton: [],
    ZoomButtonVisible: ["enableZoomIn"],
    FlashDisplaySettings: [],
    MainBgConfig: [],
    bgBeginColor: ["bgBeginColor"],
    bgEndColor: ["bgEndColor"],
    bgMRotation: ["bgMRotation"],
    backGroundImgURL: ["mainbgImgUrl", "innerMainbgImgUrl"],
    pageBackgroundColor: ["pageBackgroundColor"],
    flipshortcutbutton: [],
    BookMargins: [],
    topMargin: [],
    bottomMargin: [],
    leftMargin: [],
    rightMargin: [],
    HTMLControlSettings: [],
    linkconfig: [],
    LinkDownColor: ["linkOverColor"],
    LinkAlpha: ["linkOverColorAlpha"],
    OpenWindow: ["linkOpenedWindow"],
    searchColor: [],
    searchAlpha: [],
    SearchButtonVisible: ["searchButtonVisible"],

    productName: [],
    homePage: [],
    enableAutoPlay: ["autoPlayAutoStart"],
    autoPlayDuration: ["autoPlayDuration"],
    autoPlayLoopCount: ["autoPlayLoopCount"],
    BookMarkButtonVisible: [],
    googleAnalyticsID: ["googleAnalyticsID"],
    OriginPageIndex: [],
    HardPageEnable: ["isHardCover"],
    UIBaseURL: [],
    RightToLeft: ["isRightToLeft"],

    LeftShadowWidth: ["leftPageShadowWidth"],
    LeftShadowAlpha: ["pageShadowAlpha"],
    RightShadowWidth: ["rightPageShadowWidth"],
    RightShadowAlpha: ["pageShadowAlpha"],
    ShortcutButtonHeight: [],
    ShortcutButtonWidth: [],
    AutoPlayButtonVisible: ["enableAutoPlay"],
    DownloadButtonVisible: ["enableDownload"],
    DownloadURL: ["downloadURL"],
    HomeButtonVisible: ["homeButtonVisible"],
    HomeURL: ['btnHomeURL'],
    BackgroundSoundURL: ['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
    PrintButtonVisible: ["enablePrint"],
    toolbarColor: ["mainColor", "barColor"],
    loadingBackground: ["mainColor", "barColor"],
    BackgroundSoundButtonVisible: ["enableFlipSound"],
    FlipSound: ["enableFlipSound"],
    MiniStyle: ["userSmallMode"],
    retainBookCenter: ["moveFlipBookToCenter"],
    totalPagesCaption: ["totalPageNumberCaptionStr"],
    pageNumberCaption: ["pageIndexCaptionStrs"]
};
var aliasLanguage = {
        frmPrintbtn: ["frmPrintCaption"],
        frmPrintall: ["frmPrintPrintAll"],
        frmPrintcurrent: ["frmPrintPrintCurrentPage"],
        frmPrintRange: ["frmPrintPrintRange"],
        frmPrintexample: ["frmPrintExampleCaption"],
        btnLanguage: ["btnSwicthLanguage"],
        btnTableOfContent: ["btnBookMark"]
    }
;
var bookConfig = {
    appName: 'flippdf',
    totalPageCount: 0,
    largePageWidth: 1080,
    largePageHeight: 1440,
    normalPath: "files/page/",
    largePath: "files/large/",
    thumbPath: "files/thumb/",

    ToolBarsSettings: "",
    TitleBar: "",
    appLogoLinkURL: "",
    bookTitle: "FLIPBUILDER",
    bookDescription: "",
    ButtonsBar: "",
    ShareButton: "",

    ThumbnailsButton: "",
    ThumbnailsButtonVisible: "Show",
    ZoomButton: "",
    ZoomButtonVisible: "Yes",
    FlashDisplaySettings: "",
    MainBgConfig: "",
    bgBeginColor: "#cccccc",
    bgEndColor: "#eeeeee",
    bgMRotation: 45,
    pageBackgroundColor: "#FFFFFF",
    flipshortcutbutton: "Show",
    BookMargins: "",
    topMargin: 10,
    bottomMargin: 10,
    leftMargin: 10,
    rightMargin: 10,
    HTMLControlSettings: "",
    linkconfig: "",
    LinkDownColor: "#808080",
    LinkAlpha: 0.5,
    OpenWindow: "_Blank",

    BookMarkButtonVisible: 'true',
    productName: 'Demo created by Flip PDF',
    homePage: 'http://www.flipbuilder.com/',
    isFlipPdf: "true",
    TableOfContentButtonVisible: "true",
    searchTextJS: 'javascript/search_config.js',
    searchPositionJS: undefined
};


bookConfig.BookTemplateName = "metro";
bookConfig.loadingCaptionColor = "#DDDDDD";
bookConfig.loadingBackground = "#323232";
bookConfig.appLogoIcon = "files/mobile-ext/appLogoIcon.PNG";
bookConfig.appLogoOpenWindow = "Blank";
bookConfig.logoHeight = "40";
bookConfig.logoPadding = "0";
bookConfig.logoTop = "0";
bookConfig.toolbarColor = "#ffffff";
bookConfig.iconColor = "#555555";
bookConfig.pageNumColor = "#000000";
bookConfig.iconFontColor = "#FFFFFF";
bookConfig.toolbarAlwaysShow = "No";
bookConfig.formFontColor = "#27181A";
bookConfig.formBackgroundColor = "#27181A";
bookConfig.InstructionsButtonVisible = "Show";
bookConfig.showInstructionOnStart = "No";
bookConfig.showGotoButtonsAtFirst = "No";
bookConfig.QRCode = "Hide";
bookConfig.HomeButtonVisible = "Hide";
bookConfig.HomeURL = "%first page%";
bookConfig.aboutButtonVisible = "Hide";
bookConfig.enablePageBack = "Show";
bookConfig.ShareButtonVisible = "Show";
shareObj = [];
bookConfig.isInsertFrameLinkEnable = "Show";
bookConfig.addCurrentPage = "No";
bookConfig.EmailButtonVisible = "Show";
bookConfig.btnShareWithEmailBody = "{link}";
bookConfig.ThumbnailsButtonVisible = "Show";
bookConfig.thumbnailColor = "#333333";
bookConfig.thumbnailAlpha = "70";
bookConfig.BookMarkButtonVisible = "Hide";
bookConfig.TableOfContentButtonVisible = "Show";
bookConfig.SearchButtonVisible = "Hide";
bookConfig.leastSearchChar = "3";
bookConfig.searchKeywordFontColor = "#FFB000";
bookConfig.searchHightlightColor = "#ffff00";
bookConfig.SelectTextButtonVisible = "Hide";
bookConfig.PrintButtonVisible = "Hide";
bookConfig.BackgroundSoundButtonVisible = "Show";
bookConfig.FlipSound = "No";
bookConfig.BackgroundSoundLoop = "-1";
bookConfig.AutoPlayButtonVisible = "Show";
bookConfig.autoPlayAutoStart = "No";
bookConfig.autoPlayDuration = "9";
bookConfig.autoPlayLoopCount = "1";
bookConfig.ZoomButtonVisible = "Show";
bookConfig.maxZoomWidth = "1400";
bookConfig.defaultZoomWidth = "1000";
bookConfig.mouseWheelFlip = "Yes";
bookConfig.DownloadButtonVisible = "Hide";
bookConfig.PhoneButtonVisible = "Hide";
bookConfig.AnnotationButtonVisible = "Hide";
bookConfig.FullscreenButtonVisible = "Show";
bookConfig.bgBeginColor = "#E2E2E2";
bookConfig.bgEndColor = "#E2E2E2";
bookConfig.bgMRotation = "90";
bookConfig.backGroundImgURL = "files/mobile-ext/backGroundImgURL.jpg";
bookConfig.backgroundPosition = "stretch";
bookConfig.backgroundOpacity = "100";
bookConfig.LeftShadowWidth = "90";
bookConfig.LeftShadowAlpha = "0.6";
bookConfig.RightShadowWidth = "55";
bookConfig.RightShadowAlpha = "0.6";
bookConfig.ShowTopLeftShadow = "Yes";
bookConfig.HardPageEnable = "No";
bookConfig.hardCoverBorderWidth = "8";
bookConfig.borderColor = "#572F0D";
bookConfig.outerCoverBorder = "Yes";
bookConfig.cornerRound = "8";
bookConfig.SingleModeBanFlipToLastPage = "No";
bookConfig.leftMarginOnMobile = "0";
bookConfig.topMarginOnMobile = "0";
bookConfig.rightMarginOnMobile = "0";
bookConfig.bottomMarginOnMobile = "0";
bookConfig.pageBackgroundColor = "#E8E8E8";
bookConfig.flipshortcutbutton = "Show";
bookConfig.BindingType = "side";
bookConfig.RightToLeft = "No";
bookConfig.flippingTime = "0.6";
bookConfig.retainBookCenter = "Yes";
bookConfig.FlipStyle = "Flip";
bookConfig.autoDoublePage = "Yes";
bookConfig.isTheBookOpen = "No";
bookConfig.thicknessWidthType = "Thinner";
bookConfig.thicknessColor = "#ffffff";
bookConfig.showThicknessOnMobile = "No";
bookConfig.topMargin = "10";
bookConfig.bottomMargin = "10";
bookConfig.leftMargin = "10";
bookConfig.rightMargin = "10";
bookConfig.maxWidthToSmallMode = "400";
bookConfig.maxHeightToSmallMode = "300";
bookConfig.leftRightPnlShowOption = "None";
bookConfig.highDefinitionConversion = "yes";
bookConfig.LargeLogoPosition = "top-left";
bookConfig.LargeLogoTarget = "Blank";
bookConfig.isFixLogoSize = "No";
bookConfig.logoFixWidth = "0";
bookConfig.logoFixHeight = "0";
bookConfig.updateURLForPage = "No";
bookConfig.LinkDownColor = "#800080";
bookConfig.LinkAlpha = "0.2";
bookConfig.OpenWindow = "Blank";
bookConfig.showLinkHint = "No";
bookConfig.googleAnalyticsID = "UA-373694-2";
bookConfig.MidBgColor = "#794069";
bookConfig.searchFontColor = "#FFFDDD";
bookConfig.totalPageCount = 68;
bookConfig.largePageWidth = 1800;
bookConfig.largePageHeight = 2544;
bookConfig.securityType = "1";
bookConfig.CreatedTime = "200609163319";
bookConfig.bookTitle = "Hợp Long Tech";
bookConfig.bookmarkCR = "dbe1eaf1817175dd0fcbce0bbbc3cb91a4c3fc91";
bookConfig.productName = "Hợp Long Tech";
bookConfig.homePage = "https://hoplongtech.com";
bookConfig.searchPositionJS = "mobile/javascript/text_position[1].js";
bookConfig.searchTextJS = "mobile/javascript/search_config.js";
bookConfig.normalPath = "files/mobile/";
bookConfig.largePath = "files/mobile/";
bookConfig.thumbPath = "files/thumb/";
bookConfig.userListPath = "files/extfiles/users.js";
bookConfig.UIBaseURL = 'mobile/';
var language = [];
var bmtConfig = [
	{caption: "Giới thiệu", pageIndex: 3, color: "#03767C"},
	{caption: "Thương mại", pageIndex: 15, color: "#237BAF"},
	{caption: "Dự án", pageIndex: 27, color: "#E0BF07"}
	];
bmtConfig.showPage = true;
bmtConfig.onSideEdge = true;
bmtConfig.hasTexture = true;


function orgt(s) {
    return binl2hex(core_hx(str2binl(s), s.length * chrsz));
}
var pageEditor = {
    "setting": {
        "annoPlaying": "true",
        "shoppingCartHTML": "false",
        "shoppingCartOptinon": {
            "type": "PayPal",
            "paypal": "",
            "method": "POST",
            "sandbox": "false",
            "address": "",
            "theme": "",
            "body": "Hi xxx<br/>   I\'m going to buy below product(s):<br/>    ${shopping}<br/>Full Name",
            "showPrice": "true",
            "showTime": "true"
        }
    },
    "pageAnnos": [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
};
bookConfig.isFlipPdf = false;
var pagesInfo = [{pageColor: "16777215"}, {pageColor: "16777215"}, {pageColor: "16777215"}, {pageColor: "16777215"}, {pageColor: "16777215"}, {pageColor: "16777215"}, {pageColor: "16777215"}, {pageColor: "16777215"}, {pageColor: "16777215"}, {pageColor: "16777215"}, {pageColor: "16777215"}, {pageColor: "16777215"}, {pageColor: "16777215"}, {pageColor: "16777215"}, {pageColor: "16777215"}, {pageColor: "16777215"}, {pageColor: "16777215"}, {pageColor: "16777215"}, {pageColor: "16777215"}, {pageColor: "16777215"}, {pageColor: "16777215"}, {pageColor: "16777215"}, {pageColor: "16777215"}, {pageColor: "16777215"}, {pageColor: "16777215"}, {pageColor: "16777215"}, {pageColor: "16777215"}, {pageColor: "16777215"}, {pageColor: "16777215"}, {pageColor: "16777215"}, {pageColor: "16777215"}, {pageColor: "16777215"}, {pageColor: "16777215"}, {pageColor: "16777215"}, {pageColor: "16777215"}];
bookConfig.hideMiniFullscreen = true;
if (language && language.length > 0 && language[0] && language[0].language) {
    bookConfig.language = language[0].language;
}

try {
    for (var i = 0; pageEditor != undefined && i < pageEditor.length; i++) {
        if (pageEditor[i].length == 0) {
            continue;
        }
        for (var j = 0; j < pageEditor[i].length; j++) {
            var anno = pageEditor[i][j];
            if (anno == undefined) continue;
            if (anno.overAlpha == undefined) {
                anno.overAlpha = bookConfig.LinkAlpha;
            }
            if (anno.outAlpha == undefined) {
                anno.outAlpha = 0;
            }
            if (anno.downAlpha == undefined) {
                anno.downAlpha = bookConfig.LinkAlpha;
            }
            if (anno.overColor == undefined) {
                anno.overColor = bookConfig.LinkDownColor;
            }
            if (anno.downColor == undefined) {
                anno.downColor = bookConfig.LinkDownColor;
            }
            if (anno.outColor == undefined) {
                anno.outColor = bookConfig.LinkDownColor;
            }
            if (anno.annotype == 'com.mobiano.flipbook.pageeditor.TAnnoLink') {
                anno.alpha = bookConfig.LinkAlpha;
            }
        }
    }
} catch (e) {
}
try {
    $.browser.device = 2;
} catch (ee) {
}