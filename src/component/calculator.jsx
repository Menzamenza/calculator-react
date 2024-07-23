import React, { useState } from "react";

const Calculator = () => {
    const [val, setVal] = useState("");

    
    const calculate =()=>{
        try {
            setVal(eval(val))
        } catch (error) {
            
        }
    }
    const backspace = ()=>{
        try {
            setVal(val.slice(0,-1))
        } catch (error) {
            console.log(error, 'supression');
        }
    }

    return (
        <div>
            <div className="container text-center">
                <div className="row">
                    <p className="fw-bold text-center fs-1">Calculator</p>
                </div>
                <hr />
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-10 ">
                        <div className="card">
                            <div className="card-body">
                                <input type="text" id="" className="form-control form-control-lg mb-4 text-center bg-light fs-4 text-primary shadow" value={val} />
                            </div>
                            <div className="row d-flex justify-content-end ">
                                <div className="col-3">
                                    <button className="btn btn-light text-primary shadow p-2 fs-4 mb-2" value='C' onClick={() =>backspace()}>C/CE</button>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-3">
                                    <button className="btn btn-light text-primary shadow p-4 fs-4" value='1' onClick={(e) => setVal(val + e.target.value)}>1</button>
                                </div>
                                <div className="col-3">
                                    <button className="btn btn-light text-primary shadow p-4 fs-4" value='2' onClick={(e) => setVal(val + e.target.value)}>2</button>
                                </div>
                                <div className="col-3">
                                    <button className="btn btn-light text-primary shadow p-4 fs-4" value='3' onClick={(e) => setVal(val + e.target.value)}>3</button>
                                </div>
                                <div className="col-3">
                                    <button className="btn btn-light text-primary shadow p-4 fs-4" value='-' onClick={(e) => setVal(val + e.target.value)}>-</button>
                                </div>
                            </div>
                            <div className="row my-3">
                                <div className="col-3">
                                    <button className="btn btn-light text-primary shadow p-4 fs-4" value='4' onClick={(e) => setVal(val + e.target.value)}>4</button>
                                </div>
                                <div className="col-3">
                                    <button className="btn btn-light text-primary shadow p-4 fs-4" value='5' onClick={(e) => setVal(val + e.target.value)}>5</button>
                                </div>
                                <div className="col-3">
                                    <button className="btn btn-light text-primary shadow p-4 fs-4" value='6' onClick={(e) => setVal(val + e.target.value)}>6</button>
                                </div>
                                <div className="col-3">
                                    <button className="btn btn-light text-primary shadow p-4 fs-4" value='+' onClick={(e) => setVal(val + e.target.value)}>+</button>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-3">
                                    <button className="btn btn-light text-primary shadow p-4 fs-4" value='7' onClick={(e) => setVal(val + e.target.value)}>7</button>
                                </div>
                                <div className="col-3">
                                    <button className="btn btn-light text-primary shadow p-4 fs-4" value='8' onClick={(e) => setVal(val + e.target.value)}>8</button>
                                </div>
                                <div className="col-3">
                                    <button className="btn btn-light text-primary shadow p-4 fs-4" value='9' onClick={(e) => setVal(val + e.target.value)}>9</button>
                                </div>
                                <div className="col-3">
                                    <button className="btn btn-light text-primary shadow p-4 fs-4" value='*' onClick={(e) => setVal(val + e.target.value)}>x</button>
                                </div>
                            </div>
                            <div className="row my-3">
                                <div className="col-3">
                                    <button className="btn btn-light text-primary shadow p-4 fs-4" value='.' onClick={(e) => setVal(val + e.target.value)}>.</button>
                                </div>
                                <div className="col-3">
                                    <button className="btn btn-light text-primary shadow p-4 fs-4" value='0' onClick={(e) => setVal(val + e.target.value)}>0</button>
                                </div>
                                <div className="col-3">
                                    <button className="btn btn-light text-primary shadow p-4 fs-4" value='=' onClick={() =>calculate()}>=</button>
                                </div>
                                <div className="col-3">
                                    <button className="btn btn-light text-primary shadow p-4 fs-4" value='/' onClick={(e) => setVal(val + e.target.value)}>/</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator;