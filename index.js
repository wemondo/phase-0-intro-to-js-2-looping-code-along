for (let age = 31; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    
  }

  const gifts = ["teddy bear", "drone", "doll"];
  function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
      console.log(`Wrapped ${gifts[i]} and added a bow!`);
     
    }
  
    return gifts;
  }
  
  wrapGifts(gifts);

  const cards = (["Charlie", "Samip", "Ali"], "wonderful");
  function writeCards(cards) {
    const messages = []
    for (let i = 0; i < cards.length; i++) {
        console.log(`Thank you, ${cards[i]}, for the wonderful surprise gift!`)
        messages.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`)
    }
    return messages
  }
  
  function countDown() {
    for (let integer = 10; integer > -1; integer--) {
        console.log(integer)
    }

  }
