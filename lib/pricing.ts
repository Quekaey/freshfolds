export const DEMO_PRICING = {
  washFold: { id: "washFold", label: "Wash & Fold", itemLabel: "Sample laundry unit", price: 2500 },
  shirt: { id: "shirt", label: "Shirt Dry Cleaning", itemLabel: "Shirt", price: 1800 },
  trouser: { id: "trouser", label: "Trouser Dry Cleaning", itemLabel: "Trouser", price: 2000 },
  ironing: { id: "ironing", label: "Ironing", itemLabel: "Item", price: 800 },
  bedding: { id: "bedding", label: "Bedding", itemLabel: "Bedding item", price: 3500 }
} as const;
export type PriceId = keyof typeof DEMO_PRICING;
export const formatNaira = (value: number) => new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 }).format(value);
export const SERVICE_OPTIONS = ["Wash & Fold", "Dry Cleaning", "Ironing", "Bedding"] as const;
