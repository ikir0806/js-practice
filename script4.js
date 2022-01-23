let a = 7;
switch (a) {
    case (a > 15):
        alert('a is to0 big');
        break;
    case (a < 0):
        alert('a is too low');
        break;
    default:
        for (a; a <= 15; a++) {
            alert(a);
        }
}