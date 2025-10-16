export function calculateLongestWord(text: string): string {
  const cleanText = text
    .replace(/[^a-zA-Z']/g, " ")
    .toLowerCase()
    .replace(/ +/g, " ")
    .trim();
  return cleanText
    .split(" ")
    .reduce((previousWord, currentWord) =>
      currentWord.length >= previousWord.length ? currentWord : previousWord
    );
}
