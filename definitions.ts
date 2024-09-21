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
