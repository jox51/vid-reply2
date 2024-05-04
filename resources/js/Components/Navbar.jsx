import { Fragment, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import {
    Bars3Icon,
    XMarkIcon,
    MoonIcon,
    SunIcon,
} from "@heroicons/react/24/outline";
import { Link, usePage } from "@inertiajs/react";
import Logo from "@/images/logo.png";

import { useThemeStore } from "@/store/themeStore";

const navigation = [
    { name: "Reply", href: "/reply", current: false },
    { name: "Features", href: "#", current: false },
    { name: "About Us", href: "#", current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
    const { auth } = usePage().props;

    const { darkMode, toggleDarkMode } = useThemeStore();
    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);
        localStorage.setItem("darkMode", darkMode ? "true" : "false");
    }, [darkMode]);

    return (
        <Disclosure as="nav" className="w-full dark:bg-gray-900">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center justify-between">
                            <div className="flex-shrink-0">
                                <Link href="/">
                                    <img
                                        className="h-8 w-auto"
                                        src={Logo}
                                        alt="Your Company Logo"
                                    />
                                </Link>
                            </div>
                            <div className="sm:hidden">
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:text-gray-200 dark:hover:bg-gray-700">
                                    {open ? (
                                        <XMarkIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <Bars3Icon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="hidden sm:flex sm:items-center sm:justify-center flex-1">
                                <div className="flex space-x-4">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current
                                                    ? "bg-gray-900 text-white dark:bg-gray-700 dark:text-gray-200"
                                                    : "text-gray-900 hover:bg-gray-700 hover:text-white dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white",
                                                "px-3 py-2 rounded-md text-sm font-medium"
                                            )}
                                            aria-current={
                                                item.current
                                                    ? "page"
                                                    : undefined
                                            }
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <button
                                onClick={toggleDarkMode}
                                className="p-2 rounded-md focus:outline-none focus:ring focus:ring-gray-300 dark:focus:ring-gray-700"
                            >
                                {darkMode ? (
                                    <SunIcon className="h-6 w-6 text-gray-800 dark:text-gray-200" />
                                ) : (
                                    <MoonIcon className="h-6 w-6 text-gray-400 dark:text-gray-800" />
                                )}
                            </button>
                        </div>
                    </div>
                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as={Link}
                                    href={item.href}
                                    className={classNames(
                                        item.current
                                            ? "bg-gray-900 text-white"
                                            : "text-gray-400 hover:bg-gray-800 hover:text-white",
                                        "block px-3 py-2 rounded-md text-base font-medium"
                                    )}
                                    aria-current={
                                        item.current ? "page" : undefined
                                    }
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
