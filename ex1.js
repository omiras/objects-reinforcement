const flightReservation = {
  flightNumber: "AC123",
  airline: "Air Canada",
  departure: {
    airport: "JFK Airport",
    date: "2023-11-01",
    time: "08:30 AM",
  },
  arrival: {
    airport: "LAX Airport",
    date: "2023-11-01",
    time: "01:45 PM",
  },
  passenger: {
    firstName: "John",
    lastName: "Doe",
    passport: "AB123456",
    contactInfo: {
      email: "john.doe@example.com",
      phone: "+1 (123) 456-7890",
    },
  },
  seat: "23A",
  ticketClass: "Economy",
  specialMeals: ["Vegetarian", "Gluten-free"],
  baggage: {
    checked: {
      quantity: 2,
      totalWeight: 3,
    },
    carryOn: {
      quantity: 1,
      totalWeight: 7,
    },
  },
  inFlightServices: ["Entertainment", "Wi-Fi"],
  loyaltyProgram: {
    name: "Frequent Flyer",
    points: 1500,
  },
  specialRequests: "Wheelchair assistance",
  totalPrice: "$450.00",
  paymentMethod: "Credit Card",
  bookingReference: "XYZ789",
  isConfirmed: true,
  isCancelled: false,
  flightStatus: "On time",
  gate: "B15",
};

console.log(flightReservation);

// Observa el resultado de la consola. Escribe un console.log para cada uno de los apartados

// 1. Muestra el número de vuelo

// 2. Muestra el nombre de la aerolínea

// 3. Muestra TODOS los datos sobre la fecha de salida del vuelo

// 4. Muestra únicamente el nombre aeropuerto de llegada

// 5. Muestra únicamente el peso del equipaje facturado

// 6. Muestra la SUMA del peso del equipaje facturado y el equipaje de cabina

// 7. Usa el método includes para indicar si este vuelo dispone del servicio de Wi-Fi o no (true o false)
