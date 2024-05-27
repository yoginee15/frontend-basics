function displayAge() {
    let bdate = document.getElementById("birthDate").value;
    let today = new Date();
    bdate = new Date(bdate);
    let age = today.getFullYear() - bdate.getFullYear();
    // let m = today.getMonth() - bdate.getMonth();
    // if (m < 0 || (m === 0 && today.getDate() < bdate.getDate())) {
    //   age--;
    // }
    document.getElementById("output").innerHTML = `You are : ${age} year old!`;
  }
