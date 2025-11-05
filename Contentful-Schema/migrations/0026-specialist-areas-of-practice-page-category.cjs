module.exports = async function (migration, { makeRequest }) {

    const contentTypeId = 'content',
      categoryFieldId = 'category',
      specialistAreasOfPracticeString = 'Specialist areas of practice';
  
    const response = await makeRequest({
      method: 'GET',
      url: `/content_types?sys.id[in]=${contentTypeId}`
    });
  
    var update = false;
    const validations = response.items[0].fields
      .filter(field => field.id == categoryFieldId)[0]
      .validations.map(rule => {
        if (rule.in && !rule.in.includes(specialistAreasOfPracticeString)) {
            rule.in.push(specialistAreasOfPracticeString);
            update = true;
        }
        return rule;
      });
  
    if (update) {
      migration
        .editContentType(contentTypeId)
        .editField(categoryFieldId).validations(validations);
    }
  };
  