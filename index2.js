const gender = "female";

switch (gender) {
    case "male":
        console.log("MALE");
        break;
    case "female":
        console.log("FEMALE");
        break;
    default:
        console.log("OTHERS");
        break;
}

const salary = 50000;

switch (true) {
    case salary<30000:
        console.log("JUNIOR");
        break;
    case 30000<salary && salary<50000:
    case salary===50000:
        console.log("SENIOR");
        break;
    default:
        break;
}