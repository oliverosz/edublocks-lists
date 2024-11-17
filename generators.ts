Blockly.Python['list_create_empty'] = function(block) {
    const list_name = Blockly.Python.nameDB_.getName(block.getFieldValue('list_name'), Blockly.VARIABLE_CATEGORY_NAME);
    const code = `${list_name} = []\n`;
    return code;
};

Blockly.Python['list_item_assign'] = function(block) {
    const list_name = Blockly.Python.nameDB_.getName(block.getFieldValue('list_name'), Blockly.VARIABLE_CATEGORY_NAME);
    const idx = Blockly.Python.valueToCode(block, 'idx', 0);
    const op = block.getFieldValue('op');
    const val = Blockly.Python.valueToCode(block, 'val', 0);
    const code = `${list_name}[${idx}] ${op} ${val}\n`;
    return code;
};

Blockly.Python['matrix_item_assign'] = function(block) {
    const list_name = Blockly.Python.nameDB_.getName(block.getFieldValue('list_name'), Blockly.VARIABLE_CATEGORY_NAME);
    const idx1 = Blockly.Python.valueToCode(block, 'idx1', 0);
    const idx2 = Blockly.Python.valueToCode(block, 'idx2', 0);
    const op = block.getFieldValue('op');
    const val = Blockly.Python.valueToCode(block, 'val', 0);
    const code = `${list_name}[${idx1}][${idx2}] ${op} ${val}\n`;
    return code;
};

Blockly.Python['matrix_item_access'] = function(block) {
    const list_name = Blockly.Python.nameDB_.getName(block.getFieldValue('list_name'), Blockly.VARIABLE_CATEGORY_NAME);
    const idx1 = Blockly.Python.valueToCode(block, 'idx1', 0);
    const idx2 = Blockly.Python.valueToCode(block, 'idx2', 0);
    const code = `${list_name}[${idx1}][${idx2}]`;
    return [code, 0];
};

Blockly.Python['procedure_call'] = function(block) {
    const fn = Blockly.Python.valueToCode(block, 'function_name', 0);
    const args = Blockly.Python.valueToCode(block, 'parameters', 0);
    const code = `${fn}(${args})\n`;
    return code;
};

Blockly.Python['procedure_call_no_args'] = function(block) {
    const fn = Blockly.Python.valueToCode(block, 'function_name', 0);
    const code = `${fn}()\n`;
    return code;
};

Blockly.Python['function_call_no_args'] = function(block) {
    const fn = Blockly.Python.valueToCode(block, 'function_name', 0);
    const code = `${fn}()`;
    return [code, 0];
};
