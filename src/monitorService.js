const monitors = [
    {
        id: 153312,
        description: "Dell UP3216Q",
        resolution: "3840 x 2160",
        size: 31.5,
        refreshRate: "6 ms",
        ips: true,
        price: 1525,
    },
    {
        id: 155380,
        description: "NEC P241W-BK-SV",
        resolution: "1920 x 1200",
        size: 24,
        refreshRate: "8 ms",
        ips: true,
        price: 1025,
    },
    {
        id: 155849,
        description: "Eizo CG277-BK",
        resolution: "2560 x 1440",
        size: 27,
        refreshRate: "6 ms",
        ips: true,
        price: 2275,
    },
    {
        id: 163085,
        description: "Asus PQ321Q",
        resolution: "3840 x 2160",
        size: 31.5,
        refreshRate: "8 ms",
        ips: false,
        price: 1100,
    },
    {
        id: 174390,
        description: "LG 38UC99-W",
        resolution: "3840 x 1600",
        size: 37.5,
        refreshRate: "5 ms",
        ips: true,
        price: 950,
    },
    {
        id: 203973,
        description: "LG 32UD89-W",
        resolution: "3840 x 2160",
        size: 31.5,
        refreshRate: "5 ms",
        ips: true,
        price: 825,
    },
    {
        id: 204948,
        description: "Acer BM320",
        resolution: "3840 x 2160",
        size: 32,
        refreshRate: "5 ms",
        ips: true,
        price: 875,
    },
    {
        id: 211532,
        description: "Lenovo LT2423",
        resolution: "1920 x 1080",
        size: 24,
        refreshRate: "5 ms",
        ips: false,
        price: 750,
    },
    {
        id: 252809,
        description: "Asus PG27AQ",
        resolution: "3840 x 2160",
        size: 27,
        refreshRate: "4 ms",
        ips: true,
        price: 775,
    },
    {
        id: 254554,
        description: "NEC P212-SV",
        resolution: "1600 x 1200",
        size: 21,
        refreshRate: "8 ms",
        ips: true,
        price: 1275,
    },
    {
        id: 282077,
        description: "Dell UP2718Q",
        resolution: "3840 x 2160",
        size: 27,
        refreshRate: "4 ms",
        ips: true,
        price: 1450,
    },
    {
        id: 283681,
        description: "NEC P212",
        resolution: "1600 x 1200",
        size: 21.3,
        refreshRate: "8 ms",
        ips: true,
        price: 925,
    },
    {
        id: 284543,
        description: "Dell AW3418DW",
        resolution: "3440 x 1440",
        size: 34.1,
        refreshRate: "4 ms",
        ips: true,
        price: 925,
    },
    {
        id: 302129,
        description: "Dell Alienware AW3418HW",
        resolution: "2560 x 1080",
        size: 34.14,
        refreshRate: "4 ms",
        ips: true,
        price: 750,
    },
    {
        id: 320918,
        description: "BenQ SW271",
        resolution: "3840 x 2160",
        size: 27,
        refreshRate: "5 ms",
        ips: true,
        price: 975,
    },
    {
        id: 332727,
        description: "Eizo SX2762W-BK",
        resolution: "2560 x 1440",
        size: 27,
        refreshRate: "6 ms",
        ips: true,
        price: 1325,
    },
    {
        id: 377619,
        description: "LG 34UM88C",
        resolution: "3440 x 1440",
        size: 34,
        refreshRate: "5 ms",
        ips: true,
        price: 1450,
    },
    {
        id: 379200,
        description: "Dell P4317Q",
        resolution: "3840 x 2160",
        size: 42.51,
        refreshRate: "8 ms",
        ips: true,
        price: 750,
    },
    {
        id: 379393,
        description: "Asus ROG SWIFT PG348Q",
        resolution: "3440 x 1440",
        size: 34,
        refreshRate: "5 ms",
        ips: true,
        price: 925,
    },
    {
        id: 385587,
        description: "Eizo SX2462W-BK",
        resolution: "1920 x 1200",
        size: 24.1,
        refreshRate: "5 ms",
        ips: true,
        price: 750,
    },
    {
        id: 394703,
        description: "NEC P212-BK",
        resolution: "1600 x 1200",
        size: 21,
        refreshRate: "8 ms",
        ips: true,
        price: 1025,
    },
    {
        id: 427701,
        description: "LG 32MU99-W",
        resolution: "3840 x 2160",
        size: 31.5,
        refreshRate: "5 ms",
        ips: true,
        price: 800,
    },
    {
        id: 443271,
        description: "NEC PA302W-BK",
        resolution: "2560 x 1600",
        size: 30,
        refreshRate: "6 ms",
        ips: true,
        price: 1725,
    },
    {
        id: 508882,
        description: "Acer Predator X34",
        resolution: "3440 x 1440",
        size: 34,
        refreshRate: "4 ms",
        ips: true,
        price: 875,
    },
    {
        id: 551502,
        description: "ViewSonic VP3268-4K",
        resolution: "3840 x 2160",
        size: 31.5,
        refreshRate: "7 ms",
        ips: true,
        price: 700,
    },
    {
        id: 558382,
        description: "Asus PA329Q",
        resolution: "3840 x 2160",
        size: 32,
        refreshRate: "5 ms",
        ips: true,
        price: 1075,
    },
    {
        id: 572139,
        description: "Samsung LC32JG50QQNZA",
        resolution: "2560 x 1440",
        size: 32,
        refreshRate: "4 ms",
        ips: false,
        price: 725,
    },
    {
        id: 578368,
        description: "Acer XB321HK BMIPHZ",
        resolution: "3840 x 2160",
        size: 32,
        refreshRate: "4 ms",
        ips: true,
        price: 825,
    },
    {
        id: 600529,
        description: "AOC AG352UCG6",
        resolution: "3440 x 1440",
        size: 35,
        refreshRate: "4 ms",
        ips: false,
        price: 800,
    },
    {
        id: 611555,
        description: "LG 38WK95C-W",
        resolution: "3840 x 1600",
        size: 37.5,
        refreshRate: "5 ms",
        ips: true,
        price: 800,
    },
    {
        id: 613673,
        description: "LG 34UM68",
        resolution: "2560 x 1080",
        size: 34,
        refreshRate: "5 ms",
        ips: true,
        price: 1225,
    },
    {
        id: 619730,
        description: "Dell UP3017",
        resolution: "2560 x 1600",
        size: 30,
        refreshRate: "6 ms",
        ips: true,
        price: 950,
    },
    {
        id: 633338,
        description: "Dell U3818DW",
        resolution: "3840 x 1600",
        size: 38,
        refreshRate: "5 ms",
        ips: true,
        price: 975,
    },
    {
        id: 636357,
        description: "HP OMEN X 35",
        resolution: "3440 x 1440",
        size: 35,
        refreshRate: "4 ms",
        ips: false,
        price: 975,
    },
    {
        id: 636961,
        description: "Asus PA328Q",
        resolution: "3840 x 2160",
        size: 32,
        refreshRate: "6 ms",
        ips: true,
        price: 850,
    },
    {
        id: 667589,
        description: "LG 34CB99-W",
        resolution: "3440 x 1440",
        size: 34,
        refreshRate: "5 ms",
        ips: true,
        price: 800,
    },
    {
        id: 693027,
        description: "Dell UP3218K",
        resolution: "7680 x 4320",
        size: 31.5,
        refreshRate: "6 ms",
        ips: true,
        price: 4325,
    },
    {
        id: 723142,
        description: "LaCie 324i",
        resolution: "1920 x 1200",
        size: 24,
        refreshRate: "6 ms",
        ips: true,
        price: 950,
    },
    {
        id: 797996,
        description: "NEC P242W-BK-SV",
        resolution: "1920 x 1200",
        size: 24,
        refreshRate: "8 ms",
        ips: true,
        price: 825,
    },
    {
        id: 804043,
        description: "Asus ROG SWIFT PG278Q",
        resolution: "2560 x 1440",
        size: 27,
        refreshRate: "1 ms",
        ips: false,
        price: 725,
    },
    {
        id: 827371,
        description: "Acer XR382CQK bmijqphuzx",
        resolution: "3840 x 1600",
        size: 37.5,
        refreshRate: "5 ms",
        ips: true,
        price: 950,
    },
    {
        id: 876396,
        description: "Asus ROG SWIFT PG27UQ",
        resolution: "3840 x 2160",
        size: 27,
        refreshRate: "4 ms",
        ips: true,
        price: 1800,
    },
    {
        id: 894747,
        description: "ViewSonic VP2785-4K",
        resolution: "3840 x 2160",
        size: 27,
        refreshRate: "7 ms",
        ips: true,
        price: 775,
    },
    {
        id: 896514,
        description: "3M C2254PW",
        resolution: "1680 x 1050",
        size: 22,
        refreshRate: "8 ms",
        ips: false,
        price: 1325,
    },
    {
        id: 902348,
        description: "Acer Predator Z35P",
        resolution: "3440 x 1440",
        size: 35,
        refreshRate: "4 ms",
        ips: false,
        price: 800,
    },
    {
        id: 911309,
        description: "NEC V322-PC",
        resolution: "1366 x 768",
        size: 32,
        refreshRate: "8 ms",
        ips: false,
        price: 1175,
    },
    {
        id: 920822,
        description: "HP D7R00A8#ABA",
        resolution: "2560 x 1440",
        size: 27,
        refreshRate: "12 ms",
        ips: true,
        price: 1100,
    },
    {
        id: 931097,
        description: "Samsung CHG90",
        resolution: "3840 x 1080",
        size: 49,
        refreshRate: "1 ms",
        ips: false,
        price: 950,
    },
    {
        id: 931490,
        description: "Iiyama XUB3490WQSU-B1",
        resolution: "3440 x 1440",
        size: 34,
        refreshRate: "5 ms",
        ips: true,
        price: 750,
    },
    {
        id: 939935,
        description: "NEC PA302W",
        resolution: "2560 x 1600",
        size: 30,
        refreshRate: "6 ms",
        ips: true,
        price: 1775,
    },
    {
        id: 953466,
        description: "Acer Predator Z301C",
        resolution: "2560 x 1080",
        size: 30,
        refreshRate: "4 ms",
        ips: false,
        price: 800,
    },
    {
        id: 981478,
        description: "Lenovo 60A4RAR1US",
        resolution: "2560 x 1600",
        size: 30,
        refreshRate: "6 ms",
        ips: true,
        price: 1300,
    },
    {
        id: 995266,
        description: "Dell U2715H",
        resolution: "2560 x 1440",
        size: 27,
        refreshRate: "8 ms",
        ips: true,
        price: 750,
    },
];

export function getMonitors() {
    return monitors;
}
