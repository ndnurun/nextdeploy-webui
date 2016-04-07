import Ember from 'ember';

export default Ember.Component.extend({
  isShowingHover: false,

  setShowingHover: function() {
    var access_level = this.get('session').get('data.authenticated.access_level');
    if (access_level >= 30) {
      this.set('isShowingHover', this.get('isShowingHovers') === this.get('vm').id);
    } else {
      this.set('isShowingHover', false);
    }
  }.observes('isShowingHovers'),

  // Return true if is running state
  isRunning: function() {
    if (parseInt(this.get('vm.status'), 10) > 0) { return true; }
    return false;
  }.property('vm.status'),

  // Return true if user is a Dev or more
  isDev: function() {
    var access_level = this.get('session').get('data.authenticated.access_level');

    if (access_level >= 30) { return true; }
    return false;
  }.property('session.data.authenticated.access_level'),

  // get branch name (fix for weird bug with name property)
  branchName: function() {
    return this.get('vm.commit.id').replace(/^[0-9][0-9]*-/,'').replace(/-[A-Za-z0-9][A-Za-z0-9]*$/,'');
  }.property('vm.commit'),

  actions: {
    // close the modal, reset showing variable
    closeHover: function() {
      this.set('isShowingHovers', -1);
    }
  }
});