// Sample keywords stored in JSON format
var keywords = ["privacy", "data", "mair"];

// Function to check if any keyword exists in the text
function checkKeywords(text) {
  text = text.toLowerCase();
  for (var i = 0; i < keywords.length; i++) {
    var keyword = keywords[i];
    if (text.includes(keyword.toLowerCase())) {
      return keyword;
    }
  }
  return null;
}

// Function to handle the check button click event
function handleCheck() {
  var text = document.getElementById("text-input").value;
  var words = text.trim().split(/\s+/);
  var wordCount = words.length;

  if (wordCount <= 300) {
    var keyword = checkKeywords(text);
    var result = document.getElementById("result");

    if (keyword) {
      result.innerHTML = `Can be Zucced <span class="keyword-highlight">(${keyword})</span>`;
      result.classList.add("can-be-zucced");
      result.classList.remove("safe-from-zucc");
    } else {
      result.textContent = "Safe from Zucc";
      result.classList.remove("can-be-zucced");
      result.classList.add("safe-from-zucc");
    }
  } else {
    alert("Exceeded word limit (300 words maximum)");
  }
}

// Attach event listener to the check button
document.getElementById("check-button").addEventListener("click", handleCheck);
