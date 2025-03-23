interface formatPriceProps {
    price: number
}

export function FormatPrice({ price }: formatPriceProps) {
    return (
        <>
            {
                new Intl.NumberFormat("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                }).format(price)
            }
        </>
    )
}