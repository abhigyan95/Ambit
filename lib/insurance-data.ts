export type CompanyCategory =
  | "bajaj-finserv-health"
  | "hdfc-life"
  | "pnb-metlife"
  | "gpa"
  | "hdc-emi"

export interface InsuranceProductData {
  insurerId: string
  productName: string
  insurerName: string
  productType: "vas" | "travel" | "creditlife" | "health" | "general"
  companyCategory: CompanyCategory
  sumInsured: string
  availableSumInsured?: string[]
  productAmount: string
  annualPremium?: string
  chargeCode: string
  keyBenefits: string[]
  cover?: string
  productTenure?: string
  networkHospitals?: number
}

export const insuranceProducts: InsuranceProductData[] = [
  // 1. VAS – Bajaj Swasthyacare Supreme
  {
    insurerId: "bajaj-swasthyacare-supreme",
    productName: "Bajaj Swasthyacare Supreme",
    insurerName: "Bajaj Finserv Health",
    productType: "vas",
    companyCategory: "bajaj-finserv-health",
    chargeCode: "BJ00501",
    sumInsured: "₹15,00,000",
    availableSumInsured: ["₹15,00,000"],
    productAmount: "₹58,869",
    productTenure: "Student – 5 Yr",
    keyBenefits: [
      "Complimentary Credit Life insurance cover of ₹15,00,000 sum assured",
      "Wellness benefits worth – ₹59,000 Which Includes Below Benefits-",
      "Annual LAB Benefits",
      "Annual OPD benefits",
      "Free Annual Health Check up",
      "Tele & Distant Consultations",
      "10% Network Discounts",
    ],
  },
  // 2. Credit Life Insurance – HDFC Life Group Credit Policy
  {
    insurerId: "hdfc-life-group-credit",
    productName: "HDFC Life Group Credit Policy",
    insurerName: "HDFC Life",
    productType: "creditlife",
    companyCategory: "hdfc-life",
    chargeCode: "BJ00701",
    sumInsured: "₹15,00,000",
    availableSumInsured: ["₹15,00,000"],
    productAmount: "₹51,481",
    productTenure: "5 Yr",
    keyBenefits: ["Credit Life Insurance Cover ₹15,00,000 sum assured"],
  },
  // 3. Credit Life Insurance – PNB Metlife
  {
    insurerId: "pnb-metlife",
    productName: "PNB Metlife",
    insurerName: "PNB MetLife",
    productType: "creditlife",
    companyCategory: "pnb-metlife",
    chargeCode: "BJ00702",
    sumInsured: "₹15,00,000",
    availableSumInsured: ["₹15,00,000"],
    productAmount: "₹41,241",
    productTenure: "5 Yr",
    keyBenefits: ["Credit Life Insurance Cover ₹15,00,000 sum assured"],
  },
  // 4. General Insurance – GPA
  {
    insurerId: "gpa",
    productName: "GPA",
    insurerName: "GPA",
    productType: "general",
    companyCategory: "gpa",
    chargeCode: "BJ00901",
    sumInsured: "₹15,00,000",
    availableSumInsured: ["₹15,00,000"],
    productAmount: "₹10,779",
    productTenure: "5 Yr",
    keyBenefits: [
      "Accidental Death",
      "Permanent Disability",
      "Permanent Partial Disability",
    ],
  },
  // 5. General Insurance – HDC & EMI
  {
    insurerId: "hdc-emi",
    productName: "HDC & EMI",
    insurerName: "HDC & EMI",
    productType: "general",
    companyCategory: "hdc-emi",
    chargeCode: "BJ00902",
    sumInsured: "₹15,00,000",
    availableSumInsured: ["₹15,00,000"],
    productAmount: "₹14,429",
    productTenure: "5 Yr",
    keyBenefits: [
      "Critical Illness & Personal Accident",
      "EMI Protection",
    ],
  },
]
