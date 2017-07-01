import DS from 'ember-data';

export default DS.Model.extend({
  commit_hash: DS.attr('string'),
  short_id: DS.attr('string'),
  title: DS.attr('string'),
  author_name: DS.attr('string'),
  author_email: DS.attr('string'),
  message: DS.attr('string'),
  created_at: DS.attr('date'),
  branche: DS.belongsTo('branche'),
  vms: DS.hasMany('vm')
});
