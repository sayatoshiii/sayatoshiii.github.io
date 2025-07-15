export interface NavbarItemEntry {
    label?: string;
    href?: string;
    type: NavbarItemType;
}

export enum NavbarItemType {
    TEXT,
    LINK,
    IMAGE,
}
