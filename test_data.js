var cardinalNumbersTestCases = [
    [1, "jedan"],
    [11, "jedanaest"],
    [111, "sto jedanaest"],
    [1111, "tisuću sto jedanaest"],
    [11111, "jedanaest tisuća sto jedanaest"],
    [111111, "sto jedanaest tisuća sto jedanaest"],
    [9, "devet"],
    [99, "devedeset devet"],
    [999, "devetsto devedeset devet"],
    [9999, "devet tisuća devetsto devedeset devet"],
    [99999, "devedeset devet tisuća devetsto devedeset devet"],
    [999999, "devetsto devedeset devet tisuća devetsto devedeset devet"],
    [21000, "dvadeset jedna tisuća"],
    [321000, "tristo dvadeset jedna tisuća"],
    [1000, "tisuća"],
    [1350, "tisuću tristo pedeset"],
    [10000, "deset tisuća"],
    [100000, "sto tisuća"],
    [101000, "sto jedna tisuća"],
    [102000, "sto dvije tisuće"],
    [105000, "sto pet tisuća"],
    [452000, "četiristo pedeset dvije tisuće"],
    [450000, "četiristo pedeset tisuća"],
    [454000, "četiristo pedeset četiri tisuće"],
    [123123, "sto dvadeset tri tisuće sto dvadeset tri"],
    [123456, "sto dvadeset tri tisuće četiristo pedeset šest"],
    [23123, "dvadeset tri tisuće sto dvadeset tri"],
    [1977, "tisuću devetsto sedamdeset sedam"],
    [2000, "dvije tisuće"],
    [2123, "dvije tisuće sto dvadeset tri"],
    [22123, "dvadeset dvije tisuće sto dvadeset tri"],
    [222123, "dvjesto dvadeset dvije tisuće sto dvadeset tri"],
    [50, "pedeset"],
    [54, "pedeset četiri"],
    [154, "sto pedeset četiri"],
    [150, "sto pedeset"],
    [0, "nula"],
    [12, "dvanaest"],
    [69, "šezdeset devet"],
    [42, "četrdeset dva"],
]

var ordinalNumbersTestCases = [
    [["auto", 1], "prvi auto"],
    [["auto", 2], "drugi auto"],
    [["auto", 3], "treći auto"],
    [["auto", 11], "jedanaesti auto"],
    [["auto", 12], "dvanaesti auto"],
    [["auto", 13], "trinaesti auto"],
    [["auto", 21], "dvadeset prvi auto"],
    [["auto", 22], "dvadeset drugi auto"],
    [["auto", 23], "dvadeset treći auto"],
    [["auto", 45], "četrdeset peti auto"],
    [["auto", 56], "pedeset šesti auto"],
    [["auto", 67], "šezdeset sedmi auto"],
    [["auto", 78], "sedamdeset osmi auto"],
    [["auto", 89], "osamdeset deveti auto"],
    [["auto", 90], "devedeseti auto"],
    [["auto", 100], "stoti auto"],
    [["auto", 1000], "tisućiti auto"],
    [["auto", 9000], "devet tisućiti auto"],

    [["olovka", 1], "prva olovka"],
    [["olovka", 2], "druga olovka"],
    [["olovka", 3], "treća olovka"],
    [["olovka", 11], "jedanaesta olovka"],
    [["olovka", 12], "dvanaesta olovka"],
    [["olovka", 13], "trinaesta olovka"],
    [["olovka", 21], "dvadeset prva olovka"],
    [["olovka", 22], "dvadeset druga olovka"],
    [["olovka", 23], "dvadeset treća olovka"],
    [["olovka", 45], "četrdeset peta olovka"],
    [["olovka", 56], "pedeset šesta olovka"],
    [["olovka", 67], "šezdeset sedma olovka"],
    [["olovka", 78], "sedamdeset osma olovka"],
    [["olovka", 89], "osamdeset deveta olovka"],
    [["olovka", 90], "devedeseta olovka"],
    [["olovka", 100], "stota olovka"],
    [["olovka", 1000], "tisućita olovka"],
    [["olovka", 9000], "devet tisućita olovka"],

    [["stablo", 1], "prvo stablo"],
    [["stablo", 2], "drugo stablo"],
    [["stablo", 3], "treće stablo"],
    [["stablo", 11], "jedanaesto stablo"],
    [["stablo", 12], "dvanaesto stablo"],
    [["stablo", 13], "trinaesto stablo"],
    [["stablo", 21], "dvadeset prvo stablo"],
    [["stablo", 22], "dvadeset drugo stablo"],
    [["stablo", 23], "dvadeset treće stablo"],
    [["stablo", 45], "četrdeset peto stablo"],
    [["stablo", 56], "pedeset šesto stablo"],
    [["stablo", 67], "šezdeset sedmo stablo"],
    [["stablo", 78], "sedamdeset osmo stablo"],
    [["stablo", 89], "osamdeset deveto stablo"],
    [["stablo", 90], "devedeseto stablo"],
    [["stablo", 100], "stoto stablo"],
    [["stablo", 1000], "tisućito stablo"],
    [["stablo", 9000], "devet tisućito stablo"],
]

var cardinalNumbersWithNounTestCases = [
    [["park", 97], "devedeset sedam parkova"],
]


var dateTestCases = [
    [[24,2,1672], "dvadeset četvrti veljače tisuću šesto sedamdeset druge"],
]

var timeTestCases = [
    [[7,29], "sedam sati dvadeset devet minuta"],
]

try {
    module.exports.cardinalNumbersTestCases = cardinalNumbersTestCases;
    module.exports.ordinalNumbersTestCases = ordinalNumbersTestCases;
    module.exports.cardinalNumbersWithNounTestCases = cardinalNumbersWithNounTestCases;
    module.exports.dateTestCases = dateTestCases;
    module.exports.timeTestCases = timeTestCases;
} catch (e) {}
