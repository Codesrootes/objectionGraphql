

const _ = require('lodash');

function isExcluded(opt, prop) {
  return (opt.include && opt.include.indexOf(prop) === -1)
      || (opt.exclude && opt.exclude.indexOf(prop) !== -1);
}

function typeNameForModel(modelClass) {
  let tableName;
  if(modelClass.modelName) tableName = _.upperFirst(_.camelCase(modelClass.modelName));
  else tableName = _.upperFirst(_.camelCase(modelClass.tableName));
  // if(modelClass.tableName.includes('.')) console.log('_.upperFirst(_.camelCase(modelClass.tableName)) ', _.upperFirst(_.camelCase(modelClass.tableName.split('.')[1])))
  return tableName;
}

module.exports = {
  isExcluded,
  typeNameForModel,
};
