module = angular.module('formBuilderApp', ['ui.sortable']);
module.controller('FormsController', function($scope, $filter) {
    
    var formBuilder = this;
    
    formBuilder.sections = [];
    formBuilder.sections = [{
      "name": "Nueva sección",
      "description": "Descripción",
      "fields": [
        {
          "name": "Campo1",
          "type": {
            "id": 0,
            "text": "Texto corto"
          },
          "order": 0,
          "showOptions": false,
          "options": []
        },
        {
          "name": "Campo2",
          "type": {
            "id": 1,
            "text": "Texto largo"
          },
          "order": 1,
          "showOptions": false,
          "options": []
        }
      ]
    }];

    $scope.sortableOptions = {
      containment: 'parent',
      tolerance: 'pointer',
      cursor: 'pointer',
      opacity: '0.8',
      stop: function( event, ui ) {
        formBuilder.sections.map(function(i){
          i.fields.map(function(field, index){
            field.order = index;
          });
        })
      }
    };
    
    formBuilder.fieldTypes = [
      { id: 0, text: 'Texto corto' }, { id: 1, text: 'Texto largo' }, { id: 2, text: 'Fecha'},
      { id: 3, text: 'Select' },{ id: 4, text: 'Checkboxes' }, { id: 5, text: 'Radio buttons' }
    ];

    formBuilder.addSection = function(){
      var section = { name: 'Nueva sección', description: 'Descripción', fields: [] };
      formBuilder.sections.push(section);
    }

    formBuilder.addField = function(section){
      let fields_length = section.fields.length;
      var field = { name: 'Campo'+(fields_length+1), type: formBuilder.fieldTypes[0],
        order: fields_length, showOptions: false, options: []
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
