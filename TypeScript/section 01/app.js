var combine = function (n1, n2) {
    var result;
    if (typeof n1 === "number" && typeof n2 === "number") {
        result = n1 + n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
};
var combinedAges = combine(12, 12);
console.log(combinedAges);
var combinedNames = combine("aymen ", "hamim");
console.log(combinedNames);
