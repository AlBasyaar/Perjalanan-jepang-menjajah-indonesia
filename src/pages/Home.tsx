import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import TimelineItem from '../components/TimelineItem';
import InfoCard from '../components/InfoCard';
import ScrollTop from '../components/ScrollTop';
import { Scroll, Users, GanttChart, BookOpen } from 'lucide-react';

// Import images safely with fallbacks
const importImage = (path) => {
  try {
    // Use dynamic import to load the image
    return new URL(`../assets/${path}`, import.meta.url).href;
  } catch (error) {
    // Return a placeholder image URL if the image doesn't exist
    console.warn(`Image not found: ${path}`);
    return `https://via.placeholder.com/400x300?text=Image+Not+Found+(${path})`;
  }
};

// Try to import images, with fallbacks
const bg2Image = importImage('bg2.jpg');
const irSoekarnoImage = importImage('irsoekarno.jpg');
const khMasnyurImage = importImage('KH Manyur.jpg')
const kiHajarDewantaraImage = importImage('Ki-Hajar-Dewantara.jpg');
const mohHattaImage = importImage('Moh-hatta.jpg');

const Home = () => {
  return (
    <>
      <Hero
        title="Masa saat jepang menjajah indonesia"
        subtitle="Menelusuri sejarah periode 1942-1945 yang menjadi babak penting dalam perjalanan Indonesia menuju kemerdekaan"
        buttons={
          <>
            <Link to="/about" className="btn btn-primary">
              Pelajari Lebih Lanjut
            </Link>
            <a href="#ringkasan"  className="border border-blue-800 text-white hover:bg-blue-800 hover:text-white px-4 py-2 rounded transition duration-300">
               Ringkasan
            </a>
          </>
        }
      />

      {/* Ringkasan Pendudukan */}
      <section id="ringkasan" className="section bg-cream-light">
        <div className="container-custom">
          <SectionTitle
            title="Tujuan dan Kronologinya"
            subtitle="Periode pendudukan Jepang di Indonesia (1942-1945) merupakan masa yang penuh tantangan sekaligus menjadi katalisator pergerakan kemerdekaan Indonesia."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="fade-in">
              <p className="text-gray-700 mb-6">
                Masuknya Jepang ke Indonesia tidak lepas dari kepentingan ekonomi dan strategi militer mereka dalam Perang Dunia II. Jepang sangat membutuhkan sumber daya alam seperti minyak bumi, karet, dan timah yang dimiliki oleh Hindia Belanda (Indonesia). Selain itu, Jepang juga ingin memperluas pengaruhnya di Asia Tenggara dan menyingkirkan dominasi bangsa Barat, terutama Belanda, Inggris, dan Amerika Serikat. Melalui slogan "Asia untuk Asia", Jepang mengklaim diri sebagai pembebas bangsa-bangsa Asia dari penjajahan Barat.
                Ketegangan semakin meningkat setelah Jepang menyerang pangkalan militer Amerika Serikat di Pearl Harbor pada 7 Desember 1941. Serangan ini memicu perang besar di kawasan Asia-Pasifik dan membuat Belanda ikut terlibat sebagai bagian dari Sekutu. Jepang kemudian memulai invasinya ke wilayah Indonesia dengan mendaratkan pasukan di Tarakan, Kalimantan Timur, pada 11 Januari 1942. Dalam waktu singkat, mereka berhasil menguasai wilayah-wilayah penting lainnya di Kalimantan seperti Balikpapan, Pontianak, Samarinda, dan Banjarmasin.              </p>
              <p className="text-gray-700 mb-6">
                Setelah berhasil di Kalimantan, pasukan Jepang melanjutkan serangan ke Sumatera dan menduduki Palembang pada 16 Februari 1942. Kemudian mereka menyerbu Pulau Jawa, pusat pemerintahan Hindia Belanda, melalui Teluk Banten dan Kragan. Batavia (Jakarta) berhasil direbut pada 5 Maret, disusul oleh Bandung pada 7 Maret 1942. Keberhasilan Jepang dalam menaklukkan wilayah-wilayah strategis ini membuat Belanda semakin terdesak dan kehilangan kekuatan militernya.
              </p>
              <p className="text-gray-700">
                Akhirnya, pada 8 Maret 1942, diadakan perundingan di Kalijati, Subang, Jawa Barat. Dalam perundingan tersebut, pihak Belanda yang diwakili oleh Gubernur Jenderal Tjarda van Starkenborgh Stachouwer dan Letnan Jenderal Heindrik Ter Poorten menyerah tanpa syarat kepada Jepang yang diwakili Jenderal Hitoshi Imamura. Sejak saat itu, Indonesia berada di bawah kekuasaan militer Jepang hingga mereka kalah dalam Perang Dunia II pada tahun 1945. Kekalahan Jepang membuka jalan bagi bangsa Indonesia untuk memproklamasikan kemerdekaannya pada 17 Agustus 1945.
              </p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg fade-in">
              <img
                src={bg2Image}
                alt="Ilustrasi Pendudukan Jepang"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Garis Waktu Pendudukan"
            subtitle="Perjalanan kronologis selama periode pendudukan Jepang di Indonesia"
            center
          />

          <div className="relative md:w-4/5 mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300"></div>

            <div className="relative">
              <TimelineItem
                year="1942"
                title="Awal Pendudukan"
                description="Jepang menduduki Indonesia pada bulan Maret 1942 setelah Belanda menyerah tanpa syarat. Awalnya, Jepang disambut sebagai pembebas dari kolonialisme Belanda."
                side="left"
              />

              <TimelineItem
                year="1943"
                title="Organisasi PUTERA"
                description="Jepang membentuk Pusat Tenaga Rakyat (PUTERA) yang dipimpin oleh tokoh-tokoh nasionalis seperti Soekarno, Hatta, Ki Hajar Dewantara, dan K.H. Mas Mansyur."
                side="right"
              />

              <TimelineItem
                year="1943"
                title="Pembentukan PETA"
                description="Pembela Tanah Air (PETA) dibentuk untuk melatih pemuda Indonesia dalam kemiliteran. Ini menjadi cikal bakal kekuatan bersenjata nasional Indonesia."
                side="left"
              />

              <TimelineItem
                year="1944"
                title="Jawa Hokokai"
                description="PUTERA digantikan dengan Jawa Hokokai (Perhimpunan Kebaktian Jawa) yang lebih berorientasi pada mobilisasi massa untuk mendukung perang."
                side="right"
              />

              <TimelineItem
                year="1945"
                title="Akhir Pendudukan"
                description="Setelah bom atom dijatuhkan di Hiroshima dan Nagasaki, Jepang menyerah kepada Sekutu pada 15 Agustus 1945, membuka jalan bagi kemerdekaan Indonesia."
                side="left"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section bg-navy text-white">
        <div className="container-custom">
          <SectionTitle
            title="Aspek-Aspek Penting"
            subtitle="Berbagai aspek penting yang menandai periode pendudukan Jepang di Indonesia"
            center
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-navy-light p-6 rounded-lg text-center transition-transform hover:-translate-y-2 duration-300 fade-in">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-red/20 text-red">
                <Scroll size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Propaganda</h3>
              <p className="text-cream-light/80">
                Jepang menggunakan propaganda dan sensor ketat untuk mengendalikan masyarakat dan mengarahkan dukungan untuk kepentingan perang.
              </p>
            </div>

            <div className="bg-navy-light p-6 rounded-lg text-center transition-transform hover:-translate-y-2 duration-300 fade-in">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-red/20 text-red">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Romusha</h3>
              <p className="text-cream-light/80">
                Sistem kerja paksa yang mengorbankan ratusan ribu rakyat Indonesia untuk membangun infrastruktur militer Jepang.
              </p>
            </div>

            <div className="bg-navy-light p-6 rounded-lg text-center transition-transform hover:-translate-y-2 duration-300 fade-in">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-red/20 text-red">
                <GanttChart size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Organisasi</h3>
              <p className="text-cream-light/80">
                Pembentukan berbagai organisasi seperti PUTERA, PETA, dan Jawa Hokokai yang mendukung mobilisasi massa.
              </p>
            </div>

            <div className="bg-navy-light p-6 rounded-lg text-center transition-transform hover:-translate-y-2 duration-300 fade-in">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-red/20 text-red">
                <BookOpen size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Pendidikan</h3>
              <p className="text-cream-light/80">
                Perubahan sistem pendidikan dengan penekanan pada bahasa Jepang dan indoktrinasi untuk mendukung Kekaisaran Jepang.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tokoh Penting */}
      <section className="section bg-cream-light">
        <div className="container-custom">
          <SectionTitle
            title="Tokoh-Tokoh Penting"
            subtitle="Para tokoh yang berperan penting selama periode pendudukan Jepang"
            center
          />

          <div className="flex flex-wrap md:flex-nowrap gap-4 overflow-x-auto md:overflow-x-visible px-2 md:px-0 snap-x">
            <InfoCard
              title="Ir. Soekarno"
              description="Tokoh nasionalis yang menjadi pemimpin PUTERA dan Jawa Hokokai. Berperan sebagai penghubung antara Jepang dan rakyat Indonesia, namun diam-diam mempersiapkan kemerdekaan."
              imageSrc={irSoekarnoImage}
              className="min-w-[250px] snap-start"
            />

            <InfoCard
              title="Mohammad Hatta"
              description="Tokoh nasionalis yang mendampingi Soekarno di PUTERA. Ia memanfaatkan posisinya untuk membangkitkan semangat kemerdekaan di tengah pengaruh Jepang."
              imageSrc={mohHattaImage}
              className="min-w-[250px] snap-start"
            />

            <InfoCard
              title="Ki Hajar Dewantara"
              description="Tokoh pendidikan yang tergabung dalam PUTERA. Ia tetap memperjuangkan pendidikan nasional dan menyebarkan semangat kebangsaan melalui dunia pendidikan."
              imageSrc={kiHajarDewantaraImage}
              className="min-w-[250px] snap-start"
            />

            <InfoCard
              title="KH Mas Mansyur"
              description="Tokoh ulama dan pemimpin Muhammadiyah. Anggota PUTERA yang menyuarakan kepentingan umat Islam dan menanamkan nasionalisme lewat dakwah."
              imageSrc={khMasnyurImage}
              alt="KH Mas Mansyur"
              className="min-w-[250px] snap-start"
            />
          </div>


          <div className="text-center mt-10">
            <Link to="/about" className="btn btn-primary">
              Pelajari Lebih Lanjut
            </Link>
          </div>
        </div>
      </section>
      <ScrollTop />
    </>
  );
};

export default Home;