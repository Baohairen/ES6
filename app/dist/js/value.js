"use strict";function withinErrorMargin(o,l){return Math.abs(o-l)<Number.EPSILON*Math.pow(2,2)}function checkError(){console.log(!1),console.log(withinErrorMargin(.1+.2,.3)),console.log(!1),console.log(withinErrorMargin(1.1+1.3,2.4))}function trusty(o,l,n){if(Number.isSafeInteger(o)&&Number.isSafeInteger(l)&&Number.isSafeInteger(n))return n;throw new RangeError("Operation cannot be trusted!")}function checkInteger(){console.log(trusty(1,2,3)),console.log(9007199254740992===Number.MAX_SAFE_INTEGER),console.log(9007199254740991===Number.MAX_SAFE_INTEGER),console.log(trusty(9007199254740992,990,9007199254740002))}function math(){console.log("*************Math.trunc方法****************"),console.log(Math.trunc()),console.log(Math.trunc("")),console.log("*************Math.sign方法****************"),console.log(Math.sign("")),console.log(Math.sign(!0)),console.log(Math.sign(!1)),console.log(Math.sign(null)),console.log(Math.sign("9")),console.log(Math.sign("foo")),console.log(Math.sign()),console.log(Math.sign(void 0)),console.log("*************Math.cbrt方法****************"),console.log(Math.cbrt("8")),console.log(Math.cbrt("hello")),console.log("*************Math.clz32方法****************"),console.log(Math.clz32(1)),console.log(Math.clz32(1e3)),console.log(Math.clz32(1073741824)),console.log(Math.clz32(3.2)),console.log(Math.clz32()),console.log(Math.clz32(NaN)),console.log(Math.clz32(1/0)),console.log(Math.clz32(null)),console.log(Math.clz32("foo")),console.log(Math.clz32([])),console.log(Math.clz32({})),console.log(Math.clz32(!0)),console.log("*************Math.imul方法****************"),console.log(Math.imul(2,4)),console.log(Number(2147483647)),console.log(Math.imul(2147483647,2147483647)),console.log("*************Math.hypot方法****************"),console.log(Math.hypot(3,4)),console.log(Math.hypot(3,4,5)),console.log(Math.hypot()),console.log(Math.hypot(NaN)),console.log(Math.hypot(3,4,"foo")),console.log(Math.hypot(3,4,"5")),console.log(Math.hypot(-3)),console.log("*************Math.对数方法****************"),console.log(Math.log1p(1)),console.log(Math.log1p("1.718")),console.log("Math.expm1(2) = e^2-1 = "+Math.expm1(2)),console.log("Math.log1p(2) = loge(1+2)= "+Math.log1p(2)),console.log("Math.log10(10) = log10(10)= "+Math.log10(10)),console.log("Math.log2(2) = log2(2)= "+Math.log2(2))}