import React, { Component } from 'react';
// Two types of react components
// Stateless --> Component does not have any data (aka state)
// Statefull --> Component that have state and/or props and events 
// to update them 
class StatefulComponent extends Component {
    // 1. props is the object that reopresents
    // the schema (or propeties) those are passed
    // from parent component to child component
    // 'props' is used to communicate data across
    // components
    // props is immutable
    constructor(props) {
        super(props);
        // 2. state is an object, that is used 
        // to define properties used local to component 
        // state is mutable. State will be lost when 
        // component is unloaded or destroyed 
        this.state = {
            ProductId: 0,
            ProductName: '',
            Manufacturer: '',
            CategoryName: '',
            Price: 0,
            Manufacturers: ['IBM', 'Bajaj', 'Parle'],
            Categories: ['Electronics', 'Electrical', 'Food'],
            Products: [{ ProductId: 101, ProductName: 'Laptop', Manufacturer: 'IBM', CategoryName: 'Electronics', Price: 120000 }, 
            { ProductId: 102, ProductName: 'Iron', Manufacturer: 'Bajaj', CategoryName: 'Electrical', Price: 1200 }],
            headers: [],
            idValidateMessage:'',
            isIdValid:true
        };
        this.generateHeaders();
    }

    // method to read Product properties to generate the table headers
    generateHeaders() {
        for (let p in this.state.Products[0]) {
            this.state.headers.push(p);
        }
    }
    // ends here 

    // a single metnod that will read 'onchange' event for all
    // input elements and select elements 
    handleChange(evt) {
        // assign values for elements to state proprties
        // having 'name' attribute matches with state property
        this.setState({ [evt.target.name]: evt.target.value });
        this.validateInputs(evt.target.name, evt.target.value);
    }
    // the method will be used for validations
    // this will read editable values and check for validation rules
    // name -> is the name of editable element that updates the state
    // value --> is the name of state property that will be updated from UI 
    validateInputs(name, value){
        // validation logic
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

    // ends here

    // clear all inputs
    clear(e) {
        this.setState({ 'ProductId': 0 });
        this.setState({ 'ProductName': '' });
        this.setState({ 'CategoryName': '' });
        this.setState({ 'Manufacturer': '' });
        this.setState({ 'Price': 0 });
    }
    save() {

        // to update the Products state, we must call the setState() method
        // then only the UI will be notified about the update
        // 1. define a copy of Products array
        let tempArray = this.state.Products.slice();
        // 2. push the data in this temp array
        tempArray.push({
            ProductId: this.state.ProductId,
            ProductName: this.state.ProductName,
            Manufacturer: this.state.Manufacturer,
            CategoryName: this.state.CategoryName,
            Price: this.state.Price
        });
        // 3. update the Products array using setState() method with tempArray
        this.setState({ 'Products': tempArray });
        console.log(JSON.stringify(this.state.Products));
    }

    // then method will be bound to the
    // selectedPrd props type so that
    // then data from child can be read
    getSelectedPrd(p){
        // update the state properties based on selected Product
        this.setState({ 'ProductId': p.ProductId });
        this.setState({ 'ProductName': p.ProductName });
        this.setState({ 'CategoryName': p.CategoryName });
        this.setState({ 'Manufacturer': p.Manufacturer });
        this.setState({ 'Price': p.Price });
    }

    render() {
        // in JSX, html attribute mapped with ES 6 Keywaords 
        // will not work e.g. class will be className, for will be htmlFor
        // binding the state properties to editable html elements
        // value={this.state.<property-name>}
        // event will be bind as
        // eventName={this.<methodname>.bind(this)}
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


// the component returns <option> and accepts
// 'data' as props. The consumer of this component
// must pass 'data' to this component
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





export default StatefulComponent;