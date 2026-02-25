export function getLoanTypeLabel(loanType?: string): string {
  switch (loanType) {
    case "secured":
      return "Secured Loan"
    case "unsecured":
      return "Unsecured Loan"
    case "vehicle-finance":
      return "Vehicle Finance"
    default:
      return loanType || "N/A"
  }
}

export function getVehicleTypeLabel(vehicleType?: string): string {
  switch (vehicleType) {
    case "new-car":
      return "New Car"
    case "used-car":
      return "Used Car"
    case "two-wheeler":
      return "Two-Wheeler"
    case "commercial":
      return "Commercial Vehicle"
    default:
      return vehicleType || "N/A"
  }
}
