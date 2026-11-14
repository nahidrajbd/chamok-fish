// src/data/dealers.ts
export interface Dealer {
    id: string;
    name: string;
    nameBn: string;
    location: string;
    upazila: string;
    district: string;
    phone: string;
    phoneDisplay: string;
}

export const dealers: Dealer[] = [
    {
        id: "dealer-1",
        name: "Rajshahi Main Dealer",
        nameBn: "রাজশাহী প্রধান ডিলার",
        location: "চিনি পট্টি বাজার, রাজশাহী",
        upazila: "বোয়ালিয়া",
        district: "রাজশাহী",
        phone: "01741973426",
        phoneDisplay: "০১৭৪১৯৭৩৪২৬",
    },
];
