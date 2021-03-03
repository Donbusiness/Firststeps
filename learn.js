let user_name = document.getElementsByName("user_name")[0].value
let sirname = document.getElementsBySirName("sirname")[0].value
function formChanged() {
    let user_name =
    let sirname =
}
<input type="text" name="user_name" onkeyup="formChanged()" onchange="formChanged()"/>
