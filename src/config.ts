import { NavbarItemType } from "./components/navigation/elements/types";

export default {
    api: {
        github: {
            endpoint: "https://api.github.com",
        },
    },
    settings: {
        navbar: {
            items: [
                [
                    {
                        label: "test",
                        href: "/",
                        type: NavbarItemType.LINK,
                    },
                ],
            ],
        },
    },
};
