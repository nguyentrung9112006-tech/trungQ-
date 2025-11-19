export default function Heading({ title = "Heading" }) {
    return (
        <div className="w-fit mx-auto my-6">
            <h2 className="text-2xl font-bold text-orange-500 border-l-4 border-orange-500 pl-3">
                {title}
            </h2>
        </div>
    )
}
