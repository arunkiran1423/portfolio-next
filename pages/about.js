import React, { Component } from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/layouts/BasePage";

class about extends Component {
  render() {
    return (
      <div>
        <BaseLayout>
          <BasePage>
            <h1>This is about page</h1>
          </BasePage>
        </BaseLayout>
      </div>
    );
  }
}

export default about;
