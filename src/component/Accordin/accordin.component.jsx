import React from 'react'


const Accordin = () => {
    return (
        <div className="container">
            <div className="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">

                <div className="card">

                    <div className="card-header" role="tab" id="headingOne1">
                        <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
                            aria-controls="collapseOne1">
                            <h5 className="mb-0">
                                Collapsible Group Item #1    <i className="fas fa-angle-down rotate-icon"></i>
                            </h5>
                        </a>
                    </div>

                    <div id="collapseOne1" className="collapse show" role="tabpanel" aria-labelledby="headingOne1"
                        data-parent="#accordionEx">
                        <div className="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                            labore sustainable VHS.
      </div>
                    </div>

                </div>

                <div className="card">

                    <div className="card-header" role="tab" id="headingTwo2">
                        <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo2"
                            aria-expanded="false" aria-controls="collapseTwo2">
                            <h5 className="mb-0">
                                Collapsible Group Item #2 <i className="fas fa-angle-down rotate-icon"></i>
                            </h5>
                        </a>
                    </div>

                    <div id="collapseTwo2" className="collapse" role="tabpanel" aria-labelledby="headingTwo2"
                        data-parent="#accordionEx">
                        <div className="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                            labore sustainable VHS.
      </div>
                    </div>

                </div>
                <div className="card">

                    <div className="card-header" role="tab" id="headingThree3">
                        <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseThree3"
                            aria-expanded="false" aria-controls="collapseThree3">
                            <h5 className="mb-0">
                                Collapsible Group Item #3 <i className="fas fa-angle-down rotate-icon"></i>
                            </h5>
                        </a>
                    </div>

                    <div id="collapseThree3" className="collapse" role="tabpanel" aria-labelledby="headingThree3"
                        data-parent="#accordionEx">
                        <div className="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                            labore sustainable VHS.
      </div>
                    </div>

                </div>

            </div>
        </div>
    );

};


export default Accordin;