const listsColor = "#15bad4";
const functionsColor = "#cdda36";
const logicColor = "#49b04d";

Blockly.Blocks['list_create_empty'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("variable_name"), "list_name")
            .appendField("= []");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(listsColor);
    }
};

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

Blockly.Blocks['in_operator'] = {
    init: function() {
        this.appendValueInput("val")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["in","in"], ["not in","not in"]]), "op");
        this.appendValueInput("iterable")
            .setCheck(null);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(logicColor);
    }
};

Blockly.Blocks['procedure_call'] = {
    init: function() {
        this.appendDummyInput();
        this.appendValueInput("function_name")
            .setCheck(null);
        this.appendDummyInput()
            .appendField("(");
        this.appendValueInput("parameters")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(")");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(functionsColor);
    }
};

Blockly.Blocks['procedure_call_no_args'] = {
    init: function() {
        this.appendValueInput("function_name")
            .setCheck(null);
        this.appendDummyInput()
            .appendField("()");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(functionsColor);
    }
};

Blockly.Blocks['function_call_no_args'] = {
    init: function() {
        this.appendValueInput("function_name")
            .setCheck(null);
        this.appendDummyInput()
            .appendField("()");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(functionsColor);
    }
};
