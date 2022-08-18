// Code your solution here
const findMatching = (drivers, str) => {
    return drivers.filter((driver) => {
        return driver.toLowerCase() === str.toLowerCase();
    })
}

const fuzzyMatch = (drivers, str) => {
    const strLength = str.length;
    return drivers.filter((driver) => {
        return driver.slice(0,strLength) === str;
    })
}

const matchName = (drivers, str) => {
    const result = drivers.filter((driver) => {
        return driver.name === str;
    })

    return result;
}