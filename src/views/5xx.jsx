/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import Card from "components/Card/Card";

class Icons extends Component {
  constructor(props){
    super(props);  

    this.state= {
     five : [
        {code: "500", response:null, isVisible: false},
        {code: "501", response:null, isVisible: false},
        {code: "502", response:null, isVisible: false},
        {code: "503", response:null, isVisible: false},
        {code: "504", response:null, isVisible: false},
        {code: "505", response:null, isVisible: false}
      ]
    }
  }
  componentDidMount(){

  }
  callApi(code){
    code = code.split(' ');
    fetch('http://192.168.2.30:4000/status?code='+code)
    .then((result) => {
      return result.json();
    }).then((jsonResult) => {
      const _five = [...this.state.five];
      const index = _five.findIndex(x=>x.code == code);
      _five[index].response = jsonResult
      _five[index].isVisible = true
      this.setState({five: _five});
    })
  }
  getCard = (status_object) => {    
    if (!status_object.isVisible) {
      return ( <span defaultValue={status_object.code} >{status_object.code}</span>)
    }
    return(<span style={{color: "red"}} defaultValue={status_object.response?status_object.response.message:""} >{status_object.response?status_object.response.message:""}</span>)

  }
  render() {
    const arr = this.state.five ||[];
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="5xx: The server takes responsibility for these error status codes."
                ctAllIcons
                content={
                  <Row>
                    {arr.map((x) => {
                      return (
                        <Col
                          lg={2}
                        >
                         <div onClick={() => this.callApi(x.code)} className="font-icon-detail div-conf"  >
                            {this.getCard(x)}
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Icons;
