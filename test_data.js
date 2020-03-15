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
    [["ploča", 29], "dvadeset deveta ploča"],
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
