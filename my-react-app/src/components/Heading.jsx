export default function Heading({ title = "Heading" }) {
    return (
        <button className="text-center px-4 py-2 bg-orange-400 text-white rounded mx-auto block">
            {title}
        </button>
    );
}
