import DataSource from '../data/data-source';

const FormReviewInitiator = {
  init({ formContainer, restaurantId }) {
    formContainer.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = document.querySelector('input#fullname').value;
      const reviewText = document.querySelector('textarea#review').value;
      const consumerReview = {
        id: restaurantId,
        name,
        review: reviewText,
      };
      this._submitReview(consumerReview);
    });
  },

  async _submitReview(consumerReview) {
    const message = await DataSource.postReview(consumerReview);
    alert(message);
    location.reload();
  },
};

export default FormReviewInitiator;
