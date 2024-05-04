import { clsx } from "clsx";
import PricingItem from "@/Components/landing/pricing/PricingItem";
import { GlowBg } from "@/Components/shared/ui/glow-bg";

const PricingList = ({
    className,
    title,
    description,
    pricingItems,
    withBackground = false,
    withBackgroundGlow = true,
    variant = "primary",
    backgroundGlowVariant = "primary",
}) => {
    return (
        <section
            className={clsx(
                "relative w-full flex justify-center items-center gap-8 py-12 lg:py-16 flex-col bg-slate-100 shadow-md dark:bg-gray-800 dark:text-slate-200",
                withBackground && variant === "primary"
                    ? "bg-primary-100/20 dark:bg-primary-900/10"
                    : "",
                withBackground && variant === "secondary"
                    ? "bg-secondary-100/20 dark:bg-secondary-900/10"
                    : "",
                withBackgroundGlow ? "overflow-hidden" : "",
                className
            )}
        >
            {withBackgroundGlow ? (
                <GlowBg
                    className="w-full lg:w-2/3 h-auto z-0"
                    variant={backgroundGlowVariant}
                />
            ) : null}

            <div className="container-wide p-6 max-w-full relative z-10">
                <h2 className="text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl fancyHeading">
                    {title}
                </h2>
                <p className="mt-6 md:text-xl">{description}</p>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 dark:text-slate-600">
                    {pricingItems.map((item, index) => (
                        <PricingItem
                            key={index}
                            title={item.title}
                            features={item.features}
                            price={item.price}
                            variant={variant}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingList;
