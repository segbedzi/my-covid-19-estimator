import covid19ImpactEstimator from '../src/estimator'

const data = {
    region: {
    name: "Africa",
    avgAge: 19.7,
    avgDailyIncomeInUSD: 4,
    avgDailyIncomePopulation: 0.73
    },
    periodType: "days",
    timeToElapse: 38,
    reportedCases: 2747,
    population: 92931687,
    totalHospitalBeds: 678874
   };

const output = {
    data,
    impact : {
        currentlyInfected :27470 ,
        infectionsByRequestedTime :112517120 ,
        severeCasesByRequestedTime : 16877568,
        hospitalBedsByRequestedTime : -16639962,
        casesForICUByRequestedTime : 5625856,
        casesForVentilatorsByRequestedTime : 2250342,
        dollarsInFlight : 8646052

    },
    severeImpact : {
        currentlyInfected : 137350,
        infectionsByRequestedTime : 562585600,
        severeCasesByRequestedTime : 84387840,
        hospitalBedsByRequestedTime : -84150234,
        casesForICUByRequestedTime : 28129280,
        casesForVentilatorsByRequestedTime : 11251712,
        dollarsInFlight : 43230261

    }
}   

test("should return output", () => {
    expect(covid19ImpactEstimator(data)).toEqual(output)
})