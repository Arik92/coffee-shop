var coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },

  makeDrink: function (drinkType) {
    var beanPrice=this.drinkRequirements[drinkType];
    if (beanPrice===undefined)  {
      console.log("Sorry, we dont make "+ drinkType);
    }//if drink not on the list
    else if (this.beans > beanPrice) {
      this.beans-=beanPrice;
      console.log("made "+drinkType);
    }//else if
    else console.log("Not enough beans. Sorry!");
  },//makeDrink
  beansLeft: function()  {
    console.log("There are "+ this.beans+" beans left");
  },//beansLeft
  money: 1500,
  buySupllies: function(amount)  {
    var price=10;
    var total=amount*price;
    if (money<total)  {
      console.log("insufficiant funds!!");
    }
    else  {
      this.beans+=amount;
      money-=total;
      console.log("Bought "+amount+" beans for "+total+" price");
    }//else
  }//buySupplies
}//coffeShop
coffeeShop.beansLeft();
coffeeShop.makeDrink("latte");
coffeeShop.beansLeft();
coffeeShop.makeDrink("americano");
coffeeShop.beansLeft();
coffeeShop.makeDrink("filtered");
coffeeShop.beansLeft();
coffeeShop.makeDrink("doubleShot");
coffeeShop.beansLeft();
coffeeShop.makeDrink("frenchPress");
