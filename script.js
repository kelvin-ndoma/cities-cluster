function processCities() {
    // Get the input from the textarea
    const cityInput = document.getElementById('city-input').value;

    // Split the input into an array of cities
    const cities = cityInput.split(/[\s,]+/).map(city => city.trim()).filter(city => city);

    // Function to count occurrences of each city
    function countCities(cities) {
        const counts = {};
        cities.forEach(city => {
            counts[city] = (counts[city] || 0) + 1;
        });
        return counts;
    }

    // Count the cities
    const cityCounts = countCities(cities);

    // Convert the counts object to an array and sort it
    const sortedCityCounts = Object.entries(cityCounts).sort((a, b) => b[1] - a[1]);

    // Generate the HTML for the table
    let tableHTML = '<table>';
    tableHTML += '<tr><th>City</th><th>Count</th></tr>';

    let total = 0;
    sortedCityCounts.forEach(([city, count]) => {
        tableHTML += `<tr><td>${city}</td><td>${count}</td></tr>`;
        total += count;
    });
    tableHTML += `<tr><td><strong>Total</strong></td><td><strong>${total}</strong></td></tr>`;
    tableHTML += '</table>';

    // Insert the table into the HTML
    document.getElementById('city-count-table').innerHTML = tableHTML;
}
