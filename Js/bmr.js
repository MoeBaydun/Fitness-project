
  $(document).ready(function() {
    // Get references to the input fields and the result field
    const $ageInput = $('#ageInput');
    const $heightInput = $('#heightInput');
    const $weightInput = $('#weightInput');
    const $resultField = $('#resultField');
    const $calculateButton = $('#calculateButton');
    const $resetButton = $('#resetButton');

    // Add an event listener to the calculate button
    $calculateButton.click(function() {
      // Get the values from the input fields
      const age = parseFloat($ageInput.val()) || 0;
      const height = parseFloat($heightInput.val()) || 0;
      const weight = parseFloat($weightInput.val()) || 0;

      // Calculate BMR based on radio button selection
      let bmr = weight * 10 + height * 6.25 - 5 * age + 5;
      if ($('#flexRadioDefault2').is(':checked')) {
        bmr *= 1.2; // Training 3-4 days a week
      } else {
        bmr *= 1.6; // Training 5-6 days a week
      }

      // Check the selected goal from the input fields
      const selectedGoal = $("input[name='goalRadio']:checked").val();

      if (selectedGoal === "550") {
        // Adjust BMR for the goal
        bmr -= 550;
        $resultField.val("Your daily calorie intake to lose 550 calories per week is " + bmr.toFixed(0) + " calories");
      } else if (selectedGoal === "1100") {
        // Adjust BMR for the goal
        bmr -= 1100;
        $resultField.val("Your daily calorie intake to lose 1100 calories per week is " + bmr.toFixed(0) + " calories");
      }
      
    });
     // Add a click event listener to the Reset button
     $resetButton.click(function() {
        // Clear input fields and result field
        $ageInput.val('');
        $heightInput.val('');
        $weightInput.val('');
        $resultField.val('');

        // Uncheck radio buttons
        $('input[name="flexRadioDefault"]').prop('checked', false);
        $('input[name="goalRadio"]').prop('checked', false);
  });
});
