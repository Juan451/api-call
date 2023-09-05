import { LitElement } from "lit-element";

export class CallApi extends LitElement {
  static get properties() {
    return {
      url: { type: String },
      method: { type: String },
    };
  }

  firstUpdated() {
    this.getData();
  }

  _sendData(data) {
    this.dispatchEvent(
      new CustomEvent("api-call-users", {
        bubbles: true,
        composed: true,
        detail: data,
      })
    );
  }

  getData() {
    fetch(this.url, { method: this.method })
      .then((response) => {
        if (response.ok) return response.json();
        return Promise.reject(response);
      })
      .then((data) => {
        this._sendData(data);
      })
      .catch((error) => {
        console.warn("Something was wrong");
      });
  }
}
customElements.define("call-api", CallApi);
