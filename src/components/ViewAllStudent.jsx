import React, { useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewAllStudent = () => {
    const[data,changeData]=useState(
        [
            { "name": "aju", "Admsn no": 101, "roll": 32 },
            { "name": "aju", "Admsn no": 101, "roll": 33 },
            { "name": "aju", "Admsn no": 101, "roll": 12 }
        ]
    )
    

    return (
        <div>
            <NavigationBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {
                                data.map(
                                    (value, index) => {
                                        return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">


                                            <div class="card">
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnfrlXL1POKB6chHdW-GclSvMIvKMA8FME1w&s" height="250px" class="card-img-top" alt="..."></img>
                                                <div class="card-body">
                                                    <h5 class="card-title">ABC school</h5>
                                                    <p class="card-text">Inspiring Excellence Every Day.</p>
                                                    <a href="#" class="btn btn-primary">Click for enquiry</a>
                                                </div>
                                            </div>

                                        </div>



                                    }
                                )
                            }









                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAllStudent