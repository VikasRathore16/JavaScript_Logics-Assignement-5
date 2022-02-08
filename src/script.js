const Array=[];
document.getElementById("updateProduct").style.display = "none";

//fetching input field data
function fetch(){
    var product_id= document.getElementById("productId").value;
    var product_name=document.getElementById("productName").value;
    var product_price = document.getElementById("productPrice").value;
    
    return {"productId" : product_id,
            "productName" : product_name,
        "productPrice" : product_price};
}

//Validate data
function checkData(productId,productName, productPrice){
    var flag=0;
   /*  for(var i=0;i<Array.length;i++){
        if(Array[i].productId==productId){
            flag =1;
            alert("Product Id exists , it should be unique");
        }
    } */
    if(isNaN(productId)){
        flag=1;
        alert("Product Id should be integer");
        }
    
    
  
    if(!isNaN(productName)){
        flag=1;
        alert("Product Name should be String")
    }
    if(isNaN(productPrice)){
        flag=1;
        alert("Product Price should be Number")
    }
   
    return flag ;
    

}

//displaying Html elements
function display(){
    var product = fetch();
    if(checkData(product.productId,product.productName,product.productPrice)==0){
            Array.push(product);
            var table = document.getElementById('mytable');
            var row = table.insertRow(-1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            for(var i=0; i<Array.length ; i++){
                cell1.innerHTML = Array[i].productId;
                cell2.innerHTML = Array[i].productName;
                cell3.innerHTML = "USD " + Array[i].productPrice;
                cell4.innerHTML = '<a href="#"onclick="editForm('+Array[i].productId+')" >Edit</a>';
            
            }
        }
}

//adding new product in the products function
function addProducts(){

    display(); 
}


//run loop to get product
function getProduct(productId){
    console.log(productId);
    console.log(productId);
    console.log(productId);
    for(var i=0 ; i<Array.length;i++){
        if(productId==Array[i].productId){
            return Array[i];
        }
        else{
            console.log("Not found");
        }
    }
}

//update where id matches
function updateProduct(){
    var product =getProduct(productId);
    for(var i=0;i<Array.length;i++){
        if(productId==Array[i].productId){
            Array[i].pop();
            Array.unshift({
                "productId" : product.productId,
                "productName" : product.productName,
                "productPrice" : product.productPrice
            })
            console.log(Array);
        }
    }
    
    display();
    
}

function editForm(productId){
    var product = getProduct(productId);
    console.log(product);
    document.getElementById("updateProduct").style.display="block";
    document.getElementById("addProduct").style.display="none";
    document.getElementById("productId").innerHTML=product.productId.value;
    document.getElementById("productName").innerHTML=product.productName;
    document.getElementById("productPrice").innerHTML=product.productPrice;
    return product;
}










