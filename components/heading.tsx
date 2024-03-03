type HeadingProps = {
    children: React.ReactNode;
}

export default function Heading({ children }: HeadingProps) {
    return (
        <h2 className="text-3xl font-medium text-center capitalize mb-8">{children}</h2>
    )
}
