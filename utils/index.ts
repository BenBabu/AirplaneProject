export function assignSeats(
  seatArray: Array<any>,
  noOfPassengers: number
): Array<any> {
  const maxRowSize = Math.max.apply(
    Math,
    seatArray.map((e) => e[0])
  );
  const maxColSize = Math.max.apply(
    Math,
    seatArray.map((e) => e[1])
  );
  let seats = nameSeats(seatArray);
  let section: { counter: number; seats: Array<any> } = {
    counter: 0,
    seats: [],
  };
  section = assignPassenger(
    "A",
    1,
    seats,
    maxColSize,
    maxRowSize,
    noOfPassengers
  );
  section = assignPassenger(
    "W",
    section.counter,
    section.seats,
    maxColSize,
    maxRowSize,
    noOfPassengers
  );
  section = assignPassenger(
    "M",
    section.counter,
    section.seats,
    maxColSize,
    maxRowSize,
    noOfPassengers
  );
  seats = section.seats;
  return seats;
}

const nameSeats = (array: Array<any>) => {
  var seats = [];
  for (var i = 0; i < array.length; i++)
    seats.push(
      Array(array[i][1])
        .fill()
        .map(() => Array(array[i][0]).fill("M"))
    );

  for (var i = 0; i < seats.length; i++) {
    for (var j = 0; j < seats[i].length; j++) {
      seats[i][j][0] = "A";
      seats[i][j][seats[i][j].length - 1] = "A";
    }
  }

  for (var i = 0; i < seats[0].length; i++) seats[0][i][0] = "W";
  for (var i = 0; i < seats[seats.length - 1].length; i++)
    seats[seats.length - 1][i][seats[seats.length - 1][i].length - 1] = "W";

  return seats;
};

const assignPassenger = (
  seatType: string,
  counter: number,
  seats: Array<any>,
  maxColSize: number,
  maxRowSize: number,
  noOfPassengers: number
) => {
  for (var i = 0; i < maxColSize; i++) {
    for (var j = 0; j < maxRowSize; j++) {
      if (seats[j] == null || seats[j][i] == null) continue;
      for (var k = 0; k < seats[j][i].length; k++) {
        if (
          seats[j] != null &&
          seats[j][i] != null &&
          seats[j][i][k] === seatType &&
          counter <= noOfPassengers
        ) {
          seats[j][i][k] = counter;
          counter++;
        }
      }
    }
  }
  return { seats: seats, counter: counter };
};
