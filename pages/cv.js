import React, { Component } from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/layouts/BasePage";

class cv extends Component {
  render() {
    return (
      <div>
        <BaseLayout>
          <BasePage>
            <h1>Iam cv page</h1>
          </BasePage>
        </BaseLayout>
      </div>
    );
  }
}

export default cv;
