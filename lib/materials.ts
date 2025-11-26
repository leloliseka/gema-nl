export type MaterialCategory = {
    id: string;
    title: string;
    slug: string;
    description: string;
    longDescription?: string[]; // Array of paragraphs
    image: string;
    features: string[];
    applications: string[];
    grades: string[]; // e.g., 304, 316, Inconel 625
    specs?: { label: string; value: string }[]; // Extra specs like Werkstofnummer
    tables?: {
        title: string;
        headers: string[];
        rows: string[][];
    }[];
};

// Placeholder data - Updated with user input
export const materials: MaterialCategory[] = [
    {
        id: "1",
        title: "Titanium",
        slug: "titanium",
        description: "Titanium heeft de hoogste sterkte-gewicht verhouding van alle metalen (60% lichter dan staal). Het is extreem corrosiebestendig in chloor en zeewater.",
        longDescription: [
            "Titanium heeft een hoge ontbrandingstemperatuur met een smeltpunt dat hoger ligt dan 1850 °C. In natuurlijke omgevingen wordt het materiaal niet aangetast door corrosie. Het heeft daarnaast een goede corrosie bestendigheid in chloor en zeewater.",
            "Van alle metalen heeft Titanium de hoogste sterkte gewicht verhouding doordat het 60% lichter is dan staal met vergelijkbare mechanische eigenschappen. Tevens kan het materiaal tot een relatief groot deel van zijn maximale spanning worden belast, alvorens er plastische vervorming optreedt. Titanium is niet magnetisch.",
            "Er bestaan twee hoofdgroepen Titanium: puur en gelegeerd Titanium. Puur Titanium is materiaal dat voor minimaal 99% uit het element Ti bestaat. De resterende 1% is opgebouwd uit de spoorelementen ijzer(Fe), koolstof(C), stikstof(N), waterstof(H) en zuurstof(O).",
            "Er zijn verschillende grades Titanium onder de groep commercieel puur Titanium. Elke Grade heeft een andere samenstelling van verontreiniging waardoor specifieke eigenschappen worden verkregen. Voor iedere toepassing wordt de meest geschikte Grade gekozen. Voor bevestigingsartikelen wordt meestal Grade 2 of 5 gekozen."
        ],
        image: "https://www.gema.nl/wp-content/uploads/2018/10/Titanium.png",
        features: ["Hoogste sterkte-gewicht verhouding", "Corrosiebestendig (zeewater/chloor)", "Niet-magnetisch", "Hittebestendig (>1850°C)"],
        applications: ["Chemische industrie", "Vliegtuigbouw", "Offshore industrie", "Pomp industrie", "Automotive", "Brandblus installaties"],
        grades: ["Grade 2", "Grade 5"],
        specs: [
            { label: "Grade 2", value: "Werkstofnummer: 3.7035 / DIN: Ti2 / UNS: R50400 / ASTM: Ti Grade 2" },
            { label: "Grade 5", value: "Werkstofnummer: 3.7165 / DIN: Ti6AI4V / UNS: R56400 / ASTM: Ti Grade 5" }
        ],
        tables: [
            {
                title: "Chemische samenstelling Grade 2",
                headers: ["Element", "C", "N", "Ti", "Fe", "O", "H"],
                rows: [
                    ["%", "min. 0\nmax. 0,08", "min. 0\nmax. 0,30", "\nRest", "min. 0\nmax. 0,30", "min. 0\nmax. 0,25", "min. 0\nmax. 0,015"]
                ]
            },
            {
                title: "Mechanische eigenschappen Grade 2",
                headers: ["Temperatuur", "Treksterkte (MPa)", "0,2% Rekgrens (MPa)", "Rek na breuk minimum (%)", "Hardheid (HV)", "Soortelijke massa (kg/dm³)"],
                rows: [
                    ["20°C", "390-450", ">250", "22", "145", "4,5"]
                ]
            },
            {
                title: "Chemische samenstelling Grade 5",
                headers: ["Element", "C", "V", "N", "Ti", "Al", "Fe", "O", "H"],
                rows: [
                    ["%", "min. 0\nmax. 0,08", "min. 3,50\nmax. 4,50", "min. 0\nmax. 0,05", "\nRest", "min. 5,50\nmax. 6,75", "min. 0\nmax. 0,40", "min. 0\nmax. 0,20", "min. 0\nmax. 0,015"]
                ]
            },
            {
                title: "Mechanische eigenschappen Grade 5",
                headers: ["Temperatuur", "Treksterkte (MPa)", "0,2% Rekgrens (MPa)", "Rek na breuk minimum (%)", "Hardheid (HV)", "Soortelijke massa (kg/dm³)"],
                rows: [
                    ["20°C", ">900", ">830", "10", "349", "4,4"]
                ]
            }
        ]
    },
    {
        id: "2",
        title: "Messing",
        slug: "messing",
        description: "Messing (koper en zink) is een waardevol materiaal met goede hardheid en uitstekende zelfsmerende eigenschappen.",
        longDescription: [
            "Messing bestaat uit koper en zink. De eigenschappen van deze bestandsdelen van de legering versterken elkaar. Messing is waardevol materiaal omdat het beschikt over een goede hardheid. Daarnaast heeft messing ook uitstekende zelf smerende eigenschappen.",
            "Gema Fast levert bevestigingsartikelen & draaiwerk in messing volgens DIN, tekening en/of sample. Wij kunnen zowel in kleine als in grote series produceren. Wij zijn o.a. gespecialiseerd in levering van messing inserts / draadbussen."
        ],
        image: "https://www.gema.nl/wp-content/uploads/2018/10/Messing-2.jpg",
        features: ["Goede hardheid", "Uitstekende zelfsmerende eigenschappen", "Goede bewerkbaarheid", "Esthetisch aantrekkelijk"],
        applications: ["Chemisch proces apparatuur", "Rookgas apparatuur", "Petrochemische installaties", "Gasturbines", "Vliegtuigmotoren", "Warmtewisselaars", "Reactievaten", "Farmaceutische apparatuur"],
        grades: ["CuZn37", "CuZn39Pb3", "CuZn40Pb2"],
        specs: [],
        tables: []
    },
    {
        id: "3",
        title: "Hastelloy",
        slug: "hastelloy",
        description: "Hastelloy C276 heeft een hoge bestendigheid tegen corrosie in zowel oxiderende als reducerende omgevingen.",
        longDescription: [
            "Hastelloy heeft een hoge bestendigheid tegen corrosie in zowel oxiderende als reducerende omgevingen. Het materiaal heeft een uitstekende weerstand tegen plaatselijke corrosie zoals putting en ook tegen spleet-en spanningscorrosie.",
            "Tevens is er een hoge weerstand tegen vele chemicaliën, vervuilde minerale en organische zuren en zeewater. Hastelloy kan zeer hoge temperaturen verdragen tot 1038°C.",
            "Het is ook een zeer harde legering waardoor het moeilijk bewerkbaar is. Het materiaal wordt meestal door gieten in zijn uiteindelijke vorm gebracht. Een andere mogelijkheid is bewerken met behulp van laser."
        ],
        image: "https://www.gema.nl/wp-content/uploads/2018/10/Foto-Hastelloy-C276-Website.png",
        features: ["Uitzonderlijke corrosiebestendigheid", "Bestand tegen oxiderende/reducerende omgevingen", "Hittebestendig tot 1038°C", "Weerstand tegen putcorrosie"],
        applications: ["Chemisch proces apparatuur", "Rookgas apparatuur", "Petrochemische installaties", "Gasturbines", "Vliegtuigmotoren", "Warmtewisselaars", "Reactievaten", "Farmaceutische apparatuur"],
        grades: ["C276", "C22"],
        specs: [
            { label: "Hastelloy C276", value: "Werkstofnummer: 2.4819 / DIN: NiMo16Cr15W / UNS: N10276" }
        ],
        tables: [
            {
                title: "Chemische samenstelling Hastelloy C276",
                headers: ["Element", "C", "Si", "Mn", "P", "S", "Cr", "Mo", "Ni", "V", "W", "Co", "Cu", "Fe"],
                rows: [
                    ["%", "min. 0\nmax. 0,01", "min. 0\nmax. 0,08", "min. 0\nmax. 1", "min. 0\nmax. 0,02", "min. \n0\nmax. 0,015", "min. 14,5\nmax. 16,5", "min. 15\nmax. 17", "\nRest", "min. 0\nmax. 0,35", "min. 3\nmax. 4,5", "min. 0\nmax. 2,5", "min. 0\nmax. 0,5", "min. 4\nmax. 7"]
                ]
            },
            {
                title: "Mechanische eigenschappen Hastelloy C276",
                headers: ["Temperatuur", "Treksterkte (MPa)", "0,2% Rekgrens (MPa)", "Rek na breuk minimum (%)", "Hardheid (HRB)", "Soortelijke massa (kg/dm³)"],
                rows: [
                    ["20°C", "792", "356", "61", "90", "8,5"]
                ]
            }
        ]
    },
    {
        id: "4",
        title: "Inconel",
        slug: "inconel",
        description: "Inconel 625 is zeer sterk en toepasbaar van onder het vriespunt tot aan ca. 980°C met hoge corrosiebestendigheid.",
        longDescription: [
            "Inconel is zeer sterk, is in binnen een groot temperatuurbereik toepasbaar van onder het vriespunt tot aan ca. 980°C. Het materiaal heeft tevens een zeer goede weerstand tegen minerale en organische zuren.",
            "De corrosiebestendigheid is zeer hoog blijft gehandhaafd tot een temperatuur van ca. 980°C. Daarnaast is ook zeewater bestendig en heeft een hoge treksterkte.",
            "Inconel 625 is een niet magnetische legering bestaande uit nikkel, chroom en molybdeen."
        ],
        image: "https://www.gema.nl/wp-content/uploads/2018/10/Inconel-juiste-versie.png",
        features: ["Zeer sterk", "Temperatuurbereik tot 980°C", "Zeewaterbestendig", "Niet magnetisch"],
        applications: ["Hitteschilden", "Oven apparatuur", "Gasturbines", "Voeringen van verbrandingskamers", "Chemisch proces apparatuur", "Uitlaat systemen"],
        grades: ["600", "625", "718", "825"],
        specs: [
            { label: "Inconel 625", value: "Werkstofnummer: 2.4856 / DIN: NiCr22Mo9Nb / UNS: N06625 / ISO: NC22DNb / AFNOR: NC22DNb / BS: NA21" }
        ],
        tables: [
            {
                title: "Chemische samenstelling Inconel 625",
                headers: ["Element", "C", "Si", "Mn", "P", "S", "Cr", "Mo", "Ni", "Ti", "Al", "Co", "Cu", "Fe", "Nb+Ta"],
                rows: [
                    ["%", "min. 0,03\nmax. 0,1", "min. 0\nmax. 0,5", "min. 0\nmax. 0,5", "min. 0\nmax. 0,02", "min. \n0\nmax. 0,015", "min. 20\nmax. 23", "min. 8\nmax. 10", "min. 58\n", "min. 0\nmax. 0,4", "min. 0\nmax. 0,4", "min. 0\nmax. 1", "min. 0\nmax. 0,5", "min. 0\nmax. 5", "min. 3,15\nmax. 4,15"]
                ]
            },
            {
                title: "Mechanische eigenschappen Inconel 625",
                headers: ["Temperatuur", "Treksterkte (MPa)", "0,2% Rekgrens (MPa)", "Rek na breuk minimum (%)", "Hardheid (HRA)", "Soortelijke massa (kg/dm³)"],
                rows: [
                    ["20°C", "965", "479", "38", "58", "8,44"]
                ]
            }
        ]
    },
    {
        id: "5",
        title: "Duplex",
        slug: "duplex",
        description: "Duplex 1.4462 is twee keer zo sterk als standaard RVS en beter bestand tegen gelokaliseerde corrosie.",
        longDescription: [
            "Ten opzichte van standaard RVS soorten, is Duplex twee keer zo sterk en is beter bestand tegen gelokaliseerde corrosie. De corrosieweerstand is uitstekend in omgevingen met fosforzuur, organische zuren en chloride.",
            "Het materiaal behoudt zijn mechanische eigenschappen en corrosie weerstand tot een temperatuur van ca. 250 °C. Tevens heeft het materiaal een hoge slijtweerstand.",
            "Duplex 1.4462 is een legering van zowel austeniet als ferriet vandaar de benaming Duplex. Werkstofnummer 1.4462 is de meest gebruikte kwaliteit."
        ],
        image: "https://www.gema.nl/wp-content/uploads/2018/10/Duplex-1.4462.jpg",
        features: ["2x sterker dan standaard RVS", "Uitstekende corrosieweerstand", "Hoge slijtweerstand", "Bestand tegen chloride"],
        applications: ["Olieraffinaderijen", "Bio-industrie", "Gas industrie", "Chemische industrie", "Petrochemische industrie", "Papier industrie", "Maritieme toepassingen", "Voedingsindustrie", "Waterzuiveringsinstallaties"],
        grades: ["1.4462 (Duplex)", "1.4410 (Super Duplex)"],
        specs: [
            { label: "Duplex 1.4462", value: "Werkstofnummer: 1.4462 / DIN: X2CrNiMoN22-5-3 / UNS: S31803/ ASTM: A182F51/F60 / EN: X 2 CrNiMoN 22 5 3 BS: 318S13 / AFNOR: Z2CND22.05Az" }
        ],
        tables: [
            {
                title: "Chemische samenstelling Duplex 1.4462",
                headers: ["Element", "C", "Si", "Mn", "P", "S", "Cr", "Mo", "Ni", "N"],
                rows: [
                    ["%", "min. \n0\nmax. 0,030", "min. \n0\nmax. 1,00", "min. \n0\nmax. 2,00", "min. \n0\nmax. 0,035", "min. \n0\nmax. 0,015", "min. 21,0\nmax. 23,0", "min. 2,5\nmax. 3,5", "min. 4,50\nmax. 6,50", "min. 0,10\nmax. 0,20"]
                ]
            },
            {
                title: "Mechanische eigenschappen Duplex 1.4462",
                headers: ["Temperatuur", "Treksterkte (MPa)", "0,2% Rekgrens (MPa)", "Rek na breuk minimum (%)", "Hardheid (HB)", "Soortelijke massa (kg/dm³)"],
                rows: [
                    ["Kamertemperatuur", "650", "450", "25", "270", "7,805"]
                ]
            }
        ]
    },
];

export function getMaterialBySlug(slug: string) {
    return materials.find((m) => m.slug === slug);
}
