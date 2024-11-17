const listsColor = "#15bad4";

Blockly.Blocks['list_item_assign'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("variable_name"), "list_name")
            .appendField("[");
        this.appendValueInput("idx");
        this.appendDummyInput()
            .appendField("]")
            .appendField(new Blockly.FieldDropdown([["=","="], ["+=","+="], ["-=","-="]]), "op");
        this.appendValueInput("val");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(listsColor);
    }
};

Blockly.Blocks['matrix_item_assign'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("variable_name"), "list_name")
            .appendField("[");
        this.appendValueInput("idx1");
        this.appendDummyInput()
            .appendField("][");
        this.appendValueInput("idx2");
        this.appendDummyInput()
            .appendField("]")
            .appendField(new Blockly.FieldDropdown([["=","="], ["+=","+="], ["-=","-="]]), "op");
        this.appendValueInput("val");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(listsColor);
    }
};

Blockly.Blocks['matrix_item_access'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("variable_name"), "list_name")
            .appendField("[");
        this.appendValueInput("idx1");
        this.appendDummyInput()
            .appendField("][");
        this.appendValueInput("idx2");
        this.appendDummyInput()
            .appendField("]");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(listsColor);
    }
};
