class ReviewItem extends HTMLElement {
  set review(review) {
    this._review = review;
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
    <article class="card restaurant-review">
      <h4 class="card-title restaurant-review-name">${this._review.name}</h4>
      <p class="restaurant-review-date">${this._review.date}</p>
      <p class="restaurant-review-message">${this._review.review}</p>
    </article>
    `;
  }
}

customElements.define('review-item', ReviewItem);
