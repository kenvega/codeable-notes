export function isPrime(n) {
  const max = Math.ceil(Math.sqrt(n));

  if (n === 2) {
    return true;
  }

  for (let counter = 2; counter <= max; counter++) {
    if (n % counter === 0) {
      return false;
    }
  }

  return true;
}

export function primesUpTo(n) {
  console.log("Calculando primos...");
  const primes = [];

  for (let counter = 2; counter < n; counter++) {
    if (isPrime(counter)) {
      primes.push(counter);
    }
  }

  return primes;
}
