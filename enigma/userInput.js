function encryptKey(letter) {

    letter = plugs[letter];

    letter = getRotorEncryption(1, true, letter);

    letter = getRotorEncryption(2, true, letter);

    letter = getRotorEncryption(3, true, letter);

    letter = getReflected(letter);

    letter = getRotorEncryption(3, false, letter);

    letter = getRotorEncryption(2, false, letter);

    letter = getRotorEncryption(1, false, letter);

    letter = plugs[letter];

    return letter;
}

function buttonWasClicked(button) {
    if (button == 1) {

        if (displayWindow == "lightBoard") {

            displayWindow = "plugBoard";

        } else if (displayWindow == "plugBoard") {

            displayWindow = "rotors";

        } else {

            displayWindow = "lightBoard";

        }
    } else if (button == 2) {

        if (displayWindow == "lightBoard") {

            displayWindow = "rotors";

        } else if (displayWindow == "plugBoard") {

            displayWindow = "lightBoard";

        } else {
            displayWindow = "plugBoard";
        }
    }
}

function switchRotors(rotor) {
    if (rotor > 0 && selectedRotor > -1) {

        let oldRotor = currentRotors[rotor - 1];
        currentRotors[rotor - 1] = selectedRotor;
        selectedRotor = oldRotor;

    } else {

        // grab an unused rotor
        getClickedRotor(mouseX, mouseY);

    }
}

// function to handle clicking on a plug
function clickedOnPlug(clickedPlug) {

    if (clickedPlug > -1) {
        if (selectedPlug === -1) {
            if (plugs[clickedPlug] === clickedPlug) {
                plugs[clickedPlug] = -1;
                selectedPlug = clickedPlug;
            } else {
                plugs[plugs[clickedPlug]] = -1;
                selectedPlug = plugs[clickedPlug];
                plugs[clickedPlug] = clickedPlug;
            }
        } else if (plugs[clickedPlug] === clickedPlug) {
            plugs[clickedPlug] = selectedPlug;
            plugs[selectedPlug] = clickedPlug
            selectedPlug = -1;
        } else {
            let oldPlug = plugs[clickedPlug];
            plugs[clickedPlug] = selectedPlug;
            plugs[selectedPlug] = clickedPlug
            selectedPlug = oldPlug;
            plugs[oldPlug] = -1;
        }
    }
}
