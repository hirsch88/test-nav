/*!
  * Baloise Design System
  * (c) 2023 Gery Hirschfeld, Yannick Holzenkamp, Petar Nobilo, Laurent Tauber, Mladen Planinicic, Andreas Stebler
  * @license Apache-2.0
  */
const e={balBreakpointTablet:"769px",balBreakpointDesktop:"1024px",balBreakpointHighDefinition:"1280px",balBreakpointWidescreen:"1440px",balBreakpointFullhd:"1920px",balContainerSpace:"1rem",balContainerSpaceTablet:"2.5rem",balContainerSpaceDesktop:"3rem",balContainerMaxWidth:"1400px",balContainerSizeDetailPage:"744px",balContainerSizeCompact:"896px",balContainerSizeNormal:"1496px",balContainerSizeFluid:"none",balColorTransparent:"transparent",balColorWhite:"#ffffff",balColorBlack:"#000000",balColorGrey1:"#fafafa",balColorGrey2:"#f6f6f6",balColorGrey3:"#e8e8e8",balColorGrey4:"#b6b6b6",balColorGrey5:"#747474",balColorGrey6:"#313131",balColorBlue1:"#e5e7f0",balColorBlue2:"#b3b6d4",balColorBlue3:"#656ea8",balColorBlue4:"#293485",balColorBlue5:"#000d6e",balColorBlue6:"#000739",balColorLightBlue1:"#e5f1fe",balColorLightBlue2:"#a7d1fa",balColorLightBlue3:"#56a7f5",balColorLightBlue4:"#6672cc",balColorLightBlue5:"#0014aa",balColorLightBlue6:"#000a55",balColorPurple1:"#f9f3ff",balColorPurple2:"#e1d9ff",balColorPurple3:"#b8b2ff",balColorPurple4:"#be82fa",balColorPurple5:"#9f52cc",balColorPurple6:"#6c2273",balColorGreen1:"#e9fbf7",balColorGreen2:"#cbf2ec",balColorGreen3:"#94e3d4",balColorGreen4:"#21d9ac",balColorGreen5:"#00b28f",balColorGreen6:"#1b5951",balColorYellow1:"#fff9e8",balColorYellow2:"#ffecbc",balColorYellow3:"#fae052",balColorYellow4:"#ffbe19",balColorYellow5:"#fa9319",balColorYellow6:"#b24a00",balColorRed1:"#ffeef1",balColorRed2:"#ffd7d7",balColorRed3:"#ffaca6",balColorRed4:"#ff596f",balColorRed5:"#d9304c",balColorRed6:"#99172d",balColorInfo1:"#e8f1fb",balColorInfo2:"#a4c9ed",balColorInfo3:"#60a0e0",balColorInfo4:"#1c77d2",balColorInfo5:"#155ba3",balColorInfo6:"#0e457b",balColorSuccess1:"#e8f3ec",balColorSuccess2:"#a1cfb3",balColorSuccess3:"#5bab7a",balColorSuccess4:"#168741",balColorSuccess5:"#116b34",balColorSuccess6:"#0b5227",balColorWarning1:"#fff9e8",balColorWarning2:"#ffe5a3",balColorWarning3:"#ffd25e",balColorWarning4:"#ffbe19",balColorWarning5:"#f99319",balColorWarning6:"#c97612",balColorDanger1:"#fce8e6",balColorDanger2:"#f7a299",balColorDanger3:"#f05d4d",balColorDanger4:"#ea1800",balColorDanger5:"#cb1501",balColorDanger6:"#a01100",balColorPrimary1:"#e5e7f0",balColorPrimary2:"#b3b6d4",balColorPrimary3:"#656ea8",balColorPrimary4:"#293485",balColorPrimary5:"#000d6e",balColorPrimary6:"#000739",balColorPrimary:"#000d6e",balColorGrey:"#e8e8e8",balColorBlue:"#000d6e",balColorLightBlue:"#e5f1fe",balColorPurple:"#b8b2ff",balColorGreen:"#94e3d4",balColorYellow:"#fae052",balColorRed:"#ffaca6",balColorInfo:"#60a0e0",balColorSuccess:"#5bab7a",balColorWarning:"#ffd25e",balColorDanger:"#f05d4d",balColorBorderPrimary:"#000d6e",balColorBorderGreyLight:"#f6f6f6",balColorBorderGrey:"#e8e8e8",balColorBorderGreyDark:"#b6b6b6",balColorBorderWarning:"#f99319",balColorBorderSuccess:"#168741",balColorBorderDanger:"#ea1800",balColorBorderDangerDark:"#cb1501",balColorBorderDangerDarker:"#a01100",balColorBorderPrimaryLight:"#656ea8",balColorBorderWhite:"#ffffff",balColorBorderLightBlue:"#0014aa",balColorBorderPrimaryDark:"#000739",balColorTransparentInverted:"#000d6e",balColorWhiteInverted:"#000d6e",balColorBlackInverted:"#ffffff",balColorGrey1Inverted:"#000d6e",balColorGrey2Inverted:"#000d6e",balColorGrey3Inverted:"#000d6e",balColorGrey4Inverted:"#000d6e",balColorGrey5Inverted:"#ffffff",balColorGrey6Inverted:"#ffffff",balColorBlue1Inverted:"#000d6e",balColorBlue2Inverted:"#000d6e",balColorBlue3Inverted:"#000d6e",balColorBlue4Inverted:"#ffffff",balColorBlue5Inverted:"#ffffff",balColorBlue6Inverted:"#ffffff",balColorLightBlue1Inverted:"#000d6e",balColorLightBlue2Inverted:"#000d6e",balColorLightBlue3Inverted:"#000d6e",balColorLightBlue4Inverted:"#ffffff",balColorLightBlue5Inverted:"#ffffff",balColorLightBlue6Inverted:"#ffffff",balColorPurple1Inverted:"#000d6e",balColorPurple2Inverted:"#000d6e",balColorPurple3Inverted:"#000d6e",balColorPurple4Inverted:"#ffffff",balColorPurple5Inverted:"#ffffff",balColorPurple6Inverted:"#ffffff",balColorGreen1Inverted:"#000d6e",balColorGreen2Inverted:"#000d6e",balColorGreen3Inverted:"#000d6e",balColorGreen4Inverted:"#000d6e",balColorGreen5Inverted:"#000d6e",balColorGreen6Inverted:"#ffffff",balColorYellow1Inverted:"#000d6e",balColorYellow2Inverted:"#000d6e",balColorYellow3Inverted:"#000d6e",balColorYellow4Inverted:"#000d6e",balColorYellow5Inverted:"#000d6e",balColorYellow6Inverted:"#ffffff",balColorRed1Inverted:"#000d6e",balColorRed2Inverted:"#000d6e",balColorRed3Inverted:"#000d6e",balColorRed4Inverted:"#ffffff",balColorRed5Inverted:"#ffffff",balColorRed6Inverted:"#ffffff",balColorInfo1Inverted:"#000d6e",balColorInfo2Inverted:"#000d6e",balColorInfo3Inverted:"#ffffff",balColorInfo4Inverted:"#ffffff",balColorInfo5Inverted:"#ffffff",balColorInfo6Inverted:"#ffffff",balColorSuccess1Inverted:"#000d6e",balColorSuccess2Inverted:"#000d6e",balColorSuccess3Inverted:"#ffffff",balColorSuccess4Inverted:"#ffffff",balColorSuccess5Inverted:"#ffffff",balColorSuccess6Inverted:"#ffffff",balColorWarning1Inverted:"#000d6e",balColorWarning2Inverted:"#000d6e",balColorWarning3Inverted:"#000d6e",balColorWarning4Inverted:"#000d6e",balColorWarning5Inverted:"#000d6e",balColorWarning6Inverted:"#000d6e",balColorDanger1Inverted:"#000d6e",balColorDanger2Inverted:"#000d6e",balColorDanger3Inverted:"#ffffff",balColorDanger4Inverted:"#ffffff",balColorDanger5Inverted:"#ffffff",balColorDanger6Inverted:"#ffffff",balColorPrimary1Inverted:"#000d6e",balColorPrimary2Inverted:"#000d6e",balColorPrimary3Inverted:"#000d6e",balColorPrimary4Inverted:"#ffffff",balColorPrimary5Inverted:"#ffffff",balColorPrimary6Inverted:"#ffffff",balColorPrimaryInverted:"#ffffff",balColorGreyInverted:"#000d6e",balColorBlueInverted:"#ffffff",balColorLightBlueInverted:"#000d6e",balColorPurpleInverted:"#000d6e",balColorGreenInverted:"#000d6e",balColorYellowInverted:"#000d6e",balColorRedInverted:"#000d6e",balColorInfoInverted:"#ffffff",balColorSuccessInverted:"#ffffff",balColorWarningInverted:"#000d6e",balColorDangerInverted:"#ffffff",balColorTextPrimary:"#000d6e",balColorTextPrimaryInverted:"#ffffff",balColorTextWhite:"#ffffff",balColorTextWhiteInverted:"#000d6e",balColorTextBlack:"#000000",balColorTextBlackInverted:"#ffffff",balColorTextGreyDark:"#313131",balColorTextGreyDarkInverted:"#ffffff",balColorTextGrey:"#747474",balColorTextGreyInverted:"#ffffff",balColorTextLightBlue:"#0014aa",balColorTextLightBlueInverted:"#ffffff",balColorTextLightBlueLight:"#a7d1fa",balColorTextLightBlueLightInverted:"#000d6e",balColorTextInfoLight:"#60a0e0",balColorTextInfoLightInverted:"#ffffff",balColorTextPrimaryDark:"#000739",balColorTextPrimaryDarkInverted:"#ffffff",balColorTextPrimaryLight:"#656ea8",balColorTextPrimaryLightInverted:"#000d6e",balColorTextSuccess:"#168741",balColorTextSuccessInverted:"#ffffff",balColorTextInfo:"#1c77d2",balColorTextInfoInverted:"#ffffff",balColorTextWarning:"#f99319",balColorTextWarningInverted:"#000d6e",balColorTextDanger:"#ea1800",balColorTextDangerInverted:"#ffffff",balColorTextDangerDark:"#cb1501",balColorTextDangerDarkInverted:"#ffffff",balColorTextDangerDarker:"#a01100",balColorTextDangerDarkerInverted:"#ffffff",balColumnGap:"1rem",balRadiusNone:"0",balRadiusNormal:"0.25rem",balRadiusLarge:"0.75rem",balRadiusRounded:"9999px",balShadowNone:"none",balShadowNormal:"0 0 10px 0 rgba(0, 7, 57, 0.15)",balShadowLarge:"0 0 30px 0 rgba(0, 7, 57, 0.15)",balTextShadowNone:"none",balTextShadowNormal:"0px 0px 4px rgba(0, 0, 0, 0.15), 0px 4px 12px rgba(0, 0, 0, 0.25), 0px 0px 80px rgba(0, 0, 0, 0.5)",balWeightBold:"700",balWeightRegular:"400",balWeightLight:"300",balFontFamilyTitle:"BaloiseCreateHeadline, Arial, sans-serif",balFontFamilyText:"BaloiseCreateText, Arial, sans-serif",balSizeXxxxxLarge:"3rem",balLineHeightXxxxxLarge:"3.5rem",balSizeTabletXxxxxLarge:"5rem",balLineHeightTabletXxxxxLarge:"6rem",balSizeDesktopXxxxxLarge:"5rem",balLineHeightDesktopXxxxxLarge:"6rem",balSizeXxxxLarge:"2rem",balLineHeightXxxxLarge:"2.5rem",balSizeTabletXxxxLarge:"3rem",balLineHeightTabletXxxxLarge:"3.5rem",balSizeDesktopXxxxLarge:"3rem",balLineHeightDesktopXxxxLarge:"3.5rem",balSizeXxxLarge:"1.75rem",balLineHeightXxxLarge:"2rem",balSizeTabletXxxLarge:"2.5rem",balLineHeightTabletXxxLarge:"3rem",balSizeDesktopXxxLarge:"2.5rem",balLineHeightDesktopXxxLarge:"3rem",balSizeXxLarge:"1.5rem",balLineHeightXxLarge:"2rem",balSizeTabletXxLarge:"2rem",balLineHeightTabletXxLarge:"2.5rem",balSizeDesktopXxLarge:"2rem",balLineHeightDesktopXxLarge:"2.5rem",balSizeXLarge:"1.25rem",balLineHeightXLarge:"2rem",balSizeTabletXLarge:"1.5rem",balLineHeightTabletXLarge:"2rem",balSizeDesktopXLarge:"1.5rem",balLineHeightDesktopXLarge:"2rem",balSizeLarge:"1.125rem",balLineHeightLarge:"1.5rem",balSizeTabletLarge:"1.25rem",balLineHeightTabletLarge:"2rem",balSizeDesktopLarge:"1.25rem",balLineHeightDesktopLarge:"2rem",balSizeMedium:"1rem",balLineHeightMedium:"1.5rem",balSizeTabletMedium:"1.125rem",balLineHeightTabletMedium:"1.625rem",balSizeDesktopMedium:"1.125rem",balLineHeightDesktopMedium:"1.625rem",balSizeNormal:"1rem",balLineHeightNormal:"1.5rem",balSizeTabletNormal:"1rem",balLineHeightTabletNormal:"1.5rem",balSizeDesktopNormal:"1rem",balLineHeightDesktopNormal:"1.5rem",balSizeSmall:"0.875rem",balLineHeightSmall:"1.125rem",balSizeTabletSmall:"0.875rem",balLineHeightTabletSmall:"1.125rem",balSizeDesktopSmall:"0.875rem",balLineHeightDesktopSmall:"1.125rem",balSizeXSmall:"0.75rem",balLineHeightXSmall:"1rem",balSizeTabletXSmall:"0.75rem",balLineHeightTabletXSmall:"1rem",balSizeDesktopXSmall:"0.75rem",balLineHeightDesktopXSmall:"1rem",balSpaceAuto:"auto",balSpaceTabletAuto:"auto",balSpaceDesktopAuto:"auto",balSpaceNone:"0",balSpaceTabletNone:"0",balSpaceDesktopNone:"0",balSpaceXxSmall:"0.25rem",balSpaceTabletXxSmall:"0.25rem",balSpaceDesktopXxSmall:"0.25rem",balSpaceXSmall:"0.5rem",balSpaceTabletXSmall:"0.5rem",balSpaceDesktopXSmall:"0.5rem",balSpaceSmall:"0.75rem",balSpaceTabletSmall:"0.75rem",balSpaceDesktopSmall:"0.75rem",balSpaceNormal:"1rem",balSpaceTabletNormal:"1rem",balSpaceDesktopNormal:"1rem",balSpaceMedium:"1.25rem",balSpaceTabletMedium:"1.25rem",balSpaceDesktopMedium:"1.5rem",balSpaceLarge:"1.5rem",balSpaceTabletLarge:"1.5rem",balSpaceDesktopLarge:"2rem",balSpaceXLarge:"2rem",balSpaceTabletXLarge:"2.5rem",balSpaceDesktopXLarge:"3rem",balSpaceXxLarge:"3rem",balSpaceTabletXxLarge:"3.5rem",balSpaceDesktopXxLarge:"4rem",balSpaceXxxLarge:"3.5rem",balSpaceTabletXxxLarge:"4.5rem",balSpaceDesktopXxxLarge:"6rem",balSpaceXxxxLarge:"4rem",balSpaceTabletXxxxLarge:"6rem",balSpaceDesktopXxxxLarge:"8rem",balAnimationTransitionDuration:"300ms",balAnimationTransitionEasing:"cubic-bezier(0.25, 0.8, 0.5, 1)",balBorderWidthNormal:"2px",balZIndexDeep:"-999999",balZIndexDefault:"1",balZIndexMasked:"100",balZIndexMask:"200",balZIndexSticky:"300",balZIndexNavigation:"400",balZIndexToast:"1000",balZIndexPopup:"1100",balZIndexModal:"1200",balZIndexTooltip:"1300"};

export { e };
