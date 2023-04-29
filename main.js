var productNameInput=document.getElementById("nameInput")
var productPriceInput=document.getElementById("priceInput")
var productCategoryInput=document.getElementById("catigoryInput")
var productDescriptionInput=document.getElementById("descriptionInput")
productList=[];
let index;


if (localStorage.getItem("products")!=null) {
    productList=JSON.parse(localStorage.getItem("products"))
    display(); 
}



function addProduct(){

    if(validInput()==true){

        var product={

    name :  productNameInput.value ,
    price  :  productPriceInput.value ,
    category  :  productCategoryInput.value,
    description  :  productDescriptionInput.value ,
}
productList.push(product);

localStorage.setItem("products",JSON.stringify(productList));

clear();

display();
}
else{
   window.alert("invalid name");
}
    }





function clear() {
        productCategoryInput.value=""
        productNameInput.value=""
        productPriceInput.value=""
        productDescriptionInput.value=""
    }


function display(){

var cartona=``;

for(var i=0; i<productList.length ; i++){

cartona+=`
    <tr>
        <td>`+i+`</td>
        <td>${productList[i].name}</td>
        <td>${productList[i].price}</td>
        <td>${productList[i].category}</td>
        <td>${productList[i].description}</td>
        <td>
        <button onclick="deleteprod(`+i+`)" class="btn btn-outline-danger">Delete</button>
        </td>
        <td>
               <button onclick="updateProduct(`+i+`)"  class="btn btn-outline-warning">Update</button>
          </td>

    </tr>

`


}
document.getElementById('tableBody').innerHTML=cartona;
}



function deleteprod(index){

productList.splice(index,1);

localStorage.setItem("products",JSON.stringify(productList));
display();


}
function updateProduct(x){
    productNameInput.value=productList[x].name
    productCategoryInput.value=productList[x].category
    productPriceInput.value=productList[x].price
    productDescriptionInput.value=productList[x].description
    document.getElementById("add").style.display="none";
    document.getElementById("update").style.display="inline";
index=x;

}

function addUpdate(){


    if(validInput()==true){

        var product={

    name :  productNameInput.value ,
    price  :  productPriceInput.value ,
    category  :  productCategoryInput.value,
    description  :  productDescriptionInput.value ,
}
productList[index]=product;

localStorage.setItem("products",JSON.stringify(productList));

clear();

display();
}
else{
   window.alert("invalid name");
}

}


function SearchProd(term) {
        var cartona=``;
        for (var i = 0; i < productList.length; i++) {
           if (productList[i].name.toLowerCase().includes(term.toLowerCase())==true) {
            cartona+= `<tr>
            <td>`+i+`</td>
            <td>`+productList[i].name+`</td>
            <td>`+productList[i].price+`</td>
            <td>`+productList[i].category+`</td>
            <td>`+productList[i].description+`</td>
            <td>
            <button  class="btn btn-warning">Update</button>
        </td>
        
            <td>
            <button onclick="deleteprod (`+i+`)" class="btn btn-danger">Delete</button>
        </td>
        <td>
        <button onclick="updateProduct (`+i+`)"  class="btn btn-outline-warning">Update</button>
   </td>
            </tr>`
           }
            
        }
        document.getElementById("tableBody").innerHTML=cartona;
    }





function validInput(){

var regex=/^[A-Z][a-z]{3,8}$/;

if (regex.test(productNameInput.value)==true){

return true;

}
else{
    return false ;
}

}
