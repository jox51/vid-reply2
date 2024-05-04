import React from "react";
import PricingList from "./PricingList";

const Pricing = () => {
    const pricingPlans = [
        {
            title: "Basic",
            price: "$9.99/month",
            features: ["10 projects", "5GB Storage", "Basic Support"],
        },
        {
            title: "Professional",
            price: "$29.99/month",
            features: [
                "Unlimited projects",
                "100GB Storage",
                "Priority Support",
            ],
        },
        {
            title: "Enterprise",
            price: "Custom Pricing",
            features: [
                "Unlimited projects",
                "Unlimited Storage",
                "24/7 Support",
            ],
        },
    ];

    return (
        <PricingList
            title="Choose Your Plan"
            description="Select the plan that best fits your needs."
            pricingItems={pricingPlans}
        />
    );
};

export default Pricing;
