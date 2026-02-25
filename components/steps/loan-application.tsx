"use client"

import { useState } from "react"
import { useJourney } from "@/lib/journey-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Building2Icon, UserIcon, MapPinIcon, IndianRupeeIcon } from "lucide-react"

export function LoanApplicationStep() {
  const { state, updateLoanApplication, generateLosId, setCurrentStep } = useJourney()
  const [formData, setFormData] = useState(() => ({ ...state.loanApplication }))

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = () => {
    updateLoanApplication(formData)
    generateLosId()
    setCurrentStep(2) // Go to confirmation page
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="shadow-lg border-2">
        <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent border-b">
          <CardTitle className="text-2xl text-balance">Vehicle Finance Application</CardTitle>
          <CardDescription className="text-base mt-2">Please provide your details to proceed with your vehicle loan application</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Applicant Details Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-foreground">
              <UserIcon className="size-5" />
              <h3 className="font-semibold text-lg">Applicant Details</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="applicantName">Applicant Name *</Label>
                <Input
                  id="applicantName"
                  placeholder="Enter applicant full name"
                  value={formData.fullName || ""}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="parentName">Co-Applicant Name</Label>
                <Input
                  id="parentName"
                  placeholder="Enter co-applicant name (if any)"
                  value={formData.parentName || ""}
                  onChange={(e) => handleChange("parentName", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mobile">Mobile Number *</Label>
                <Input
                  id="mobile"
                  type="tel"
                  placeholder="Enter 10-digit mobile"
                  value={formData.mobile || ""}
                  onChange={(e) => handleChange("mobile", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter email address"
                  value={formData.email || ""}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth || ""}
                  onChange={(e) => handleChange("dateOfBirth", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pan">PAN *</Label>
                <Input
                  id="pan"
                  placeholder="ABCDE1234F"
                  value={formData.pan || ""}
                  onChange={(e) => handleChange("pan", e.target.value.toUpperCase())}
                  maxLength={10}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="aadhaar">Aadhaar Number *</Label>
                <Input
                  id="aadhaar"
                  placeholder="1234 5678 9012"
                  value={formData.aadhaar || ""}
                  onChange={(e) => handleChange("aadhaar", e.target.value)}
                  maxLength={12}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">Gender *</Label>
                <Select value={formData.gender || ""} onValueChange={(value) => handleChange("gender", value)}>
                  <SelectTrigger id="gender">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="annualIncome">Annual Income (₹) *</Label>
                <Input
                  id="annualIncome"
                  type="text"
                  placeholder="Enter annual income"
                  value={formData.annualIncome || ""}
                  onChange={(e) => handleChange("annualIncome", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="occupation">Occupation *</Label>
                <Input
                  id="occupation"
                  placeholder="Enter occupation"
                  value={formData.occupation || ""}
                  onChange={(e) => handleChange("occupation", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Address Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-foreground">
              <MapPinIcon className="size-5" />
              <h3 className="font-semibold text-lg">Address</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="currentAddress">Current Address *</Label>
                <Input
                  id="currentAddress"
                  placeholder="Enter complete address"
                  value={formData.currentAddress || ""}
                  onChange={(e) => handleChange("currentAddress", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  placeholder="Enter city"
                  value={formData.city || ""}
                  onChange={(e) => handleChange("city", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State *</Label>
                <Input
                  id="state"
                  placeholder="Enter state"
                  value={formData.state || ""}
                  onChange={(e) => handleChange("state", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pincode">Pincode *</Label>
                <Input
                  id="pincode"
                  placeholder="Enter 6-digit pincode"
                  value={formData.pincode || ""}
                  onChange={(e) => handleChange("pincode", e.target.value)}
                  maxLength={6}
                  required
                />
              </div>
            </div>
          </div>

          {/* Loan Details Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-foreground">
              <Building2Icon className="size-5" />
              <h3 className="font-semibold text-lg">Vehicle & Loan Details</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="vehicleType">Vehicle Type *</Label>
                <Select
                  value={formData.vehicleType || ""}
                  onValueChange={(value) => handleChange("vehicleType", value)}
                >
                  <SelectTrigger id="vehicleType">
                    <SelectValue placeholder="Select vehicle type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new-car">New Car</SelectItem>
                    <SelectItem value="used-car">Used Car</SelectItem>
                    <SelectItem value="two-wheeler">Two-Wheeler</SelectItem>
                    <SelectItem value="commercial">Commercial Vehicle</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="downPayment">Down Payment (%) *</Label>
                <Select
                  value={formData.downPayment || ""}
                  onValueChange={(value) => handleChange("downPayment", value)}
                >
                  <SelectTrigger id="downPayment">
                    <SelectValue placeholder="Select down payment" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10%</SelectItem>
                    <SelectItem value="15">15%</SelectItem>
                    <SelectItem value="20">20%</SelectItem>
                    <SelectItem value="25">25%</SelectItem>
                    <SelectItem value="30">30%</SelectItem>
                    <SelectItem value="40">40%</SelectItem>
                    <SelectItem value="50">50%</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="loanTenure">Loan Tenure (Years) *</Label>
                <Input
                  id="loanTenure"
                  type="number"
                  placeholder="e.g. 5"
                  min={1}
                  max={7}
                  value={formData.loanTenure || ""}
                  onChange={(e) => handleChange("loanTenure", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="loanAmount">
                  <span className="flex items-center gap-1">
                    <IndianRupeeIcon className="size-4" />
                    Loan Amount *
                  </span>
                </Label>
                <Input
                  id="loanAmount"
                  type="number"
                  placeholder="Enter loan amount"
                  value={formData.loanAmount || ""}
                  onChange={(e) => handleChange("loanAmount", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center pt-6">
            <Button onClick={() => handleSubmit()} size="lg" className="min-w-[200px] h-12 text-base font-semibold shadow-lg hover:shadow-xl transition-all">
              Submit Application
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
