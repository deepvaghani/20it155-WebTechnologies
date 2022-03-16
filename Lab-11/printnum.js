function get_num_n() {
    let n = prompt("Enter Number");
    n = parseInt(n);
    let ans = "";
    for (let i = 1; i <= n; i++) {
        ans += "The number is " + i + "<br>";
    }
    document.getElementById('no1').innerHTML = n;
    document.getElementById('res').innerHTML = ans;
}