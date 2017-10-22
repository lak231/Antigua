function add_mills() {
    var mill_list = document.getElementById("mill_list");
    var new_mill;
    for (var i = 0; i <= 200; i++){
        new_mill = document.createElement('div');
        new_mill.innerHTML = "Mill";
        new_mill.id = "Mill";
        new_mill.class = "menu_item";
        mill_list.appendChild(new_mill);
    }
}


