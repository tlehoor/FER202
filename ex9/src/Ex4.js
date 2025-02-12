import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function ex4() {
    return (
        <div className="container my-4">
            <div className="border border-primary p-3">
                <div className="row">
                    <div className="col-5">
                        <div className="text-center py-2 justify-content-center">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/6/68/Logo_FPT_Education.png"
                                alt="FPT University Logo"
                                className="img-fluid"
                                style={{ maxHeight: "100px" }}
                            /></div>
                    </div>
                    <div className="col-7 py-2 text-center">
                        <h2 className="text-danger">Lê Trường Thành - FPT University</h2>
                        <p className="text-muted">FPT University Student</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ex4;