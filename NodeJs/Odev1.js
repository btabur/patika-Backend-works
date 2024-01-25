const yariCap= process.argv.slice(2)

console.log(`Yarıçapı ${yariCap} olan dairenini alanı : ${(Math.PI*yariCap*yariCap).toFixed(2)}`)