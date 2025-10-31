function firstChar(text) {
  // Remove leading and trailing spaces
  const trimmed = text.trim();
  
  // If the trimmed string is empty, return an empty string
  if (trimmed.length === 0) return '';
  
  // Return the first character
  return trimmed[0];
}

// Do not change the code below
// Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
