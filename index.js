console.log("******Business Name Generator******");

function Adjectives() {
  let a = "Crazy ";
  let b = "Amazing ";
  let c = "Fire ";
  let random = Math.floor(Math.random() % 3);
  switch (random) {
    case 0:
      return a;
      break;
    case 1:
      return b;
    case 2:
      return c;
    default:
      console.log("sorry,no word exists!!");
      break;
  }
}

function Shop_Name() {
  let a = "Engine ";
  let b = "Food ";
  let c = "Garment ";
  let random = Math.floor(Math.random() % 3);
  switch (random) {
    case 0:
      return a;
      break;
    case 1:
      return b;
    case 2:
      return c;
    default:
      console.log("sorry,no word exists!!");
      break;
  }
}

function Another_Word() {
  let a = "Bros ";
  let b = "Limited ";
  let c = "Hub ";
  let random = Math.floor(Math.random() % 3);
  switch (random) {
    case 0:
      return a;
      break;
    case 1:
      return b;
    case 2:
      return c;
    default:
      console.log("sorry,no word exists!!");
      break;
  }
}

console.log("Business name generated: "+Adjectives()+Shop_Name()+Another_Word())