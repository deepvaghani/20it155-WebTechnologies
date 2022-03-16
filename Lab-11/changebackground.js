window.onload = function change_color() {
    var color=['red','orange','yellow','blue','green','violet','darkgrey','darkcyan','darkorange'];
    document.body.style.background=color[Math.floor(Math.random()*color.length)]
}