function addRow() {
  let name = prompt("Նշեք ապրանքի անվանումը");
  let gin = prompt("Նշեք ապրանքի արժեքը");
  if (name == "" && gin == "") {
    alert("Խնդրում ենք փորձել կրկին")
  }
  else {
    let tbody = document.getElementsByClassName("tbody")[0];
    let str = tbody.insertRow(-1);
    let x = str.insertCell(0);
    let y = str.insertCell(1);

    x.innerHTML = name;
    y.innerHTML = gin;
    
    
    str.classList.add("list-div")
    x.classList.add("name")
    y.classList.add("cost")
  }
}
function deleteRow() {
  let tbody = document.getElementsByClassName("tbody")[0];
  tbody.removeChild(tbody.lastChild);
}
