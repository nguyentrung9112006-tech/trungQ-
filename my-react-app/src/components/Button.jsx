export default function Button({ label = "Button" }) {
    return (
        <button className="px-4 py-2 bg-orange-400 text-white rounded">
            {label}
        </button>
    );
}
