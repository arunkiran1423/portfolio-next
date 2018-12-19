import React, { Component } from "react";
import Header from "../components/shared/Header";
import BaseLayout from "../components/layouts/BaseLayout";
import axios from "axios";

class Index extends Component {
  render() {
    return (
      <BaseLayout>
        <div>
          <h1>This is Index page</h1>
        </div>
      </BaseLayout>
    );
  }
}

export default Index;
