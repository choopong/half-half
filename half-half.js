function roundThaiBaht(value) {
  return Number(Math.round(value + "e+" + 2) + "e-" + 2)
}

function halfHalf(price) {
  console.log('price:', price)

  if (price < 0.01) {
    throw new Error('Minimum price must be 0.01 THB')
  }

  const half = roundThaiBath(price / 2)
  console.log('half:', half)

  const shares = [half, roundThaiBath(price - half)]
  console.log('shares:', shares)

  return shares
}

module.exports = { halfHalf }
