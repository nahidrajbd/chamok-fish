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
    {
        id: "dealer-2",
        name: "Puthia Agro Dealer",
        nameBn: "পুঠিয়া এগ্রো ডিলার",
        location: "পুঠিয়া বাজার, রাজশাহী",
        upazila: "পুঠিয়া",
        district: "রাজশাহী",
        phone: "01700000001",
        phoneDisplay: "০১৭০০০০০০০১",
    },
    {
        id: "dealer-3",
        name: "Bagmara Feed Supplier",
        nameBn: "বাগমারা ফিড সরবরাহকারী",
        location: "বাগমারা বাজার, রাজশাহী",
        upazila: "বাগমারা",
        district: "রাজশাহী",
        phone: "01700000002",
        phoneDisplay: "০১৭০০০০০০০২",
    },
    {
        id: "dealer-4",
        name: "Charghat Fisheries Dealer",
        nameBn: "চারঘাট মৎস্য ডিলার",
        location: "চারঘাট বাজার, রাজশাহী",
        upazila: "চারঘাট",
        district: "রাজশাহী",
        phone: "01700000003",
        phoneDisplay: "০১৭০০০০০০০৩",
    },
    {
        id: "dealer-5",
        name: "Tanore Agro Feeds",
        nameBn: "তানোর এগ্রো ফিডস",
        location: "তানোর বাজার, রাজশাহী",
        upazila: "তানোর",
        district: "রাজশাহী",
        phone: "01700000004",
        phoneDisplay: "০১৭০০০০০০০৪",
    },
    {
        id: "dealer-6",
        name: "Godagari Fish Feed Center",
        nameBn: "গোদাগাড়ি ফিশ ফিড সেন্টার",
        location: "গোদাগাড়ি বাজার, রাজশাহী",
        upazila: "গোদাগাড়ি",
        district: "রাজশাহী",
        phone: "01700000005",
        phoneDisplay: "০১৭০০০০০০০৫",
    },
];
