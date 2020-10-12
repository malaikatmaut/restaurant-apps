import './review-item';

class ReviewList extends HTMLElement {
  set reviews(reviews) {
    this._reviews = reviews;
    this.render();
  }

  render() {
    this._reviews.forEach((review) => {
      const reviewElement = document.createElement('review-item');
      reviewElement.review = review;
      this.appendChild(reviewElement);
    });
    this._renderReviewForm();
  }

  _renderReviewForm() {
    this.innerHTML += /* html */ `
      <div class="form-review">
        <form id="formReview">
          <label for="fullname">Full Name</label>
          <input type="text" id="fullname" name="fullname" placeholder="Your full name">
          <label for="review">Review</label>
          <textarea id="review" name="review" placeholder="Write something about this restaurant"></textarea>
          <input type="submit" value="Submit Review" id="submitReview">
        </form>
      </div>
    `;
  }
}

if (!customElements.get('review-list')) {
  customElements.define('review-list', ReviewList);
}
