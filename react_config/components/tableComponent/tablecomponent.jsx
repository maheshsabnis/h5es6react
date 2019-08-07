import React, { Component } from 'react';
class TableComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headers: []
        };
        this.generateTable();
    }

    // method to genetrate table in tow steps
    // 1. generate headers
    generateTable() {
        // check if the data is present in the props passed by parent
        if (this.props.data.length > 0) {
            // read all headers from zeroth record from received array
            for (let p in this.props.data[0]) {
                this.state.headers.push(p);
            }
        }
    }
    render() {
        return (
            <div className="container">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            {
                                this.state.headers.map((h,i) => (
                                    <td key={i}>{h}</td>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                       {
                           // iterate over the this.props.data 
                           // to read all records in array
                           this.props.data.map((prd,i) => (
                               <tr key={i}>
                                 {
                                     // iterate over the this.state.header
                                     // and for every property-name 
                                     // from header generate td for array record
                                     this.state.headers.map((h,i) => (
                                         <td key={i}>{prd[h]}</td>
                                     ))
                                 }
                               </tr>
                           ))
                       }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableComponent;