const SIZE_XSMALL = Symbol();
const SIZE_SMALL  = Symbol();
const SIZE_MEDIUM = Symbol();
const SIZE_LARGE  = Symbol();
const SIZE_XLARGE = Symbol();

function getShirtsLeftInSize(size) {
     if (size === SIZE_XSMALL) {
         return 4;
     } else if (size === SIZE_SMALL) {
         return 6;
     } else if (size === SIZE_MEDIUM) {
         return 3;
     } else if (size === SIZE_LARGE) {
         return 7;
     } else if (size === SIZE_XLARGE) {
         return 12;
     }
 }

 var mySize = SIZE_MEDIUM;
 console.log("There are " + getShirtsLeftInSize(mySize) + " shirts left in your size.");