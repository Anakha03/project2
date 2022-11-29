import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';



const View = () => {
  return (
    
       <div className="container mt-3">
            <h1 style={{ fontWeight: 400 }}>Welcome USER</h1>
            <Card sx={{ maxWidth: 600 }}>
                <CardContent>
                    
                <div className="add_btn">
                        <button className="btn btn-primary mx-2"><CreateIcon /></button>
                        <button className="btn btn-danger"><DeleteOutlineIcon /></button>
                    </div>

                    <div className="row">
                        <div className="left_view col-lg-6 col-md-6 col-12">

                            <p className="mt-3">Id: <span >1</span></p>
                            <p className="mt-3"> Name:<span >gjsg</span></p>
                            <p className="mt-3">Email: <span>gjsag@mail</span></p>
                            <p className="mt-3">DOB: <span>29092001</span></p>
                        </div>
                        <div className="right_view  col-lg-6 col-md-6 col-12">

                            <p className="mt-5">mobile: <span>+913479539</span></p>
                            <p className="mt-3">Courseid: <span>CSE201</span></p>
                            <p className="mt-3">Attendance: <span>91</span></p>
                    
                        </div>
                    </div>

                </CardContent>
            </Card>

    </div>
  )
}

export default View
