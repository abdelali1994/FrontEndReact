import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="single-sidebar">
            <h3>Filter Cars</h3>
            <div className="sidebar-body">
              <p><i className="fa fa-mobile" /> {this.props.count} Cars Found. </p>
              <div className="col-md-4">

            <label>
                Order By 
                <select className="from-control" value={this.props.sort} onChange={this.props.handleChangeSort}>
                    <option value="">Select</option>
                    <option value="lowest">Lowest to highest</option>
                    <option value="highest">Highest to Lowest</option>

                </select>
            </label>
              </div>
              <div className="col-md-4">

            <label>
               Filter By Marque
                <select className="from-control" value={this.props.marqueA} onChange={this.props.handleChangeMarque}>
                    <option value="">All</option>
                    <option value="porsche">Porsche</option>
                    <option value="Audi">Audi</option>
                    <option value="Bentley">Bentley</option>
                    <option value="BMW">Bmw</option>
                    <option value="volkswagen">Volkswagen</option>
                   

                </select>
            </label>
              </div>
            </div>
          </div>
        )
    }
}
