function convertTemperature() {
    // Get input values
    let celsiusValue = parseFloat(document.getElementById("celsius").value);
    let fahrenheitValue = parseFloat(document.getElementById("fahrenheit").value);

    // Convert Celsius to Fahrenheit
    if (!isNaN(celsiusValue)) {
        let convertedFahrenheit = (celsiusValue * 9/5) + 32;
        document.getElementById("fahrenheit").value = convertedFahrenheit.toFixed(2);
    }

    // Convert Fahrenheit to Celsius
    if (!isNaN(fahrenheitValue)) {
        let convertedCelsius = (fahrenheitValue - 32) * 5/9;
        document.getElementById("celsius").value = convertedCelsius.toFixed(2);
    }
}
