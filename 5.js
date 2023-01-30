class Device {
 constructor(name, power) {
  this.prop = 'electrical';
  this.name = name;
  this.power = power;
  this.getOnOff = function(onoff = 0) {
    return this.onoff = onoff
  }
 } 
}

const lamp = new Device('lamp', 50);
const computer = new Device('computer', 120);


lamp.getOnOff(0)
computer.getOnOff(1)

console.log(lamp.onoff)
console.log(computer.onoff)

let deviceList = [lamp, computer]



function calcPower(list) {
  var totalPower = 0;
  for (var i in list) {
    if (list[i].onoff === 1) {
        totalPower += list[i].power;
    }
  }
  return totalPower;
}

console.log(calcPower(deviceList))
