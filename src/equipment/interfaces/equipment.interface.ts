export interface Equipment {
  id: number;
  name: string;
  brand: string;
  model: string;
  acquisition: Date;
  location: string;
  price: number;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface EquipmentRequest {
    name: string;
    brand: string;
    model: string;
    location: string;
    acquisition: Date;
    price: number;
    stock: number;
    }



