const container = document.querySelector('.d-table');

const bi = Array.from(container.querySelectorAll('.bi'));
var biSum=add(bi);

const bl = Array.from(container.querySelectorAll('.bl'));
var blSum=add(bl);

const ci = Array.from(container.querySelectorAll('.ci'));
var ciSum=add(ci);

const mm = Array.from(container.querySelectorAll('.mm'));
var mmSum=add(mm);

function add(col){
    var sum=0;
    for(var i = 0; i < col.length; i++){
        sum+=parseInt(col[i].textContent);
    }
    return sum;
}

window.addEventListener("load",function(){
document.getElementById("total").innerHTML="Total:";
document.getElementById("bi").innerHTML=biSum;
document.getElementById("bl").innerHTML=blSum;
document.getElementById("ci").innerHTML=ciSum;
document.getElementById("mm").innerHTML=mmSum;
});

var form = document.querySelector(".review-form");
var nameInput = document.querySelector('input[name="Full-name"]');

form.addEventListener('submit', function validateName(e) {

    var nums = new RegExp(/\d/);
    var name=nameInput.value;

    if (nums.test(name)) {
        e.preventDefault();
        alert("Error! The name can't contain numbers");
    }
  });