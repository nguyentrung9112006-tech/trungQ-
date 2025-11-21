import '/src/App.css';

export default function Banner() {
    return (
        <div className="w-full h-[350px] overflow-hidden">
            <img
                src="/src/assets/banner.jpg"
                alt="Banner"
                className="w-full h-full object-cover"
            />
        </div>
    );
}
