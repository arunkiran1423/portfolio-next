import React, { Component } from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import axios from "axios";

import { Link } from "../routes";

class portfolios extends Component {
  static async getInitialProps() {
    let posts = [];
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      posts = response.data;
    } catch (err) {
      console.log(err);
    }
    return { posts: posts.splice(0, 10) };
  }

  renderPosts = posts =>
    posts.map(post => (
      <li key={post.id}>
        <Link route={`/portfolio/${post.id}`}>
          <a>{post.title}</a>
        </Link>
      </li>
    ));

  render() {
    const { posts } = this.props;
    return (
      <div>
        <BaseLayout>
          <h1>Iam portfolios page</h1>
          <ul>{this.renderPosts(posts)}</ul>
        </BaseLayout>
      </div>
    );
  }
}

export default portfolios;
