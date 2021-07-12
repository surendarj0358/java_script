// assignment8

var restaurantMenu = {
    name:"India Kitchen",
    items : [
        {
            itemName:"Chicken Kabab",
            itemPrice:170
        },
        {
            itemName:"Mutton Chilly",
            itemPrice:220
        },
        {
            itemName:"Chicken Chilly",
            itemPrice:250
        },
        {
            itemName:"Gobi",
            itemPrice:120  
        },
        {
            itemName:"Idly",
            itemPrice:25
        },
    ],
    listMenuItems:function(){
        for(i=0;i<=4;i++){
            // console.log(restaurantMenu.items[i].itemName)
            // console.log(restaurantMenu.items[i].itemPrice )

            alert(this.items[i].itemName+ "- Rs" + this.items[i].itemPrice)

        }
    }
}

restaurantMenu.listMenuItems()
