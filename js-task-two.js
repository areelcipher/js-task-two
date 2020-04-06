const data = [
    {
        principal: 2500,
        time: 1.8
    },
    {
        principal: 1000,
        time: 5
    },
    {
        principal: 3000,
        time: 1
    },
    {
        principal: 2000,
        time: 3
    }
];

const interestCalculator = (arr) => {
    let interest = [];
    let interestData = [];
    let rate;
    for (let i = 0; i < data.length; i++) {
        if (arr[i].principal >= 2500 && arr[i].time > 1 && arr[i].time < 3) {
            rate = 3;
            interest.push((arr[i].principal * rate * arr[i].time) / 100);
            interestData.push({ principal: arr[i].principal, rate: rate, time: arr[i].time, interest: interest[i] });
        } else if (arr[i].principal >= 2500 && arr[i].time >= 3) {
            rate = 4;
            interest.push((arr[i].principal * rate * arr[i].time) / 100);
            interestData.push({ principal: arr[i].principal, rate: rate, time: arr[i].time, interest: interest[i] });
        } else if (arr[i].principal < 2500 || arr[i].time <= 1) {
            rate = 2;
            interest.push((arr[i].principal * rate * arr[i].time) / 100);
            interestData.push({ principal: arr[i].principal, rate: rate, time: arr[i].time, interest: interest[i] });
        } else {
            rate = 1;
            interest.push((arr[i].principal * rate * arr[i].time) / 100);
            interestData.push({ principal: arr[i].principal, rate: rate, time: arr[i].time, interest: interest[i] });
        }
    };
    console.log(interestData);
    return interestData;
};

interestCalculator(data);