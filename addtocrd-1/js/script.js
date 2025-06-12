
let products=[
{
"id": 1,
"title":" LD01 LOUNGE CHAIR",
"money": 200,
"image": "https://cdn.decornation.in/wp-content/uploads/2020/07/modern-dining-table-chairs.jpg"
},
{
"id": 2,
"title":" LD02 LOUNGE CHAIR",
"money": 250,
"image": "https://cdn.decornation.in/wp-content/uploads/2020/07/modern-dining-table-chairs.jpg"
},
{
"id": 3,
"title":" LD03 LOUNGE CHAIR",
"money": 290,
"image": "https://cdn.decornation.in/wp-content/uploads/2020/07/modern-dining-table-chairs.jpg"
},
{
"id": 4,
"title":" LD04 LOUNGE CHAIR",
"money": 200,
"image": "https://cdn.decornation.in/wp-content/uploads/2020/07/modern-dining-table-chairs.jpg"
},
{
"id": 5,
"title":" LD05 LOUNGE CHAIR",
"money": 300,
"image": "https://cdn.decornation.in/wp-content/uploads/2020/07/modern-dining-table-chairs.jpg"
},
{
"id": 6,
"title":" LD06 LOUNGE CHAIR",
"money": 200,
"image": "https://cdn.decornation.in/wp-content/uploads/2020/07/modern-dining-table-chairs.jpg"
},
{
"id": 7,
"title":" LD07 LOUNGE CHAIR",
"money": 200,
"image": "https://cdn.decornation.in/wp-content/uploads/2020/07/modern-dining-table-chairs.jpg"
},
{
"id": 8,
"title":" LD08 LOUNGE CHAIR",
"money": 200,
"image": "https://cdn.decornation.in/wp-content/uploads/2020/07/modern-dining-table-chairs.jpg"
}

]

// let cart=[]
let cart=[];
cart=JSON.parse(localStorage.getItem('cart'))?JSON.parse(localStorage.getItem('cart')):[];

localStorage.setItem('data1',JSON.stringify(products));

function getproducts(){
    products=JSON.parse(localStorage.getItem('data1'))?JSON.parse(localStorage.getItem('data1')):[];

    let htmlentity=''
        products.forEach((v,i)=>{
            htmlentity+=`<div class="col-3 ">`
            htmlentity+=`<div class="box">`
            htmlentity+=`<img src="${v.image}" height="100">`;
            htmlentity+=`<h4>${v.title}</h4>`;
            htmlentity+=`<p>${v.money}</p>`;
            htmlentity+=`<button type="submit" onclick="addtocart(${i})">Add to Cart</button>`;
            htmlentity+=`</div>`
            htmlentity+=`</div>`
        })
        document.getElementById("productlist").innerHTML=htmlentity

        window.open("cart.html",'_blank')
}

getproducts()
function submitcart(){
    let cartentity=''
        cart.forEach((item,index)=>{
            cartentity+=` <div style="display:flex;  gap: 30px;align-items: center;justify-content: center;" class="item">`
            cartentity+=`<img src="${item.image}" height="100" alt="">`
            cartentity+=`<h4>${item.title}</h4>`
            cartentity+=`<p>${item.money}</p>`
            cartentity+=`<div>
                <a href="">
                    <i class="fa-solid fa-plus"></i>
                </a>
                <span>0</span>
                <a href="">
                    <i class="fa-solid fa-minus"></i>
                </a>
            </div>`
            cartentity+=`<button onclick="return removeproduct(${index})" >X</button>`
            cartentity+=`</div>`
    });
    document.getElementById("listcart").innerHTML=cartentity;
    localStorage.setItem('cart',JSON.stringify(cart));


    
}

function addtocart(index) {
    let item = products[index];
    item.quantity = 1;
    cartobj={
        id: item.id,
        title: item.title,
        money: item.money,
        image: item.image,
        quantity: item.quantity
    };
    cart.push(cartobj);
    submitcart();
}

function removeproduct(index){
     
     cart.splice(index,1);
     localStorage.setItem('cart',JSON.stringify(cart));
     submitcart();
}
submitcart();


