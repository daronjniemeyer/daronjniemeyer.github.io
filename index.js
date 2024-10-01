// Typewriter Effect
/**
 * Simulates a typewriter effect on a specified element.
 * @param {string} elementId - The ID of the HTML element to apply the effect to.
 * @param {string} text - The text to be typed out.
 * @param {number} speed - The typing speed in milliseconds per character. Default is 50ms.
 */
function typeWriter(elementId, text, speed = 40) {
  // Get the target element
  const element = document.getElementById(elementId);

  // If the element doesn't exist, exit the function
  if (!element) return;

  let i = 0; // Initialize character index
  element.innerHTML = ""; // Clear any existing content

  // Inner function to type characters one by one
  function type() {
    if (i < text.length) {
      // Add the next character to the element
      element.innerHTML += text.charAt(i);
      i++; // Move to the next character
      // Schedule the next character to be typed
      setTimeout(type, speed);
    }
  }

  // Start the typing effect
  type();
}

// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
  // Find the element with ID 'typewriter-text'
  const textElement = document.getElementById("typewriter-text");

  if (textElement) {
    // Store the original text content
    const originalText = textElement.textContent;

    // Clear the text initially to prevent flashing of content
    textElement.textContent = "";

    // Delay the start of the typewriter effect slightly
    setTimeout(() => {
      // Begin the typewriter effect
      typeWriter("typewriter-text", originalText);
    }, 250); // 250ms delay before starting
  }
});
