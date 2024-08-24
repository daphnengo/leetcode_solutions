// Functional Component
// const ParkingLot = parkingSize => {
//   const slots = new Array(parkingSize).fill(null);
//   console.log(slots); // [ null, null, null, null, ... ]

//   const parkVehicle = vehicleId => {
    
//   };
// };

// ParkingLot(5);

// Class component
class ParkingLot {
  slots = [];

  constructor(parkingSize) {
    this.slots = new Array(parkingSize).fill(null); // [null, null, null, ...]
  }

  isFull() {
    if (this.slots.every(slot => slot !== null)) {
      return true;
    }

    return false;
  }

  parkVehicle(vehicleId) {
    // check if the parking is full
    if (this.isFull()) {
      console.log('The parking is full');
    }

    for (let i = 0; i < this.slots.length; i++) {
      if (this.slots[i] === null) {
        this.slots[i] = vehicleId;
        console.log(`The vehicle ${vehicleId} is already parked!`);
        break;
      }
    }
  }

  removeVehicle(vehicleId) {
    if (this.slots.every(slot => slot !== vehicleId)) {
      console.log(`Can not find the vehicle Id: ${vehicleId}`);
    }

    for (let i = 0; i < this.slots.length; i++) {
      if (this.slots[i] === vehicleId) {
        this.slots[i] = null;
        console.log(`The vehicle ${vehicleId} left the parking garage!`);
        break;
      }
    }
  }
}

module.exports = ParkingLot;
