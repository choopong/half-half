function roundThaiBaht(value) {
  return Number(Math.round(value + "e+" + 2) + "e-" + 2)
}

function halfHalf(price) {
  console.log('price:', price)

  if (price < 0.01) {
    throw new Error('Minimum price must be 0.01 THB')
  }

  const half = roundThaiBaht(price / 2)
  console.log('half:', half)

  const shares = [half, roundThaiBaht(price - half)]
  console.log('shares:', shares)

  return shares
}

module.exports = { halfHalf }
