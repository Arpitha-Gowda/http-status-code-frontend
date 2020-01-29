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
     four : [
        {code: "400", response:null, isVisible: false},
        {code: "402", response:null, isVisible: false},
        {code: "403", response:null, isVisible: false},
        {code: "404", response:null, isVisible: false},
        {code: "405", response:null, isVisible: false},
        {code: "406", response:null, isVisible: false},
        {code: "408", response:null, isVisible: false},
        {code: "409", response:null, isVisible: false},
        {code: "410", response:null, isVisible: false},
        {code: "411", response:null, isVisible: false},
        {code: "413", response:null, isVisible: false},
        {code: "414", response:null, isVisible: false},
        {code: "415", response:null, isVisible: false},
        {code: "417", response:null, isVisible: false},
        {code: "426", response:null, isVisible: false},

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
      const _four = [...this.state.four];
      const index = _four.findIndex(x=>x.code == code);
      _four[index].response = jsonResult
      _four[index].isVisible = true
      this.setState({four: _four});
    })
  }
  getCard = (status_object) => {    
    if (!status_object.isVisible) {
      return ( <span defaultValue={status_object.code} >{status_object.code}</span>)
    }
    return(<span style={{color: "red"}} defaultValue={status_object.response?status_object.response.message:""} >{status_object.response?status_object.response.message:""}</span>)

  }
  render() {
    const arr = this.state.four ||[];
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="4xx: This category of error status codes points the finger at clients."
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
