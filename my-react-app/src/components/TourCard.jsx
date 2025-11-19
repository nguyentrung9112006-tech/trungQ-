import Button from './Button'

export default function TourCard({ image, title }) {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
                src={image}
                alt={title}
                className="w-full h-52 object-cover"
            />

            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    {title}
                </h2>

                <div className="flex items-center justify-between">
                    <Button label="Đặt tour" />
                    <Button label="Liên hệ" />
                </div>
            </div>
        </div>
    )
}
