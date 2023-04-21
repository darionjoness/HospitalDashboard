const patients = [
  {
    id: Math.floor(Math.random() * 1000000),
    name: "John Doe",
    roomNumber: 201,
    age: 45,
    height: 69,
    weight: 180,
    gender: 'Male',
    phoneNumber: '(555) 232-9876',
    email: 'johndoe201@gmail.com',
    image: 'https://images.unsplash.com/photo-1504199367641-aba8151af406?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    dateArrived: "",
    departureDate: "",
    familyMembers: [
      {
        name: "Jane Doe",
        phoneNumber: "555-555-5555",
        email: "jane.doe@example.com",
      },
      {
        name: "Bob Doe",
        phoneNumber: "555-555-5556",
        email: "bob.doe@example.com",
      },
    ],
    medicines: [
      {
        name: "Aspirin",
        dosage: "500mg",
        hoursBetweenDoses: 4,
      },
      {
        name: "Penicillin",
        dosage: "250mg",
        hoursBetweenDoses: 6,
      },
    ],
    satisfaction: "medium",
  },
  {
    id: Math.floor(Math.random() * 1000000),
    name: "Jane Smith",
    roomNumber: 102,
    age: 35,
    height: 72,
    weight: 122,
    gender: 'Female',
    phoneNumber: '(555) 864-2098',
    email: 'jane.smith102@yahoo.com',
    image: 'https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    dateArrived: "",
    departureDate: "",
    familyMembers: [
      {
        name: "John Smith",
        phoneNumber: "555-555-5557",
        email: "john.smith@example.com",
      },
      {
        name: "Sara Smith",
        phoneNumber: "555-555-5558",
        email: "sara.smith@example.com",
      },
    ],
    medicines: [
      {
        name: "Ibuprofen",
        dosage: "400mg",
        hoursBetweenDoses: 8,
      },
      {
        name: "Amoxicillin",
        dosage: "500mg",
        hoursBetweenDoses: 6,
      },
    ],
    satisfaction: "low",
  },
  {
    id: Math.floor(Math.random() * 1000000),
    name: "Bob Johnson",
    roomNumber: 203,
    age: 55,
    height: 70,
    weight: 156,
    gender: 'Male',
    phoneNumber: '(555) 739-5168',
    email: 'bobjohnson203@hotmail.com',
    image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    dateArrived: "",
    departureDate: "",
    familyMembers: [
      {
        name: "Alice Johnson",
        phoneNumber: "555-555-5559",
        email: "alice.johnson@example.com",
      },
      {
        name: "Tom Johnson",
        phoneNumber: "555-555-5560",
        email: "tom.johnson@example.com",
      },
    ],
    medicines: [
      {
        name: "Paracetamol",
        dosage: "500mg",
        hoursBetweenDoses: 6,
      },
      {
        name: "Erythromycin",
        dosage: "250mg",
        hoursBetweenDoses: 8,
      },
    ],
    satisfaction: "high",
  },
  {
    id: Math.floor(Math.random() * 1000000),
    name: "Sarah Lee",
    roomNumber: 305,
    age: 28,
    height: 63,
    weight: 115,
    gender: 'Female',
    phoneNumber: '(555) 681-4235',
    email: 'sarahlee305@gmail.com',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
    dateArrived: "",
    departureDate: "",
    familyMembers: [
    {
    name: "Mark Lee",
    phoneNumber: "555-555-5561",
    email: "mark.lee@example.com",
    },
    {
    name: "Emily Lee",
    phoneNumber: "555-555-5562",
    email: "emily.lee@example.com",
    },
    ],
    medicines: [
    {
    name: "Acetaminophen",
    dosage: "500mg",
    hoursBetweenDoses: 6,
    },
    {
    name: "Azithromycin",
    dosage: "250mg",
    hoursBetweenDoses: 8,
    },
    ],
    satisfaction: "high",
    },
    {
      id: Math.floor(Math.random() * 1000000),
      name: "Robert Garcia",
      roomNumber: 405,
      age: 50,
      height: 68,
      weight: 172,
      gender: 'Male',
      phoneNumber: '(555) 332-0569',
      email: 'robert.garcia405@gmail.com',
      image: 'https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=644&q=80',
      dateArrived: "",
      departureDate: "",
      familyMembers: [
      {
      name: "Maria Garcia",
      phoneNumber: "555-555-5563",
      email: "maria.garcia@example.com",
      },
      {
      name: "Juan Garcia",
      phoneNumber: "555-555-5564",
      email: "juan.garcia@example.com",
      },
      ],
      medicines: [
      {
      name: "Codeine",
      dosage: "30mg",
      hoursBetweenDoses: 4,
      },
      {
      name: "Ciprofloxacin",
      dosage: "500mg",
      hoursBetweenDoses: 12,
      },
      ],
      satisfaction: "medium",
      }, 
      {
        id: Math.floor(Math.random() * 1000000),
        name: "Jessica Chen",
        roomNumber: 306,
        age: 32,
        height: 64,
        weight: 130,
        gender: 'Female',
        phoneNumber: '(555) 430-7905',
        email: "jessica.chen352@example.com",
        image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80',
        dateArrived: "",
        departureDate: "",
        familyMembers: [
        {
        name: "David Chen",
        phoneNumber: "555-555-5565",
        email: "david.chen@example.com",
        },
        {
        name: "Linda Chen",
        phoneNumber: "555-555-5566",
        email: "linda.chen@example.com",
        },
        ],
        medicines: [
        {
        name: "Naproxen",
        dosage: "500mg",
        hoursBetweenDoses: 12,
        },
        {
        name: "Metronidazole",
        dosage: "500mg",
        hoursBetweenDoses: 8,
        },
        ],
        satisfaction: "high",
        },
        {
          id: Math.floor(Math.random() * 1000000),
          name: "Mike Johnson",
          roomNumber: 103,
          age: 62,
          height: 68,
          weight: 190,
          gender: 'Male',
          phoneNumber: '(555) 528-9143',
          email: "mike.johnson132@example.com",
          image: 'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
          dateArrived: "",
          departureDate: "",
          familyMembers: [
          {
          name: "Maggie Johnson",
          phoneNumber: "555-555-5570",
          email: "maggie.johnson@example.com",
          },
          {
          name: "Bob Johnson",
          phoneNumber: "555-555-5571",
          email: "bob.johnson@example.com",
          },
          ],
          medicines: [
          {
          name: "Lisinopril",
          dosage: "10mg",
          hoursBetweenDoses: 12,
          },
          {
          name: "Metformin",
          dosage: "500mg",
          hoursBetweenDoses: 12,
          },
          ],
          satisfaction: "low",
          },
          {
            id: Math.floor(Math.random() * 1000000),
            name: "Karen Lee",
            roomNumber: 205,
            age: 40,
            height: 65,
            weight: 140,
            gender: 'Female',
            phoneNumber: '(555) 997-3987',
            email: "karen.lee390@example.com",
            image: 'https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=962&q=80',
            dateArrived: "",
            departureDate: "",
            familyMembers: [
            {
            name: "Jack Lee",
            phoneNumber: "555-555-5572",
            email: "jack.lee@example.com",
            },
            {
            name: "Eva Lee",
            phoneNumber: "555-555-5573",
            email: "eva.lee@example.com",
            },
            ],
            medicines: [
            {
            name: "Advil",
            dosage: "200mg",
            hoursBetweenDoses: 8,
            },
            {
            name: "Amoxicillin",
            dosage: "500mg",
            hoursBetweenDoses: 6,
            },
            ],
            satisfaction: "medium",
            },
            {
              id: Math.floor(Math.random() * 1000000),
              name: "Adam Smith",
              roomNumber: 307,
              age: 15,
              height: 71,
              weight: 175,
              gender: 'Male',
              phoneNumber: '(555) 610-8732',
              email: "adam.smith467@example.com",
              image: 'https://images.unsplash.com/photo-1509305717900-84f40e786d82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=936&q=80',
              dateArrived: "",
              departureDate: "",
              familyMembers: [
              {
              name: "Mary Smith",
              phoneNumber: "555-555-5574",
              email: "mary.smith@example.com",
              },
              {
              name: "Chris Smith",
              phoneNumber: "555-555-5575",
              email: "chris.smith@example.com",
              },
              ],
              medicines: [
              {
              name: "Tylenol",
              dosage: "500mg",
              hoursBetweenDoses: 6,
              },
              {
              name: "Azithromycin",
              dosage: "250mg",
              hoursBetweenDoses: 8,
              },
              ],
              satisfaction: "low",
              },
              {
                id: Math.floor(Math.random() * 1000000),
                name: "Maggie Johnson",
                roomNumber: 301,
                age: 45,
                height: 68,
                weight: 160,
                gender: 'Female',
                phoneNumber: '(555) 348-6927',
                email: "maggie.johnson563@example.com",
                image: 'https://images.unsplash.com/photo-1521146764736-56c929d59c83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
                dateArrived: "",
                departureDate: "",
                familyMembers: [
                {
                name: "William Johnson",
                phoneNumber: "555-555-5566",
                email: "william.johnson@example.com",
                },
                {
                name: "Ella Johnson",
                phoneNumber: "555-555-5567",
                email: "ella.johnson@example.com",
                },
                ],
                medicines: [
                {
                name: "Ibuprofen",
                dosage: "800mg",
                hoursBetweenDoses: 6,
                },
                {
                name: "Amoxicillin",
                dosage: "500mg",
                hoursBetweenDoses: 6,
                },
                ],
                satisfaction: "high",
                },
                {
                  id: Math.floor(Math.random() * 1000000),
                  name: "Peter Jackson",
                  roomNumber: 203,
                  age: 65,
                  height: 72,
                  weight: 185,
                  gender: 'Male',
                  email: 'peterjackson9876@gmail.com',
                  image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
                  phoneNumber: '(555) 773-1389',
                  dateArrived: "",
                  departureDate: "",
                  familyMembers: [
                  {
                  name: "Rachel Jackson",
                  phoneNumber: "555-555-5568",
                  email: "rachel.jackson@example.com",
                  },
                  {
                  name: "David Jackson",
                  phoneNumber: "555-555-5569",
                  email: "david.jackson@example.com",
                  },
                  ],
                  medicines: [
                  {
                  name: "Omeprazole",
                  dosage: "20mg",
                  hoursBetweenDoses: 12,
                  },
                  {
                  name: "Atenolol",
                  dosage: "50mg",
                  hoursBetweenDoses: 8,
                  },
                  ],
                  satisfaction: "high",
                  },
                  {
                    id: Math.floor(Math.random() * 1000000),
                    name: "Emily Wilson",
                    roomNumber: 401,
                    age: 24,
                    height: 65,
                    weight: 120,
                    gender: 'Female',
                    phoneNumber: '(555) 419-2085',
                    email: 'emily.wilson_84@emailservice.com',
                    image: 'https://images.unsplash.com/photo-1516195851888-6f1a981a862e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=810&q=80',
                    dateArrived: "",
                    departureDate: "",
                    familyMembers: [
                    {
                    name: "Lucas Wilson",
                    phoneNumber: "555-555-5570",
                    email: "lucas.wilson@example.com",
                    },
                    {
                    name: "Olivia Wilson",
                    phoneNumber: "555-555-5571",
                    email: "olivia.wilson@example.com",
                    },
                    ],
                    medicines: [
                    {
                    name: "Tylenol",
                    dosage: "500mg",
                    hoursBetweenDoses: 6,
                    },
                    {
                    name: "Prednisone",
                    dosage: "5mg",
                    hoursBetweenDoses: 12,
                    },
                    ],
                    satisfaction: "low",
                    },
]

// get todays date
const today = new Date();
// Loop through each patient
patients.forEach(patient => {
  // Get a random number between 1-15
  const randomDays = Math.floor(Math.random() * 15) + 1;
  // Set newDate to the date
  const newDate = new Date(today);
  // subtract randomDays from today
  newDate.setDate(today.getDate() - randomDays);
  // Format date, and set to dateArrived prop
  patient.dateArrived = newDate.toISOString().substring(0, 10);
});

// Loop through each patient
patients.forEach(patient => {
  // Get a random number between 1-15
  const randomDays = Math.floor(Math.random() * 15) + 1;
  // Set newDate to todays date
  const newDate = new Date(today);
  // Add randomDays to today
  newDate.setDate(today.getDate() + randomDays);
  // Format date, and set to departureDate
  patient.departureDate = newDate.toISOString().substring(0, 10);
});



export default patients