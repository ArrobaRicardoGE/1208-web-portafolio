let op1 = "",
    op2 = "",
    op = "+";

function clickNumber(x) {
    if (x == ".") {
        if (op2.indexOf(".") != -1) return;
    } else x = x.toString();
    op2 += x;
    document.getElementsByClassName("calculator__display")[0].textContent = op2;
}

function clickOperand(o) {
    if (op2 == "") {
        op = o;
        return;
    }
    clickEqual();
    op = o;
}

function clickEqual() {
    if (op == "") op1 = op2;
    else op1 = eval("Number(op1)" + op + "Number(op2)").toString();

    document.getElementsByClassName("calculator__display")[0].textContent = op1;
    op2 = "";
    op = "";
}

function clickAC() {
    op1 = "";
    op2 = "";
    op = "+";
    document.getElementsByClassName("calculator__display")[0].textContent = "0";
}
