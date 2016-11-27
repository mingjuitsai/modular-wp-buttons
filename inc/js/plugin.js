;
(function() {
    tinymce.PluginManager.add('modular_buttons', function(editor, url) {
        editor.addButton('modular_buttons', {
            title: 'Modular Buttons',
            icon: ' dashicons-icon dashicons-marker',
            onclick: function() {
                editor.windowManager.open({
                    title: 'Insert Buttons',
                    minWidth: 400,
                    minHeight: 300,
                    body: [{
                        type: 'listbox',
                        name: 'type',
                        label: 'Type',
                        'values': [{
                            text: 'default',
                            value: 'default'
                        }, {
                            text: 'Primary',
                            value: 'primary'
                        }, {
                            text: 'Success',
                            value: 'success'
                        }, {
                            text: 'Info',
                            value: 'info'
                        }, {
                            text: 'Warning',
                            value: 'link'
                        }, {
                            text: 'Danger',
                            value: 'danger'
                        }, {
                            text: 'Link',
                            value: 'link'
                        }]
                    }, {
                        type: 'textbox',
                        name: 'text',
                        label: 'Text'
                    }, {
                        type: 'combobox',
                        name: 'url',
                        label: 'URL'
                    }],
                    onsubmit: function(e) {

                        if (isDataValid(e)) {
                            editor.focus();
                            editor.selection.setContent('<a href="' + e.data.url + '" class="button-' + e.data.type + '">' + e.data.text + '</a>');
                        } else {
                          e.preventDefault();
                          editor.windowManager.alert("Fields are invalid or empty. Please check your fields and try submitting again.");
                        }

                        // Checking if data is empty or valid 
                        function isDataValid(event) {
                            for (var key in event.data) {
                                if (event.data[key] === "") {
                                    return false;
                                }
                            }
                            return true;
                        }
                    }
                });
            }
        });
    });
})();