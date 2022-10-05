var inorderTraversal = function(root) {
    let number = [];
    let stack = [];
    
    while(root || stack.length) {
        if(root) {
            stack.push(root);
            root = root.left;
        } else {
            root = stack.pop();
            number.push(root.val);
            root = root.right;
        }
    }
    
    return number;
};
