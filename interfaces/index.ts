export interface ProductProps {
    id: string;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
    rating: {
        rate: number,
        count: number
    }
}

export interface FilterProps {
    label: string;
    value: string;
}

export interface FilterSelectProps {
    items: FilterProps[],
    onChange: any
}