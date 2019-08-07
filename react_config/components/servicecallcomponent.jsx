import React, { Component } from 'react';
import { HttpService } from "./../service/httpservice.js";
class ServiceCallComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ProductId: 0,
            ProductName: '',
            Manufacturer: '',
            CategoryName: '',
            Price: 0,
            Manufacturers: ['IBM', 'Bajaj', 'Parle'],
            Categories: ['Electronics', 'Electrical', 'Food'],
            Products: [],
            headers: [],
            idValidateMessage:'',
            isIdValid:true
        };

        // declare an instance of the service
        this.serv = new HttpService();
      
    }
    // the method that will be executed immediately after the ctor
    componentDidMount(){
        this.serv.getData()
                .then(resp=>resp.json()) // subscribe to the response
                .then(data => {
                    this.setState({'Products':data}); // process the response
                    this.generateHeaders();
                }).catch(err=>console.log(err));
    }
    // ends here
    generateHeaders() {
        for (let p in this.state.Products[0]) {
            this.state.headers.push(p);
        }
    }
    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
        this.validateInputs(evt.target.name, evt.target.value);
    }
    validateInputs(name, value){
        if(name === 'ProductId'){
            if(value <= 0){
                this.setState({'isIdValid':false});
                this.setState({'idValidateMessage': 'PersonId cannot be -ve'});
            }else{
                this.setState({'isIdValid':true});
                this.setState({'idValidateMessage': ''});
            }
        }
    }
    clear(e) {
        this.setState({ 'ProductId': 0 });
        this.setState({ 'ProductName': '' });
        this.setState({ 'CategoryName': '' });
        this.setState({ 'Manufacturer': '' });
        this.setState({ 'Price': 0 });
    }
    save() {
        let prd = {
            ProductId: this.state.ProductId,
            ProductName: this.state.ProductName,
            Manufacturer: this.state.Manufacturer,
            CategoryName: this.state.CategoryName,
            Price: this.state.Price
        };
        this.serv.postData(prd)
                .then(resp=>resp.json()) // subscribe to the response
                .then(data => {
                    this.setState({'Products':data}); // process the response
                }).catch(err=>console.log(err));
        console.log(JSON.stringify(this.state.Products));
    }

    getSelectedPrd(p){
        this.setState({ 'ProductId': p.ProductId });
        this.setState({ 'ProductName': p.ProductName });
        this.setState({ 'CategoryName': p.CategoryName });
        this.setState({ 'Manufacturer': p.Manufacturer });
        this.setState({ 'Price': p.Price });
    }

    render() {
        return (
            <div className="container">
                <div className="form-group">
                    <label htmlFor="ProductId">Product Id</label>
                    <input type="text" name="ProductId" className="form-control" value={this.state.ProductId} onChange={this.handleChange.bind(this)} />
                    <div className="alert alert-danger" hidden={this.state.isIdValid}>{this.state.idValidateMessage}</div>
                </div>
                <div className="form-group">
                    <label htmlFor="ProductName">Product Name</label>
                    <input type="text" name="ProductName" className="form-control" value={this.state.ProductName} onChange={this.handleChange.bind(this)} />
                </div>
                <div className="form-group">
                    <label htmlFor="Manufacturer">Manufacturer</label>
                    <select name="Manufacturer" className="form-control" value={this.state.Manufacturer} onChange={this.handleChange.bind(this)}>
                        <option> Select Manufacturer</option>
                        {
                            this.state.Manufacturers.map((v, i) => (
                                <OptionsComponent key={i} data={v} />
                            ))
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="CategoryName">Category Name</label>
                    <select name="CategoryName" className="form-control" value={this.state.CategoryName} onChange={this.handleChange.bind(this)}>
                        <option> Select Categories</option>

                        {
                            this.state.Categories.map((v, i) => (
                                <OptionsComponent key={i} data={v} />
                            ))
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="Price">Price</label>
                    <input type="text" name="Price" className="form-control" value={this.state.Price} onChange={this.handleChange.bind(this)} />
                </div>
                <div className="form-group">
                    <input type="button" value="New" className="btn btn-default" onClick={this.clear.bind(this)} />
                    <input type="button" value="Save" onClick={this.save.bind(this)} className="btn btn-success" />
                </div>

                <div className="container">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                {
                                    this.state.headers.map((h, i) => (
                                        <th key={i}>{h}</th>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.Products.map((p, i) => (
                                    <TableRowComponent key={i} prd={p} 
                                      selectedPrd={this.getSelectedPrd.bind(this)}/>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}


class OptionsComponent extends Component {
    render() {
        return (
            <option value={this.props.data}>{this.props.data}</option>
        );
    }
}

class TableRowComponent extends Component {
    onRowSelected(){
        console.log(JSON.stringify(this.props.prd));
        // the selectedPrd will not store the props.prd data in it
        this.props.selectedPrd(this.props.prd);
    }
    render() {
        return (
            <tr onClick={this.onRowSelected.bind(this)}>
                <td>{this.props.prd.ProductId}</td>
                <td>{this.props.prd.ProductName}</td>
                <td>{this.props.prd.Manufacturer}</td>
                <td>{this.props.prd.CategoryName}</td>
                <td>{this.props.prd.Price}</td>
            </tr>
        );
    }
}
export default ServiceCallComponent;