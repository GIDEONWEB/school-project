function removeDuplicates() {
    const input = document.getElementById("text1").value;

    // Convert input string to array
    const values = input.split(",").map(item => item.trim());

    // Remove duplicates
    const uniqueValues = [...new Set(values)];

    // Display result
    document.getElementById("myText").textContent = uniqueValues.join(", ");
}
