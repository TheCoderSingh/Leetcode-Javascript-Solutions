/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
   return getDepth(root);
};

var getDepth = function(root) {
    if(root === null)
        return 0;

    let left = getDepth(root.left);
    let right = getDepth(root.right);

    if(left > right)
        return left + 1;
    else
        return right + 1;
}
