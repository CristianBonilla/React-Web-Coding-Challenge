import Logo from '@assets/logo.png';
import { BikeThefts } from '@components/BikeThefts';

function ReportedBikeThefts(..._: any[]) {
  return (
    <main className="container-fluid">
      <header className="p-3">
        <div className="row">
          <div className="col-sm-2">
            <figure className="image">
              <img src={ Logo } alt="" />
            </figure>
          </div>
          <div className="col-sm-10 d-flex flex-column justify-content-center">
            <h1 className="mb-0">Police Departament of Berlin</h1>
            <p className="mb-0">Stolen bykes</p>
          </div>
        </div>
      </header>
      <BikeThefts />
    </main>
  );
}

export { ReportedBikeThefts };
