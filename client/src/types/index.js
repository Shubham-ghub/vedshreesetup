
export const mockUserProfile = {
  id: "user123",
  name: "Arjun Kapoor",
  email: "arjun.kapoor@example.com",
  phone: "+91 98765 43210",
  address: "42, Green Avenue, Pune, Maharashtra - 411001",
  consultations: [
    {
      id: "con1",
      date: "2025-04-15",
      time: "10:30 AM",
      doctorName: "Dr. Rajesh Sharma",
      status: "scheduled",
    },
    {
      id: "con2",
      date: "2025-03-10",
      time: "2:00 PM",
      doctorName: "Dr. Anjali Desai",
      status: "completed",
      notes: "Prescribed Ashwagandha for stress relief and recommended lifestyle changes."
    },
    {
      id: "con3",
      date: "2025-02-05",
      time: "11:15 AM",
      doctorName: "Dr. Rajesh Sharma",
      status: "completed",
      notes: "Follow-up consultation. Progress noted with current regimen."
    }
  ],
  orders: [
    {
      id: "ord1",
      date: "2025-03-15",
      products: [
        {
          id: "p1",
          name: "Ashwagandha Capsules",
          quantity: 2,
          price: 599
        },
        {
          id: "p5",
          name: "Chyawanprash",
          quantity: 1,
          price: 550
        }
      ],
      totalAmount: 1748,
      status: "delivered",
      trackingId: "VD78451236"
    },
    {
      id: "ord2",
      date: "2025-04-02",
      products: [
        {
          id: "p3",
          name: "Brahmi Hair Oil",
          quantity: 1,
          price: 450
        },
        {
          id: "p6",
          name: "Neem Face Wash",
          quantity: 2,
          price: 275
        }
      ],
      totalAmount: 1000,
      status: "shipped",
      trackingId: "VD96325874"
    }
  ]
};