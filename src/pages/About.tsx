import React from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import InfoCard from '../components/InfoCard';
import ScrollTop from '../components/ScrollTop';
import WordwallQR from "../assets/WordwallKel_6.png";
import { BookHeart, LandPlot, BarChart4, Scale } from 'lucide-react';

const About = () => {
  return (
    <>
      <Hero
        title="Jejak Pendudukan Jepang di indonesia"
        subtitle="Perubahan besar dalam waktu singkat, dari kolonialisme ke kemerdekaan."
        height="medium"
        image="https://raw.githubusercontent.com/miftahfarhan13/foto-sejarah-indonesia/main/latihan-militer-jepang.jpg"
      />

      {/* Sejarah Pendudukan */}
      <section className="section bg-cream-light">
        <div className="container-custom">
          <SectionTitle
            title="Sejarah Pendudukan"
            subtitle="Kronologi dan latar belakang pendudukan Jepang di Indonesia"
          />

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12 fade-in">
            <h3 className="text-2xl font-bold mb-4 text-navy">Latar Belakang Kedatangan Jepang</h3>
            <p className="mb-4 text-gray-700">
              Pendudukan Jepang di Indonesia dimulai pada tahun 1942 setelah kemenangan mereka atas Belanda dalam Perang Pasifik. Jepang memiliki kepentingan strategis terhadap Indonesia karena kekayaan sumber daya alamnya, terutama minyak dan karet, yang sangat dibutuhkan untuk mendukung mesin perang mereka.
            </p>
            <p className="text-gray-700">
              Serangan Jepang ke Pearl Harbor pada 7 Desember 1941 menandai dimulainya perang di kawasan Pasifik. Setelah itu, Jepang dengan cepat menguasai berbagai wilayah di Asia Tenggara, termasuk Indonesia yang saat itu masih merupakan koloni Belanda dengan nama Hindia Belanda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8 fade-in">
              <h3 className="text-2xl font-bold mb-4 text-navy">Penyerahan Hindia Belanda</h3>
              <p className="mb-4 text-gray-700">
                Pada tanggal 8 Maret 1942, Letnan Jenderal Ter Poorten, panglima tertinggi pasukan Belanda, menandatangani penyerahan tanpa syarat kepada Jepang di Kalijati, Subang. Peristiwa ini menandai berakhirnya kekuasaan kolonial Belanda yang telah berlangsung selama lebih dari 300 tahun.
              </p>
              <p className="text-gray-700">
                Penyerahan ini terjadi setelah Jepang berhasil mendarat di berbagai titik di Pulau Jawa dan menguasai infrastruktur vital. Belanda yang sudah melemah akibat pendudukan Nazi di Eropa tidak mampu memberikan perlawanan yang signifikan.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 fade-in">
              <h3 className="text-2xl font-bold mb-4 text-navy">Masa Awal Pendudukan</h3>
              <p className="mb-4 text-gray-700">
                Pada awalnya, kedatangan Jepang disambut positif oleh rakyat Indonesia. Jepang memperkenalkan diri sebagai "saudara tua" yang akan membebaskan Asia dari penjajahan Barat. Slogan "Asia untuk Asia" dan "Lingkaran Kemakmuran Bersama Asia Timur Raya" menjadi propaganda utama.
              </p>
              <p className="text-gray-700">
                Jepang juga mengizinkan pengibaran bendera merah putih dan menyanyikan lagu Indonesia Raya, yang dilarang pada masa Belanda. Hal ini semakin memperkuat dukungan rakyat Indonesia pada awal pendudukan.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 fade-in">
              <h3 className="text-2xl font-bold mb-4 text-navy">Pemerintahan Militer Jepang</h3>
              <p className="mb-4 text-gray-700">
                Jepang membagi Indonesia menjadi tiga wilayah administratif: Jawa-Madura di bawah Tentara Keenambelas, Sumatera di bawah Tentara Keduapuluhlima yang bermarkas di Singapura, dan Indonesia Timur di bawah kendali Angkatan Laut Jepang.
              </p>
              <p className="text-gray-700">
                Pemerintahan militer Jepang dikenal sangat keras dan disiplin. Mereka menerapkan kontrol ketat terhadap kehidupan masyarakat, termasuk dalam hal politik, ekonomi, sosial, dan budaya. Sistem pengawasan sampai ke tingkat desa melalui Tonarigumi (rukun tetangga).
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 fade-in">
              <h3 className="text-2xl font-bold mb-4 text-navy">Akhir Pendudukan</h3>
              <p className="mb-4 text-gray-700">
                Menjelang tahun 1945, posisi Jepang dalam Perang Dunia II semakin terdesak. Sekutu terus memenangkan pertempuran demi pertempuran di Pasifik. Pada saat yang sama, gerakan nasionalisme Indonesia semakin menguat.
              </p>
              <p className="mb-4 text-gray-700">
                Setelah bom atom dijatuhkan di Hiroshima dan Nagasaki pada 6 dan 9 Agustus 1945, Jepang menyerah tanpa syarat kepada Sekutu pada 15 Agustus 1945. Kekosongan kekuasaan ini dimanfaatkan oleh para pemimpin Indonesia untuk memproklamasikan kemerdekaan pada 17 Agustus 1945.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kehidupan Rakyat */}
      <section className="section bg-navy text-white">
        <div className="container-custom">
          <SectionTitle
            title="Kehidupan Rakyat Masa Pendudukan"
            subtitle="Kondisi sosial dan ekonomi rakyat Indonesia di bawah pendudukan Jepang"
            light
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-navy-light rounded-lg p-6 text-center transition-all hover:bg-red/20 duration-300 fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red/30 mb-4">
                <LandPlot size={32} className="text-cream" />
              </div>
              <h3 className="text-xl font-bold mb-3">Romusha</h3>
              <p className="text-cream-light/80">
                Sistem kerja paksa yang diberlakukan Jepang menyebabkan ratusan ribu rakyat Indonesia menjadi pekerja paksa (romusha). Mereka dipaksa membangun infrastruktur militer seperti benteng, jalan, dan rel kereta api dalam kondisi yang sangat buruk.
              </p>
            </div>

            <div className="bg-navy-light rounded-lg p-6 text-center transition-all hover:bg-red/20 duration-300 fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red/30 mb-4">
                <BarChart4 size={32} className="text-cream" />
              </div>
              <h3 className="text-xl font-bold mb-3">Ekonomi & Pangan</h3>
              <p className="text-cream-light/80">
                Jepang menerapkan sistem ekonomi perang yang menyebabkan kelangkaan bahan pangan dan kebutuhan pokok. Rakyat diwajibkan menyerahkan hasil panen untuk mendukung perang. Kondisi ini menyebabkan kelaparan di berbagai daerah.
              </p>
            </div>

            <div className="bg-navy-light rounded-lg p-6 text-center transition-all hover:bg-red/20 duration-300 fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red/30 mb-4">
                <BookHeart size={32} className="text-cream" />
              </div>
              <h3 className="text-xl font-bold mb-3">Pendidikan</h3>
              <p className="text-cream-light/80">
                Sistem pendidikan diubah dengan penekanan pada budaya dan bahasa Jepang. Sekolah-sekolah diwajibkan mengajarkan bahasa Jepang dan menanamkan semangat kepatuhan pada Kaisar Jepang melalui upacara Seikeirei.
              </p>
            </div>

            <div className="bg-navy-light rounded-lg p-6 text-center transition-all hover:bg-red/20 duration-300 fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red/30 mb-4">
                <Scale size={32} className="text-cream" />
              </div>
              <h3 className="text-xl font-bold mb-3">Organisasi</h3>
              <p className="text-cream-light/80">
                Jepang membentuk berbagai organisasi seperti PUTERA (Pusat Tenaga Rakyat) dan Jawa Hokokai untuk memobilisasi rakyat Indonesia mendukung perang. Organisasi ini dimanfaatkan pula oleh pemimpin Indonesia untuk memperkuat rasa nasionalisme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dampak Pendudukan */}
      <section className="section bg-cream-light">
        <div className="container-custom">
          <SectionTitle
            title="Dampak Pendudukan Jepang"
            subtitle="Pengaruh pendudukan Jepang terhadap perjalanan sejarah Indonesia"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-red fade-in">
              <h3 className="text-2xl font-bold mb-6 text-navy">Dampak Positif</h3>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-4 rounded-full bg-red/20 p-1 mt-1">
                    <div className="w-4 h-4 rounded-full bg-red"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Pelatihan Militer</h4>
                    <p className="text-gray-700">
                      Pembentukan organisasi semi-militer seperti PETA memberikan pelatihan kemiliteran bagi pemuda Indonesia yang kemudian menjadi cikal bakal Tentara Nasional Indonesia.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="mr-4 rounded-full bg-red/20 p-1 mt-1">
                    <div className="w-4 h-4 rounded-full bg-red"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Penguatan Nasionalisme</h4>
                    <p className="text-gray-700">
                      Penderitaan bersama di bawah pendudukan Jepang memperkuat rasa persatuan dan nasionalisme di kalangan rakyat Indonesia.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="mr-4 rounded-full bg-red/20 p-1 mt-1">
                    <div className="w-4 h-4 rounded-full bg-red"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Penggunaan Bahasa Indonesia</h4>
                    <p className="text-gray-700">
                      Jepang melarang penggunaan bahasa Belanda dan mendorong penggunaan bahasa Indonesia, yang memperkuat posisi bahasa Indonesia sebagai bahasa persatuan.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="mr-4 rounded-full bg-red/20 p-1 mt-1">
                    <div className="w-4 h-4 rounded-full bg-red"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Pengkaderan Pemimpin</h4>
                    <p className="text-gray-700">
                      Organisasi-organisasi bentukan Jepang memberikan kesempatan bagi tokoh-tokoh nasionalis untuk memperluas jangkauan pengaruh dan membentuk jaringan nasional.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-navy fade-in">
              <h3 className="text-2xl font-bold mb-6 text-navy">Dampak Negatif</h3>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-4 rounded-full bg-navy/20 p-1 mt-1">
                    <div className="w-4 h-4 rounded-full bg-navy"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Penderitaan Rakyat</h4>
                    <p className="text-gray-700">
                      Sistem romusha menyebabkan ratusan ribu rakyat Indonesia meninggal karena kerja paksa, malnutrisi, dan penyakit.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="mr-4 rounded-full bg-navy/20 p-1 mt-1">
                    <div className="w-4 h-4 rounded-full bg-navy"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Kelaparan dan Kemiskinan</h4>
                    <p className="text-gray-700">
                      Eksploitasi ekonomi oleh Jepang menyebabkan kelangkaan bahan pangan, inflasi, dan peningkatan dramatis dalam tingkat kemiskinan.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="mr-4 rounded-full bg-navy/20 p-1 mt-1">
                    <div className="w-4 h-4 rounded-full bg-navy"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Kekerasan dan Trauma</h4>
                    <p className="text-gray-700">
                      Kekejaman Kempeitai (polisi militer Jepang) dan hukuman yang brutal meninggalkan trauma mendalam bagi banyak orang Indonesia.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="mr-4 rounded-full bg-navy/20 p-1 mt-1">
                    <div className="w-4 h-4 rounded-full bg-navy"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Jugun Ianfu</h4>
                    <p className="text-gray-700">
                      Ribuan perempuan Indonesia dipaksa menjadi "wanita penghibur" (jugun ianfu) untuk melayani tentara Jepang, meninggalkan luka sosial yang mendalam.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 fade-in">
            <h3 className="text-2xl font-bold mb-4 text-navy">Peninggalan Sejarah</h3>
            <p className="mb-4 text-gray-700">
              Pendudukan Jepang, meskipun berlangsung singkat (sekitar 3,5 tahun), memberikan pengaruh signifikan terhadap perjalanan sejarah Indonesia. Pengalaman di bawah pendudukan Jepang memberikan momentum bagi pergerakan kemerdekaan Indonesia.
            </p>
            <p className="mb-4 text-gray-700">
              Beberapa infrastruktur yang dibangun selama masa pendudukan, meskipun dengan harga penderitaan romusha, tetap dimanfaatkan hingga sekarang. Sistem organisasi kemasyarakatan hingga tingkat rukun tetangga (RT) yang kita kenal sekarang juga berasal dari sistem Tonarigumi yang diperkenalkan Jepang.
            </p>
            <p className="text-gray-700">
              Yang paling penting, penderitaan bersama di bawah pendudukan Jepang membangkitkan semangat persatuan dan tekad untuk merdeka, yang akhirnya terwujud pada proklamasi kemerdekaan 17 Agustus 1945, hanya dua hari setelah Jepang menyerah kepada Sekutu.
            </p>
          </div>

          <div className="bg-white mt-4 rounded-lg shadow-lg p-8 fade-in">
            <h3 className="text-2xl font-bold mb-4 text-navy">
              Manfaat Kedatangan Jepang untuk Pelajar
            </h3>

            <p className="mb-4 text-gray-700">
              <strong>1. Penguatan Bahasa Indonesia</strong><br />
              Jepang melarang penggunaan bahasa Belanda dan mendorong penggunaan Bahasa Indonesia.
              Hal ini memperkuat posisi Bahasa Indonesia sebagai bahasa resmi, yang memudahkan pelajar dalam belajar dan berkomunikasi secara nasional.
            </p>

            <p className="mb-4 text-gray-700">
              <strong>2. Meneladani Disiplin dan Etos Kerja</strong><br />
              Budaya Jepang yang dikenal disiplin dan pekerja keras secara tidak langsung diwariskan kepada masyarakat.
              Pelajar masa kini bisa mencontoh sikap rajin, tepat waktu, dan bertanggung jawab dalam proses belajar maupun kegiatan sekolah.
            </p>

            <p className="text-gray-700">
              <strong>3. Inspirasi dari Tokoh Pejuang Didikan Jepang</strong><br />
              Banyak tokoh pejuang Indonesia, seperti Jenderal Soedirman, mendapat pelatihan militer saat masa penjajahan Jepang.
              Mereka menjadi inspirasi semangat belajar, kepemimpinan, dan perjuangan bagi generasi muda Indonesia.
            </p>
          </div>

          <div className="bg-white mt-4 rounded-lg shadow-lg p-8 fade-in flex flex-col items-center justify-center">
            <h3 className="text-2xl font-bold mb-4 text-center">
            Gaskeun maen bray 
            </h3>
            <img
              src={WordwallQR}
              alt="QR Code linking to Wordwall resource about Japanese influence for students"
              className="img-fit"
            />
            <p className="mt-4 text-center text-gray-700">
              2 teratas dapet reward
            </p>
          </div>
        </div>
      </section>
      <ScrollTop />
    </>
  );
};

export default About;