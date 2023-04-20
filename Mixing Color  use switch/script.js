const inputColor = document.querySelector("#inputColorName");
const firstColorInput = document.querySelector("#Color1");
const secondColorInput = document.querySelector("#Color2");
const ColorBox = document.querySelector("#resultantColorBox");
const ColorName = document.querySelector("#resultColorName");

inputColor.addEventListener("submit", function (event) {
    event.preventDefault();
    const firstColor = firstColorInput.value.toLowerCase();
    const secondColor = secondColorInput.value.toLowerCase();
    {
    let mixedColor;
    switch (firstColor) {
        case "red":
            switch (secondColor) {
                case "blue":
                    mixedColor = "purple";
                    break;
                case "yellow":
                    mixedColor = "orange";
                    break;
                default:
                    mixedColor = "invalid Color Combination";

            }
            break;
            
            case "blue":
                switch(secondColor){
                    case "red":
                        mixedColor="purple";
                        break;
                        case "yellow":
                            mixedColor="green";
                            break;
                            default:
                                mixedColor="Invalid color combination";
                        
                }
            
                break;
                case "yellow":
                    switch(secondColor){
                        case "red":
                            mixedColor="orange";
                            break;
                            case "blue":
                                mixedColor="green";
                                break;
                                default:
                                    mixedColor="Invalid color combination";
                    }
                    break;
                    default:
                        mixedColor="Invalid color combination";
    }
            if (mixedColor == "invalid Color Combination") {
                resultantColorBOx.style.backgroundcolor = "white";
            }
            else {
                ColorBox.style.backgroundcolor = "mixedColor";
            }
            ColorName.textContent = mixedColor;
    }
})