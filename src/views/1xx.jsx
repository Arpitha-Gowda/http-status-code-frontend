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
     one : [
        {code: "100", response:null, isVisible: false},
        {code: "102", response:null, isVisible: false}
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
      const _one = [...this.state.one];
      const index = _one.findIndex(x=>x.code == code);
      _one[index].response = jsonResult
      _one[index].isVisible = true
      this.setState({one: _one});
    })
  }
  getCard = (status_object) => {    
    if (!status_object.isVisible) {
      return ( <span defaultValue={status_object.code} >{status_object.code}</span>)
    }
    return(<span defaultValue={status_object.response?status_object.response.message:""} >{status_object.response?status_object.response.message:""}</span>)

  }
  render() {
    const arr = this.state.one ||[];
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="1xx: Communicates transfer protocol-level information."
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
