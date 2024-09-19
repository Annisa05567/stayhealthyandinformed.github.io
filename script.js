function showSection(sectionId) {
    document.querySelectorAll('section').forEach(function (section) {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

function calculateBMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

    if (weight > 0 && height > 0) {
        var bmi = weight / ((height / 100) * (height / 100));
        var result = "";

        if (bmi < 18.5) {
            result = "Underweight";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            result = "Normal weight";
        } else if (bmi >= 25 && bmi <= 29.9) {
            result = "Overweight";
        } else {
            result = "Obesity";
        }

        document.getElementById("bmiResult").innerText = `Your BMI is ${bmi.toFixed(1)} (${result})`;
    } else {
        alert("Please enter valid numbers for weight and height.");
    }
}
