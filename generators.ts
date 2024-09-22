Blockly.Python['list_item_assign'] = function(block) {
    const list_name = Blockly.Python.nameDB_.getName(block.getFieldValue('list_name'), Blockly.VARIABLE_CATEGORY_NAME);
    const idx = Blockly.Python.valueToCode(block, 'idx', 0);
    const op = block.getFieldValue('op');
    const val = Blockly.Python.valueToCode(block, 'val', 0);
    const code = `${list_name}[${idx}] ${op} ${val}\n`;
    return code;
};

Blockly.Python['list_append_fixed'] = function(block) {
    const list_name = Blockly.Python.nameDB_.getName(block.getFieldValue('list_name_before_append'), Blockly.VARIABLE_CATEGORY_NAME);
    const arg = Blockly.Python.valueToCode(block, 'list_append_arg', 0);
    const code = `${list_name}.append(${arg})\n`;
    return code;
};
