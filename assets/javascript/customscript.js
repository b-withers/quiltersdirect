function passWord() {
    var testV = 1;
    var pass1 = prompt('Please Enter Your Password', '');
    while (testV < 3) {
        if (!pass1)
            history.go(-1);
        if (pass1.toLowerCase() == "quilters") {
            window.open('./main.html');
            break;
        }
        testV += 1;
        var pass1 =
            prompt('YOU SHALL NOT PASS', 'Password');
    }
    if (pass1.toLowerCase() != "password" & testV == 3)
        history.go(-1);
    return "";
}