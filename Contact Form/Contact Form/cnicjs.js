/*cnic FIELD
MASKING - - 
after max length dont enter
min length => show error message
required valiodation => show error message
*/

function cnicvalidate() {

}

function numberonly(input) {
    var regex = /[^0-9+]/gi;
    if (input != regex) {
        input.value = input.value.replace(regex, "");

        const spanele = document.createElement('p');
        spanele.textContent = 'Only Numbers';

        document.querySelector('body').appendChild(spanele);

        return false;
    } else {
        return true
    }
}

function mask() {
    console.log("i am clicked")
}