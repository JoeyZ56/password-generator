export function generatePassword(options = {}) {
  const {
    length = 12,
    includeLower = true,
    includeUpper = true,
    includeNumbers = true,
    includeSymbols = true,
  } = options;
  // Destructuring the 'options' object passed into the function.
  // This allows us to use values like 'length' or 'includeUpper' from other files (e.g., checkbox states),
  // and fall back to defaults if any are missing.

  const LOWER = "abcdefghijklmnopqrstuvwxyz";
  const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const NUMBERS = "0123456789";
  const SYMBOLS = "!@#$%^&*()_+[]{}<>?";
  // These are the sets of characters we can choose from to build the password.

  let charSet = "";
  if (includeLower) charSet += LOWER;
  if (includeUpper) charSet += UPPER;
  if (includeNumbers) charSet += NUMBERS;
  if (includeSymbols) charSet += SYMBOLS;
  // 'charSet' collects the allowed characters based on user options.
  // If the user selected lowercase and numbers, charSet becomes 'abcdefghijklmnopqrstuvwxyz0123456789'

  if (!charSet) return "";
  // If no character types are selected, return an empty string (no password can be generated.)

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
    // This loop builds a random password of the desired length.
    // It starts with an empty password string.
    // For each character position (from 0 to length - 1):
    //   - It generates a random index based on the length of the character set (charSet).
    //   - It selects the character at that random index from charSet.
    //   - It adds (concatenates) that character to the password.
    // After the loop, 'password' contains a randomly assembled string using the allowed characters.
  }
  return password;
}
