var cardinalNumbers = {
    "ones": {
        "0": "nula",
        "1": "jedan",
        "2": "dva",
        "3": "tri",
        "4": "četiri",
        "5": "pet",
        "6": "šest",
        "7": "sedam",
        "8": "osam",
        "9": "devet"
    },
    "teens": {
        "10": "deset",
        "11": "jedanaest",
        "12": "dvanaest",
        "13": "trinaest",
        "14": "četrnaest",
        "15": "petnaest",
        "16": "šesnaest",
        "17": "sedamnaest",
        "18": "osamnaest",
        "19": "devetnaest"
    },
    "ties": {
        "20": "dvadeset",
        "30": "trideset",
        "40": "četrdeset",
        "50": "pedeset",
        "60": "šezdeset",
        "70": "sedamdeset",
        "80": "osamdeset",
        "90": "devedeset"
    },
    "hundreds": {
        "100": "sto",
        "200": "dvjesto",
        "300": "tristo",
        "400": "četiristo",
        "500": "petsto",
        "600": "šesto",
        "700": "sedamsto",
        "800": "osamsto",
        "900": "devetsto"
    },
}

var genderArray = ["masculine", "feminine", "neuter"];

// Nominative singular: [Genitive singular, Genitive plural]
var nounsWithCases = {
    "masculine" : {
        "stol": ["stola", "stolova"],
        "kralj": ["kralja", "kraljeva"],
        "muškarac": ["muškarca", "muškaraca"],
        "park": ["parka", "parkova"],
        "student": ["studenta", "studenata"],
        "čovjek": ["čovjeka", "ljudi"],
        "majmum": ["majmuna", "majmuna"],
        "metar": ["metra", "metara"], 
    },
    "feminine": {
        "zemlja": ["zemlje", "zemjla"],
        "pjesma": ["pjesme", "pjesama"], //?
        "olovka": ["olovke", "olovki"],
        "djevojka": ["djevojke", "djevojaka"],
        "karta": ["karte", "karata"],
        "litra": ["litre", "litara"],
        "žena": ["žene", "žena"],
        "lopta": ["lopte", "lopti"],
    },
    "neuter": {
        "pismo": ["pisma", "pisama"],
        "koljeno": ["koljena", "koljena"],
        "selo": ["sela", "sela"],
        "more": ["mora", "mora"],
    }
}

var masculineNouns = Object.keys(nounsWithCases["masculine"]);
var feminineNouns = Object.keys(nounsWithCases["feminine"]);
var neuterNouns = Object.keys(nounsWithCases["neuter"]);

var ordinableNouns = {
    "masculine": ["avion", "auto", "telefon", "poklon", "sladoled", "kofer", "autobus", "tata", "dio", "odgovor"],
    "feminine": ["obitelj", "bilježnica", "olovka", "torba", "kuća", "rajčica", "rakija", "ploča", "razlika", "slika"],
    "neuter": ["stablo", "more", "koljeno", "odijelo", "brdo", "grožđe", "pivo", "djelo", "društvo", "jaje"]
}

// obviously without last morpheme
var ordinalNumbers = {
    "ones": {
        "1": "prv",
        "2": "drug",
        "3": "treć",
        "4": "četvrt",
        "5": "pet",
        "6": "šest",
        "7": "sedam",
        "8": "osam",
        "9": "devet",
    },
    "hundreds": {
       "100": "stot",
       "200": "dvjestot",
       "300": "tristot",
       "400": "četiristot",
       "500": "petstot",
       "600": "šeststot",
       "700": "sedamstot",
       "800": "osamstot",
       "900": "devetstoti",
    },
    "thousands": {
        "1000": "tisićit",
        "2000": "dvije tisićit",
        "3000": "tri tisićit",
        "4000": "četiri tisićit",
        "5000": "pet tisićit",
        "6000": "šest tisićit",
        "7000": "sedam tisićit",
        "8000": "osam tisićit",
        "9000": "devet tisićit",
        "10000": "deset tisićit",
    }
}

var numberMorpheme = ["i", "a", "o"]

var monthsInGenitiv = [
    "siječanja",
    "veljače",
    "ožujaka",
    "travanja",
    "svibanja",
    "lipanja",
    "srpanja",
    "kolovoza",
    "rujana",
    "listopada",
    "studenoga",
    "prosinaca"
];

try {
    module.exports.cardinalNumbers = cardinalNumbers;
    module.exports.genderArray = genderArray;
    module.exports.nounsWithCases = nounsWithCases;
    module.exports.masculineNouns = masculineNouns;
    module.exports.feminineNouns = feminineNouns;
    module.exports.neuterNouns = neuterNouns;
    module.exports.ordinableNouns = nordinableNouns;
    module.exports.ordinalNumbers = ordinalNumbers;
    module.exports.numberMorpheme = numberMorpheme;
    module.exports.monthsInGenitive = monthsInGenitive;
} catch (e) {}
