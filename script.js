function dateHandler(){
    console.log("Ankithammad");
    let inputdate = document.querySelector(".inputDate");
    console.log(inputdate.value);
    let outputdate = document.querySelector(".outputDate");
    let formattedDate = new Date(inputdate.value).toLocaleDateString("en-US");
    outputdate.value = formattedDate;
}