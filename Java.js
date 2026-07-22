const menu = [
{
name:"Cappuccino",
price:4,
type:"coffee"
},
{
name:"Latte",
price:5,
type:"coffee"
},
{
name:"Brownie",
price:3,
type:"dessert"
}
];

const container=document.querySelector(".cards");

function display(items){

container.innerHTML="";

items.forEach(item=>{

container.innerHTML+=`

<div class="card">
<h3>${item.name}</h3>
<p>$${item.price}</p>
<button>Add to Cart</button>
</div>

`;

});

}

display(menu);
function openPopup(){
    document.getElementById("orderPopup").style.display="flex";
}

function closePopup(){
    document.getElementById("orderPopup").style.display="none";
}