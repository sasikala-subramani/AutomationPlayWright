let car1 = {
	name : 'GT',
	maker : 'BMW',
	engine : '1998cc',
    owner_name: function() {
        let personInfo = {
            hight: "5.3",
            weight: "65",
            age: 40,

            display: () => {
                console.log("Displayed called")
            }

        }
 return personInfo
    }
   
}
// car1.owner_name(this.owner_name);
// Adding property and value to the object
car1.brakesType = 'All Disc';
car1.color='Green';

console.log("added new property:" +car1.brakesType);
console.log(car1);
car1.owner_name().display()
