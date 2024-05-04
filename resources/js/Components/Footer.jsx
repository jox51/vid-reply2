import Logo from "@/images/logo.png";

const navigation = {
    support: [
        { name: "Pricing", href: "#pricing" },
        { name: "Documentation", href: "#docs" },
    ],
    company: [
        { name: "About", href: "#" },
        { name: "Blog", href: "#" },
    ],
    legal: [
        { name: "Claim", href: "#" },
        { name: "Privacy", href: "#" },
        { name: "Terms", href: "#" },
        { name: "Contact", href: "#" },
    ],
};

export default function Footer() {
    return (
        <footer
            className="bg-slate-100 dark:bg-gray-800  w-full"
            aria-labelledby="footer-heading"
        >
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div>
                        <img
                            className="h-7"
                            src={Logo}
                            alt="Your Company Logo"
                        />
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8 ">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-900 dark:text-slate-300">
                                    Support
                                </h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.support.map((item) => (
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                className="text-sm text-gray-800 dark:text-slate-300 hover:text-gray-900 dark:hover:text-slate-400"
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold  text-gray-900 dark:text-slate-300">
                                    Company
                                </h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.company.map((item) => (
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                className="text-sm text-gray-800 hover:text-gray-900 dark:text-slate-300 dark:hover:text-slate-400"
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 dark:text-slate-300">
                                Legal
                            </h3>
                            <ul role="list" className="mt-6 space-y-4">
                                {navigation.legal.map((item) => (
                                    <li key={item.name}>
                                        <a
                                            href={item.href}
                                            className="text-sm text-gray-800 hover:text-gray-900 dark:text-slate-300 dark:hover:text-slate-400"
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
