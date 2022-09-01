import React, { Component } from "react";
import axios from "axios";

const BASE_URL =
  "https://my-json-server.typicode.com/themeland/netstorm-json-2/footer";

class Footer extends Component {
  state = {
    data: {},
    socialData: [],
    widgetData_1: [],
    widgetData_2: [],
  };
  componentDidMount() {
    axios
      .get(`${BASE_URL}`)
      .then((res) => {
        this.setState({
          data: res.data,
          socialData: res.data.socialData,
          widgetData_1: res.data.widgetData_1,
          widgetData_2: res.data.widgetData_2,
        });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <footer className="footer-area">
        {/* Footer Top */}
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-md-12 res-margin">
                {/* Footer Items */}
                <div className="footer-items">
                  <h2>KEEP IN TOUCH WITH US</h2>
                  <p>
                    Join us on our online channels to stay up-to-date with the
                    Hidden Warriors community
                  </p>
                  <div className="social-icons d-flex">
                    <a class="twitter" href="http://twitter.com/warriorsnft">
                      <i class="fab fa-twitter"></i>
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a
                      class="discord"
                      href="https://discord.com/invite/yDAcFBfZDc"
                    >
                      <i class="fab fa-discord"></i>
                      <i class="fab fa-discord"></i>
                    </a>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* Copyright Area */}
                <div className="copyright-area d-flex flex-wrap justify-content-center justify-content-sm-between text-center py-4">
                  <div>
                    {/* Copyright Left */}
                    <div className="copyright-left">
                      ©2021 Hidden Warrior, All Rights Reserved.
                    </div>
                    {/* Logo */}
                  </div>

                  <a className="navbar-brand" href="/">
                    <img src={this.state.data.img} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
