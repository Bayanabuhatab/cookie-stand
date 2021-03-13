  
'use strict';
let hour=["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"];
// let store =[];
// let name =["store"]
// let inHourlyCustomers=[23,3,11,20,2];
// let maxHourlyCustomers =[65,24,38,38,16];
// let avrgCookieSales=[6.3,1.2,3.7,2.3,4.6];  

// function Store(name, minHourlyCustomers, maxHourlyCustomers, avgCookiesPerCustomer) 
//   this.minHourlyCustomers = minHourlyCustomers;
//   this.maxHourlyCustomers = maxHourlyCustomers;
//   this.avgCookiesPerCustomer = avgCookiesPerCustomer;
//   this.name = name;
//   this.cookiesPerHourArr = [];
//   this.totalDailyCookies = 0;

let seatle = {
  avrg :6.3,
  max :65 ,
  min : 23, 
  cityname: 'seatle',
  sum : 0 ,
  customerberhouer:function(){
    let customerRandom = (Math.floor(Math.random() * (this.max - this.min+1) + this.min));
    return customerRandom;
  },
  cookiesberhouer:function(){
    let cookiesRandom = (Math.floor(this.customerberhouer() * this.avrg));
    return cookiesRandom ;
  },
  total:function(){
    for (let index = 0; index < hour.length; index++) {
      this.sum = this.sum + this.cookiesberhouer();
    }
    return this.sum ;
  },

};
console.log(seatle);
console.log(seatle.max);
console.log(seatle.cookiesberhouer());



let Tokyo = {
  avrg: 1.2,
  max : 24 ,
  min : 3 , 
  cityname: 'Tokyo',
  sum : 0 ,
  customerberhouer:function(){
    let customerRandom = (Math.floor(Math.random() * (this.max - this.min+1) + this.min));
    return customerRandom;
  },
  cookiesberhouer:function(){
    let cookiesRandom = (Math.floor(this.customerberhouer() * this.avrg));
    return cookiesRandom ;
  },
  total:function(){
    for (let index = 0; index < hour.length; index++) {
      this.sum = this.sum + this.cookiesberhouer();
    }
    return this.sum ;
  },

};

let Dubai = {
  avrg: 3.7,
  max : 38 ,
  min : 11 , 
  cityname: 'Dubai',
  sum : 0 ,
  customerberhouer:function(){
    let customerRandom = (Math.floor(Math.random() * (this.max - this.min+1) + this.min));
    return customerRandom;
  },
  cookiesberhouer:function(){
    let cookiesRandom = (Math.floor(this.customerberhouer() * this.avrg));
    return cookiesRandom ;
  },
  total:function(){
    for (let index = 0; index < hour.length; index++) {
      this.sum = this.sum + this.cookiesberhouer();
    }
    return this.sum ;
  },

};



let Paris  = {
  avrg:2.3 ,
  max : 3.8,
  min : 20,
  cityname: 'Paris',
  sum : 0 ,
  customerberhouer:function(){
    let customerRandom = (Math.floor(Math.random() * (this.max - this.min+1) + this.min));
    return customerRandom;
  },
  cookiesberhouer:function(){
    let cookiesRandom = (Math.floor(this.customerberhouer() * this.avrg));
    return cookiesRandom ;
  },
  total:function(){
    for (let index = 0; index < hour.length; index++) {
      this.sum = this.sum + this.cookiesberhouer();
    }
    return this.sum ;
  },

};


let lima  = {
  avrg: 4.6,
  max : 16,
  min : 2,
  cityname: 'lima',
  sum : 0 ,
  customerberhouer:function(){
    let customerRandom = (Math.floor(Math.random() * (this.max - this.min+1) + this.min));
    return customerRandom;
  },
  cookiesberhouer:function(){
    let cookiesRandom = (Math.floor(this.customerberhouer() * this.avrg));
    return cookiesRandom ;
  },
  total:function(){
    for (let index = 0; index < hour.length; index++) {
      this.sum = this.sum + this.cookiesberhouer();
    }
    return this.sum ;
  },

};










function dom(obj) {
  let first = document.getElementById('bayan');
  let unorderlist=document.createElement('ul');
  // let list =document.createElement('li');
  first.appendChild(unorderlist);
  let sec = document.createElement('p');
  unorderlist.appendChild(sec);
  sec.textContent=obj.cityname;
  for (let c = 0 ;c<hour.length;c++)

  {
    let item =document.createElement('li');
    unorderlist.appendChild(item);
    item.textContent=hour[c]+ ': ' +obj.cookiesberhouer()+' cookies';
  }
  let item =document.createElement('li');
  unorderlist.appendChild(item);
  item.textContent='total: ' +obj.total()+ ' cookies';
  console.log(obj.total);

}

dom(seatle);
dom (Tokyo);
dom(Dubai);
dom(Paris);
dom(lima);
