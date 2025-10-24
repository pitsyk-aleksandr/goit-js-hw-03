// Задача 3. Перевірка спаму

/* --------------------------------------------------------------------------------------------- */
// Функція checkForSpam(message) приймає рядок (параметр - message),
// перевіряє його на вміст заборонених слів spam і sale, і повертає результат перевірки.
/* --------------------------------------------------------------------------------------------- */
// Слова в рядку параметра message можуть бути в довільному регістрі, наприклад SPAM або sAlE.
/* --------------------------------------------------------------------------------------------- */

function checkForSpam(message) {
  // Переводимо рядок в нижній регістр
  const messageLow = message.toLowerCase();

  if (messageLow.includes('spam') || messageLow.includes('sale')) {
    // Якщо знайдено заборонене слово (spam або sale), то функція повертає буль true
    return true;
  }

  // Якщо в рядку відсутні заборонені слова, функція повертає буль false
  return false;
}

/* --------------------------------------------------------------------------------------------- */

console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('Amazing SalE, only tonight!')); // true
console.log(checkForSpam('Trust me, this is not a spam message')); // true
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
