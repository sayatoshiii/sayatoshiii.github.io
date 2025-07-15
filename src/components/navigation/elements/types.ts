export interface NavbarItemEntry {
    label?: string;
    href?: string;
    src?: string;
    type: NavbarItemType;
}

export enum NavbarItemType {
    TEXT,
    LINK,
    IMAGE,
}
