module = angular.module('formBuilderApp', []);
module.controller('FormsController', function() {
    
    var formBuilder = this;
    
    formBuilder.sections = [];
    formBuilder.sections = [{
      "name": "Nueva sección",
      "description": "Descripción",
      "fields": [
        {
          "name": "Campo",
          "type": {
            "id": 0,
            "text": "Texto corto"
          },
          "order": 0,
          "showOptions": false,
          "options": []
        }
      ]
    }];
    
    formBuilder.fieldTypes = [
      { id: 0, text: 'Texto corto' }, { id: 1, text: 'Texto largo' }, { id: 2, text: 'Fecha'},
      { id: 3, text: 'Select' },{ id: 4, text: 'Checkboxes' }, { id: 5, text: 'Radio buttons' }
    ];

    formBuilder.addSection = function(){
      var section = { name: 'Nueva sección', description: 'Descripción', fields: [] };
      formBuilder.sections.push(section);
    }

    formBuilder.addField = function(section){
      var field = { name: 'Campo', type: formBuilder.fieldTypes[0], order: 0,
        showOptions: false, options: []
      };
      section.fields.push(field);
    }

    formBuilder.addOption = function(field){
      var option = { value: 'Opción' };
      field.options.push(option);
    }

    // abrir sección de opciones para los casos de campos "select, checkboes y radio"
    formBuilder.canAssignOptions = function(field){
      if(field.type.id == 3 || field.type.id == 4 || field.type.id == 5){
        field.showOptions = true;
      }else{
        field.showOptions = false;
        field.options = [];
      }
    }
  });