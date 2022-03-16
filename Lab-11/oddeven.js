function check_num() {
    let x = prompt("Enter Number");
    x = parseInt(x);
    document.getElementById('no').textContent = x;
    if (x % 2 == 0)
        document.getElementById('res').innerHTML = '<h1 style="color:red"><u>This is Even Number</u></h1>';
    else
        document.getElementById('res').innerHTML = '<h1 style="color:green"><u>This is Odd Number</u></h1>';
}






