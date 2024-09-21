Blockly.Python['list_item_assign'] = function(block) {
    const list_name = Blockly.Python.nameDB_.getName(block.getFieldValue('list_name'), Blockly.VARIABLE_CATEGORY_NAME);
    const idx = Blockly.Python.valueToCode(block, 'idx', 0);
    const op = block.getFieldValue('op');
    const val = Blockly.Python.valueToCode(block, 'val', 0);
    const code = `${list_name}[${idx}] ${op} ${val}\n`;
    return code;
};
