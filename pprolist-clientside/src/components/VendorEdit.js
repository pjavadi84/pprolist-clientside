import React, { Component } from 'react';
import {Card, Button, Form} from 'react-bootstrap'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class VendorEdit extends Component {

    state = {
        name: "",
        total_cost: ""
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const vendor = {id: this.props.match.params.id, name: this.state.name, total_cost: this.state.total_cost}
        this.props.editVendor(vendor)
        this.setState({
            name: '',
            total_cost: ''
        })
    }


    handleChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleChangeTotalCost = (event) => {
        this.setState({
            total_cost: event.target.value
        })
    }

    render() {
        return (
            <div className="vendor-edit">
                <div className="vertical-center">
                    <Card style={{backgroundColor: '#282c34', width: '25rem', height: '23rem'}} border="light" >
                        <h1>Edit Vendor:</h1>
                        <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="vendorEditName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value ={this.state.name} onChange={this.handleChangeName} placeholder="Enter Name" />
                            <Form.Text className="text-muted">
                            Add the correct vendor you want to track
                            </Form.Text>
                        </Form.Group>
                        
                        <Form.Group controlId="vendorEditTotalCost">
                            <Form.Label>Total Cost:</Form.Label>
                            <Form.Control as="input" value ={this.state.total_cost} onChange={this.handleChangeTotalCost} placeholder="Edit total price cart" />
                            </Form.Group>
                            <Button type="submit">Submit</Button>
                            <Link to = "/"><Button variant="danger">Cancel</Button></Link>
                        </Form>
                    </Card>
                </div>
            </div>
        );
    }
}

export default connect(null,editVendor)(VendorEdit);