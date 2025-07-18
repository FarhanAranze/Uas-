function Services() {
  return (
    
    <section className="layanan py-5 bg-light" id="service">
      <div className="container">
        <h1 className="mb-5 text-center">Services</h1>

    <div className="bg-primary text-white">
      <section className="container py-5">
        <h3 className="mb-3">Beberapa Jasa Layanan</h3>
        <ul>
          <li><strong>Regular Ekonomis:</strong> Jasa layanan laundry kiloan minimal 3 KG dengan harga yang ekonomis dengan lama proses 3 hari. Terdapat juga paket bulanan yang lebih hemat untuk Paket 50 KG dan Paket 100 KG.</li>
          <li><strong>Laundry Exclusive:</strong> Proses pencucian lebih lengkap dengan prewash dan netralisir detergen pada saat pembilasan. Atas permintaan pelanggan, kami juga dapat melakukan proses stain remover atau penghilangan noda pada pakaian. Terdapat 3 paket pilihan: 3 KG, 5 KG dan 7 KG.</li>
        </ul>

        <div className="row text-dark mt-4">
          <div className="col-md-6">
            <div className="bg-white p-3 rounded text-center">
              <h5>REGULAR EKONOMIS</h5>
              <p>Harga mulai dari Rp8.000/kg<br />Minimal 3 KG</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="bg-white p-3 rounded text-center">
              <h5>LAUNDRY EXCLUSIVE</h5>
              <p>Harga mulai dari Rp10.000/kg<br />Minimal 3 KG</p>
            </div>
          </div>
        </div>

        <div className="mt-5 bg-light text-dark p-4 rounded">
          <h4>Testimoni FreshClean Laundry</h4>
          <div className="d-flex align-items-center">
            <img src="foto-pelanggan.png" alt="Testimoni" className="rounded-circle me-3" style={{ width: '80px' }} />
            <p><strong>Muhammad Abdurohim : </strong> 
Ini laundry gua banget neh, tahu jiwa anak milenial, pake aplikasi digital segala. Jadi gua bisa pantau bray cucian gua udah diproses sampai apa. Dan yang lebih penting... bisa ngutang dulu bro pake kartu kredit.... Jadi klo gua sih "Laundry Disini Aja".</p>
          </div>
        </div>
      </section>
          
        </div>  
  </div>
    </section>
  );
}

export default Services;
