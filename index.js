// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLocation) {
    return Math.abs(42 - pickUpLocation);
}

function distanceFromHqInFeet(pickUpLocation) {
    return 264 * distanceFromHqInBlocks(pickUpLocation);

}

function distanceTravelledInFeet(pickUpLocation, dropOffLocation) {
    return 264 * Math.abs(pickUpLocation - dropOffLocation);
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
            return 0; }
    else if (distance > 400 && distance <= 2000) {
            return (distance - 400) * 0.02; }
    else if (distance > 2000 && distance < 2500) {
            return 25; }
    else if (distance > 2500) {
        return "cannot travel that far"; }
    }
