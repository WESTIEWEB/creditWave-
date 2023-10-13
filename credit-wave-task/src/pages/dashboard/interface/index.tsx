export interface DashItemsT {
    name?: string;
    icon?: string;
    link?: string;
    dropItem? : DropItemsT[];
}

export type DropItemsT = {
    name: string;
    link: string;
    icon?: string;
}

