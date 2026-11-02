/*--------Queue: Easy---------

1) (933)	Number of Recent Calls
2) (1700)	Number of Students Unable to Eat Lunch
3) (2073)	Time Needed to Buy Tickets
4) (232)	Implement Queue using Stacks

*/

/*--------Queue: Medium---------

1	(622)	Design Circular Queue
2	(641)	Design Circular Deque
3	(649)	Dota2 Senate
4	(950)	Reveal Cards In Increasing Order
5	(1429)	First Unique Number
6	(1823)	Find the Winner of the Circular Game

*/

// 1. Number of Recent Calls (933)
var RecentCounter = function () {
  // Our queue to hold the timestamps of the pings
  this.queue = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  // 1. A new ping arrives! Put them at the back of the line.
  this.queue.push(t);

  // 2. The cutoff time is exactly 3000 milliseconds ago
  let cutoff = t - 3000;

  // 3. Kick out the expired pings from the FRONT of the line
  // (this.queue[0] is the person at the very front)
  while (this.queue.length > 0 && this.queue[0] < cutoff) {
    this.queue.shift(); // shift() removes the first element from an array
  }

  // 4. Return how many valid pings are left in the line
  return this.queue.length;
};

let counter = new RecentCounter();
console.log("Ping at 1ms:", counter.ping(1)); // Expected: 1
console.log("Ping at 100ms:", counter.ping(100)); // Expected: 2
console.log("Ping at 3001ms:", counter.ping(3001)); // Expected: 3
console.log("Ping at 3002ms:", counter.ping(3002)); // Expected: 3 (1 is kicked out)

// 2. Number of Students Unable to Eat Lunch (1700)
// students = [1, 1, 0, 0], sandwiches = [0, 1, 0, 1]
/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  // A simple tally sheet: [How many want 0, How many want 1]
  let counts = [0, 0];

  // 1. Tally up what the students want
  for (let i = 0; i < students.length; i++) {
    let preference = students[i];
    counts[preference]++;
  }

  // 2. Serve the sandwiches from the top of the stack
  for (let i = 0; i < sandwiches.length; i++) {
    let topSandwich = sandwiches[i];

    // If NOBODY wants the sandwich currently on top, the line is stuck!
    if (counts[topSandwich] === 0) {
      break; // Stop serving
    }

    // Someone wanted it! Cross them off the clipboard.
    counts[topSandwich]--;
  }

  // 3. The total number of hungry students left is our answer
  return counts[0] + counts[1];
};

// 3. Time Needed to Buy Tickets (2073)
// tickets = [2, 3, 2], k = 2
/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
  let time = 0;
  let targetTickets = tickets[k]; // How many tickets our VIP wants

  for (let i = 0; i < tickets.length; i++) {
    if (i <= k) {
      // People in front of you (and yourself) get a full turn on the last lap
      time += Math.min(tickets[i], targetTickets);
    } else {
      // People behind you don't get a turn on the last lap
      time += Math.min(tickets[i], targetTickets - 1);
    }
  }

  return time;
};
console.log("Test 1:", timeRequiredToBuy([2, 3, 2], 2));
// Expected: 6
console.log("Test 2:", timeRequiredToBuy([5, 1, 1, 1], 0));
// Expected: 8 (You are at the front. Everyone else buys 1, then you take 4 more turns alone)
console.log("Test 3:", timeRequiredToBuy([84, 49, 5, 24, 70, 77, 87, 8], 3));
// Expected: 154 (Simulating this with an actual array would take forever!)

// 4. Implement Queue using Stacks (232)
var MyQueue = function () {
  this.inStack = []; // Box for new arrivals
  this.outStack = []; // Box for serving the oldest arrivals
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  // Pushing is super easy. Just throw them in the InBox.
  this.inStack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  // If the OutBox is empty, we must pour the InBox into it to find the oldest person
  if (this.outStack.length === 0) {
    while (this.inStack.length > 0) {
      // Pop from InBox, push into OutBox
      this.outStack.push(this.inStack.pop());
    }
  }

  // Return the person at the top of the OutBox (the oldest person)
  return this.outStack[this.outStack.length - 1];
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  // The logic to find the oldest person is exactly the same as peek().
  // So we just call our own peek() function to ensure the OutBox is ready!
  this.peek();

  // Now that they are on top of the OutBox, pop them off and return them.
  return this.outStack.pop();
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  // The queue is only empty if BOTH boxes are completely empty
  return this.inStack.length === 0 && this.outStack.length === 0;
};

//---------------------------------
//--------Queue: Medium---------
//---------------------------------

// 1.	Design Circular Queue (622)
/**
 * @param {number} k
 
var MyCircularQueue = function (k) {
  this.queue = new Array(k); // The fixed-size parking lot
  this.capacity = k; // Maximum number of spots
  this.size = 0; // How many cars are currently parked

  this.front = 0; // Index of the oldest car
  this.rear = -1; // Index of the newest car (Starts at -1 because no cars are parked yet)
};


MyQueue.prototype.enQueue = function (value) {
  if (this.isFull()) return false; // The lot is full!

  // Move the rear attendant forward. If they pass the last spot, wrap to 0.
  this.rear = (this.rear + 1) % this.capacity;

  this.queue[this.rear] = value; // Park the car
  this.size++; // Increase our car count

  return true;
};


MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) return false; // The lot is already empty!

  // Move the front attendant forward to the next oldest car
  this.front = (this.front + 1) % this.capacity;
  this.size--; // Decrease our car count

  return true;
};


MyCircularQueue.prototype.Front = function () {
  if (this.isEmpty()) return -1;
  return this.queue[this.front];
};


MyCircularQueue.prototype.Rear = function () {
  if (this.isEmpty()) return -1;
  return this.queue[this.rear];
};


MyCircularQueue.prototype.isEmpty = function () {
  return this.size === 0;
};

MyCircularQueue.prototype.isFull = function () {
  return this.size === this.capacity;
};

 */

// 2.	Design Circular Deque (641)
/**
 * @param {number} k

var MyCircularDeque = function (k) {
  this.q = new Array(k);
  this.capacity = k;
  this.size = 0; // The lifesaver variable!
  this.front = 0;
  this.rear = k - 1; // Start right behind 0 so moving forward hits 0
};


MyCircularDeque.prototype.insertFront = function (value) {
  if (this.isFull()) return false;

  // Step BACKWARD to add to the front
  this.front = (this.front - 1 + this.capacity) % this.capacity;
  this.q[this.front] = value;
  this.size++;
  return true;
};


MyCircularDeque.prototype.insertLast = function (value) {
  if (this.isFull()) return false;

  // Step FORWARD to add to the rear (exactly like Circular Queue)
  this.rear = (this.rear + 1) % this.capacity;
  this.q[this.rear] = value;
  this.size++;
  return true;
};


MyCircularDeque.prototype.deleteFront = function () {
  if (this.isEmpty()) return false;

  // Removing from the front means the "new" front is one step FORWARD
  this.front = (this.front + 1) % this.capacity;
  this.size--;
  return true;
};


MyCircularDeque.prototype.deleteLast = function () {
  if (this.isEmpty()) return false;

  // Removing from the rear means the "new" rear is one step BACKWARD
  this.rear = (this.rear - 1 + this.capacity) % this.capacity;
  this.size--;
  return true;
};


MyCircularDeque.prototype.getFront = function () {
  if (this.isEmpty()) return -1;
  return this.q[this.front];
};


MyCircularDeque.prototype.getRear = function () {
  if (this.isEmpty()) return -1;
  return this.q[this.rear];
};


MyCircularDeque.prototype.isEmpty = function () {
  return this.size === 0;
};


MyCircularDeque.prototype.isFull = function () {
  return this.size === this.capacity;
};

let deque = new MyCircularDeque(3); // set capacity to 3
console.log(deque.insertLast(1)); // return true
console.log(deque.insertLast(2)); // return true
console.log(deque.insertFront(3)); // return true
console.log(deque.insertFront(4)); // return false, the queue is full
console.log(deque.getRear()); // return 2
console.log(deque.isFull()); // return true
console.log(deque.deleteLast()); // return true
console.log(deque.insertFront(4)); // return true
console.log(deque.getFront()); // return 4
**/

// 3. Dota2 Senate (649)
/**
 * @param {string} senate
 * @return {string}

var predictPartyVictory = function (senate) {
  let rQueue = [];
  let dQueue = [];
  let n = senate.length;

  // 1. Hand out the initial ticket numbers (indices) to both teams
  for (let i = 0; i < n; i++) {
    if (senate[i] === "R") {
      rQueue.push(i);
    } else {
      dQueue.push(i);
    }
  }

  // 2. Fight until one team is completely eliminated
  while (rQueue.length > 0 && dQueue.length > 0) {
    // The person at the front of both lines steps up
    let rTurn = rQueue.shift();
    let dTurn = dQueue.shift();

    // Whoever has the smaller ticket number shoots first!
    if (rTurn < dTurn) {
      // Radiant shoots Dire. Dire is eliminated.
      // Radiant survives and goes to the back of the line for the next round!
      rQueue.push(rTurn + n);
    } else {
      // Dire shoots Radiant. Radiant is eliminated.
      // Dire survives and goes to the back of the line!
      dQueue.push(dTurn + n);
    }
  }

  // 3. The winner is whoever still has people in their queue
  return rQueue.length > 0 ? "Radiant" : "Dire";
};
console.log("Test 1:", predictPartyVictory("RD"));
// Expected: "Radiant" (R goes first, bans D)

console.log("Test 2:", predictPartyVictory("RDD"));
// Expected: "Dire" (The example we just traced)

console.log("Test 3:", predictPartyVictory("DDRRR"));
// Expected: "Dire" (D1 bans R1, D2 bans R2. R3 bans D1. D2 bans R3!)
 */

// 4. Reveal Cards In Increasing Order (950)
/**
 * @param {number[]} deck
 * @return {number[]}
var deckRevealedIncreasing = function (deck) {
  // 1. Sort the deck so we can hand out the cards from smallest to largest
  deck.sort((a, b) => a - b);

  let n = deck.length;
  let result = new Array(n); // Our final layout of chairs
  let queue = [];

  // 2. Put all the empty chair numbers into our line (0, 1, 2, ..., n-1)
  for (let i = 0; i < n; i++) {
    queue.push(i);
  }

  // 3. Hand out the sorted cards one by one
  for (let i = 0; i < n; i++) {
    // The chair at the front of the line gets the current smallest card
    let seat = queue.shift();
    result[seat] = deck[i];

    // The NEXT chair in line is skipped and sent to the back of the line
    if (queue.length > 0) {
      let skippedSeat = queue.shift();
      queue.push(skippedSeat);
    }
  }

  return result;
};
*/

// 5.	First Unique Number (1429)
/**
 * @param {number[]} nums

var FirstUnique = function(nums) {
    this.queue = [];
    this.counts = new Map();
    this.front = 0; // Instead of shift(), we just move our pointer forward!
    
    // Process all the starting numbers
    for (let i = 0; i < nums.length; i++) {
        this.add(nums[i]);
    }
};


FirstUnique.prototype.showFirstUnique = function() {
    // The Lazy Clean-up!
    // While there are people in line AND the person at the front is a repeat offender
    while (this.front < this.queue.length && this.counts.get(this.queue[this.front]) > 1) {
        this.front++; // Walk past them (effectively kicking them out)
    }
    
    // If the bouncer walked past everyone, the line is empty
    if (this.front === this.queue.length) {
        return -1;
    }
    
    // Otherwise, the person at the front is our First Unique!
    return this.queue[this.front];
};

FirstUnique.prototype.add = function(value) {
    // 1. Update the logbook
    let currentCount = this.counts.get(value) || 0;
    this.counts.set(value, currentCount + 1);
    
    // 2. Put them at the back of the line
    this.queue.push(value);
};

let firstUnique = new FirstUnique([2, 3, 5]);
console.log("Show First (Expected 2):", firstUnique.showFirstUnique()); 
firstUnique.add(5);            // Queue is now [2,3,5,5]
console.log("Show First (Expected 2):", firstUnique.showFirstUnique()); 
firstUnique.add(2);            // Queue is now [2,3,5,5,2]. 2 is no longer unique!
console.log("Show First (Expected 3):", firstUnique.showFirstUnique()); 
firstUnique.add(3);            // Queue is now [2,3,5,5,2,3]. Nobody is unique!
console.log("Show First (Expected -1):", firstUnique.showFirstUnique());

*/

// 6.	Find the Winner of the Circular Game (1823)
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
  let queue = [];

  // 1. Put all the friends in line (1 to n)
  for (let i = 1; i <= n; i++) {
    queue.push(i);
  }

  // 2. Play the game until only 1 person is left
  while (queue.length > 1) {
    // Step A: The "Duck" phase.
    // Move the first k - 1 people to the back of the line.
    for (let i = 0; i < k - 1; i++) {
      let survivor = queue.shift();
      queue.push(survivor);
    }

    // Step B: The "Goose" phase!
    // The person now at the front is the k-th person. Eliminate them!
    queue.shift();
  }

  // 3. The only person left in the queue is the winner
  return queue[0];
};
