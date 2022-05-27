window.onload = function () {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    // start
    let keyboard = document.getElementById('keyboard');
    // end

    alphabet.forEach(letter => {
        // start
        let keyButton = document.createElement('input');
        keyButton.type = 'button';
        keyButton.value = letter;
        keyButton.classList.add('key');
        keyButton.id = letter;
        keyButton.addEventListener('click', event => {
            highlightLetter(event.target.id)
        })
        keyboard.appendChild(keyButton);

        // end
    });
}

// start up to page 28

// end


function highlightLetter(letter) {
    // start
    console.log(letter)
    // end
}
