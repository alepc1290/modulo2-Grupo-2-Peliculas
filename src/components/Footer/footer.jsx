import React from 'react'

function Footer() {
    return (
        <div className='footer'> 

        <footer className=" bg-dark text-light mt-5">
            <div className="container py-4">
                
                <div className="row">
    
                    <div className="col-md-4">
                        <h5>Filmix</h5>
                        <p className="text-muted">
                            Tu sitio de películas y estrenos.
                        </p>
                    </div>



                    <div className="col-md-4">
                        <h6>Secciones</h6>
                        <ul className="list-unstyled">
                            <li><a href="/home" className="text-light">Inicio</a></li>
                            <li><a href="/movies" className="text-light">Películas</a></li>
                            <li><a href="/aboutus" className="text-light">Nosotros</a></li>
                        </ul>
                    </div>


                    
                    <div className="col-md-4">
                        <h6>Seguinos</h6>
                        <div className="d-flex gap-3">
                            <a href="#" className="text-light">Instagram</a>
                            <a href="#" className="text-light">Twitter</a>
                            <a href="#" className="text-light">Facebook</a>
                        </div>
                    </div>

                </div>

                <hr />

                <div className="text-center text-muted">
                    © {new Date().getFullYear()} Filmix — Proyecto educativo
                </div>
            </div>
        </footer>
        </div>
    )
}


export default Footer
