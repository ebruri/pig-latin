function pigLatin(text) {
  textArray = text.split("");
  const vowels = ['a','e','i','o','u'];
  let vowelIndex = 0;
  if (vowels.includes(textArray[0])) {
    newArray = textArray.join("");
    return newArray + 'way';
  } else if (textArray[0] === "q" || textArray[1] === "u") {
    textArray.splice(textArray.length, 1, textArray[0]);
    textArray.splice(textArray.length, 1, textArray[1]);
    textArray.splice(0, 2);
    newArray = textArray.join("");
    return newArray + "ay";
  } else {
    textArray.splice(textArray.length, 1, textArray[0]);
    textArray.splice(0, 1);
    newArray = textArray.join("");
    return newArray + "ay";
  };
};

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    const text = $("#input1").val();
    const vowels = pigLatin(text);
    $("#result").html(vowels);
  });
});
