let a = 2;
const n = 100;
let i;

while (a < n) {
    i = 2;
    while (i < a) {
        if (((a / i) % 1 == 0)) {
            i = null;
            break;
        }
        i++;
    }
    if (i != null) {
        console.log(a);
    }
    a++;
}