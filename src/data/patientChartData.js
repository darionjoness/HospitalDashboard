const patientChartData = [
    { date: "", totalPatients: 6 },
    { date: "", totalPatients: 7 },
    { date: "", totalPatients: 5 },
    { date: "", totalPatients: 9 },
    { date: "", totalPatients: 8 },
    { date: "", totalPatients: 7 },
    { date: "", totalPatients: 10 },
    { date: "", totalPatients: 9 },
    { date: "", totalPatients: 11 },
    { date: "", totalPatients: 10 },
    { date: "", totalPatients: 8 },
    { date: "", totalPatients: 7 },
    { date: "", totalPatients: 6 },
    { date: "", totalPatients: 8 },
    { date: "", totalPatients: 9 },
    { date: "", totalPatients: 11 },
    { date: "", totalPatients: 10 },
    { date: "", totalPatients: 8 },
    { date: "", totalPatients: 7 },
    { date: "", totalPatients: 6 },
    { date: "", totalPatients: 8 },
    { date: "", totalPatients: 9 },
    { date: "", totalPatients: 11 },
    { date: "", totalPatients: 10 },
    { date: "", totalPatients: 8 },
    { date: "", totalPatients: 7 },
    { date: "", totalPatients: 6 },
    { date: "", totalPatients: 8 },
    { date: "", totalPatients: 9 },
    { date: "", totalPatients: 12 }
  ];

  // Create setDate function
  const setDates = () => {
    // Get todays date
    const today = new Date();
    // Set todays date to new const
    const thirtyDaysAgo = new Date(today);
    // set date to 30 days ago
    thirtyDaysAgo.setDate(today.getDate() - 30);
    // Loop through patientChartData
    for (let i = 0; i < patientChartData.length; i++) {
      // Format date
      patientChartData[i].date = thirtyDaysAgo.toISOString().substring(0, 10);
      // Set date + 1 to get last 30 days
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() + 1);
    }
  }
 
  setDates();
  

export default patientChartData