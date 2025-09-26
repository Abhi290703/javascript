function tax_calaculator (price,tax = 5) {
    return price + (price * tax / 100) ;
}

final = tax_calaculator(1000)
final1 = tax_calaculator(100)

console.log(final,final1);