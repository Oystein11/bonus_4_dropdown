//Basis-menyen
//HTML-linker
const basic_nav_bar = document.querySelector (".basic_nav_bar_ID");
const basic_menu = document.querySelector (".basic_menu_ID");

//Meny-variabel
let basic_menu_open = false;

//Funksjon
function toggle_basic_menu () {
    if (basic_menu_open === false) {
        basic_nav_bar.classList = "show_nav";
        basic_menu.classList = "open_menu";
        basic_menu_open = true;
    } else {
        basic_nav_bar.classList = "basic_nav_bar_ID";
        basic_menu.classList = "basic_menu_ID";
    }
}

//Variabel-menyen
//HTML-linker
const variable_nav_bar = document.querySelector (".variable_nav_bar_ID");
const variable_menu = document.querySelector ("variable_menu_ID");

//Meny-variabel
let variable_menu_open = false;

//Funksjon
function toggle_variable_menu () {
    if (variable_menu_open === false) {
        variable_nav_bar.classList = "show_nav";
        variable_menu.classList = "open_menu";
        variable_menu_open = true;
    } else {
        variable_nav_bar.classList = "variable_nav_bar_ID";
        variable_menu.classList = "variable_menu_ID";
    }
}