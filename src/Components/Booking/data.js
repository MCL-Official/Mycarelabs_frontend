export const CrelioData = {
    countryCode: "", // Patient's country code
    mobile: "", // Patient's Contact Number (Optional)
    email: "", // Patient's Email ID (Optional)
    designation: "MR.", // Patient's Designation (Optional)
    fullName: "Sample Testing for", // Patient's Full Name (Required)
    age: "49 Years", // Patient's Age with suffix if DOB is not captured
    gender: "Male",
    area: "",
    city: "",
    patientType: "", // Type of Patient (Optional)
    labPatientId: "", // Your system's Unique ID for the Patient (if applicable)
    pincode: "",
    dob: "1973-07-29",
    passportNo: "",
    panNumber: "",
    aadharNumber: "",
    insuranceNo: "",
    nationality: "",
    ethnicity: "",
    nationalIdentityNumber: "", // National ID number
    isAppointmentRequest: 1,
    startDate: "2020-05-04T08:30:00Z",
    endDate: "2020-05-04T09:30:00Z",
    workerCode: "",
    doctorCode: "",
    billDetails: {
      emergencyFlag: "0",
      visitLevelTags: "",
      billTotalAmount: "",
      advance: "0",
      billDate: "", // Specify if you want to create the order at a specific time; else, it will use the current time
      paymentType: "CREDIT", // It can be "Cash" for walk-in patients; for B2B business, use "CREDIT"
      referralName: "", // Name of referring doctor; keep it as "Self" if not applicable
      otherReferral: "",
      orderNumber: "", // Your system's Unique ID for the Order (if applicable)
      referralIdLH: "",
      organisationName: "",
      billConcession: "0",
      additionalAmount: "0",
      organizationIdLH: "211995", // To be provided by the Lab or can be checked using the organization list API
      comments: "", // Any additional comments to be sent with the order
      testList: [
        {
          testID: "3956081", // Unique ID of Crelio Tests
          testCode: "", // Test code of the LIS
          sampleId: "", // Barcode number if using preprinted barcode
        },
      ],
      paymentList: [
        {
          paymentType: "CREDIT", // It can be "Cash" for walk-in patients; for B2B business, use "CREDIT"
          paymentAmount: "",
          chequeNo: "",
          issueBank: "",
        },
      ],
    },
  };