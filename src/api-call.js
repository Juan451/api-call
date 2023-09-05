import { LitElement, html } from "lit-element";
import "./components/call-api";
import { globaStyles } from "../styles/globalStyles";
import { containerStyles } from "../styles/containerStyles";

export class ApiCall extends LitElement {
  static get styles() {
    return [containerStyles, globaStyles];
  }

  static get properties() {
    return {
      users: { type: Array },
    };
  }

  constructor() {
    super();
    this.addEventListener("api-call-users", (e) => {
      this._dataFormat(e.detail);
    });
  }

  _dataFormat(data) {
    const user = data;
    this.users = user;
  }

  render() {
    return html`
      <h1>API Call</h1>
      <call-api
        url="https://jsonplaceholder.typicode.com/users"
        method="GET"
      ></call-api>
      ${this.users ? this.dataUsers : "loading..."}
    `;
  }

  get dataUsers() {
    return html`
      ${this.users.map(
        (user) => html`
          <div class="quote-container">
            <h3 class="quote-text">Email: ${user.name}</h3>
            <h4 class="quote-text__author">Name: ${user.email}</h4>
            <div class="quote-text__chapter-container">
              <p>Phone: ${user.phone}</p>
              |
              <p>Website: ${user.website}</p>
              |
              <p>Username: ${user.username}</p>
              |
              <p>User city: ${user.address.city}</p>
            </div>
            <p class="quote-text__source">Zipcode: ${user.address.zipcode}</p>
          </div>
        `
      )}
    `;
  }
}
customElements.define("api-call", ApiCall);
