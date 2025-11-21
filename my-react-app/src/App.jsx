import Footer from './components/Footer'
import Header from './components/Header'
import Heading from './components/Heading'
import TourCard from './components/TourCard'
import Banner from './components/Banner';

function App() {
  const tours = [
    {
      id: 1,
      title: 'Tour Du Lịch Cuba',
      image:
        'https://vtourist.com.vn/wp-content/uploads/2024/04/Tour-Bo-Dong-My-10N9D-destination-new-york-01-1-1200x800.jpg',
    },
    {
      id: 2,
      title: 'Tour Du Lịch Hoa Kỳ',
      image:
        'https://vtourist.com.vn/wp-content/uploads/2024/04/Tour-Bo-Dong-My-10N9D-destination-new-york-01-1-1200x800.jpg',
    },
    {
      id: 3,
      title: 'Tour Du Lịch Nhật Bản',
      image:
        'https://vtourist.com.vn/wp-content/uploads/2024/05/kinh-nghiem-du-lich-sydney-1200x800.jpg',
    },
    {
      id: 4,
      title: 'Tour Du Lịch Úc',
      image:
        'https://vtourist.com.vn/wp-content/uploads/2024/05/kinh-nghiem-du-lich-sydney-1200x800.jpg',
    },
  ]
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <Banner />
      <main className="container mx-auto px-4 py-6 flex-1">
        <h1 className="text-3xl text-blue-700 text-center font-extrabold border-b-4 border-orange-400 pb-2 uppercase">
          Tour Nội Địa
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed my-4 text-center max-w-3xl mx-auto">
          Các chuyến đi cùng chúng tôi là những khoảnh khắc đặc biệt, mang đến
          trải nghiệm độc đáo và khó quên cho du khách. Hãy chuẩn bị cho hành
          trình tuyệt vời của bạn.
        </p>

        <Heading title="Danh sách Tour" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
          {tours.map((tour) => (
            <TourCard key={tour.id} title={tour.title} image={tour.image} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
