import React, { Component } from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/layouts/BasePage";

class blog extends Component {
  render() {
    return (
      <div>
        <BaseLayout>
          <BasePage>
            <h1>Iam blogs page</h1>
          </BasePage>
        </BaseLayout>
      </div>
    );
  }
}

export default blog;
