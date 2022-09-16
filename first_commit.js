function main() {
    console.log("hello github! this is for my lab");
    let regex = new RegExp("[^aeiou]*[aeiou][^aeuiou]*");
    console.assert(regex.test("cat"));
}

main();