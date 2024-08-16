const {neutralisation} = require("../index");

describe("Neutralisation", ()=>{
    test("Returns nothing if nothing is entered",()=>{
        let symbol = "";
        let input = neutralisation(symbol);
        let result = "You need to enter 2 strings to compare";
    
        expect(input).toBe(result);
    });

    test("Returns the correct neutralisation when 3 character symbols entered",()=>{
        let sym1 = "+-+";
        let sym2 = "+--";
        let input = neutralisation(sym1, sym2);
        let result = "+-0";
        expect(input).toBe(result);
    });

    test("Returns the all 0s neutralisation when 6 characters entered",()=>{
        let sym1 = "--++--";
        let sym2 = "++--++";
        let input = neutralisation(sym1, sym2);
        let result = "000000";
        expect(input).toBe(result);
    })
    test("Returns correct neutralisation for 6 characters and gives back proper symbols",()=>{
        let sym1 = "-+-+-+";
        let sym2 = "-+-+-+";
        let input = neutralisation(sym1, sym2);
        let result = "-+-+-+";
        expect(input).toBe(result);
    })

    test("Returns correct neutralisation for 4 character symbols",()=>{
        let sym1 = "-++-";
        let sym2 = "-+-+";
        let input = neutralisation(sym1, sym2);
        let result = "-+00";
        expect(input).toBe(result);
    })

    test("Returns error statement if either inputs contain invalid symbols",()=>{
        let sym1 = "-11+0%";
        let sym2 = "-+-+-+";
        let input = neutralisation(sym1, sym2);
        let result = "Both strings must only contain '+' and '-'";
        expect(input).toBe(result);
    })

    test("Returns error statement if either input is of a different length",()=>{
        let sym1 = "-+-+-+";
        let sym2 = "+--";
        let input = neutralisation(sym1, sym2);
        let result = "Both inputs must be of the same length";
        expect(input).toBe(result);
    })

   

})