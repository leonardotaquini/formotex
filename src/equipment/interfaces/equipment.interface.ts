export interface Equipment {
  id: number;
  name: string;
  brand: string;
  model: string;
  acquisition: Date;
  location: string;
  organization: string;
  status: EquipmentStatus;
  createdAt: Date;
  updatedAt: Date;
}

export interface EquipmentRequest {
    name: string;
    brand: string;
    model: string;
    location: string;
    status: EquipmentStatus;
    acquisition: Date;
    organization: string;
    }


    enum EquipmentStatus {
      Available = "Available",
      Assigned = "Assigned",
      InRepair = "InRepair",
      UnderReview = "UnderReview",
      OnLoan = "OnLoan",
      Obsolete = "Obsolete",
      Decommissioning = "Decommissioning",
      Decommissioned = "Decommissioned",
      PendingAssignment = "PendingAssignment",
      Reserved = "Reserved"
    }
    


