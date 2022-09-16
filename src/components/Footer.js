import React from "react"

const Footer = () => {
    return <div>
        {/* Footer */}
        <footer className="page-footer font-small indigo pt-4" >

            {/* Footer Links */}
            <div className="container-fluid text-center text-md-left">

                {/* Grid row */}
                <div className="row">

                    {/* Grid column */}
                    <div className="col-md-6 mt-md-0 mt-3">

                        {/* Content */}
                        <h5 className="text-uppercase">Footer Content</h5>
                        <p>Here you can use rows and columns to organize your footer content.</p>

                    </div>
                    {/* Grid column */}

                    <hr className="clearfix w-100 d-md-none pb-3" />

                    {/* Grid column */}
                    <div className="col-md-3 mb-md-0 mb-3">

                        {/* Links */}
                        <h5 className="text-uppercase">Links</h5>

                        <ul className="list-unstyled">
                            <li>
                                <a href="#!">Link 1</a>
                            </li>
                            <li>
                                <a href="#!">Link 2</a>
                            </li>
                            
                        </ul>

                    </div>
                    {/* Grid column */}

                    {/* Grid column */}
                    <div className="col-md-3 mb-md-0 mb-3">

                        {/* Links */}
                        <h5 className="text-uppercase">Links</h5>

                        <ul className="list-unstyled">
                            <li>
                                <a href="#!">Link 1</a>
                            </li>
                            <li>
                                <a href="#!">Link 2</a>
                            </li>
                          
                        </ul>

                    </div>
                    {/* Grid column */}
                </div>
                {/* Grid row */}
            </div>
            {/* Footer Links */}

            {/* Copyright */}
            <div className="footer-copyright text-center py-3">© 2020 Copyright:
                <a href="/"> MDBootstrap.com</a>
            </div>
            {/* Copyright */}

        </footer>
        {/*  Footer */}
    </div>
}
export default Footer;
