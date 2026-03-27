function analyzeText() {
  const text = document.getElementById("textInput").value;
  const resultDiv = document.getElementById("result");
  const errorDiv = document.getElementById("error");

  // Clear previous output
  resultDiv.innerHTML = "";
  errorDiv.innerHTML = "";

  // Handle empty input
  if (text.trim() === "") {
    errorDiv.innerHTML = "Please enter some text.";
    return;
  }

  // Character count
  const charCount = text.length;

  // Word count (handles multiple spaces)
  const words = text.trim().split(/\s+/);
  const wordCount = words.length;

  // Reverse text
  const reversedText = text.split("").reverse().join("");

  // Display results
  resultDiv.innerHTML = `
    <strong>Character Count:</strong> ${charCount} <br>
    <strong>Word Count:</strong> ${wordCount} <br><br>
    <strong>Reversed Text:</strong><br>${reversedText}
  `;
}