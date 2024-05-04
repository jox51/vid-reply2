import { LandingSocialProofBand } from "@/Components/landing/social-proof/LandingSocialProofBand";
import { LandingSocialProofBandItem } from "@/Components/landing/social-proof/LandingSocialProofBandItem";

export default function Band() {
    return (
        <LandingSocialProofBand invert={false} className="hidden md:flex">
            <LandingSocialProofBandItem>
                Used by industry leaders
            </LandingSocialProofBandItem>

            <LandingSocialProofBandItem>
                24/7 customer support
            </LandingSocialProofBandItem>

            <LandingSocialProofBandItem graphic="rating">
                99% customer satisfaction
            </LandingSocialProofBandItem>
        </LandingSocialProofBand>
    );
}
