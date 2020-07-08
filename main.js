var text_options = [
    "Software Developer.",
    "Innovator.",
    "Coding Instructor.",
    "Interest In Medical Sciences."
]
var text_option = 0;
var changing_text_element;
var read_delay = 0;
var time_interval = 100; //ms

var carat_delay;

const write_modes = {
    write: 0,
    erase: 1,
    reading: 2,
};
var write_mode = write_modes.reading;

window.onload = (event) => {
    changing_text_element = document.getElementById("changing_text");
    changing_text_element.innerHTML = text_options[text_option];
};

window.setInterval(function() {
    write_changing_text();
}, time_interval);

function write_changing_text() {
    if (changing_text_element.innerHTML.length == text_options[text_option].length) {
        read_delay += time_interval;
    }
    else {
        read_delay = 0;
    }

    if (write_mode == write_modes.erase) {
        if (changing_text_element.innerHTML.length == 0) {

            text_option += 1;
            if (text_options.length <= text_option) {
                text_option = 0;
            }

            write_mode = write_modes.write;
        }
        else {
            changing_text_element.innerHTML = changing_text_element.innerHTML.slice(0, -1);
        }
    }
    else if (write_mode == write_modes.write) {
        if (changing_text_element.innerHTML.length == text_options[text_option].length) {
            write_mode = write_modes.reading;
            return;
        }
        changing_text_element.innerHTML += text_options[text_option][changing_text_element.innerHTML.length];
    }
    else if (write_mode == write_modes.reading) {
        if (read_delay >= 2500){
            write_mode = write_modes.erase;
        }
    }
}