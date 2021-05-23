class Power
{
    constructor(name='koi bhi',age=0)
    {
        this.age=age;
        this.name=name
    }
    getdesc()
    {
        return `${this.name} is ${this.age} years old !`
    }
    getgreet()
    {
        return `hi i,m ${this.name}`
    }
}
class Location extends Power
{ constructor(name,age,location)
    {
      super(name,age);
      this.location=location;
    }
    living()
    {
        return ` i live in ${this.location}`;
    }
    getgreet()
    {
        var prefix=super.getgreet();
        if(this.location)
        {
            prefix+=this.living();
        }
        return prefix;
    }


}

var p1= new Location('Shoaib',18,'mars');
console.log(p1.getgreet());
var p2= new Location();
console.log(p2.getgreet());