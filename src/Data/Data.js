const brands = [
  "Samsung",
  "Apple",
  "Xiaomi",
  "OPPO",
  "Vivo",
  "Lenovo",
  "Realme",
  "OnePlus",
  "LG",
  "Sony",
  "Google",
];
const mobileModels = {
  Samsung: [
    "Galaxy A55",
    "Galaxy A35",
    "Galaxy F15",
    "Galaxy M15",
    "Galaxy M14 4G",
    "Galaxy S24 Ultra",
    "Galaxy S24+",
    "Galaxy S24",
    "Galaxy Xcover7",
    "Galaxy Tab Active5",
    "Galaxy A25",
    "Galaxy A15 5G",
    "Galaxy A15",
    "Galaxy A05s",
    "Galaxy Tab A9+",
    "Galaxy Tab S9 FE+",
    "Galaxy Tab S9 FE",
    "Galaxy A05",
    "Galaxy Tab A9",
    "Galaxy S23 FE",
    "Galaxy F34",
    "Galaxy Z Fold5",
    "Galaxy Z Flip5",
    "Galaxy Tab S9 Ultra",
    "Galaxy Tab S9+",
    "Galaxy Tab S9",
    "Galaxy M34 5G ",
    "Galaxy F54",
    "Galaxy A24 4G ",
    "Galaxy M54",
    "Galaxy F14",
    "Galaxy A14",
    "Galaxy A54",
    "Galaxy A34",
    "Galaxy M14",
    "Galaxy S23 Ultra",
    "Galaxy S23+",
    "Galaxy S23",
    "Galaxy A14 5G ",
    "Galaxy F04",
    "Galaxy M04",
    "Galaxy Tab A7 10.4 (2022)",
    "Galaxy A04e",
    "Galaxy A04",
    "Galaxy A04s",
    "Galaxy Tab Active 4 Pro",
    "Galaxy A23 5G",
    "Galaxy Z Fold 4",
    "Galaxy Z Flip 4",
    "Galaxy M13 5G",
    "Galaxy M13 (India)",
    "Galaxy A13 (SM-A137) ",
    "Galaxy Xcover 6 Pro",
    "Galaxy M13",
    "Galaxy F13",
    "Galaxy Tab S6 Lite (2022)",
    "Galaxy Tab S8 Ultra",
    "Galaxy M53",
    "Galaxy A73 5G ",
    "Galaxy A33 5G ",
    "Galaxy Tab S8+",
    "Galaxy M33",
    "Galaxy M23",
    "Galaxy S20 FE 2022",
    "Galaxy A23",
    "Galaxy A53 5G ",
    "Galaxy A13",
    "Galaxy Tab S8 ",
    "Galaxy F23",
    "Galaxy S22 Ultra 5G",
    "Galaxy S22+ 5G",
    "Galaxy S22 5G ",
    "Galaxy A03",
    "Galaxy Tab A8 10.5 (2021) ",
    "Galaxy S21 FE 5G",
    "Galaxy A03 Core",
    "Galaxy A13 5G ",
    "Galaxy M22",
    "Galaxy F42 5G ",
    "Galaxy M52 5G ",
    "Galaxy M32 5G ",
    "Galaxy A52s 5G",
    "Galaxy Z Fold3 5G",
    "Galaxy Z Flip3 5G",
    "Galaxy A03s",
    "Galaxy A12 (India)",
    "Galaxy A12 Nacho",
    "Galaxy M21 2021",
    "Galaxy F22",
    "Galaxy A22",
    "Galaxy M32",
    "Galaxy A22 5G ",
    "Galaxy Tab A7 Lite",
    "Galaxy Tab S7 FE",
    "Galaxy F52 5G ",
    "Galaxy M42 5G ",
    "Galaxy M12",
    "Galaxy Quantum 2",
    "Galaxy F12",
    "Galaxy F02s",
    "Galaxy A72",
    "Galaxy A52",
    "Galaxy A52 5G ",
    "Galaxy M12 (India)",
    "Galaxy Xcover 5",
    "Galaxy M62",
    "Galaxy A32",
    "Galaxy F62",
    "Galaxy M02",
    "Galaxy S21 Ultra 5G",
    "Galaxy S21+ 5G",
    "Galaxy S21 5G ",
    "Galaxy A02",
    "Galaxy A32 5G ",
    "Galaxy M02s",
    "Galaxy A02s",
    "Galaxy A12",
    "Galaxy A42 5G ",
    "Galaxy M21s",
    "Galaxy M31 Prime",
    "Galaxy F41",
    "Galaxy S20 FE 5G",
    "Galaxy S20 FE ",
    "Galaxy Tab Active3",
    "Galaxy Tab A7 10.4 (2020)",
  ],
  Apple: [
    "iPhone 15 Pro Max",
    "iPhone 15 Pro",
    "iPhone 15 Plus ",
    "iPhone 15                                                 ",
    "iPad Pro 12.9 (2022)                                                      ",
    "iPad Pro 11 (2022)                                                          ",
    "iPad (2022)",
    "iPhone 14 Pro Max            ",
    "iPhone 14 Pro                                                                              ",
    "iPhone 14 Plus                                                             ",
    "iPhone 14                                                                             ",
    "iPhone SE (2022)",
    "iPad Air (2022)",
    "iPhone 13 Pro Max",
    "iPhone 13 Pro                                                                             ",
    "iPhone 13 Mini                                                             ",
    "iPhone 13                                                                      ",
    "iPad mini (2021)                                          ",
    "iPad 10.2 (2021)                  ",
    "iPad Pro 12.9 (2021)                 ",
    "iPad Pro 11 (2021)",
    "iPhone 12 Pro Max ",
    "iPhone 12 Pro                                                                             ",
    "iPhone 12 Mini                                                              ",
    "iPhone 12                                                                        ",
    "iPad Air (2020)                                           ",
    "iPad 10.2 (2020)                                           ",
    "iPhone SE (2020)                                 ",
    "iPad Pro 12.9 (2020)                                           ",
    "iPad Pro 11 (2020)                                           ",
    "iPhone 11 Pro Max                      ",
    "iPhone 11 Pro",
    "iPhone 11 ",
    "iPad 10.2 (2019)                                                  ",
    "iPad Air (2019)                                                           ",
    "iPad mini (2019)                                          ",
    "iPad Pro 12.9 (2018)                                                   ",
    "iPad Pro 11 (2018)                                  ",
    "iPhone XS Max",
    "iPhone XS                                                                             ",
    "iPhone XR                                                          ",
    "iPhone X                                                                    ",
    "iPad 9.7 (2018)                  ",
    "iPhone 8 Plus                                                    ",
    "iPhone 8                                                                ",
    "iPad Pro 12.9 (2017)                                                  ",
    "iPad Pro 10.5 (2017)                                        ",
    "iPad 9.7 (2017)                                                                    ",
    "iPhone 7 Plus                                              ",
    "iPhone 7                                                         ",
    "iPad Pro 9.7 (2016)                                                              ",
    "iPhone SE                        ",
    "iPhone 6s Plus                                                   ",
    "iPhone 6s                                                     ",
    "iPad Pro 12.9 (2015)                                        ",
    "iPad mini 4 (2015)                                               ",
    "iPad Air 2                                             ",
    "iPad mini 3                                             ",
    "iPhone 6 Plus                                             ",
    "iPhone 6                                             ",
    "iPad Air                                            ",
    "iPad mini 2                                               ",
    "iPhone 5s                                      ",
    "iPhone 5c                                     ",
    "iPhone 5                         ",
    "iPad mini Wi-Fi                  ",
    "iPad mini Wi-Fi + Cellular       ",
    "iPad 4 Wi-Fi                     ",
    "iPad 4 Wi-Fi + Cellular          ",
    "iPad 3 Wi-Fi + Cellular          ",
    "iPad 3 Wi-Fi                     ",
    "iPhone 4s                        ",
    "iPad 2 Wi-Fi + 3G                ",
    "iPad 2 Wi-Fi                                        ",
    "iPad 2 CDMA                                                                   ",
    "iPhone 4 CDMA ",
    "iPhone 4                          ",
    "iPad Wi-Fi + 3G                                          ",
    "iPad Wi-Fi                       ",
    "iPhone 3GS                       ",
    "iPhone 3G                        ",
    "iPhone                                ",
  ],
  Xiaomi: [
    "Poco C61                     ",
    "Civi 4 Pro                   ",
    "Poco X6 Neo                  ",
    "Redmi A3                     ",
    "Pad 6S Pro 12.4              ",
    "Xiaomi 14 Ultra              ",
    "Xiaomi 14 Pro                ",
    "Xiaomi 14                    ",
    "Redmi Note 13 Pro 4G         ",
    "Redmi Note 13 4G             ",
    "Redmi Note 13                ",
    "Poco X6 Pro                  ",
    "Poco X6                      ",
    "Poco M6 Pro                  ",
    "Poco M6                      ",
    "Redmi 13R                    ",
    "Redmi 13C 5G                 ",
    "Redmi K70 Pro                ",
    "Redmi K70E                   ",
    "Redmi K70                    ",
    "Redmi Note 13R Pro           ",
    "Redmi 13C                    ",
    "Poco C65                     ",
    "Xiaomi 13T Pro               ",
    "Xiaomi 13T                   ",
    "Redmi Note 13 Pro+           ",
    "Redmi Note 13 Pro            ",
    "Redmi Note 13 (China)        ",
    "Redmi Pad SE                 ",
    "Redmi K60 Ultra              ",
    "Xiaomi Mix Fold 3            ",
    "Xiaomi Pad 6 Max 14          ",
    "Poco M6 Pro 5G               ",
    "Redmi 12 5G                  ",
    "Redmi Note 12R Pro           ",
    "Redmi Note 12R               ",
    "Redmi 12                     ",
    "Redmi Note 12T Pro           ",
    "Xiaomi Civi 3                ",
    "Poco F5 Pro                  ",
    "Poco F5                      ",
    "Xiaomi Pad 6 Pro             ",
    "Xiaomi Pad 6                 ",
    "Xiaomi 13 Ultra              ",
    "Poco C51                     ",
    "Redmi Note 12S               ",
    "Redmi Note 12 Pro 4G         ",
    "Redmi Note 12 4G             ",
    "Redmi Note 12 Turbo          ",
    "Redmi A2+                    ",
    "Redmi A2                     ",
    "Xiaomi 13 Pro                ",
    "Xiaomi 13                    ",
    "Xiaomi 13 Lite               ",
    "Poco C55                     ",
    "Poco X5 Pro                  ",
    "Poco X5                      ",
    "Redmi Note 12                ",
    "Poco C50                     ",
    "Redmi Note 12 Pro Speed      ",
    "Redmi K60 Pro                ",
    "Redmi K60E                   ",
    "Redmi K60                    ",
    "Redmi 12C                    ",
    "Redmi Note 12 Discovery      ",
    "Redmi Note 12 Pro+           ",
    "Redmi Note 12 Pro            ",
    "Redmi Note 12 (China)        ",
    "Xiaomi 12T Pro               ",
    "Xiaomi 12T                   ",
    "Redmi Pad                    ",
    "Redmi Note 11R               ",
    "Redmi A1+                    ",
    "Xiaomi Civi 2                ",
    "Redmi 11 Prime               ",
    "Redmi 11 Prime 5G            ",
    "Redmi A1                     ",
    "Poco M5 (India)              ",
    "Poco M5s                     ",
    "Poco M5                      ",
    "Redmi Note 11 SE (India)     ",
    "Poco M4 5G                   ",
    "Redmi K50 Ultra              ",
    "Xiaomi Mix Fold 2            ",
    "Xiaomi Pad 5 Pro 12.4        ",
    "Redmi K50i                   ",
    "Xiaomi 12 Lite               ",
    "Xiaomi 12S Ultra             ",
    "Xiaomi 12S Pro               ",
    "Xiaomi 12S                   ",
    "Xiaomi 12 Pro (Dimensity)    ",
    "Poco F4                      ",
    "Poco X4 GT                   ",
    "Poco C40                     ",
    "Redmi Note 11T Pro+          ",
    "Redmi Note 11T Pro           ",
    "Redmi Note 11SE              ",
    "Redmi 10 Prime 2022          ",
    "Poco M4 5G (India)           ",
    "Poco F4 GT                   ",
    "Xiaomi Civi 1S               ",
    "Redmi 10 Power               ",
    "Black Shark 5 Pro            ",
    "Black Shark 5 RS             ",
    "Black Shark 5                ",
    "Redmi 10A                    ",
    "Redmi Note 11S 5G            ",
    "Redmi 10 5G                  ",
    "Redmi K50 Pro                ",
    "Redmi K50                    ",
    "Redmi K40S                   ",
    "Redmi 10 (India)             ",
    "Redmi 10C                    ",
    "Redmi Note 11 Pro+ 5G (India)",
    "Redmi Note 11 Pro+ 5G        ",
    "Redmi Note 11E Pro           ",
    "Redmi Note 11E               ",
    "Poco X4 Pro 5G               ",
    "Poco M4 Pro                  ",
    "Redmi K50 Gaming             ",
    "Redmi 10 2022                ",
    "Redmi Note 11 Pro 5G         ",
    "Redmi Note 11 Pro            ",
    "Redmi Note 11S               ",
    "Redmi Note 11                ",
    "Xiaomi 11i HyperCharge 5G    ",
    "Xiaomi 11i                   ",
    "Xiaomi 12 Pro                ",
    "Xiaomi 12X                   ",
    "Xiaomi 12                    ",
    "Redmi Note 11T 5G            ",
    "Redmi Note 11 4G             ",
    "Poco M4 Pro 5G               ",
    "Redmi Note 11 Pro (China)    ",
    "Redmi Note 11 (China)        ",
    "Black Shark 4S Pro           ",
    "Black Shark 4S               ",
    "Redmi Note 10 Lite           ",
    "Xiaomi Civi                  ",
    "Redmi 9i Sport               ",
    "Redmi 9A Sport               ",
    "Poco C31                     ",
    "Redmi 9 Activ                ",
    "Xiaomi 11T Pro               ",
    "Xiaomi 11T                   ",
    "Xiaomi 11 Lite 5G NE         ",
    "Redmi 10 Prime               ",
    "Redmi 10                     ",
    "Xiaomi Pad 5 Pro             ",
    "Xiaomi Pad 5                 ",
    "Xiaomi Mix 4                 ",
    "Poco X3 GT                   ",
    "Poco F3 GT                   ",
    "Redmi Note 10T 5G            ",
    "Redmi Note 10 Pro (China)    ",
    "Redmi Note 8 2021            ",
    "Poco M3 Pro 5G               ",
    "Redmi K40 Gaming             ",
    "Xiaomi Mi 11X Pro            ",
    "Xiaomi Mi 11X                ",
    "Poco M2 Reloaded             ",
    "Xiaomi Mi Mix Fold           ",
    "Xiaomi Mi 11 Ultra           ",
    "Xiaomi Mi 11 Pro             ",
    "Xiaomi Mi 11i                ",
    "Xiaomi Mi 11 Lite 5G         ",
    "Xiaomi Mi 11 Lite            ",
    "Black Shark 4 Pro            ",
    "Black Shark 4                ",
    "Poco X3 Pro                  ",
    "Poco F3                      ",
    "Xiaomi Mi 10S                ",
    "Redmi Note 10 5G             ",
    "Redmi Note 10S               ",
    "Redmi Note 10 Pro            ",
    "Redmi Note 10 Pro Max        ",
    "Redmi Note 10 Pro (India)    ",
    "Redmi Note 10                ",
    "Redmi K40 Pro+               ",
    "Redmi K40 Pro                ",
    "Redmi K40                    ",
    "Redmi Note 9T                ",
    "Redmi 9T                     ",
    "Xiaomi Mi 10i 5G             ",
    "Xiaomi Mi 11                 ",
    "Redmi 9 Power                ",
    "Redmi Note 9 Pro 5G          ",
    "Redmi Note 9 5G              ",
    "Redmi Note 9 4G              ",
    "Poco M3                      ",
    "Redmi K30S                   ",
    "Poco C3                      ",
    "Xiaomi Mi 10T Pro 5G         ",
    "Xiaomi Mi 10T Lite 5G        ",
    "Xiaomi Mi 10T 5G             ",
  ],
};

export { brands, mobileModels };
