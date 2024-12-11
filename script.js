function writeSentences() {
    // Get the sentence and number from the input fields
    const sentence = document.getElementById("sentence").value;
    const repeat = parseInt(document.getElementById("repeat").value, 10);

    // Get the output element
    const output = document.getElementById("output");

    // Clear previous content
    output.innerHTML = "";

    // Validate input
    if (!sentence || repeat <= 0 || isNaN(repeat)) {
        alert("Please enter a valid sentence and number.");
        return;
    }

    // Generate sentences
    for (let i = 1; i <= repeat; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = sentence;
        output.appendChild(listItem);
    }
}
