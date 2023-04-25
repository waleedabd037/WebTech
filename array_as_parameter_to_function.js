"use strict";
let d = [1, 9, 3, 4, 6, 7];
function b(af) {
    var b;
    if (af == 1) {
        b = "st";
    }
    else if (af == 2) {
        b = "nd";
    }
    else if (af == 3) {
        b = "rd";
    }
    else {
        b = "th";
    }
    return b;
}
const av = {
    name: "sf",
    numsent: 5,
};
for (let i = 0; i < d.length; i++) {
    console.log("numbers with " + d[i] + b(d[i]));
}
