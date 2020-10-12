const { assert, toDetailRestaurantPageScenario, toReviewsTabDetailPageScenario } = require('./helpers/scenarioFactories');

Feature('Send Form Review');

Before(() => {
  toDetailRestaurantPageScenario();
});
Scenario('sending a restaurant review', async ({ I }) => {
  toReviewsTabDetailPageScenario();

  const reviewName = 'test123';
  I.seeElement('input#fullname');
  I.fillField('fullname', reviewName);

  const reviewMessage = 'test123';
  I.seeElement('textarea#review');
  I.fillField('review', reviewMessage);

  const submitReviewButton = locate('input#submitReview');
  I.seeElement(submitReviewButton);
  I.click(submitReviewButton);

  I.seeInPopup('success');
  I.acceptPopup();

  toReviewsTabDetailPageScenario();

  I.refreshPage();
  toReviewsTabDetailPageScenario();

  I.seeElement(locate('.restaurant-review').last());

  const submitedReviewName = await I.grabTextFrom(locate('.restaurant-review-name').last());
  assert.strictEqual(submitedReviewName, reviewName);

  const submitedReviewMessage = await I.grabTextFrom(locate('.restaurant-review-message').last());
  assert.strictEqual(submitedReviewMessage, reviewMessage);
});
