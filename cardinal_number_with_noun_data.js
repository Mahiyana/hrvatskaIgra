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
