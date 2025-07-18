function Home() {
  return (
    <div className="bg-primary text-white">
      <section className="container py-5 text-center">
        <h1>FreshClean Laundry</h1>
        <p>24 jam selesai 3 jam, 6 jam dan 12 jam</p>
        <img src="public/Furina.webp" alt="Karakter" style={{ width: '300px' }} />
        <br /><br />
        <a href="#" className="btn btn-light">ORDER</a>
      </section>

      <section className="container py-2">
        <h3 className="text-center mb-4">FreshClean Laundry</h3>
        <p className="text-center">Sekarang semuanya menjadi serba praktis. Anda tidak perlu repot-repot mencuci, mengeringkan, dan menyetrika pakaian Anda sendiri. Anda juga tidak perlu keluar rumah untuk menggotong-gotong pakaian Anda. Anda cukup menghubungi kami, maka kami langsung datang ke rumah Anda untuk menjemput pakaian Anda.</p>
      </section>

      <section className="container py-5 bg-light text-dark">
        <h4 className="text-center mb-4">Galeri FreshClean Laundry</h4>
        <div className="row text-center">
          <div className="col-md-6"><img src="public/galeri1.jpg" className="img-fluid rounded" /></div>
          <div className="col-md-6"><img src="public/galeri2.jpg" className="img-fluid rounded" /></div>
        </div>
      </section>
    </div>
  );
}

export default Home;